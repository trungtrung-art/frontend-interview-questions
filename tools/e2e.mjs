/**
 * Kiểm thử docs/index.html bằng DOM thật (jsdom): mở trang, bấm qua từng
 * chế độ, làm thử một câu trắc nghiệm, viết một ghi chú, rồi đối chiếu
 * kết quả trên DOM và trong localStorage.
 *
 * Chạy sau mỗi lần `node build.mjs`:
 *
 *   npm install jsdom       # chỉ cần một lần, không commit node_modules
 *   node tools/e2e.mjs
 *
 * Thoát mã 0 nếu mọi kiểm tra đạt, mã 1 nếu có cái hỏng.
 */
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL("../docs/index.html", import.meta.url), 'utf8');
const errors = [];
const dom = new JSDOM(html, { runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://x.test/' });
dom.virtualConsole.on('jsdomError', e => errors.push(e.message));
const { window } = dom;
const { document } = window;
window.scrollTo = () => {};
await new Promise(r => setTimeout(r, 1500));

const ok = [];
const check = (name, cond, extra = '') => ok.push([cond ? 'ok  ' : 'LỖI', name, extra]);
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const click = s => { $(s)?.click(); };
const byText = (sel, txt) => $$(sel).find(e => e.textContent.trim().startsWith(txt));

check('không có lỗi runtime', errors.length === 0, errors.join(' | '));
check('không còn chỗ cắm chưa thay', !/__(MD_|QUIZ_DATA|LIB_)[A-Z_]*__/.test(html));
check('không lẫn banner của template', !html.includes('CHI-CO-TRONG-TEMPLATE'));
check('6 chế độ ở rail', $$('.mode').length === 6);
check('Hôm nay: 4 thẻ số liệu', $$('.card').length === 4);
check('Hôm nay: bảng 9 phần', $$('.progtable tbody tr').length === 9);
check('Hôm nay: 3 lộ trình', $$('.route').length === 3);
check('Hôm nay: nhắc sao lưu', Boolean($('.backup')));
// jsdom không có File System Access API, nên trang phải rơi về nhánh xuất tay
check('không hỗ trợ ghi file -> hiện nút xuất', $('.backup')?.textContent.includes('Xuất ngay'));
check('không hỗ trợ ghi file -> ẩn nút nối', $('#link')?.hidden === true);
check('Hôm nay: 2 chip tài liệu nền', $$('.filters .chip').length === 2);

byText('.route', 'Còn 1 tuần')?.click();
check('chọn lộ trình hiện lịch', $$('.routebody tbody tr').length === 6);

byText('.mode', 'Giáo án')?.click();
check('Giáo án: 133 câu', $$('.qrow').length === 133);
check('Giáo án: rail có 9 phần + 2 tài liệu + Tất cả', $$('.secbtn').length === 12);

$$('.qrow')[6]?.click();
check('mở được một câu', Boolean($('.qtitle')) && Boolean($('.notebox textarea')));
check('câu có nội dung render', $('.prose')?.textContent.length > 200);
check('code trong câu được tô màu', $$('.hljs').length > 0);
check('có 3 nút tự chấm', $$('.rbtn').length === 3);

byText('.rbtn', 'Mơ hồ')?.click();
check('tự chấm lưu lại', window.localStorage.getItem('fe.status')?.includes('vague'));

const ta = $('.notebox textarea');
ta.value = 'ghi chú thử nghiệm';
ta.dispatchEvent(new window.Event('input'));
check('ghi chú lưu vào localStorage', window.localStorage.getItem('fe.notes')?.includes('ghi chú thử nghiệm'));

byText('.mode', 'Ghi chú')?.click();
check('mục Ghi chú hiện 1 thẻ', $$('.notecard').length === 1);

byText('.mode', 'Trắc nghiệm')?.click();
check('Trắc nghiệm: thẻ chọn bộ', $$('.tcard').length >= 8);
byText('.chip', '10 câu')?.click();
check('vào lượt làm bài', $$('.opt').length === 4 && Boolean($('.qzmeta')));

$$('.opt')[1]?.click();
check('chấm ngay sau khi chọn', Boolean($('.verdict')) && $$('.opt[data-r="right"]').length === 1);
check('hiện giải thích', $('.expl')?.textContent.length > 50);
check('kết quả lưu lại', window.localStorage.getItem('fe.quiz')?.includes('picked'));

byText('.btn', 'Câu tiếp')?.click();
check('sang câu tiếp', $('.qzmeta .step')?.textContent.trim().startsWith('2 /'));

byText('.mode', 'Playbook')?.click();
check('Playbook render', $('.prose')?.textContent.includes('Lộ Trình Theo Quỹ Thời Gian'));
byText('.mode', 'Thuật toán')?.click();
check('Thuật toán render', $('.prose')?.textContent.includes('Sorting'));
check('bảng được bọc cuộn ngang', $$('.tablewrap').length > 5);

byText('.mode', 'Giáo án')?.click();
const q = $('#q');
q.value = 'closure';
q.dispatchEvent(new window.Event('input'));
await new Promise(r => setTimeout(r, 300));
check('tìm kiếm lọc đúng', $$('.qrow').length > 0 && $$('.qrow').length < 10);



const w = Math.max(...ok.map(([, n]) => n.length));
for (const [s, n, e] of ok) console.log(`  ${s}  ${n.padEnd(w)}${e ? '  → ' + e : ''}`);
const bad = ok.filter(([s]) => s !== 'ok  ').length;
console.log(`\n${ok.length - bad}/${ok.length} kiểm tra đạt`);
process.exit(bad ? 1 : 0);
