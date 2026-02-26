"use server"


import {handleError} from "@/lib/utils";
import {signInWithEmailAndPassword, signOut} from "@firebase/auth";
import {auth} from "@/lib/Firebase";


//Authentication
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const loginWithEmailandPassword = async (prevState: unknown, formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        // verify if the users exist
        await signInWithEmailAndPassword(auth, email, password).then((user)=> {
            console.log(user)
        });

        return { success: true };
    } catch (err) {
        handleError(err);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return { success: false, error: err.message || "An error occurred during login." };
    }
}

// 2-step Authentication and email validation

export const createOTP = async (email:string, password:string) => {}
export const sendOTP = async (email:string) => {}
export const verfyOTP = async (OTP:string) => {}

// logout

export const logout  = async (): Promise<void> => {
    await signOut(auth)
}