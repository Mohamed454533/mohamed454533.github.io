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

// Kashida stretching per FONT_RULES.md — display-only (HTML source stays raw).
const KASHIDA = "\u0640";
const D_LETTERS = new Set([
  "\u0626","\u0628","\u062A","\u062B","\u062C","\u062D","\u062E","\u0633",
  "\u0634","\u0635","\u0636","\u0637","\u0638","\u0639","\u063A","\u0641",
  "\u0642","\u0643","\u0644","\u0645","\u0646","\u0647","\u064A","\u067E",
  "\u0686","\u06A9","\u06AF","\u06CC",
]);
const R_LETTERS = new Set([
  "\u0622","\u0623","\u0624","\u0625","\u0627","\u0629","\u062F","\u0630",
  "\u0631","\u0632","\u0648","\u0649","\u0698",
]);

function joiningType(c) {
  if (c === KASHIDA) return "C";
  if (D_LETTERS.has(c)) return "D";
  if (R_LETTERS.has(c)) return "R";
  return "U"; // includes space, ZWNJ (U+200C), digits, punctuation, Latin
}

function lettersJoin(left, right) {
  const a = joiningType(left);
  const b = joiningType(right);
  const leftJoins = a === "D" || a === "L" || a === "C";
  const rightJoins = b === "D" || b === "R" || b === "C";
  return leftJoins && rightJoins;
}

function withKashidas(text, gaps, counts) {
  let out = "";
  let next = 0;
  for (let i = 0; i < text.length; i++) {
    out += text[i];
    while (next < gaps.length && gaps[next] === i + 1) {
      out += KASHIDA.repeat(counts[next]);
      next++;
    }
  }
  return out;
}

function stretched(text, measure, ratio = 1.25) {
  if (text.includes(KASHIDA)) return text;
  const target = Math.round(measure(text) * ratio);
  if (target <= 0) return text;

  const gaps = [];
  for (let i = 0; i + 1 < text.length; i++) {
    if (lettersJoin(text[i], text[i + 1])) gaps.push(i + 1);
  }
  if (gaps.length === 0) return text;

  const counts = new Array(gaps.length).fill(0);
  let out = text;
  for (let g = 0; g < gaps.length; g++) {
    if (measure(out) >= target) break;
    counts[g] = 1;
    out = withKashidas(text, gaps, counts);
  }
  return out;
}

function applyKashida() {
  const ctx = document.createElement("canvas").getContext("2d");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, noscript, textarea, input")) continue;
    const text = node.nodeValue;
    if (!text.trim()) continue;
    const cs = getComputedStyle(parent);
    ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    const measure = (s) => ctx.measureText(s).width;
    const result = stretched(text, measure);
    if (result !== text) node.nodeValue = result;
  }
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(applyKashida);
} else {
  window.addEventListener("load", applyKashida);
}