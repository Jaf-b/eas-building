"use server"



//Authentication
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {cookies} from "next/headers";
import {auth, db} from "@/Firebase/admin";
import {ONE_WEEK} from "@/constant";
import {SignInParams, User} from "@/types";
import {signOut} from "@firebase/auth";

export const setSessionCookie = async (idToken: string) => {
    const cookieStore = await cookies();

    const decoded = await auth.verifyIdToken(idToken);
      if (Date.now() / 1000 - decoded.auth_time > 5 * 60) {
                throw new Error("Recent sign-in required");
          }

    const sessionCookie = await auth.createSessionCookie(idToken,{
        expiresIn : ONE_WEEK * 1000,
    })
    cookieStore.set("auth-session",sessionCookie,{
        httpOnly:true,
        maxAge: ONE_WEEK,
        secure: process.env.NODE_ENV === "production",
        path:"/",
        sameSite: "lax"
    })
}

export const signIn = async (params:SignInParams) => {
    const {idToken} = params;

    try {
        const decoded = await auth.verifyIdToken(idToken);
        //const userDoc = await db.collection("users").doc(decoded.uid).get();
        const userRecord = await auth.getUserByEmail(decoded.email!);
        if(!userRecord){
            return {
                success: false,
                message:"User does not exist contact the company service"
            }
        }
        await setSessionCookie(idToken);

    }catch(error){
        console.log(error);
        return{
            success:false,
            message:"failed to log into an account"
        };
    }
}


// 2-step Authentication and email validation
export const createOTP = async (email:string, password:string) => {}
export const sendOTP = async (email:string) => {}
export const verfyOTP = async (OTP:string) => {}

// Current user
export const getCurrentUser = async ():Promise<User | null> => {
    const cookieStore = await cookies();
    const sessionCookie =  cookieStore.get("auth-session")?.value

    if(!sessionCookie) return null

    try{
        const decodedClaims = await auth.verifySessionCookie(sessionCookie,true);

        const userRecord = await db.collection("users").doc(decodedClaims.uid).get()
        if(!userRecord.exists) return null;
        return {
            id:userRecord.id,
            ...userRecord.data()
        }as User
    }catch (e) {
        cookieStore.delete("auth-session")
        console.log(e)
        return null
    }
}

// logout


 export const logout  = async (): Promise<void> => {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get("auth-session");
        cookieStore.delete("auth-session");
    }catch (e){
        console.log(e)
    }
}
