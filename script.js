import { stretch } from "./kashida.js";

// Reveal-on-scroll. body.js gates the hidden state so content stays visible
// when JavaScript is unavailable.
document.body.classList.add("js");

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Kashida stretching per FONT_RULES.md — display-only: applied to every visible
// text node at render time, so the crawled HTML source stays raw (Rule 2).
const EXCLUDED = "script, style, noscript, textarea, input";

function applyKashida() {
  const ctx = document.createElement("canvas").getContext("2d");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent || parent.closest(EXCLUDED)) continue;
    const text = node.nodeValue;
    if (!text.trim()) continue;
    const cs = getComputedStyle(parent);
    ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const result = stretch(text, (s) => ctx.measureText(s).width);
    if (result !== text) node.nodeValue = result;
  }
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(applyKashida);
} else {
  window.addEventListener("load", applyKashida);
}