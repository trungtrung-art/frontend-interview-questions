# Bộ câu hỏi chế độ hỏng — Đợt 1: React render

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Dựng thư mục `che-do-hong/`, viết 12 câu chế độ hỏng cho mảng React render, và đưa chúng vào trang ôn luyện thành một chế độ mới.

**Architecture:** Mỗi mảng là một file markdown trong `che-do-hong/`, mỗi câu là một khối `## CDH-<file>-<số>` gồm đúng 9 mục cố định. Một script kiểm tra chạy bằng Node thuần soi cấu trúc và chất lượng tối thiểu. `build.mjs` quét thư mục thay vì liệt kê từng file, phân tách theo cùng khuôn đó, rồi trang ôn luyện hiển thị như một chế độ riêng dùng lại cơ chế tự chấm và ghi chú sẵn có.

**Tech Stack:** Markdown, Node 18+ (ESM, không phụ thuộc ngoài), jsdom cho e2e (đã có sẵn trong quy trình).

**Spec:** `docs/superpowers/specs/2026-09-23-che-do-hong-design.md`

## Global Constraints

- Định danh câu: `CDH-<số file 2 chữ số>-<số thứ tự 2 chữ số>`, ví dụ `CDH-01-03`
- Mỗi câu 4.000–6.000 ký tự, tuyệt đối không dưới 2.500
- Đúng 9 mục, đúng tên, đúng thứ tự: Tình huống · Câu hỏi · Thực sự đang xảy ra gì · Cách chứng minh · Cách sửa · Vì sao cách sửa hiển nhiên lại sai · Đánh đổi · Câu đào sâu · Nối với
- Mục "Câu đào sâu" phải có ít nhất 2 gạch đầu dòng
- Viết tiếng Việt, thuật ngữ kỹ thuật giữ nguyên tiếng Anh trong dấu nháy ngược
- Không trùng nội dung với 14 câu chế độ hỏng đã có trong giáo án (Câu 24, 31, 32, 83, 84, 87, 90, 91, 93, 94, 95, 78, 79, 102)
- Không sửa `ly-thuyet/`, không sửa 8 file trắc nghiệm
- Mọi script mới chạy được bằng `node <file>` không cần cài gì

---

## File Structure

| Đường dẫn | Trách nhiệm |
|---|---|
| `che-do-hong/README.md` | Mục lục 7 mảng, cách dùng, quy ước viết một câu |
| `che-do-hong/01-react-render.md` | 12 câu mảng React render |
| `tools/check-che-do-hong.mjs` | Kiểm cấu trúc và chất lượng tối thiểu |
| `build.mjs` | Thêm quét thư mục và phân tách câu |
| `tools/app.template.html` | Thêm chế độ "Chế độ hỏng" |
| `tools/e2e.mjs` | Thêm kiểm tra cho chế độ mới |
| `README.md`, `PLAYBOOK.md` | Liên kết tới phần mới |

## 12 câu của đợt 1

Mỗi dòng là một chế độ hỏng riêng biệt, không trùng giáo án. Cột "gốc rễ" là điều câu hỏi phải dẫn tới.

| ID | Triệu chứng | Gốc rễ |
|---|---|---|
| CDH-01-01 | Bọc `Provider` mà mọi consumer vẫn render mỗi lần cha render | `value={{...}}` tạo object mới mỗi render |
| CDH-01-02 | Xoá dòng thứ hai, ô input của dòng thứ ba hiện giá trị của dòng vừa xoá | `key` dùng index nên React dùng lại instance sai |
| CDH-01-03 | Gõ vào ô tìm kiếm, tab Network thấy 40 request cho 8 ký tự | `useEffect` thiếu cleanup, không huỷ request cũ |
| CDH-01-04 | Bộ đếm lượt xem tăng gấp đôi ở máy dev, production thì đúng | StrictMode gọi effect hai lần, effect không idempotent |
| CDH-01-05 | Trang đơ, console không lỗi, CPU 100% | `setState` trong `useEffect` không điều kiện dừng |
| CDH-01-06 | `useMemo` bọc phép tính 200ms nhưng vẫn chạy mỗi render | Dependency là object tạo mới mỗi render |
| CDH-01-07 | Row đã bọc `memo` nhưng 500 dòng vẫn render lại khi cha đổi state | Props có arrow function viết inline |
| CDH-01-08 | Nút "Lưu" gửi đi giá trị của hai lần gõ trước | Stale closure — `useCallback` deps rỗng |
| CDH-01-09 | Gõ một ký tự vào ô lọc, cả trang 60 component render | State nâng lên quá cao so với nơi thật sự cần |
| CDH-01-10 | Nâng React 18, code trong `setTimeout` đọc state ngay sau `setState` thấy giá trị cũ | Automatic batching mở rộng sang code bất đồng bộ |
| CDH-01-11 | Next.js cảnh báo `useLayoutEffect` trên server, nội dung nhảy một nhịp khi hydrate | `useLayoutEffect` không chạy ở server |
| CDH-01-12 | Một widget refetch làm cả trang thành khung xương | Ranh giới `Suspense` đặt quá rộng |

---

## Task 1: Script kiểm tra và khung thư mục

**Files:**
- Create: `tools/check-che-do-hong.mjs`
- Create: `che-do-hong/README.md`
- Create: `che-do-hong/01-react-render.md` (chỉ tiêu đề file, chưa có câu nào)

**Interfaces:**
- Consumes: không có
- Produces: `node tools/check-che-do-hong.mjs` thoát mã 0 khi mọi câu hợp lệ, mã 1 kèm danh sách lỗi khi không. Chấp nhận biến môi trường `CDH_DIR` để trỏ sang thư mục khác khi test.

- [ ] **Step 1: Viết fixture hỏng để script phải bắt được**

Tạo `/tmp/cdh-test/01-react-render.md`:

```markdown
# Mảng 1 — React render

## CDH-01-01: Câu thiếu mục

### Tình huống
Ngắn quá.

### Câu hỏi
Vì sao?

### Nối với
- [CDH-01-99](#cdh-01-99)
```

Fixture này vi phạm bốn điều cùng lúc: thiếu 6 mục, dưới 2.500 ký tự, thiếu mục "Câu đào sâu", và trỏ tới định danh không tồn tại.

- [ ] **Step 2: Viết script**

```javascript
#!/usr/bin/env node
/**
 * Kiểm cấu trúc và chất lượng tối thiểu của các câu trong che-do-hong/.
 *   node tools/check-che-do-hong.mjs
 * Đặt CDH_DIR để kiểm một thư mục khác (dùng khi test chính script này).
 */
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = process.env.CDH_DIR ?? join(ROOT, 'che-do-hong');

const SECTIONS = [
  'Tình huống', 'Câu hỏi', 'Thực sự đang xảy ra gì', 'Cách chứng minh',
  'Cách sửa', 'Vì sao cách sửa hiển nhiên lại sai', 'Đánh đổi',
  'Câu đào sâu', 'Nối với',
];
const MIN_CHARS = 2500;

/** Tách một file thành danh sách câu, bỏ qua heading nằm trong khối code. */
const parseFile = (text) => {
  const lines = text.split('\n');
  const out = [];
  let cur = null;
  let fence = false;
  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) { fence = !fence; cur?.body.push(line); continue; }
    if (!fence) {
      const q = /^##\s+(CDH-\d{2}-\d{2}):\s*(.+)$/.exec(line);
      if (q) { cur = { id: q[1], title: q[2].trim(), body: [], heads: [] }; out.push(cur); continue; }
      const h = /^###\s+(.+)$/.exec(line);
      if (h && cur) cur.heads.push(h[1].trim());
    }
    cur?.body.push(line);
  }
  return out;
};

const errors = [];
const all = new Map();

const files = readdirSync(DIR).filter(f => /^\d{2}-.+\.md$/.test(f)).sort();
if (!files.length) errors.push(`${DIR}: không có file nào dạng NN-ten.md`);

for (const file of files) {
  const fileNum = basename(file).slice(0, 2);
  for (const q of parseFile(readFileSync(join(DIR, file), 'utf8'))) {
    const where = `${file} ${q.id}`;
    if (all.has(q.id)) errors.push(`${where}: định danh trùng với ${all.get(q.id).file}`);
    else all.set(q.id, { ...q, file });

    if (q.id.slice(4, 6) !== fileNum) errors.push(`${where}: số file trong định danh không khớp tên file`);

    // đủ 9 mục, đúng thứ tự
    const missing = SECTIONS.filter(s => !q.heads.includes(s));
    if (missing.length) errors.push(`${where}: thiếu mục — ${missing.join(', ')}`);
    else {
      const order = SECTIONS.map(s => q.heads.indexOf(s));
      if (order.some((v, i) => i > 0 && v < order[i - 1])) errors.push(`${where}: 9 mục không đúng thứ tự`);
    }

    const chars = q.body.join('\n').length;
    if (chars < MIN_CHARS) errors.push(`${where}: chỉ ${chars.toLocaleString()} ký tự, tối thiểu ${MIN_CHARS.toLocaleString()}`);

    // mục Câu đào sâu phải có ít nhất 2 gạch đầu dòng
    const text = q.body.join('\n');
    const deep = /###\s+Câu đào sâu\s*\n([\s\S]*?)(?=\n###\s|\n##\s|$)/.exec(text);
    const bullets = deep ? (deep[1].match(/^\s*[-*]\s+\S/gm) ?? []).length : 0;
    if (bullets < 2) errors.push(`${where}: mục "Câu đào sâu" chỉ có ${bullets} ý, cần ít nhất 2`);
  }
}

// link trong mục "Nối với" phải trỏ tới định danh có thật
for (const [id, q] of all) {
  const text = q.body.join('\n');
  const sec = /###\s+Nối với\s*\n([\s\S]*?)(?=\n###\s|\n##\s|$)/.exec(text);
  if (!sec) continue;
  for (const m of sec[1].matchAll(/CDH-\d{2}-\d{2}/g)) {
    if (!all.has(m[0])) errors.push(`${q.file} ${id}: "Nối với" trỏ tới ${m[0]} không tồn tại`);
  }
}

console.log(`${files.length} file · ${all.size} câu`);
if (errors.length) {
  console.log(`\n${errors.length} lỗi:`);
  for (const e of errors) console.log(`  ${e}`);
  process.exit(1);
}
console.log('Tất cả đạt yêu cầu.');
```

- [ ] **Step 3: Chạy trên fixture hỏng để chắc script bắt được lỗi**

Run: `CDH_DIR=/tmp/cdh-test node tools/check-che-do-hong.mjs`

Expected: thoát mã 1, in ra 4 lỗi — thiếu mục, dưới 2.500 ký tự, "Câu đào sâu" có 0 ý, và `CDH-01-99` không tồn tại.

- [ ] **Step 4: Tạo khung thư mục thật**

`che-do-hong/README.md`:

```markdown
# Câu hỏi chế độ hỏng

Bộ câu hỏi tổ chức theo **chế độ hỏng trong production**, không theo chủ đề. Mỗi câu bắt đầu từ
một triệu chứng có số liệu cụ thể rồi truy ngược về cơ chế.

Khác với phần trắc nghiệm, những câu này không học thuộc được: muốn trả lời phải có mô hình
nhân quả đúng.

## Các mảng

| File | Mảng | Số câu |
|---|---|---|
| [01-react-render.md](./01-react-render.md) | React render và cập nhật | 12 |

Sáu mảng còn lại — bộ nhớ, mạng và bất đồng bộ, tải trang và bundle, pipeline dựng hình,
realtime và nhiều tab, build và deploy — sẽ thêm theo từng đợt.

## Khuôn một câu

Đúng 9 mục, đúng thứ tự: Tình huống · Câu hỏi · Thực sự đang xảy ra gì · Cách chứng minh ·
Cách sửa · Vì sao cách sửa hiển nhiên lại sai · Đánh đổi · Câu đào sâu · Nối với

Mục **"Vì sao cách sửa hiển nhiên lại sai"** là phần quan trọng nhất — nó chặn câu trả lời
học thuộc và là chỗ người phỏng vấn đào sâu.

## Kiểm tra

```bash
node tools/check-che-do-hong.mjs
```

Soi đủ 9 mục và đúng thứ tự, định danh không trùng, độ dài tối thiểu 2.500 ký tự, mục
"Câu đào sâu" có ít nhất 2 ý, và mọi link trong "Nối với" trỏ tới định danh có thật.
```

`che-do-hong/01-react-render.md`:

```markdown
# Mảng 1 — React render và cập nhật

Mười hai chế độ hỏng quanh việc React quyết định render lại cái gì và khi nào.

---
```

- [ ] **Step 5: Chạy trên thư mục thật**

Run: `node tools/check-che-do-hong.mjs`
Expected: in `1 file · 0 câu` rồi `Tất cả đạt yêu cầu.`, thoát mã 0.

- [ ] **Step 6: Commit**

```bash
git add tools/check-che-do-hong.mjs che-do-hong/
git commit -m "khung thư mục và script kiểm tra cho bộ câu hỏi chế độ hỏng"
```

---

## Task 2: Bốn câu đầu (CDH-01-01 đến 01-04)

**Files:**
- Modify: `che-do-hong/01-react-render.md`

**Interfaces:**
- Consumes: khuôn 9 mục và script kiểm tra từ Task 1

> Mỗi bước dưới đây mô tả **điều câu trả lời bắt buộc phải dẫn tới** — đó là tiêu chí nghiệm thu
> của câu đó, không phải gợi ý. Nội dung 4.000–6.000 ký tự là phần phải viết ra, và phải thoả cả
> bảy tiêu chí ở mục "Thế nào là xong" trong spec.
- Produces: `CDH-01-01`, `CDH-01-02`, `CDH-01-03`, `CDH-01-04` — các task sau trích dẫn được qua mục "Nối với"

- [ ] **Step 1: Viết CDH-01-01 — Context value tạo object mới mỗi render**

Nội dung bắt buộc phải dẫn tới: `value={{ user, setUser }}` tạo tham chiếu mới mỗi lần
`Provider` render, nên `Object.is` so sánh sai và mọi consumer render lại kể cả khi `user`
không đổi. Phần chứng minh: React DevTools Profiler, bật "Record why each component rendered",
thấy lý do "Context changed" ở consumer trong khi dữ liệu y hệt. Phần cách sửa: `useMemo` cho
value, hoặc tách thành hai context cho giá trị và cho hàm cập nhật. Phần bẫy: bọc `useMemo`
nhưng deps vẫn chứa hàm tạo inline thì không giải quyết được gì; và tách context làm code dài
ra, chỉ đáng khi số consumer lớn.

- [ ] **Step 2: Viết CDH-01-02 — index làm key**

Phải dẫn tới: React khớp phần tử theo key, index thay đổi khi xoá nên instance cũ bị dùng lại
cho dữ liệu mới, state nội bộ (giá trị input chưa controlled, trạng thái mở) đi theo vị trí chứ
không theo dữ liệu. Chứng minh: gán `key={item.id}` rồi so sánh, hoặc dùng Components panel xem
state của từng instance trước và sau khi xoá. Bẫy: đổi sang `key={crypto.randomUUID()}` làm mọi
dòng unmount và mất hết state mỗi lần render — tệ hơn ban đầu.

- [ ] **Step 3: Viết CDH-01-03 — effect thiếu cleanup, request chồng chất**

Phải dẫn tới: mỗi ký tự gõ vào làm deps đổi, effect chạy lại nhưng request cũ không bị huỷ nên
response về không theo thứ tự, và kết quả của ký tự thứ 3 có thể ghi đè kết quả của ký tự thứ 8.
Chứng minh: tab Network lọc theo Fetch/XHR, so số request với số ký tự; thêm log thứ tự phản hồi.
Cách sửa: `AbortController` trong cleanup. Bẫy: chỉ thêm debounce mà không huỷ thì giảm số request
nhưng **không** sửa được việc response về sai thứ tự — hai vấn đề khác nhau, đây là chỗ hay nhầm.

- [ ] **Step 4: Viết CDH-01-04 — StrictMode và effect không idempotent**

Phải dẫn tới: React 18 StrictMode chạy effect, dọn dẹp, rồi chạy lại ở môi trường phát triển để
lộ effect thiếu cleanup. Bộ đếm tăng gấp đôi là triệu chứng đúng của một effect có tác dụng phụ
không idempotent. Chứng minh: tắt StrictMode thấy hết, nhưng đó là che triệu chứng. Cách sửa:
làm effect idempotent hoặc chuyển tác dụng phụ ra khỏi effect. Bẫy: tắt StrictMode là mất đúng
công cụ phát hiện loại lỗi này, và cùng bug đó sẽ nổ ở production khi React thật sự chạy lại
effect trong chế độ đồng thời.

- [ ] **Step 5: Chạy script kiểm tra**

Run: `node tools/check-che-do-hong.mjs`
Expected: `1 file · 4 câu` và `Tất cả đạt yêu cầu.`

Nếu báo dưới 2.500 ký tự thì câu đó viết hụt — bổ sung phần truy vết cơ chế, đừng nhồi chữ.

- [ ] **Step 6: Commit**

```bash
git add che-do-hong/01-react-render.md
git commit -m "chế độ hỏng React render: 4 câu đầu về context, key, cleanup và StrictMode"
```

---

## Task 3: Bốn câu tiếp (CDH-01-05 đến 01-08)

**Files:**
- Modify: `che-do-hong/01-react-render.md`

**Interfaces:**
- Consumes: `CDH-01-01` đến `CDH-01-04` để trích dẫn trong "Nối với"
- Produces: `CDH-01-05` đến `CDH-01-08`

- [ ] **Step 1: Viết CDH-01-05 — vòng lặp render**

Phải dẫn tới: `setState` trong `useEffect` mà state đó nằm trong deps, hoặc deps là object tạo
mới, tạo vòng lặp render vô tận. Console không báo lỗi vì không có exception; React có cảnh báo
"Maximum update depth exceeded" nhưng chỉ khi vòng lặp đồng bộ. Chứng minh: Performance panel
thấy chuỗi commit liên tiếp không dứt; Profiler thấy cùng một component commit hàng trăm lần.
Bẫy: thêm điều kiện `if (x !== y)` mà so sánh object bằng `!==` thì luôn đúng, vòng lặp vẫn chạy.

- [ ] **Step 2: Viết CDH-01-06 — useMemo với deps là object mới**

Phải dẫn tới: `useMemo(fn, [options])` mà `options` là object literal viết inline thì deps đổi
mỗi render, cache không bao giờ trúng, và giờ còn tốn thêm chi phí so sánh. Chứng minh: thêm
`console.count` trong hàm tính, thấy nó chạy mỗi render. Bẫy: bọc `options` bằng `useMemo` nữa
là đẩy vấn đề lên một tầng — nếu deps của nó cũng là giá trị tạo mới thì y nguyên.

- [ ] **Step 3: Viết CDH-01-07 — memo bị vô hiệu bởi arrow inline**

Phải dẫn tới: `<Row onSelect={() => select(id)} />` tạo hàm mới mỗi render, `memo` so sánh nông
thấy props khác nên render lại toàn bộ. Chứng minh: Profiler bật "why did this render" thấy lý
do là props thay đổi, và chỉ ra đúng tên prop. Cách sửa: `useCallback` nhận id qua data attribute
hoặc qua currying ổn định. Bẫy: bọc `useCallback` cho từng dòng trong vòng lặp là vi phạm quy tắc
hook; và nếu vẫn truyền `id` vào deps thì mỗi dòng vẫn có hàm riêng.

- [ ] **Step 4: Viết CDH-01-08 — stale closure trong handler**

Phải dẫn tới: `useCallback(fn, [])` đóng gói giá trị state tại lần render đầu; handler gọi sau
đó vẫn thấy giá trị cũ. Chứng minh: log giá trị trong handler so với giá trị đang hiển thị, thấy
lệch. Cách sửa: thêm deps đúng, hoặc dùng dạng hàm của setter, hoặc `useRef` giữ giá trị mới nhất.
Bẫy: thêm mọi thứ vào deps làm `useCallback` mất tác dụng ổn định — lúc đó nên hỏi ngược là có
thật sự cần `useCallback` không.

- [ ] **Step 5: Chạy script kiểm tra**

Run: `node tools/check-che-do-hong.mjs`
Expected: `1 file · 8 câu` và `Tất cả đạt yêu cầu.`

- [ ] **Step 6: Commit**

```bash
git add che-do-hong/01-react-render.md
git commit -m "chế độ hỏng React render: vòng lặp render, memo hỏng và stale closure"
```

---

## Task 4: Bốn câu cuối (CDH-01-09 đến 01-12)

**Files:**
- Modify: `che-do-hong/01-react-render.md`
- Modify: `che-do-hong/README.md` (cập nhật số câu trong bảng nếu khác 12)

**Interfaces:**
- Consumes: `CDH-01-01` đến `CDH-01-08`
- Produces: `CDH-01-09` đến `CDH-01-12`, hoàn tất mảng 1

- [ ] **Step 1: Viết CDH-01-09 — state nâng quá cao**

Phải dẫn tới: ô lọc đặt state ở component cha của cả trang, nên mỗi ký tự làm toàn bộ cây render.
Chứng minh: Profiler ghi một lần gõ, xem flamegraph thấy số component commit. Cách sửa: hạ state
xuống gần nơi dùng, hoặc tách phần lọc thành component riêng nhận children. Bẫy: bọc `memo` cho
các con thay vì hạ state — chữa triệu chứng, và mọi con có props không ổn định vẫn render.

- [ ] **Step 2: Viết CDH-01-10 — automatic batching của React 18**

Phải dẫn tới: trước 18, `setState` trong `setTimeout` không được gom nên render ngay; từ 18 thì
gom cả trong code bất đồng bộ, nên code cũ đọc DOM ngay sau `setState` thấy giá trị cũ. Chứng
minh: so sánh hành vi giữa hai phiên bản, hoặc đếm số lần render. Cách sửa: `flushSync` cho đúng
chỗ cần, hoặc chuyển phép đọc vào `useEffect`. Bẫy: rải `flushSync` khắp nơi tiêu đúng phần hiệu
năng mà batching vừa tiết kiệm, và React cảnh báo khi gọi trong lúc đang render.

- [ ] **Step 3: Viết CDH-01-11 — useLayoutEffect trong SSR**

Phải dẫn tới: `useLayoutEffect` không chạy ở server nên React cảnh báo, và vì nó chỉ chạy sau
hydrate nên có một khung hình hiển thị trạng thái chưa chỉnh. Chứng minh: quay video chậm hoặc
dùng Performance panel xem thời điểm paint so với thời điểm hydrate. Cách sửa: chuyển sang
`useEffect` nếu không cần chặn paint, hoặc render có điều kiện sau khi đã gắn. Bẫy: dùng
`typeof window !== 'undefined'` để chọn hook làm số lượng hook khác nhau giữa server và client,
vi phạm quy tắc hook.

- [ ] **Step 4: Viết CDH-01-12 — Suspense boundary quá rộng**

Phải dẫn tới: một `Suspense` bọc cả trang, nên khi một widget refetch thì toàn bộ rơi vào
fallback. Chứng minh: xem cây component và vị trí boundary; thử thu hẹp rồi so sánh. Cách sửa:
đặt boundary sát từng vùng, hoặc dùng `useTransition` để giữ nội dung cũ trong lúc tải. Bẫy: chia
quá nhỏ thành hàng chục khung xương nhấp nháy rời rạc, khó chịu hơn một khung chờ duy nhất.

- [ ] **Step 5: Chạy script kiểm tra và xác nhận đủ 12 câu**

Run: `node tools/check-che-do-hong.mjs`
Expected: `1 file · 12 câu` và `Tất cả đạt yêu cầu.`

- [ ] **Step 6: Commit**

```bash
git add che-do-hong/
git commit -m "chế độ hỏng React render: hoàn tất 12 câu của mảng 1"
```

---

## Task 5: Đưa vào build và trang ôn luyện

**Files:**
- Modify: `build.mjs`
- Modify: `tools/app.template.html`
- Modify: `tools/e2e.mjs`

**Interfaces:**
- Consumes: 12 câu trong `che-do-hong/01-react-render.md`
- Produces: biến `CDH` trong trang — mảng object `{ id, title, file, fileTitle, sections: { [tên mục]: markdown } }`; chế độ `cdh` trong `MODES`

- [ ] **Step 1: Thêm quét thư mục vào build.mjs**

Chèn trước khối `/* --- nhúng vào template --- */`:

```javascript
/* --- câu hỏi chế độ hỏng --- */
const CDH_SECTIONS = [
  'Tình huống', 'Câu hỏi', 'Thực sự đang xảy ra gì', 'Cách chứng minh',
  'Cách sửa', 'Vì sao cách sửa hiển nhiên lại sai', 'Đánh đổi',
  'Câu đào sâu', 'Nối với',
];

const parseCdhFile = (text, file) => {
  const out = [];
  let fileTitle = '';
  let cur = null;
  let head = null;
  let fence = false;
  for (const line of text.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) { fence = !fence; if (cur && head) cur.sections[head].push(line); continue; }
    if (!fence) {
      const t = /^#\s+(.+)$/.exec(line);
      if (t && !cur) { fileTitle = t[1].trim(); continue; }
      const q = /^##\s+(CDH-\d{2}-\d{2}):\s*(.+)$/.exec(line);
      if (q) {
        cur = { id: q[1], title: q[2].trim(), file, fileTitle, sections: {} };
        for (const s of CDH_SECTIONS) cur.sections[s] = [];
        head = null;
        out.push(cur);
        continue;
      }
      const h = /^###\s+(.+)$/.exec(line);
      if (h && cur) { head = CDH_SECTIONS.includes(h[1].trim()) ? h[1].trim() : null; continue; }
    }
    if (cur && head) cur.sections[head].push(line);
  }
  return out.map(q => ({
    ...q,
    sections: Object.fromEntries(Object.entries(q.sections).map(([k, v]) => [k, v.join('\n').trim()])),
  }));
};

const cdhDir = join(ROOT, 'che-do-hong');
const cdh = existsSync(cdhDir)
  ? readdirSync(cdhDir)
      .filter(f => /^\d{2}-.+\.md$/.test(f))
      .sort()
      .flatMap(f => parseCdhFile(read('che-do-hong', f), f))
  : [];
```

Thêm `readdirSync, existsSync` vào dòng import từ `node:fs`.

- [ ] **Step 2: Thêm chỗ cắm dữ liệu**

Trong object `slots`, thêm:

```javascript
  __CDH_DATA__: jsonSafe(JSON.stringify(cdh)),
```

Trong phần báo cáo cuối file, thêm:

```javascript
console.log(`  chế độ hỏng    ${cdh.length} câu`);
```

- [ ] **Step 3: Chạy build để xác nhận phân tách đúng**

Run: `node build.mjs`
Expected: dòng `chế độ hỏng    12 câu`. Nếu ra 0 thì regex heading sai; nếu ra số khác 12 thì file có câu viết sai khuôn.

Build sẽ **lỗi** ở bước này vì template chưa có `__CDH_DATA__` — đó là đúng, sang bước sau.

- [ ] **Step 4: Thêm state và dọn state khi đổi chế độ**

Trong object `state`, thêm sau `docsec: null,`:

```javascript
  cdhId: null,
```

Trong hàm `go`, thêm sau dòng dọn `state.quiz`:

```javascript
  if (patch.mode && patch.mode !== 'cdh') state.cdhId = null;
```

- [ ] **Step 5: Tách ô ghi chú thành hàm dùng chung**

Trong `viewQuestion`, phần dựng `notebox` hiện đang viết thẳng. Cắt nó ra thành hàm đặt ngay
trước `viewQuestion`, rồi gọi lại ở cả hai chỗ:

```javascript
const noteBox = (id) => {
  const box = el('div', 'notebox', '<div class="nhead"><span class="t">Ghi chú của anh</span><span class="st"></span></div>');
  const status = box.querySelector('.st');
  const area = el('textarea');
  area.placeholder = 'Viết lại bằng lời của mình, ghi chỗ chưa hiểu, hoặc dán ví dụ từ dự án thật…';
  area.value = state.notes[id] ?? '';
  area.setAttribute('aria-label', `Ghi chú cho ${id}`);
  let timer = null;
  area.oninput = () => {
    state.notes[id] = area.value;
    saveNotes();
    status.textContent = 'đang lưu…';
    clearTimeout(timer);
    timer = setTimeout(() => {
      status.textContent = 'đã lưu';
      setTimeout(() => { status.textContent = ''; }, 1600);
    }, 700);
  };
  box.appendChild(area);
  return box;
};
```

Trong `viewQuestion`, thay toàn bộ khối dựng notebox cũ bằng `w.appendChild(noteBox(q.id));`.

- [ ] **Step 6: Thêm chế độ vào template**

Trong `tools/app.template.html`, sau dòng `const QUIZ_TOPICS = ...` thêm:

```javascript
const CDH = __CDH_DATA__;
const CDH_BY_ID = new Map(CDH.map(q => [q.id, q]));
const CDH_FILES = [...new Map(CDH.map(q => [q.file, q.fileTitle])).entries()];
const CDH_ORDER = [
  'Tình huống', 'Câu hỏi', 'Thực sự đang xảy ra gì', 'Cách chứng minh',
  'Cách sửa', 'Vì sao cách sửa hiển nhiên lại sai', 'Đánh đổi',
  'Câu đào sâu', 'Nối với',
];
```

Trong mảng `MODES`, chèn sau mục `giaoan`:

```javascript
  { id: 'cdh', label: 'Chế độ hỏng' },
```

Trong `modeTick`, thêm nhánh trước `return ''`:

```javascript
  if (id === 'cdh') return `${CDH.filter(q => statOf(q.id) !== 'none').length}/${CDH.length}`;
```

Trong object `views` của hàm `draw`, thêm:

```javascript
    cdh: viewCdh,
```

Thêm hai hàm màn hình — chúng dùng `noteBox` và `state.cdhId` vừa tạo ở hai bước trên — đặt ngay trước khối `/* ===================== sao lưu ===================== */`:

```javascript
/* ===================== chế độ hỏng ===================== */
const viewCdh = () => {
  if (state.cdhId) return viewCdhOne(CDH_BY_ID.get(state.cdhId));
  const w = el('div');
  w.appendChild(el('div', 'qhead',
    `<h2>Chế độ hỏng</h2><span class="meta">${CDH.length} câu · ${CDH_FILES.length} mảng</span>`));
  w.appendChild(el('div', 'hero', `<p>Mỗi câu bắt đầu từ một triệu chứng có số liệu cụ thể rồi
    truy ngược về cơ chế. Khác với trắc nghiệm, những câu này không học thuộc được.</p>`));
  for (const [file, fileTitle] of CDH_FILES) {
    w.appendChild(el('h3', 'blk', esc(fileTitle)));
    const list = el('div', 'qlist');
    for (const q of CDH.filter(x => x.file === file)) {
      const btn = el('button', 'qrow', `
        <span class="id">${esc(q.id.replace('CDH-', ''))}</span>
        <span class="ttl">${esc(q.title)}</span>
        <span class="tags">${hasNote(q.id) ? '<span class="hasnote">ghi chú</span>' : ''}<span class="pip" data-st="${statOf(q.id)}"></span></span>`);
      btn.dataset.st = statOf(q.id);
      btn.onclick = () => go({ mode: 'cdh', cdhId: q.id });
      list.appendChild(btn);
    }
    w.appendChild(list);
  }
  return w;
};

const viewCdhOne = (q) => {
  const w = el('div', 'reading');
  if (!q) { w.appendChild(el('div', 'empty', 'Không tìm thấy câu này.')); return w; }

  const crumb = el('div', 'crumb');
  const back = el('button', '', '← Danh sách');
  back.onclick = () => go({ mode: 'cdh', cdhId: null });
  crumb.append(back, '·', esc(q.fileTitle));
  w.appendChild(crumb);

  w.appendChild(el('div', 'qid', esc(q.id)));
  w.appendChild(el('h2', 'qtitle', esc(q.title)));

  const rate = el('div', 'rate', '<span class="lbl">Tự chấm</span>');
  for (const [value, label] of RATINGS) {
    const btn = el('button', 'rbtn', label);
    btn.dataset.v = value;
    btn.setAttribute('aria-pressed', statOf(q.id) === value);
    btn.onclick = () => {
      if (state.status[q.id] === value) delete state.status[q.id];
      else state.status[q.id] = value;
      saveProgress();
      draw();
    };
    rate.appendChild(btn);
  }
  w.appendChild(rate);

  for (const name of CDH_ORDER) {
    const body = q.sections[name];
    if (!body) continue;
    w.appendChild(el('h3', 'blk', esc(name)));
    const box = render(body);
    if (name === 'Nối với') {
      for (const a of box.querySelectorAll('a')) {
        const id = (a.getAttribute('href') ?? '').replace('#', '').toUpperCase();
        if (!CDH_BY_ID.has(id)) continue;
        a.href = '#';
        a.onclick = (e) => { e.preventDefault(); go({ mode: 'cdh', cdhId: id }); };
      }
    }
    w.appendChild(box);
  }

  w.appendChild(noteBox(q.id));
  return w;
};
```

- [ ] **Step 7: Build và kiểm tra an toàn thẻ script**

Run: `node build.mjs && node tools/check-script-safety.mjs`
Expected: `chế độ hỏng    12 câu`, và `0 chuỗi nguy hiểm`.

- [ ] **Step 8: Thêm kiểm tra e2e**

Trong `tools/e2e.mjs`, thêm sau khối kiểm tra mục Ghi chú:

```javascript
byText('.mode', 'Chế độ hỏng')?.click();
check('Chế độ hỏng: liệt kê 12 câu', $$('.qrow').length === 12);
$$('.qrow')[0]?.click();
check('mở được một câu chế độ hỏng', Boolean($('.qtitle')));
check('có đủ 9 mục', $$('.blk').length >= 9);
check('có ô ghi chú', Boolean($('.notebox textarea')));
```

- [ ] **Step 9: Chạy toàn bộ kiểm thử**

```bash
node tools/check-che-do-hong.mjs
node tools/check-script-safety.mjs
node tools/e2e.mjs
```

Expected: cả ba thoát mã 0; e2e báo 35/35 đạt (31 cũ cộng 4 mới).

- [ ] **Step 10: Commit**

```bash
git add build.mjs tools/app.template.html tools/e2e.mjs docs/index.html
git commit -m "đưa bộ câu hỏi chế độ hỏng vào trang ôn luyện"
```

---

## Task 6: Liên kết từ README và PLAYBOOK

**Files:**
- Modify: `README.md`
- Modify: `PLAYBOOK.md`

**Interfaces:**
- Consumes: `che-do-hong/README.md` và 12 câu đã xong
- Produces: không có

- [ ] **Step 1: Thêm vào bảng "Danh Sách Files" của README**

Chèn sau dòng `| 09 | ... 09-algorithms.md ... |`:

```markdown
| 10 | [che-do-hong/](./che-do-hong/) | Câu hỏi theo chế độ hỏng trong production | 12 |
```

- [ ] **Step 2: Thêm một mục vào PLAYBOOK**

Chèn ngay trước mục `## 5. Cây Follow-up`:

```markdown
## 4b. Luyện theo chế độ hỏng

18 câu dạng "đáng lẽ phải chạy mà lại hỏng" — 14 câu nằm trong giáo án và 12 câu trong
[che-do-hong/](./che-do-hong/). Đây là dạng câu người phỏng vấn dùng để chặn câu trả lời học
thuộc, nên luyện riêng.

Cách luyện: đọc phần **Tình huống** rồi dừng lại, tự trả lời trước khi mở phần **Thực sự đang
xảy ra gì**. Nếu không nói được cách chứng minh bằng DevTools thì coi như chưa thuộc, dù đã
đoán đúng nguyên nhân.

---

```

Sửa luôn số ở dòng mục lục PLAYBOOK cho khớp: thêm một hàng `| 4b | Luyện theo chế độ hỏng |
Khi đã nắm lý thuyết, luyện phần đào sâu |` vào bảng Mục Lục.

- [ ] **Step 3: Build lại vì PLAYBOOK được nhúng vào trang**

Run: `node build.mjs && node tools/e2e.mjs`
Expected: e2e vẫn 35/35 đạt.

- [ ] **Step 4: Commit và push**

```bash
git add README.md PLAYBOOK.md docs/index.html
git commit -m "liên kết bộ câu hỏi chế độ hỏng từ README và PLAYBOOK"
git push origin main
```

---

## Sau đợt 1

Đợt 2 là mảng **Bộ nhớ**, 8–10 câu, theo cùng khuôn. Không cần plan mới cho mỗi đợt — plan này
là mẫu, các đợt sau chỉ thay danh sách 12 câu ở đầu và bỏ Task 1 cùng Task 5 vì hạ tầng đã có.
