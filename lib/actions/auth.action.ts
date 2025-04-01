<<<<<<< HEAD
'use server'

import { auth, db } from '@/firebase/admin'
import { cookies } from 'next/headers'

// Session duration (1 week)
const SESSION_DURATION = 60 * 60 * 24 * 7

// Set session cookie
export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies()
=======
"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

// Session duration (1 week)
const SESSION_DURATION = 60 * 60 * 24 * 7;

// Set session cookie
export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies();
>>>>>>> daa1ba2 (Add your descriptive commit message here)

  // Create session cookie
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_DURATION * 1000, // milliseconds
<<<<<<< HEAD
  })

  // Set cookie in the browser
  cookieStore.set('session', sessionCookie, {
    maxAge: SESSION_DURATION,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })
}

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params

  try {
    // check if user exists in db
    const userRecord = await db.collection('users').doc(uid).get()
    if (userRecord.exists)
      return {
        success: false,
        message: 'User already exists. Please sign in.',
      }

    // save user to db
    await db.collection('users').doc(uid).set({
=======
  });

  // Set cookie in the browser
  cookieStore.set("session", sessionCookie, {
    maxAge: SESSION_DURATION,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    // check if user exists in db
    const userRecord = await db.collection("users").doc(uid).get();
    if (userRecord.exists)
      return {
        success: false,
        message: "User already exists. Please sign in.",
      };

    // save user to db
    await db.collection("users").doc(uid).set({
>>>>>>> daa1ba2 (Add your descriptive commit message here)
      name,
      email,
      // profileURL,
      // resumeURL,
<<<<<<< HEAD
    })

    return {
      success: true,
      message: 'Account created successfully. Please sign in.',
    }
  } catch (error: unknown) {
    console.error('Error creating user:', error)

    // Handle Firebase specific errors
    if ((error as { code?: string }).code === 'auth/email-already-exists') {
      return {
        success: false,
        message: 'This email is already in use',
      }
=======
    });

    return {
      success: true,
      message: "Account created successfully. Please sign in.",
    };
  } catch (error: any) {
    console.error("Error creating user:", error);

    // Handle Firebase specific errors
    if (error.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "This email is already in use",
      };
>>>>>>> daa1ba2 (Add your descriptive commit message here)
    }

    return {
      success: false,
<<<<<<< HEAD
      message: 'Failed to create account. Please try again.',
    }
=======
      message: "Failed to create account. Please try again.",
    };
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  }
}

export async function signIn(params: SignInParams) {
<<<<<<< HEAD
  const { email, idToken } = params

  try {
    const userRecord = await auth.getUserByEmail(email)
    if (!userRecord)
      return {
        success: false,
        message: 'User does not exist. Create an account.',
      }

    await setSessionCookie(idToken)
  } catch {
    console.log('')

    return {
      success: false,
      message: 'Failed to log into account. Please try again.',
    }
=======
  const { email, idToken } = params;

  try {
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord)
      return {
        success: false,
        message: "User does not exist. Create an account.",
      };

    await setSessionCookie(idToken);
  } catch (error: any) {
    console.log("");

    return {
      success: false,
      message: "Failed to log into account. Please try again.",
    };
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  }
}

// Sign out user by clearing the session cookie
export async function signOut() {
<<<<<<< HEAD
  const cookieStore = await cookies()

  cookieStore.delete('session')
=======
  const cookieStore = await cookies();

  cookieStore.delete("session");
>>>>>>> daa1ba2 (Add your descriptive commit message here)
}

// Get current user from session cookie
export async function getCurrentUser(): Promise<User | null> {
<<<<<<< HEAD
  const cookieStore = await cookies()

  const sessionCookie = cookieStore.get('session')?.value
  if (!sessionCookie) return null

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true)

    // get user info from db
    const userRecord = await db.collection('users').doc(decodedClaims.uid).get()
    if (!userRecord.exists) return null
=======
  const cookieStore = await cookies();

  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return null;

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

    // get user info from db
    const userRecord = await db
      .collection("users")
      .doc(decodedClaims.uid)
      .get();
    if (!userRecord.exists) return null;
>>>>>>> daa1ba2 (Add your descriptive commit message here)

    return {
      ...userRecord.data(),
      id: userRecord.id,
<<<<<<< HEAD
    } as User
  } catch (error) {
    console.log(error)

    // Invalid or expired session
    return null
=======
    } as User;
  } catch (error) {
    console.log(error);

    // Invalid or expired session
    return null;
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  }
}

// Check if user is authenticated
export async function isAuthenticated() {
<<<<<<< HEAD
  const user = await getCurrentUser()
  return !!user
=======
  const user = await getCurrentUser();
  return !!user;
>>>>>>> daa1ba2 (Add your descriptive commit message here)
}
