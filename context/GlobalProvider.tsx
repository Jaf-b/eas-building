"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "@/lib/Firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { User } from "@/types";
import { handleError } from "@/lib/utils";
import { getCurrentUser } from "@/lib/actions/Auth.action";

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
    const fetchUserData = async (uid: string) => {
      try {
        const userDoc = await getDoc(doc(firestore, "users", uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser({
            id: uid,
            ...userData,
            joinedDate: userData.joinedDate?.toDate ? userData.joinedDate.toDate() : userData.joinedDate,
          } as User);
        } else {
          handleError(new Error("Le document de l'utilisateur n'a pas été trouvé dans Firestore."));
          setUser(null);
        }
      } catch (error) {
        handleError(error);
        setUser(null);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await fetchUserData(firebaseUser.uid);
      } else {
        // If client-side SDK says no user, check server-side session cookie
        const serverUser = await getCurrentUser();
        if (serverUser) {
          await fetchUserData(serverUser.uid);
        } else {
          setUser(null);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Effect specifically for redirection when user is null after loading
  useEffect(() => {
    if (!loading && !user) {
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
