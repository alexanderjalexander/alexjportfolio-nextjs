import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
};

/**
 * Initializes the server app for use.
 * Run this before doing any operation that requires `firebase-admin`.
 */
export function initServerApp() {
  if (getApps().length <= 0) {
    return initializeApp(firebaseAdminConfig);
  } else {
    return getApp();
  }
}