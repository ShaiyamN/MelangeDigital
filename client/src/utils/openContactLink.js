function gmailComposeUrl(email) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}

/** Open Gmail compose in a new tab (reliable in preview / no default mail app). */
export function openEmail(email) {
  window.open(gmailComposeUrl(email), "_blank", "noopener,noreferrer");
}

export function openPhone(tel) {
  window.location.assign(`tel:${tel.replace(/\s/g, "")}`);
}
