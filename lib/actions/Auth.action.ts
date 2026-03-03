"use server"


import {handleError, translateFirebaseError} from "@/lib/utils";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {adminAuth} from "@/lib/Firebase/admin";


//Authentication
export const loginWithIdToken = async (idToken: string) => {
    try {
        const cookieStore = await cookies();
        
        // Create a session cookie instead of just setting the ID token
        // This is more secure and recommended for Next.js SSR
        const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
        const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

        cookieStore.set("auth-token", sessionCookie, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 5, // 5 days
            path: "/",
        });

        return { success: true };
    } catch (err) {
        handleError(err);
        const errorMessage = err instanceof Error ? translateFirebaseError(err.message) : "Une erreur est survenue lors de la connexion.";
        return { success: false, error: errorMessage };
    }
}

// 2-step Authentication and email validation

export const createOTP = async (email:string, password:string) => {}
export const sendOTP = async (email:string) => {}
export const verfyOTP = async (OTP:string) => {}

// Current user
export const getCurrentUser = async () => {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get("auth-token")?.value;

        if (!sessionCookie) return null;

        // Verify the session cookie with firebase-admin
        const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
        return decodedClaims;
    } catch (err) {
        return null;
    }
}

// logout

export const logout = async (): Promise<void> => {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get("auth-token")?.value;

        if (sessionCookie) {
            // Decrypt the session cookie to get the UID and revoke tokens
            const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie).catch(() => null);
            if (decodedClaims) {
                await adminAuth.revokeRefreshTokens(decodedClaims.sub);
            }
        }

        cookieStore.delete("auth-token");
    } catch (err) {
        handleError(err);
    }
    redirect("/login");
}