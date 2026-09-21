#!/usr/bin/env node
/**
 * Chèn mục "Đánh đổi" vào phần giải thích của các câu trắc nghiệm.
 *
 * Bộ đề gốc dạy cái gì đúng nhưng gần như không nói khi nào nó sai — mà đó mới
 * là thứ người phỏng vấn đào ở vòng Senior. Script này thêm một đoạn đánh đổi
 * vào cuối mỗi giải thích, ngay trước dòng "Tham khảo".
 *
 *   node tools/add-tradeoffs.mjs tools/tradeoffs-02.mjs          # chỉ xem
 *   node tools/add-tradeoffs.mjs tools/tradeoffs-02.mjs --write  # ghi
 *
 * File nội dung phải export FILE (tên file markdown) và TRADEOFFS
 * (object: số câu -> đoạn văn).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WRITE = process.argv.includes('--write');
const contentPath = process.argv[2];
if (!contentPath) throw new Error('Thiếu đường dẫn file nội dung');

const { FILE, TRADEOFFS } = await import(pathToFileURL(resolve(contentPath)).href);
const target = join(ROOT, FILE);
const lines = readFileSync(target, 'utf8').split('\n');

// bảng heading, bỏ qua mọi thứ nằm trong khối code
const H = [];
let fence = false;
lines.forEach((l, i) => {
  if (/^\s*(```|~~~)/.test(l)) { fence = !fence; return; }
  if (fence) return;
  const m = /^(#{1,3})\s+(.*)$/.exec(l);
  if (m) H.push({ i, lv: m[1].length, t: m[2].trim() });
});

const split = H.find(h => h.lv === 1 && /ĐÁP\s*ÁN/i.test(h.t))?.i ?? lines.length;
const answers = H
  .filter(h => h.lv === 3 && h.i > split && /^Câu \d+:\s*Đáp/i.test(h.t))
  .map(h => ({ ...h, n: +/^Câu (\d+)/.exec(h.t)[1] }));

const edits = [];
const missing = [];

for (const [num, text] of Object.entries(TRADEOFFS)) {
  const n = +num;
  const head = answers.find(a => a.n === n);
  if (!head) { missing.push(n); continue; }

  const next = H.find(h => h.i > head.i && h.lv <= 3);
  const end = next ? next.i : lines.length;
  const body = lines.slice(head.i + 1, end);

  if (body.some(l => l.startsWith('**Đánh đổi:**'))) continue;   // đã có rồi, bỏ qua

  // đặt trước dòng "Tham khảo" nếu có, nếu không thì cuối khối
  const refAt = body.findIndex(l => /^\*\*Tham khảo/.test(l.trim()));
  let at;
  if (refAt >= 0) {
    at = head.i + 1 + refAt;
    while (at - 1 > head.i && !lines[at - 1].trim()) at--;       // lùi qua dòng trống
  } else {
    at = end;
    while (at - 1 > head.i && (!lines[at - 1].trim() || /^-{3,}$/.test(lines[at - 1].trim()))) at--;
  }

  edits.push({ n, at, text: ['', '**Đánh đổi:**', text] });
}

edits.sort((a, b) => b.at - a.at);
for (const e of edits) lines.splice(e.at, 0, ...e.text);

console.log(`${FILE}`);
console.log(`  thêm đánh đổi cho ${edits.length} câu`);
if (missing.length) console.log(`  KHÔNG tìm thấy đáp án của câu: ${missing.join(', ')}`);
const skipped = Object.keys(TRADEOFFS).length - edits.length - missing.length;
if (skipped) console.log(`  bỏ qua ${skipped} câu vì đã có mục Đánh đổi`);

if (WRITE) {
  writeFileSync(target, lines.join('\n'));
  console.log('  đã ghi');
} else {
  console.log('  chưa ghi, thêm --write để áp dụng');
}
