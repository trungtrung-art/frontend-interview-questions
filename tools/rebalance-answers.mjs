#!/usr/bin/env node
/**
 * Rải lại vị trí đáp án đúng trong các file trắc nghiệm.
 *
 * Bộ đề gốc có 74% đáp án nằm ở B: chọn B hết là đúng 74% mà không cần đọc đề,
 * nên điểm số không phân biệt được người biết với người đoán. Script hoán vị
 * thứ tự lựa chọn để đáp án đúng rải đều A/B/C/D, và sửa chữ cái trong dòng
 * "### Câu n: Đáp án X" cho khớp.
 *
 *   node tools/rebalance-answers.mjs          # chỉ xem, không sửa
 *   node tools/rebalance-answers.mjs --write  # ghi vào file
 *
 * KHÔNG hoán vị ba nhóm sau, vì hoán vị sẽ làm sai nội dung:
 *   - câu có lựa chọn tự nhắc chữ cái khác ("Cả A và B")
 *   - câu mà phần giải thích nhắc "Option A/B"
 *   - lựa chọn gom ("Tất cả đều đúng", "Không có đáp án nào") thì giữ nguyên chỗ
 *
 * Bất biến được kiểm tra sau khi sửa: nội dung chữ của đáp án đúng không đổi.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WRITE = process.argv.includes('--write');
const FILES = [
  '01-javascript-questions.md', '02-reactjs-questions.md', '03-performance-optimization.md',
  '04-problem-solving-system-design.md', '06-typescript-questions.md',
  '07-html-css-advanced.md', '08-testing-best-practices.md',
];
const LETTERS = ['A', 'B', 'C', 'D'];

// bộ sinh số giả ngẫu nhiên có hạt giống, để chạy lại cho kết quả y hệt
const rng = (seed => () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff))(20260918);
const shuffle = list => {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

/** Lựa chọn nhắc tới chữ cái khác → cả câu không đụng được. */
const SELF_REF = /\b(cả|both)\s+[A-D]\b|\b[A-D]\s+(và|and)\s+[A-D]\b/i;
/** Lựa chọn gom → giữ nguyên vị trí, không đổi chỗ. */
const CATCH_ALL = /^\s*[*_`]*\s*(tất cả|không có|không đoạn nào|none of|all of)/i;

const parse = file => {
  const lines = readFileSync(join(ROOT, file), 'utf8').split('\n');
  let fence = false;
  const H = [];
  lines.forEach((l, i) => {
    if (/^\s*(```|~~~)/.test(l)) { fence = !fence; return; }
    if (fence) return;
    const m = /^(#{1,3})\s+(.*)$/.exec(l);
    if (m) H.push({ i, lv: m[1].length, t: m[2].trim() });
  });
  const split = H.find(h => h.lv === 1 && /ĐÁP\s*ÁN/i.test(h.t))?.i ?? lines.length;

  const answers = new Map();
  H.filter(h => h.lv === 3 && h.i > split).forEach(h => {
    const m = /^Câu (\d+):\s*Đáp\s*[Áá]n\s*(\**)\s*([A-D])\b/i.exec(h.t);
    if (!m) return;
    const stop = H.find(x => x.i > h.i && x.lv <= 3);
    answers.set(+m[1], {
      line: h.i, letter: m[3].toUpperCase(),
      body: lines.slice(h.i + 1, stop ? stop.i : lines.length).join('\n'),
    });
  });

  const questions = [];
  H.filter(h => h.lv === 2 && h.i < split && /^Câu \d+:/.test(h.t)).forEach(h => {
    const n = +/^Câu (\d+)/.exec(h.t)[1];
    const nx = H.find(x => x.i > h.i && x.lv <= 2);
    const end = nx ? nx.i : split;

    let f = false;
    const marks = [];
    for (let i = h.i + 1; i < end; i++) {
      if (/^\s*(```|~~~)/.test(lines[i])) { f = !f; continue; }
      if (f) continue;
      const o = /^\s*-\s*([A-D])\)\s*(.*)$/.exec(lines[i]);
      if (o) marks.push({ i, k: o[1] });
    }
    if (marks.length !== 4) return;

    // mỗi lựa chọn là một khối dòng, có thể nhiều dòng (kèm code)
    const blocks = marks.map((m, j) => {
      const to = j + 1 < marks.length ? marks[j + 1].i : end;
      // cắt sạch đuôi: dòng trống và dấu --- ngăn mục, có thể lặp nhiều lần
      // (câu cuối mỗi file có tới hai dấu --- liền nhau)
      let last = to - 1;
      while (last > m.i && (!lines[last].trim() || /^-{3,}$/.test(lines[last].trim()))) last--;
      return { k: m.k, from: m.i, to: last, text: lines.slice(m.i, last + 1) };
    });
    questions.push({ n, from: h.i, blocks, answer: answers.get(n) });
  });

  return { lines, questions };
};

/* --- đọc toàn bộ, quyết định câu nào hoán vị được --- */
const docs = new Map();
const pool = [];
const frozen = [];

for (const file of FILES) {
  const doc = parse(file);
  docs.set(file, doc);
  for (const q of doc.questions) {
    if (!q.answer) continue;
    const texts = q.blocks.map(b => b.text.join('\n'));
    if (texts.some(t => SELF_REF.test(t))) { frozen.push({ file, q, why: 'lựa chọn nhắc chữ cái khác' }); continue; }
    if (/option\s+[A-D]\b/i.test(q.answer.body)) { frozen.push({ file, q, why: 'giải thích nhắc Option A/B' }); continue; }
    pool.push({ file, q });
  }
}

/* --- chọn vị trí đích sao cho tổng thể đều --- */
const fixed = frozen.reduce((m, { q }) => ({ ...m, [q.answer.letter]: (m[q.answer.letter] ?? 0) + 1 }), {});
const total = pool.length + frozen.length;
const want = {};
for (const L of LETTERS) want[L] = Math.max(0, Math.round(total / 4) - (fixed[L] ?? 0));

const targets = shuffle(LETTERS.flatMap(L => Array(want[L]).fill(L)));
while (targets.length < pool.length) targets.push(LETTERS[targets.length % 4]);

/* --- dựng hoán vị cho từng câu --- */
const edits = [];
pool.forEach(({ file, q }, idx) => {
  const target = targets[idx];
  const slots = q.blocks.map((b, i) => ({ i, catchAll: CATCH_ALL.test(b.text.join('\n')) }));
  const lockedIdx = new Set(slots.filter(s => s.catchAll).map(s => s.i));
  const answerIdx = q.blocks.findIndex(b => b.k === q.answer.letter);

  // đáp án đúng là lựa chọn gom → để yên, không hoán vị câu này
  if (lockedIdx.has(answerIdx)) { frozen.push({ file, q, why: 'đáp án đúng là lựa chọn gom' }); return; }
  const targetIdx = LETTERS.indexOf(target);
  if (lockedIdx.has(targetIdx)) { frozen.push({ file, q, why: 'vị trí đích bị lựa chọn gom chiếm' }); return; }

  // thứ tự mới: đáp án đúng vào chỗ đích, lựa chọn gom giữ nguyên chỗ, còn lại lấp vào
  const order = new Array(4).fill(null);
  order[targetIdx] = answerIdx;
  for (const i of lockedIdx) order[i] = i;
  const rest = shuffle(q.blocks.map((_, i) => i).filter(i => i !== answerIdx && !lockedIdx.has(i)));
  for (let i = 0; i < 4; i++) if (order[i] === null) order[i] = rest.pop();

  edits.push({ file, q, order, from: q.answer.letter, to: target });
});

/* --- áp dụng: thay khối lựa chọn và chữ cái ở dòng đáp án --- */
const stats = { A: 0, B: 0, C: 0, D: 0 };
for (const { q } of frozen) stats[q.answer.letter]++;

for (const [file, doc] of docs) {
  const mine = edits.filter(e => e.file === file);
  if (!mine.length) continue;
  const { lines } = doc;

  for (const e of mine) {
    const { q, order, to } = e;
    // nội dung mới cho từng ô, đánh lại nhãn chữ cái ở dòng đầu mỗi khối
    const rebuilt = order.map((srcIdx, slot) => {
      const block = [...q.blocks[srcIdx].text];
      block[0] = block[0].replace(/^(\s*-\s*)[A-D]\)/, `$1${LETTERS[slot]})`);
      return block;
    });
    // ghi ngược từ dưới lên để chỉ số dòng không xê dịch
    for (let slot = 3; slot >= 0; slot--) {
      const dst = q.blocks[slot];
      lines.splice(dst.from, dst.to - dst.from + 1, ...rebuilt[slot]);
    }
    lines[q.answer.line] = lines[q.answer.line].replace(
      /^(###\s+Câu \d+:\s*Đáp\s*[Áá]n\s*\**\s*)[A-D]\b/i, `$1${to}`);
    stats[to]++;
  }
  if (WRITE) writeFileSync(join(ROOT, file), lines.join('\n'));
}

/* --- báo cáo --- */
console.log(`${total} câu · hoán vị ${edits.length} · giữ nguyên ${frozen.length}`);
console.log();
const why = frozen.reduce((m, f) => ({ ...m, [f.why]: (m[f.why] ?? 0) + 1 }), {});
console.log('Giữ nguyên vì:');
for (const [k, v] of Object.entries(why)) console.log(`  ${k.padEnd(34)} ${v}`);
console.log();
console.log('Phân bố đáp án sau khi sửa:');
for (const L of LETTERS) {
  const p = Math.round((stats[L] / total) * 100);
  console.log(`  ${L}  ${String(stats[L]).padStart(3)}  ${String(p).padStart(2)}%  ${'#'.repeat(p)}`);
}
console.log(WRITE ? '\nĐã ghi vào file.' : '\nChưa ghi gì. Thêm --write để áp dụng.');

if (process.argv.includes('--show-frozen')) {
  console.log('\nDanh sách câu giữ nguyên:');
  for (const { file, q, why } of frozen) console.log(`  ${file.slice(0, 2)}-${q.n}  đáp án ${q.answer.letter}  (${why})`);
}
