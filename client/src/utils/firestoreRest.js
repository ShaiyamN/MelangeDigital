// Read-only Firestore queries over the REST API, for public pages that only read CMS data.
// The Firestore SDK is ~500KB of JS and keeps a streaming connection open after a read,
// so the network never goes quiet (Lighthouse then waits out its 45s limit and counts
// everything that runs in that time). One fetch per query avoids both.
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

// Same shapes the SDK returns for the value types the CMS uses.
function decodeValue(value) {
  if ("stringValue" in value) return value.stringValue;
  if ("booleanValue" in value) return value.booleanValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return value.doubleValue;
  if ("nullValue" in value) return null;
  if ("timestampValue" in value) return value.timestampValue;
  if ("arrayValue" in value) return (value.arrayValue.values || []).map(decodeValue);
  if ("mapValue" in value) return decodeFields(value.mapValue.fields || {});
  return undefined;
}

function decodeFields(fields) {
  const out = {};
  for (const [key, value] of Object.entries(fields)) out[key] = decodeValue(value);
  return out;
}

/**
 * Run a structured query against a top-level collection.
 * Returns [{ id, data }] like querySnapshot.docs, or throws on HTTP errors.
 */
export async function runQuery(collectionId, { where, limit } = {}) {
  if (!PROJECT_ID || !API_KEY) throw new Error("Firebase config missing");
  const structuredQuery = { from: [{ collectionId }] };
  if (where) {
    structuredQuery.where = {
      fieldFilter: {
        field: { fieldPath: where.field },
        op: "EQUAL",
        value: { stringValue: where.equals },
      },
    };
  }
  if (limit) structuredQuery.limit = limit;
  const res = await fetch(
    `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents:runQuery?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ structuredQuery }),
    },
  );
  if (!res.ok) throw new Error(`Firestore query failed: ${res.status}`);
  const rows = await res.json();
  return rows
    .filter((row) => row.document)
    .map((row) => ({
      id: row.document.name.split("/").pop(),
      data: decodeFields(row.document.fields || {}),
    }));
}
