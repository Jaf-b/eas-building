import {getApp,getApps, initializeApp} from "firebase/app";
import {firebaseConfig} from "@/Firebase/config";
import {getAuth} from "@firebase/auth";
//import {getFirestore} from "@firebase/firestore";
//import {getStorage} from "@firebase/storage";


// Initialize Firebase
const app =!getApps().length? initializeApp(firebaseConfig):getApp();

// initialization client side  firebase services
export const auth = getAuth(app);
//export const firestore = getFirestore(app);
//export const storage = getStorage(app);

