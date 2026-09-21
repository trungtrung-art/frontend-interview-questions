/**
 * Thêm một phần mới vào cuối mục câu hỏi và mục đáp án của file 04.
 *   node append-q04.mjs <repo> [--write]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { SECTION, ANSWER_SECTION, QUESTIONS } from './q04-new.mjs';

const ROOT = process.argv[2];
const WRITE = process.argv.includes('--write');
const FILE = join(ROOT, '04-problem-solving-system-design.md');
const lines = readFileSync(FILE, 'utf8').split('\n');

const H = [];
let fence = false;
lines.forEach((l, i) => {
  if (/^\s*(```|~~~)/.test(l)) { fence = !fence; return; }
  if (fence) return;
  const m = /^(#{1,3})\s+(.*)$/.exec(l);
  if (m) H.push({ i, lv: m[1].length, t: m[2].trim() });
});

const answerStart = H.find(h => h.lv === 1 && /ĐÁP\s*ÁN/i.test(h.t));
if (!answerStart) throw new Error('Không tìm thấy mục ĐÁP ÁN CHI TIẾT');

// tài liệu tham khảo nằm cuối cùng, chèn phần đáp án mới ngay trước nó
const refs = H.find(h => h.i > answerStart.i && h.lv <= 2 && /THAM KHẢO/i.test(h.t));
const answerAt = refs ? refs.i : lines.length;

const already = lines.some(l => l.includes(SECTION));
if (already) { console.log('Phần này đã có, không làm gì.'); process.exit(0); }

const qBlock = [`# ${SECTION}`, ''];
for (const { n, title, prompt, opts } of QUESTIONS) {
  qBlock.push(`## Câu ${n}: ${title}`, prompt, '');
  for (const k of ['A', 'B', 'C', 'D']) qBlock.push(`- ${k}) ${opts[k]}`);
  qBlock.push('', '---', '');
}

const aBlock = [`## ${ANSWER_SECTION}`, ''];
for (const { n, ans, expl } of QUESTIONS) {
  aBlock.push(`### Câu ${n}: Đáp án ${ans}`, '', '**Giải thích:**', expl, '', '---', '');
}

// chèn từ dưới lên để chỉ số dòng không xê dịch
lines.splice(answerAt, 0, ...aBlock);
lines.splice(answerStart.i, 0, ...qBlock);

console.log(`Thêm ${QUESTIONS.length} câu (${QUESTIONS[0].n}–${QUESTIONS.at(-1).n})`);
console.log(`  đề    : chèn trước dòng ${answerStart.i + 1}`);
console.log(`  đáp án: chèn trước dòng ${answerAt + 1}`);
const dist = QUESTIONS.reduce((m, q) => ({ ...m, [q.ans]: (m[q.ans] ?? 0) + 1 }), {});
console.log(`  vị trí đáp án: ${['A', 'B', 'C', 'D'].map(k => `${k} ${dist[k] ?? 0}`).join(' · ')}`);

if (WRITE) { writeFileSync(FILE, lines.join('\n')); console.log('  đã ghi'); }
else console.log('  chưa ghi, thêm --write');
