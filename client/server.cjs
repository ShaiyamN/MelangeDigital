const express = require("express");
const basicAuth = require("express-basic-auth");
const fs = require("fs");
const path = require("path");

// Hostinger entry when app root is client/ — serves Vite dist on process.env.PORT.
const DIST = path.join(__dirname, "dist");
const PORT = Number(process.env.PORT) || 3000;

if (!fs.existsSync(path.join(DIST, "index.html"))) {
  console.error(`Missing ${path.join(DIST, "index.html")} — run npm run build first`);
  process.exit(1);
}

const app = express();

// Staging-only: Hostinger staging sets STAGING_USER/STAGING_PASS; production FTP never runs this server.
const stagingUser = process.env.STAGING_USER;
const stagingPass = process.env.STAGING_PASS;
if (stagingUser && stagingPass) {
  app.use(
    basicAuth({
      users: { [stagingUser]: stagingPass },
      challenge: true,
      realm: "Melange Digital Staging",
    })
  );
}

app.get(["/tourism", "/tourism/"], (_req, res) => {
  res.redirect(301, "/indian-outbound-tourism-report/");
});
app.get("/indian-outbound-tourism-report", (_req, res) => {
  res.redirect(302, "/indian-outbound-tourism-report/");
});

app.use(express.static(DIST));
app.use((_req, res) => {
  res.sendFile(path.join(DIST, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Melange static server on :${PORT} → ${DIST}`);
});
