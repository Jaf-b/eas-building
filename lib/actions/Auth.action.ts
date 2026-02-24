"use server"


import {handleError} from "@/lib/utils";
import {signInWithEmailAndPassword, signOut} from "@firebase/auth";
import {auth} from "@/lib/Firebase";


//Authentication
export const loginWithEmailandPassword = async (email:string, password:string) => {
    try {
        // verify if the user exist

        //Authentify the user
        await signInWithEmailAndPassword(auth,email,password)
        // create OTP

        // send OTP

        // verify OTP

    }catch(err) {
        handleError(err)
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