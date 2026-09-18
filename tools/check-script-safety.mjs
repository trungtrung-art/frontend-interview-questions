/**
 * Bắt lỗi thẻ <script> bị đóng sớm.
 *
 * Trong một phần tử <script>, chuỗi `<!--` đưa bộ phân tích HTML vào trạng thái
 * "script data escaped", rồi `<script` đưa tiếp vào "script data double escaped".
 * Ở trạng thái đó `</script>` KHÔNG đóng thẻ nữa, nên phần còn lại của file bị
 * đổ ra màn hình dưới dạng văn bản.
 *
 * Nội dung nhúng của trang này có cả ba chuỗi (code ví dụ dạy về defer, async,
 * XSS), nên tất cả phải được thoát trước khi ghi vào file.
 *
 *   node tools/check-script-safety.mjs
 */
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../docs/index.html', import.meta.url), 'utf8');
const DANGEROUS = /<\/script|<script|<!--/gi;

const blocks = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
let bad = 0;

blocks.forEach((m, i) => {
  const hits = [...m[1].matchAll(DANGEROUS)];
  if (!hits.length) {
    console.log(`  ok    khối script ${i + 1} (${m[1].length.toLocaleString()} ký tự)`);
    return;
  }
  bad += hits.length;
  console.log(`  LỖI  khối script ${i + 1}: ${hits.length} chuỗi nguy hiểm`);
  for (const h of hits.slice(0, 4)) {
    const around = m[1].slice(Math.max(0, h.index - 40), h.index + 30).replace(/\n/g, '\\n');
    console.log(`          …${around}…`);
  }
});

console.log(`\n${blocks.length} khối script, ${bad} chuỗi nguy hiểm`);
process.exit(bad ? 1 : 0);
