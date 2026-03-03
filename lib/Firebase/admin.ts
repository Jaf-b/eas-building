import * as admin from "firebase-admin";

// Ensure the private key is properly formatted (it might contain newlines)
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!admin.apps.length) {
    if (process.env.FIREBASE_SERVICE_ACCOUNT_EMAIL && privateKey) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
                clientEmail: process.env.FIREBASE_SERVICE_ACCOUNT_EMAIL,
                privateKey: privateKey,
            }),
            projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        });
    } else {
        // Fallback to applicationDefault if no service account env vars are provided
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        });
    }
}

export const adminAuth = admin.auth();
export const adminFirestore = admin.firestore();
