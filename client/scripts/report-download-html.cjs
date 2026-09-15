const {
  REPORTS,
  PENDING_REPORT_KEY,
  DEFAULT_REPORT_SLUG,
} = require("./report-registry.cjs");

function reportDownloadHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Downloading report…</title>
</head>
<body>
<p>Preparing your download…</p>
<script>
(function () {
  var KEY = ${JSON.stringify(PENDING_REPORT_KEY)};
  var DEFAULT = ${JSON.stringify(DEFAULT_REPORT_SLUG)};
  var REPORTS = ${JSON.stringify(REPORTS)};
  var slug = DEFAULT;
  try {
    var stored = sessionStorage.getItem(KEY);
    if (stored && REPORTS[stored]) slug = stored;
    sessionStorage.removeItem(KEY);
  } catch (e) {}
  var entry = REPORTS[slug] || REPORTS[DEFAULT];
  if (entry && entry.path) location.replace(entry.path);
  else document.body.textContent = "Report not found.";
})();
</script>
</body>
</html>`;
}

module.exports = { reportDownloadHtml };
