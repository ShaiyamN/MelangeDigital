import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const hasValidConfig =
  firebaseConfig.apiKey &&
  typeof firebaseConfig.apiKey === "string" &&
  !firebaseConfig.apiKey.includes(":") &&
  firebaseConfig.apiKey !== "your_api_key_here";

/**
 * The shared default Firebase app, or null when env config is missing.
 * Safe to call from several entry points (firebase.js, firebaseDb.js): the app is created once.
 */
export function getFirebaseApp() {
  if (!hasValidConfig) {
    console.warn("Firebase: Missing or invalid VITE_FIREBASE_API_KEY. Firebase services disabled.");
    return null;
  }
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}
