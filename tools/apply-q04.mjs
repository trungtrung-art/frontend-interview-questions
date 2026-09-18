/**
 * Ghi 14 câu thiếu đáp án vào 04-problem-solving-system-design.md:
 * thay bốn lựa chọn, và chèn phần đáp án vào đúng chỗ trong mục ĐÁP ÁN CHI TIẾT.
 *
 *   node apply-q04.mjs <đường-dẫn-repo>          # chỉ xem
 *   node apply-q04.mjs <đường-dẫn-repo> --write  # ghi
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { QUESTIONS } from './q04-content.mjs';

const ROOT = process.argv[2];
const WRITE = process.argv.includes('--write');
const FILE = join(ROOT, '04-problem-solving-system-design.md');
const LETTERS = ['A', 'B', 'C', 'D'];

const lines = readFileSync(FILE, 'utf8').split('\n');

// bảng heading, bỏ qua mọi thứ trong khối code
const H = [];
let fence = false;
lines.forEach((l, i) => {
  if (/^\s*(```|~~~)/.test(l)) { fence = !fence; return; }
  if (fence) return;
  const m = /^(#{1,3})\s+(.*)$/.exec(l);
  if (m) H.push({ i, lv: m[1].length, t: m[2].trim() });
});

const split = H.find(h => h.lv === 1 && /ĐÁP\s*ÁN/i.test(h.t)).i;
const answerHeads = H
  .filter(h => h.lv === 3 && h.i > split && /^Câu \d+:\s*Đáp/i.test(h.t))
  .map(h => ({ ...h, n: +/^Câu (\d+)/.exec(h.t)[1] }));

const edits = [];

/* --- 1. thay bốn lựa chọn của từng câu --- */
for (const [num, data] of Object.entries(QUESTIONS)) {
  const n = +num;
  const head = H.find(h => h.lv === 2 && h.i < split && h.t.startsWith(`Câu ${n}:`));
  if (!head) throw new Error(`Không tìm thấy đề Câu ${n}`);
  const next = H.find(h => h.i > head.i && h.lv <= 2);
  const end = next ? next.i : split;

  const marks = [];
  let f = false;
  for (let i = head.i + 1; i < end; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) { f = !f; continue; }
    if (f) continue;
    if (/^\s*-\s*([A-D])\)/.test(lines[i])) marks.push(i);
  }
  if (marks.length !== 4) throw new Error(`Câu ${n}: thấy ${marks.length} lựa chọn, cần đúng 4`);
  if (marks[3] - marks[0] !== 3) throw new Error(`Câu ${n}: bốn lựa chọn không liền nhau`);

  edits.push({
    start: marks[0],
    end: marks[3],
    text: LETTERS.map(k => `- ${k}) ${data.opts[k]}`),
    what: `Câu ${n}: thay 4 lựa chọn`,
  });
}

/* --- 2. chèn phần đáp án --- */
// mỗi câu thiếu được đặt ngay sau khối đáp án của câu có số nhỏ hơn gần nhất
const groups = new Map();
for (const num of Object.keys(QUESTIONS).map(Number).sort((a, b) => a - b)) {
  const prev = answerHeads.filter(h => h.n < num).pop();
  if (!prev) throw new Error(`Không có câu nào đứng trước Câu ${num} để neo vào`);
  const after = H.find(h => h.i > prev.i && h.lv <= 3);
  const at = after ? after.i : lines.length;
  if (!groups.has(at)) groups.set(at, []);
  groups.get(at).push(num);
}

for (const [at, nums] of groups) {
  const text = [];
  for (const n of nums) {
    const { ans, expl } = QUESTIONS[n];
    text.push(`### Câu ${n}: Đáp án ${ans}`, '', '**Giải thích:**', expl, '', '---', '');
  }
  edits.push({ start: at, end: at - 1, text, what: `chèn đáp án ${nums.join(', ')} trước dòng ${at + 1}` });
}

/* --- 3. áp dụng từ dưới lên để chỉ số dòng không xê dịch --- */
edits.sort((a, b) => b.start - a.start);
for (const e of edits) lines.splice(e.start, e.end - e.start + 1, ...e.text);

for (const e of [...edits].reverse()) console.log(`  ${e.what}`);
console.log(`\n${edits.length} thay đổi`);

if (WRITE) {
  writeFileSync(FILE, lines.join('\n'));
  console.log('Đã ghi vào 04-problem-solving-system-design.md');
} else {
  console.log('Chưa ghi gì. Thêm --write để áp dụng.');
}
