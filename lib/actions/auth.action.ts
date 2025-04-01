"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

// Session duration (1 week)
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000;

// Set session cookie
export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies();
  const expiresIn = SESSION_DURATION;
  const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
  cookieStore.set("session", sessionCookie, {
    maxAge: expiresIn,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}

// Get current user
export async function getCurrentUser() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return null;

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie);
    const userDoc = await db.collection("users").doc(decodedClaims.uid).get();
    if (!userDoc.exists) return null;

    return {
      id: userDoc.id,
      ...userDoc.data(),
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

// Check if user is authenticated
export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}

// Sign in user
export async function signIn({
  email,
  idToken,
}: {
  email: string;
  idToken: string;
}) {
  try {
    await setSessionCookie(idToken);
    return { success: true };
  } catch (error) {
    console.error("Error signing in:", error);
    return { success: false, message: "Failed to sign in" };
  }
}

// Sign up user
export async function signUp({
  uid,
  name,
  email,
  password,
}: {
  uid: string;
  name: string;
  email: string;
  password: string;
}) {
  try {
    await db.collection("users").doc(uid).set({
      name,
      email,
      createdAt: new Date(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error signing up:", error);
    return { success: false, message: "Failed to sign up" };
  }
}

export async function signOut() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("session");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error signing out:", error);
    return { success: false, error: "Failed to sign out" };
  }
}
