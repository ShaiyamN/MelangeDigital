import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const CACHE_DURATION_MS = 60_000;
let caseStudiesPromise;
let cacheCreatedAt = 0;

export function loadCaseStudies() {
  if (!db) {
    return Promise.reject(new Error("Firebase is not initialized."));
  }

  if (!caseStudiesPromise || Date.now() - cacheCreatedAt >= CACHE_DURATION_MS) {
    cacheCreatedAt = Date.now();
    caseStudiesPromise = getDocs(collection(db, "casestudies"))
      .then((snapshot) =>
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
      )
      .catch((error) => {
        caseStudiesPromise = undefined;
        cacheCreatedAt = 0;
        throw error;
      });
  }

  return caseStudiesPromise;
}
