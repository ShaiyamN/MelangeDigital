import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { reportDownloadHtml } = require("./scripts/report-download-html.cjs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MARKETING_SLUG = "destination-marketing-agency";
const marketingPublicDir = path.join(__dirname, "public", MARKETING_SLUG);
const REPORT_PDF_FILE = path.join(
  __dirname,
  "public",
  "assets",
  "reports",
  "The Indian Outbound Inspiration report 2026.pdf",
);
const ZOHO_CAREERS_FORM =
  "https://forms.zohopublic.in/melangedigital1/form/CareersForm/formperma/D3dMn9tzL49YuMHf4zm1NhIL7IYLUTx4iHNZ-0HaHgI";

async function proxyCareersFormEmbed(req, res) {
  const qs = req.url?.includes("?") ? req.url.slice(req.url.indexOf("?")) : "?zf_rszfm=1";
  try {
    const upstream = await fetch(ZOHO_CAREERS_FORM + qs);
    if (!upstream.ok) {
      res.statusCode = upstream.status;
      res.end("Form unavailable");
      return;
    }
    let html = await upstream.text();
    const inject = '<link rel="stylesheet" href="/careers/zoho-form.css">';
    html = html.includes("</head>")
      ? html.replace("</head>", inject + "</head>")
      : inject + html;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.end(html);
  } catch (err) {
    res.statusCode = 502;
    res.end("Form unavailable");
  }
}

function marketingDevMiddleware() {
  return {
    name: "marketing-dev-middleware",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0] || "";

        if (url === "/careers/form-embed" || url === "/careers/form-embed/") {
          await proxyCareersFormEmbed(req, res);
          return;
        }

        if (url === "/report-download" || url === "/report-download/") {
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.setHeader("Cache-Control", "no-cache");
          res.end(reportDownloadHtml());
          return;
        }

        if (
          url === "/tourism" ||
          url === "/tourism/" ||
          url === `/${MARKETING_SLUG}` ||
          url === `/${MARKETING_SLUG}/` ||
          url === "/destination-marketing" ||
          url === "/destination-marketing/"
        ) {
          res.writeHead(301, { Location: "/" });
          res.end();
          return;
        }

        if (url === "/indian-outbound-tourism-report" || url === "/indian-outbound-tourism-report/") {
          if (!fs.existsSync(REPORT_PDF_FILE)) {
            res.statusCode = 404;
            res.end("Report PDF not found");
            return;
          }
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader(
            "Content-Disposition",
            'inline; filename="The Indian Outbound Inspiration report 2026.pdf"',
          );
          fs.createReadStream(REPORT_PDF_FILE).pipe(res);
          return;
        }

        if (!url.startsWith(`/${MARKETING_SLUG}/`)) {
          next();
          return;
        }

        const relativePath = url.replace(new RegExp(`^/${MARKETING_SLUG}/?`), "") || "";
        if (!relativePath || relativePath === "index.html") {
          res.writeHead(301, { Location: "/" });
          res.end();
          return;
        }

        const candidate = path.join(marketingPublicDir, relativePath);
        if (
          !candidate.startsWith(marketingPublicDir) ||
          !fs.existsSync(candidate) ||
          !fs.statSync(candidate).isFile() ||
          fs.statSync(candidate).size === 0
        ) {
          next();
          return;
        }

        const ext = path.extname(candidate);
        const mimeTypes = {
          ".html": "text/html",
          ".js": "application/javascript",
          ".css": "text/css",
          ".json": "application/json",
          ".png": "image/png",
          ".jpg": "image/jpeg",
          ".jpeg": "image/jpeg",
          ".gif": "image/gif",
          ".svg": "image/svg+xml",
          ".webp": "image/webp",
          ".ico": "image/x-icon",
          ".mp4": "video/mp4",
          ".pdf": "application/pdf",
        };
        res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
        fs.createReadStream(candidate).pipe(res);
      });
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), marketingDevMiddleware()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // ponytail: Hostinger shared builds OOM above ~512MB heap; skip gzip size pass
    reportCompressedSize: false,
    rollupOptions: {
      maxParallelFileOps: 2,
    },
  },
});
