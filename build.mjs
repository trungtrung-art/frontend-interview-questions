#!/usr/bin/env node
/**
 * Sinh trang ôn luyện docs/index.html từ các file markdown trong repo.
 *
 *   node build.mjs
 *
 * Nguồn dữ liệu (sửa ở đây, không sửa trực tiếp docs/index.html):
 *   - ly-thuyet/01-giao-an-4-ngay-phong-van-frontend.md   133 câu có đáp án
 *   - PLAYBOOK.md                                         lộ trình và khung trả lời
 *   - 09-algorithms.md                                    bảng tra cứu thuật toán
 *   - 01..08-*.md                                         câu trắc nghiệm
 *
 * Kết quả là một file HTML tự chứa: mở bằng cách bấm đúp, không cần server,
 * không cần mạng. Thư viện marked và highlight.js nhúng sẵn từ tools/vendor/.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const read = (...p) => readFileSync(join(ROOT, ...p), 'utf8');

/* --- các file trắc nghiệm và tên chủ đề hiển thị --- */
const QUIZ_FILES = [
  ['01-javascript-questions.md',          'JavaScript',    '01'],
  ['02-reactjs-questions.md',             'ReactJS',       '02'],
  ['03-performance-optimization.md',      'Performance',   '03'],
  ['04-problem-solving-system-design.md', 'System Design', '04'],
  ['06-typescript-questions.md',          'TypeScript',    '06'],
  ['07-html-css-advanced.md',             'HTML/CSS',      '07'],
  ['08-testing-best-practices.md',        'Testing',       '08'],
];
// 05-behavioral-experience.md không có mặt ở đây: đó là câu hỏi mở,
// không có lựa chọn A-D nên không dựng thành trắc nghiệm được.

/** Liệt kê heading, bỏ qua mọi thứ nằm trong khối code. */
const headings = lines => {
  const out = [];
  let fence = false;
  lines.forEach((l, i) => {
    if (/^\s*(```|~~~)/.test(l)) { fence = !fence; return; }
    if (fence) return;
    const m = /^(#{1,3})\s+(.*)$/.exec(l);
    if (m) out.push({ i, lv: m[1].length, t: m[2].trim() });
  });
  return out;
};

/**
 * Bố cục file trắc nghiệm: toàn bộ câu hỏi ở đầu, gom theo "# PHẦN n: ...",
 * rồi tới "# ĐÁP ÁN CHI TIẾT" chứa mọi đáp án dạng "### Câu n: Đáp án X".
 */
const parseQuiz = (md, topic, key) => {
  const lines = md.split('\n');
  const H = headings(lines);
  const sp = H.find(h => h.lv === 1 && /ĐÁP\s*ÁN/i.test(h.t));
  const splitAt = sp ? sp.i : lines.length;
  const endOf = h => {
    const nx = H.find(x => x.i > h.i && x.lv <= h.lv);
    return nx ? nx.i : lines.length;
  };

  const answers = new Map();
  H.filter(h => h.lv === 3 && h.i > splitAt).forEach(h => {
    const m = /^Câu\s+(\d+)\s*:\s*Đáp\s*[Áá]n\s*\**\s*([A-D])\b/i.exec(h.t);
    if (!m) return;
    const stop = H.find(x => x.i > h.i && x.lv <= 3);
    answers.set(+m[1], {
      k: m[2].toUpperCase(),
      expl: lines.slice(h.i + 1, stop ? stop.i : lines.length).join('\n').trim(),
    });
  });

  const groups = H.filter(h => h.lv === 1 && /^PHẦN/i.test(h.t));

  return H
    .filter(h => h.lv === 2 && h.i < splitAt && /^Câu\s+\d+\s*:/.test(h.t))
    .map(h => {
      const n = +/^Câu\s+(\d+)/.exec(h.t)[1];
      const body = lines.slice(h.i + 1, endOf(h));

      // dòng mở mỗi lựa chọn, bỏ qua vùng code
      const marks = [];
      let fence = false;
      body.forEach((l, i) => {
        if (/^\s*(```|~~~)/.test(l)) { fence = !fence; return; }
        if (fence) return;
        const o = /^\s*-\s*([A-D])\)\s*(.*)$/.exec(l);
        if (o) marks.push({ i, k: o[1], head: o[2].trim() });
      });

      // một lựa chọn có thể trải nhiều dòng (kèm code block)
      const opts = marks.map((m, j) => {
        const to = j + 1 < marks.length ? marks[j + 1].i : body.length;
        const rest = body.slice(m.i + 1, to).join('\n').replace(/\n*-{3,}\s*$/, '').trim();
        return { k: m.k, t: `${m.head}${rest ? `\n${rest}` : ''}`.trim() };
      });

      const g = groups.filter(x => x.i < h.i).pop();
      const a = answers.get(n);
      return {
        id: `${key}-${n}`,
        topic,
        group: g ? g.t.replace(/^PHẦN\s*\d+:\s*/i, '') : '',
        title: h.t.replace(/^Câu\s+\d+\s*:\s*/, '').trim(),
        prompt: body.slice(0, marks.length ? marks[0].i : body.length).join('\n').trim(),
        opts,
        ans: a ? a.k : null,
        expl: a ? a.expl : '',
      };
    });
};

/* --- gom dữ liệu trắc nghiệm --- */
const quiz = [];
const skipped = [];
for (const [file, topic, key] of QUIZ_FILES) {
  for (const q of parseQuiz(read(file), topic, key)) {
    const usable = q.ans && q.opts.length === 4 && q.prompt && q.expl
      && q.opts.every(o => o.t) && q.opts.some(o => o.k === q.ans);
    if (usable) quiz.push(q);
    else skipped.push({ file, id: q.id, why: q.ans ? 'lựa chọn không đủ' : 'thiếu đáp án' });
  }
}

/* --- nhúng vào template --- */
const jsString = s => JSON.stringify(s).replace(/<\//g, '<\\/');
const jsRaw = s => s.replace(/<\/script/gi, '<\\/script');

let html = read('tools', 'app.template.html');
const slots = {
  __LIB_MARKED__: jsRaw(read('tools', 'vendor', 'marked.umd.min.js')),
  __LIB_HLJS__: jsRaw(read('tools', 'vendor', 'highlight.min.js')),
  __MD_GIAOAN__: jsString(read('ly-thuyet', '01-giao-an-4-ngay-phong-van-frontend.md')),
  __MD_PLAYBOOK__: jsString(read('PLAYBOOK.md')),
  __MD_ALGO__: jsString(read('09-algorithms.md')),
  __QUIZ_DATA__: jsRaw(JSON.stringify(quiz)),
};
for (const [slot, value] of Object.entries(slots)) {
  if (!html.includes(slot)) throw new Error(`Template thiếu chỗ cắm ${slot}`);
  html = html.replace(slot, () => value);
}
// chỉ soi đúng tên chỗ cắm của mình: mã thư viện đã minify có thể
// chứa định danh dạng __FOO__ hoàn toàn hợp lệ
const left = Object.keys(slots).filter(s => html.includes(s));
if (left.length) throw new Error(`Còn chỗ cắm chưa thay: ${left.join(', ')}`);

mkdirSync(join(ROOT, 'docs'), { recursive: true });
writeFileSync(join(ROOT, 'docs', 'index.html'), html);

/* --- báo cáo --- */
const giaoAnCount = (read('ly-thuyet', '01-giao-an-4-ngay-phong-van-frontend.md')
  .match(/^## Câu (?!X:)/gm) || []).length;
const byTopic = quiz.reduce((m, q) => ((m[q.topic] = (m[q.topic] || 0) + 1), m), {});

console.log(`docs/index.html  ${(html.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`  giáo án        ${giaoAnCount} câu`);
console.log(`  trắc nghiệm    ${quiz.length} câu  (${Object.entries(byTopic).map(([t, n]) => `${t} ${n}`).join(', ')})`);
if (skipped.length) {
  const byFile = skipped.reduce((m, { file, id }) => ({ ...m, [file]: [...(m[file] ?? []), id] }), {});
  console.log(`  bỏ qua         ${skipped.length} câu:`);
  for (const [f, ids] of Object.entries(byFile)) console.log(`    ${f}  ${ids.join(', ')}`);
}
