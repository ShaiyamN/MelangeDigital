/**
 * Hostinger fallback when Entry file defaults to index.js.
 * Application root: client — prefer server.js as the Express entry.
 */
import "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("./server.cjs");
