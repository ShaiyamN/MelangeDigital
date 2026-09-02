const registry = require("../src/constants/report-registry.json");

module.exports = {
  REPORT_FORM_IFRAME_SRC: registry.reportFormIframeSrc,
  REPORT_FORM_PERMA: registry.reportFormPerma,
  REPORT_ACCESS_ID: registry.reportAccessId,
  PENDING_REPORT_KEY: registry.pendingReportKey,
  REPORT_DOWNLOAD_PATH: registry.reportDownloadPath,
  DEFAULT_REPORT_SLUG: registry.defaultReportSlug,
  REPORTS: registry.reports,
};
