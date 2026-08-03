const express = require("express");
const basicAuth = require("express-basic-auth");
const fs = require("fs");
const path = require("path");

// Hostinger entry when app root is client/ — serves Vite dist on process.env.PORT.
const DIST = path.join(__dirname, "dist");
const PORT = Number(process.env.PORT) || 3000;
const REPORT_PDF = path.join(
  DIST,
  "assets",
  "reports",
  "The Indian Outbound Inspiration report 2026.pdf"
);

if (!fs.existsSync(path.join(DIST, "index.html"))) {
  console.error(`Missing ${path.join(DIST, "index.html")} — run npm run build first`);
  process.exit(1);
}

const app = express();

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

// Old /tourism bookmark → landing folder (nav already uses /destination-marketing-agency/)
app.get(["/tourism", "/tourism/"], (_req, res) => {
  res.redirect(302, "/destination-marketing-agency/");
});

app.get(
  ["/indian-outbound-tourism-report", "/indian-outbound-tourism-report/"],
  (_req, res) => {
    if (!fs.existsSync(REPORT_PDF)) {
      res.status(404).send("Report PDF not found");
      return;
    }
    res.type("application/pdf");
    res.set(
      "Content-Disposition",
      'inline; filename="The Indian Outbound Inspiration report 2026.pdf"'
    );
    res.sendFile(REPORT_PDF);
  }
);

// Serves /destination-marketing-agency/ from dist/ as a normal static folder — no redirects
app.use(express.static(DIST));

app.use((req, res) => {
  if (req.path.startsWith("/assets/")) {
    res.status(404).type("text/plain").send("Not found");
    return;
  }
  res.sendFile(path.join(DIST, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Melange static server on :${PORT} → ${DIST}`);
});
