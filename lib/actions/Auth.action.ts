"use server"


import {handleError, translateFirebaseError} from "@/lib/utils";
import {signInWithEmailAndPassword, signOut} from "@firebase/auth";
import {auth} from "@/lib/Firebase";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";


//Authentication
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const loginWithEmailandPassword = async (prevState: unknown, formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        // verify if the users exist
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (user) {
            const token = await user.getIdToken();
            const cookieStore = await cookies();
            cookieStore.set("auth-token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 60 * 60, // align with 1-hour ID token lifetime
                path: "/",
            });
        }

        return { success: true };
    } catch (err) {
        handleError(err);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
        const token = cookieStore.get("auth-token")?.value;

        if (!token) return null;

        // Note: Full verification would require firebase-admin on the server.
        // For now, we assume if the token exists, we can try to get the user from client SDK if it's still in memory,
        // or just return that we are authenticated.
        return auth.currentUser;
    } catch (err) {
        return null;
    }
}

// logout

export const logout  = async (): Promise<void> => {
    try {
        await signOut(auth);
        const cookieStore = await cookies();
        cookieStore.delete("auth-token");
    } catch (err) {
        handleError(err);
    }
    redirect("/login");
}