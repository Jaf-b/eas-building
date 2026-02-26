import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {firebaseConfig} from "@/lib/Firebase/config";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "@firebase/storage";




// Initialize Firebase

const app = initializeApp(firebaseConfig);

// initialization firebase services

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);