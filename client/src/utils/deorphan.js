/** Stick the last two words of a string together so a wrap cannot leave one behind. */
export function glueLastWords(s) {
  return String(s).replace(/(\S+)[ \t]+(\S+)([ \t]*)$/, "$1\u00A0$2$3");
}

const SKIP = "script,style,textarea,code,pre,svg,noscript,iframe,input,option,select,[contenteditable='true']";

function shouldSkip(el) {
  if (!el) return true;
  if (el.closest(SKIP)) return true;
  const cs = getComputedStyle(el);
  return cs.whiteSpace === "nowrap" || cs.display === "none" || cs.visibility === "hidden";
}

/** Replace the last space in each visible text node with a non-breaking space. */
export function deorphan(root = document.body) {
  if (!root || location.pathname.startsWith("/admin")) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !/[ \t]/.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
      return shouldSkip(node.parentElement) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    const next = glueLastWords(node.nodeValue);
    if (next !== node.nodeValue) node.nodeValue = next;
  }
}

if (import.meta.env?.DEV) {
  console.assert(glueLastWords("Tracking & Reporting") === "Tracking &\u00A0Reporting");
  console.assert(glueLastWords("boards.") === "boards.");
}
