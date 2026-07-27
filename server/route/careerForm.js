// routes/careers.js
const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const fs = require("fs/promises");

const router = express.Router();

// ---- Multer: keep PDFs in memory (safer than disk for simple relay) ----
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true);
  },
});

router.post("/submit", upload.single("pdf"), async (req, res) => {
  try {
    const {
      fullName = "",
      email = "",
      number = "",
      position = "",
      cCTC = "",
      eCTC = "",
      portfolio = "",
      basedInGoa = "",
      totalExperience = "",
      qualification = "",
    } = req.body;

    if (!req.file) return res.status(400).send("Resume (PDF) is required.");

    // ---- Basic sanity checks (keep light) ----
    if (!fullName || !email || !number || !position || !cCTC || !eCTC) {
      return res.status(400).send("Missing required fields.");
    }

    const recipientEmail = "hrteam@melangedigital.co";

    // ---- Transport: use env vars; set a fixed 'from' to pass DMARC/SPF ----
    // Ensure these are set in your environment (dotenv or platform secrets)
    // EMAIL_USER=tech@melangedigital.co
    // EMAIL_PASS=<app_password_or_smtp_password>
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const plainText = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Contact Number: ${number}`,
      `Position: ${position}`,
      `Based in Goa?: ${basedInGoa}`,
      `Total Experience: ${totalExperience}`,
      `Qualification: ${qualification}`,
      `Current CTC: ${cCTC}`,
      `Expected CTC: ${eCTC}`,
      `Portfolio: ${portfolio || "N/A"}`,
    ].join("\n");

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height:1.5">
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Contact Number:</strong> ${escapeHtml(number)}</p>
        <p><strong>Position:</strong> ${escapeHtml(position)}</p>
        <p><strong>Based in Goa?:</strong> ${escapeHtml(basedInGoa)}</p>
        <p><strong>Total Experience:</strong> ${escapeHtml(totalExperience)}</p>
        <p><strong>Qualification:</strong> ${escapeHtml(qualification)}</p>
        <p><strong>Current CTC:</strong> ${escapeHtml(cCTC)}</p>
        <p><strong>Expected CTC:</strong> ${escapeHtml(eCTC)}</p>
        <p><strong>Portfolio:</strong> ${
          portfolio ? `<a href="${escapeAttr(portfolio)}" target="_blank" rel="noopener noreferrer">${escapeHtml(portfolio)}</a>` : "N/A"
        }</p>
      </div>
    `;

    const mailOptions = {
      from: `"Career Form" <${process.env.EMAIL_USER}>`, // fixed sender
      replyTo: email, // lets HR reply directly to the applicant
      to: recipientEmail,
      subject: `New Job Application from ${fullName}`,
      text: plainText,
      html: htmlBody,
      attachments: [
        {
          filename: req.file.originalname || "resume.pdf",
          content: req.file.buffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    return res.send("Form submitted successfully!");
  } catch (err) {
    console.error("Career form error:", err);
    const msg =
      err?.message === "Only PDF files are allowed"
        ? err.message
        : "An error occurred. Please try again.";
    return res.status(500).send(msg);
  }
});

// ---- tiny helpers to avoid HTML injection in email body ----
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
function escapeAttr(str = "") {
  // very light attribute escaping; keeps URLs safe in href
  return escapeHtml(str).replaceAll("(", "%28").replaceAll(")", "%29");
}

module.exports = router;
