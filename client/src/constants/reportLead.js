import registry from "./report-registry.json";

export const REPORT_FORM_PERMA = registry.reportFormPerma;
export const REPORT_ACCESS_ID = registry.reportAccessId;
export const PENDING_REPORT_KEY = registry.pendingReportKey;
export const REPORT_DOWNLOAD_PATH = registry.reportDownloadPath;
export const DEFAULT_REPORT_SLUG = registry.defaultReportSlug;
export const REPORTS = registry.reports;

export function reportAccessHref(slug = DEFAULT_REPORT_SLUG) {
  return `/?report=${encodeURIComponent(slug)}#${REPORT_ACCESS_ID}`;
}

export function storePendingReport(slug) {
  if (!slug || !REPORTS[slug]) return;
  try {
    sessionStorage.setItem(PENDING_REPORT_KEY, slug);
  } catch {
    /* ignore */
  }
}

export function readReportParam() {
  if (typeof window === "undefined") return null;
  const slug = new URLSearchParams(window.location.search).get("report");
  return slug && REPORTS[slug] ? slug : null;
}
