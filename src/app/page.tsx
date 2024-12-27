'use client';

import React from "react";
import { useUser, useClerk } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  const clerk = useClerk();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleSignIn = () => {
    clerk.openSignIn();
  };

  const handleSignOut = () => {
    clerk.signOut();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {isSignedIn ? (
          <div>
            <p>Welcome, {user?.firstName || user?.emailAddresses?.[0]?.emailAddress}</p>
            <button 
              onClick={handleSignOut}
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button 
            onClick={handleSignIn}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}