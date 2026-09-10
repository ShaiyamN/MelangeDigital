// Hostinger entry forwarder (when Hostinger defaults entry file to index.js)
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("./server.cjs");
