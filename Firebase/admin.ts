
import * as admin from "firebase-admin";

import {cert, getApps, initializeApp} from "firebase-admin/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase-admin/firestore";
import {adminConfig} from "@/Firebase/config";
import {getStorage} from "firebase-admin/storage";


 const initFirebaseAdmin = () => {

    const apps = getApps();

    if(!apps.length){
        initializeApp({
            credential: cert({
                projectId: adminConfig.project_id,
                clientEmail: adminConfig.client_email,
                privateKey: adminConfig.private_key,
            })
        })
    }
    return {
        auth: getAuth(),
        db:getFirestore(),
        storage: getStorage(),
    }
}

export const {auth,db,storage} =  initFirebaseAdmin();
