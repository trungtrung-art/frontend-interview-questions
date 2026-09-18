#!/usr/bin/env node
/**
 * Đọc notes/ghi-chu.json (file mà trang ôn luyện ghi thẳng vào) rồi sinh
 * notes/GHI-CHU.md — bản đọc được trên GitHub, kèm tiêu đề câu hỏi và mức tự chấm.
 *
 *   node tools/notes-to-md.mjs
 *
 * Chạy sau khi sửa ghi chú, trước khi commit.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (...p) => readFileSync(join(ROOT, ...p), 'utf8');

const SRC = join(ROOT, 'notes', 'ghi-chu.json');
if (!existsSync(SRC)) {
  console.error('Chưa có notes/ghi-chu.json.');
  console.error('Mở docs/index.html, bấm nút nối file ở góc phải trên và chọn notes/ghi-chu.json.');
  process.exit(1);
}

const data = JSON.parse(readFileSync(SRC, 'utf8'));
if (data.format !== 'on-luyen-frontend') throw new Error('notes/ghi-chu.json không đúng định dạng');

/* --- tiêu đề câu trong giáo án --- */
const giaoan = new Map();
{
  let section = '';
  for (const line of read('ly-thuyet', '01-giao-an-4-ngay-phong-van-frontend.md').split('\n')) {
    const s = /^# (.+)$/.exec(line);
    if (s) { section = s[1]; continue; }
    const h = /^## (Câu [^:]+):\s*(.*)$/.exec(line);
    if (h && h[1].trim() !== 'Câu X') giaoan.set(h[1].trim(), { title: h[2].trim(), section });
  }
}

/* --- tiêu đề câu trắc nghiệm --- */
const quiz = new Map();
for (const [file, topic, key] of [
  ['01-javascript-questions.md', 'JavaScript', '01'],
  ['02-reactjs-questions.md', 'ReactJS', '02'],
  ['03-performance-optimization.md', 'Performance', '03'],
  ['04-problem-solving-system-design.md', 'System Design', '04'],
  ['06-typescript-questions.md', 'TypeScript', '06'],
  ['07-html-css-advanced.md', 'HTML/CSS', '07'],
  ['08-testing-best-practices.md', 'Testing', '08'],
]) {
  const src = read(file);
  for (const m of src.matchAll(/^## Câu (\d+):\s*(.*)$/gm)) {
    quiz.set(`${key}-${m[1]}`, { title: m[2].trim(), topic, ans: '—' });
  }
  // đáp án đúng nằm ở cuối file, dạng "### Câu n: Đáp án X"
  for (const m of src.matchAll(/^### Câu (\d+):\s*Đáp\s*[Áá]n\s*\**\s*([A-D])\b/gim)) {
    const entry = quiz.get(`${key}-${m[1]}`);
    if (entry) entry.ans = m[2].toUpperCase();
  }
}

const RATING = { known: 'biết rõ', vague: 'mơ hồ', unknown: 'chưa biết' };
const notes = Object.entries(data.notes ?? {}).filter(([, text]) => text?.trim());
const status = data.status ?? {};
const results = Object.entries(data.quiz ?? {});
const wrong = results.filter(([, r]) => !r.ok);

const out = [];
out.push('# Ghi Chú Ôn Luyện Frontend', '');
out.push(`*Sinh tự động bằng \`node tools/notes-to-md.mjs\`. Đừng sửa trực tiếp file này —`);
out.push(`sửa trong trang rồi chạy lại script. Nguồn: \`notes/ghi-chu.json\`.*`, '');
out.push(`Cập nhật: ${data.exportedAt?.slice(0, 16).replace('T', ' ') ?? '—'}`, '');
out.push('| | Số lượng |', '|---|---|');
out.push(`| Câu đã ghi chú | ${notes.length} |`);
out.push(`| Đánh dấu biết rõ | ${Object.values(status).filter(v => v === 'known').length} |`);
out.push(`| Đánh dấu mơ hồ | ${Object.values(status).filter(v => v === 'vague').length} |`);
out.push(`| Trắc nghiệm đã làm | ${results.length} |`);
out.push(`| Trắc nghiệm làm sai | ${wrong.length} |`, '');

if (notes.length) {
  out.push('---', '', '## Ghi chú theo phần', '');
  const bySection = new Map();
  for (const [id, text] of notes) {
    const info = giaoan.get(id);
    const section = info?.section ?? 'Khác';
    if (!bySection.has(section)) bySection.set(section, []);
    bySection.get(section).push({ id, text, title: info?.title ?? '' });
  }
  for (const [section, items] of bySection) {
    out.push(`### ${section}`, '');
    for (const { id, text, title } of items) {
      const mark = status[id] ? ` — *${RATING[status[id]] ?? status[id]}*` : '';
      out.push(`#### ${id}: ${title}${mark}`, '', text.trim(), '');
    }
  }
}

if (wrong.length) {
  out.push('---', '', '## Trắc nghiệm còn làm sai', '');
  out.push('| Câu | Chủ đề | Đã chọn | Đáp án |', '|---|---|---|---|');
  for (const [id, r] of wrong) {
    const info = quiz.get(id);
    out.push(`| ${info?.title ?? id} | ${info?.topic ?? '—'} | ${r.picked} | ${info?.ans ?? '—'} |`);
  }
  out.push('');
}

writeFileSync(join(ROOT, 'notes', 'GHI-CHU.md'), out.join('\n'));
console.log(`notes/GHI-CHU.md  ${notes.length} ghi chú, ${wrong.length} câu trắc nghiệm sai`);
