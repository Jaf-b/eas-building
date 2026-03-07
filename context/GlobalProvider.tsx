"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase/client";
import { useRouter} from "next/navigation";
import { User } from "@/types";
import { getCurrentUser } from "@/lib/actions/Auth.action";
import {toast} from "sonner";

interface GlobalContextType {
  user: User | null;
  loading: boolean;
  isLoggedIn: boolean;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Effect specifically for redirection when user is null after loading
  useEffect(() => {
    if (!loading && !user) {
      toast.error("User not found please login");
        router.push("/login");
    }
  }, [loading, user, router]);

  const value = {
    user,
    loading,
    isLoggedIn: !!user,
  };

  return (
    <GlobalContext.Provider value={value}>
      {!loading && user ? children : null}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
