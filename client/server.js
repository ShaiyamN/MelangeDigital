/**
 * Hostinger Express entry.
 * Application root: client
 * Entry file: server.js
 * Output directory: (leave empty — Express serves client/dist itself)
 *
 * This package is "type": "module", so the app lives in server.cjs (CommonJS).
 */
import "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("./server.cjs");
