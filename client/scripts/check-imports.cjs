const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src");
const re = /from\s+['"]([^'"]+)['"]/g;
const files = [];

function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(jsx?|tsx?)$/.test(e.name)) files.push(p);
  }
}
walk(root);

function resolveCaseSensitive(fromFile, spec) {
  const parts = spec.split("/");
  let dir = path.dirname(fromFile);
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === ".") continue;
    if (part === "..") {
      dir = path.dirname(dir);
      continue;
    }
    const entries = fs.readdirSync(dir);
    const isLast = i === parts.length - 1;
    if (isLast) {
      const candidates = [
        part,
        part + ".js",
        part + ".jsx",
        part + ".ts",
        part + ".tsx",
      ];
      for (const c of candidates) {
        if (entries.includes(c)) return path.join(dir, c);
      }
      // index in folder
      const folder = entries.find((e) => e.toLowerCase() === part.toLowerCase());
      if (folder) {
        const folderPath = path.join(dir, folder);
        if (fs.statSync(folderPath).isDirectory()) {
          const idx = fs.readdirSync(folderPath).find((e) => /^index\.(jsx?|tsx?)$/.test(e));
          if (idx) {
            if (folder !== part) return { caseMismatch: true, expected: part, actual: folder };
            return path.join(folderPath, idx);
          }
        }
        if (folder !== part && folder.toLowerCase() === part.toLowerCase()) {
          return { caseMismatch: true, expected: part, actual: folder };
        }
      }
      // case-insensitive hit for file
      for (const c of candidates) {
        const hit = entries.find((e) => e.toLowerCase() === c.toLowerCase());
        if (hit && hit !== c) return { caseMismatch: true, expected: c, actual: hit };
      }
      return null;
    }
    const hit = entries.find((e) => e === part);
    if (hit) {
      dir = path.join(dir, hit);
      continue;
    }
    const loose = entries.find((e) => e.toLowerCase() === part.toLowerCase());
    if (loose) return { caseMismatch: true, expected: part, actual: loose, in: path.relative(root, dir) };
    return null;
  }
  return dir;
}

const bad = [];
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  let m;
  re.lastIndex = 0;
  while ((m = re.exec(text))) {
    const spec = m[1];
    if (!spec.startsWith(".")) continue;
    const result = resolveCaseSensitive(file, spec);
    if (result == null) {
      bad.push({ file: path.relative(root, file), spec, kind: "missing" });
    } else if (result.caseMismatch) {
      bad.push({ file: path.relative(root, file), spec, kind: "case", ...result });
    }
  }
}

console.log(JSON.stringify(bad, null, 2));
console.log("issues", bad.length);
if (bad.length) process.exit(1);
