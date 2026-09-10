// Hostinger entry forwarder (when Hostinger defaults entry file to server.js)
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("./server.cjs");
