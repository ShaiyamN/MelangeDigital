import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFirebaseApp } from "./firebaseApp";

let auth = null;
let db = null;

try {
  const app = getFirebaseApp();
  if (app) {
    auth = getAuth(app);
    db = getFirestore(app);
  }
} catch (error) {
  console.error("Firebase initialization failed:", error);
}

export { auth, db };

