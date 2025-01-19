import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { clientConfig } from "./firebaseConfig";

const client_app = getApps().length > 0 ? getApp() : initializeApp(clientConfig);
export const client_auth = getAuth(client_app);