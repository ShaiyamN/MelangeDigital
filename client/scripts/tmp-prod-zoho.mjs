const html = await fetch("https://melangedigital.co/").then((r) => r.text());
const src = html.match(/id="zsiqscript"[^>]*src="([^"]+)"/)?.[1] ?? "MISSING";
console.log("live embed src:", src);
console.log("bad api url:", /visitor\/v2\/channels/.test(html));
console.log("good wc url:", /widget\?wc=/.test(html));
