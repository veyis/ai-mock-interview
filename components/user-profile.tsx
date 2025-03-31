"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";

interface UserProfileProps {
  user: {
    name: string;
    email: string;
  };
}

export default function UserProfile({ user }: UserProfileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full bg-primary-100/10 px-3 py-2 text-primary-100 hover:bg-primary-100/20"
      >
        <div className="h-8 w-8 rounded-full bg-primary-100/20 flex items-center justify-center">
          {user.name?.[0]?.toUpperCase() || "U"}
        </div>
        <span className="hidden md:inline">{user.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-primary-100/10 p-2 shadow-lg backdrop-blur-sm">
          <div className="mb-2 border-b border-primary-100/20 pb-2">
            <p className="text-sm font-medium text-primary-100">{user.name}</p>
            <p className="text-xs text-primary-100/70">{user.email}</p>
          </div>
          <div className="space-y-1">
            <Link
              href="/profile"
              className="block rounded-md px-3 py-2 text-sm text-primary-100 hover:bg-primary-100/20"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={() => {
                handleSignOut();
                setIsOpen(false);
              }}
              className="block w-full rounded-md px-3 py-2 text-left text-sm text-primary-100 hover:bg-primary-100/20"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 