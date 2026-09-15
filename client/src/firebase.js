import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

let app = null;
let auth = null;
let db = null;

try {
  if (
    firebaseConfig.apiKey &&
    typeof firebaseConfig.apiKey === "string" &&
    !firebaseConfig.apiKey.includes(":") &&
    firebaseConfig.apiKey !== "your_api_key_here"
  ) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } else {
    console.warn("Firebase: Missing or invalid VITE_FIREBASE_API_KEY. Firebase services disabled.");
  }
} catch (error) {
  console.error("Firebase initialization failed:", error);
}

export { auth, db };

