import {
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged as _onAuthStateChanged,
  User,
} from "firebase/auth";

import { client_auth } from "./firebaseClient";

/**
 * Simplified version of onAuthStateChanged from Firebase
 *
 * @param callback The callback function needed
 */
export function onAuthStateChanged(callback: (user: User | null) => void) {
  console.log("onAuthStateChanged");
  return _onAuthStateChanged(client_auth, callback);
}

/**
 * Signs in a user via Firebase, given an email and a password
 * Adapted from CS 554 React III: Firebase
 *
 * @param email
 * @param pw
 */
export async function signInUser(email: string, pw: string) {
  await signInWithEmailAndPassword(client_auth, email, pw);
}

/**
 * Signs out a user from the application.
 * Adapted from CS 554 React III: Firebase
 */
export async function signOutUser() {
  await signOut(client_auth);
}
