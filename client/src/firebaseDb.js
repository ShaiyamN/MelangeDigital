import { getFirestore } from "firebase/firestore";
import { getFirebaseApp } from "./firebaseApp";

/**
 * Firestore without Firebase Auth, for public pages that only read CMS data.
 * Importing ./firebase also boots Auth, which pulls in its iframe + gapi scripts (~130KB).
 */
let db = null;
try {
  const app = getFirebaseApp();
  if (app) db = getFirestore(app);
} catch (error) {
  console.error("Firestore initialization failed:", error);
}

export { db };
