# Playbook Phỏng Vấn Frontend Senior

Tài liệu này không chứa đáp án. Nó nói cho anh biết **ôn gì, theo thứ tự nào, trả lời theo khung nào, và trượt ở đâu**. Đáp án nằm trong [ly-thuyet/01-giao-an-4-ngay-phong-van-frontend.md](./ly-thuyet/01-giao-an-4-ngay-phong-van-frontend.md) (133 câu) và 8 file trắc nghiệm.

Mọi số câu trong playbook này trỏ thẳng tới câu tương ứng trong giáo án.

---

## Mục Lục

| # | Mục | Dùng khi nào |
|---|-----|--------------|
| 1 | [Lộ trình theo quỹ thời gian](#1-lộ-trình-theo-quỹ-thời-gian) | Ngay khi có lịch phỏng vấn |
| 2 | [Bản đồ chủ đề → câu hỏi](#2-bản-đồ-chủ-đề--câu-hỏi) | Khi ôn, để biết đọc câu nào |
| 3 | [Sáu dạng câu hỏi và khung trả lời](#3-sáu-dạng-câu-hỏi-và-khung-trả-lời) | Khi luyện nói |
| 4 | [Bẫy hay trượt ở vòng Senior](#4-bẫy-hay-trượt-ở-vòng-senior) | Đọc kỹ 1 ngày trước |
| 5 | [Cây follow-up](#5-cây-follow-up) | Khi tự kiểm tra độ sâu |
| 6 | [Số liệu và tên riêng phải thuộc](#6-số-liệu-và-tên-riêng-phải-thuộc) | Liếc 30 phút trước |
| 7 | [Sáu câu chuyện dự án cần chuẩn bị](#7-sáu-câu-chuyện-dự-án-cần-chuẩn-bị) | Viết trước, đừng ứng biến |
| 8 | [Checklist 24 giờ và ngày phỏng vấn](#8-checklist-24-giờ-và-ngày-phỏng-vấn) | Hôm trước và hôm đó |
| 9 | [Câu hỏi nên hỏi ngược](#9-câu-hỏi-nên-hỏi-ngược) | Cuối buổi |
| 10 | [Bản đồ tài liệu trong repo](#10-bản-đồ-tài-liệu-trong-repo) | Khi không biết mở file nào |

---

## 1. Lộ Trình Theo Quỹ Thời Gian

Chọn đúng một cột. Đừng cố làm lộ trình 3 tuần khi chỉ còn 2 ngày — kết quả là phủ rộng mà không nói được câu nào cho ra hồn.

### Còn 2 ngày — cấp tốc

Mục tiêu không phải biết hết, mà là **không gãy ở câu nền**.

| Buổi | Đọc | Số câu |
|---|---|---|
| Ngày 1 sáng | Câu 6 (closure), Câu 7–9 (event loop, microtask, starvation), Câu 14–18 (memory, WeakMap, leak, DevTools) | 9 |
| Ngày 1 chiều | Câu 21–24 (render, reconciliation, key), Câu 31–33 (memo, re-render), Câu 25–28 (chọn loại state) | 11 |
| Ngày 2 sáng | Câu 80, 85, 86, 93 (bottleneck, Web Vitals, LCP), Câu 55–56 (storage, CORS), Câu 73–77 (XSS, token, CSRF, CSP) | 12 |
| Ngày 2 chiều | Mục [4](#4-bẫy-hay-trượt-ở-vòng-senior) và [5](#5-cây-follow-up) của playbook, rồi viết mục [7](#7-sáu-câu-chuyện-dự-án-cần-chuẩn-bị) | — |

**Bỏ qua có chủ đích:** Design System (DS-01→DS-15), System Design chi tiết (Câu 96–105), toàn bộ trắc nghiệm.

### Còn 1 tuần — tiêu chuẩn

| Ngày | Nội dung | Kèm theo |
|---|---|---|
| 1–2 | Phần 1 JavaScript (Câu 1–18) + Phần 2 React (Câu 19–44) | [01-javascript-questions.md](./01-javascript-questions.md), [02-reactjs-questions.md](./02-reactjs-questions.md) |
| 3 | Phần 3 Browser (Câu 45–58) | [07-html-css-advanced.md](./07-html-css-advanced.md) |
| 4 | Phần 6 Performance (Câu 80–95) | [03-performance-optimization.md](./03-performance-optimization.md) |
| 5 | Phần 5 Security (Câu 73–79) + Phần 4 Architecture (Câu 59–71) | — |
| 6 | Phần 7 System Design (Câu 96–105) | [09-algorithms.md](./09-algorithms.md) mục Ưu tiên ôn trước |
| 7 | Phần 8 Engineering (Câu 106–117) | [05-behavioral-experience.md](./05-behavioral-experience.md), mục [4](#4-bẫy-hay-trượt-ở-vòng-senior), [5](#5-cây-follow-up), [7](#7-sáu-câu-chuyện-dự-án-cần-chuẩn-bị) |

Mỗi ngày làm 2 vòng: vòng 1 đọc tiêu đề và tự chấm biết/mơ hồ/chưa biết, vòng 2 trả lời miệng những câu mơ hồ mà không nhìn đáp án.

### Còn 3 tuần — chuyên sâu

| Tuần | Nội dung |
|---|---|
| 1 | Phần 1, 2, 3 (Câu 1–58). Với mỗi câu tự đặt thêm một follow-up và tự trả lời |
| 2 | Phần 4, 4.1, 5, 6 (Câu 59–95, DS-01→DS-15). Làm ~255 câu trắc nghiệm để lấp lỗ hổng nền |
| 3 | Phần 7, 8 (Câu 96–117), live coding với [find-unclosed-tags.js](./find-unclosed-tags.js) và [09-algorithms.md](./09-algorithms.md), viết lại 6 câu chuyện dự án kèm số liệu, mock interview |

---

## 2. Bản Đồ Chủ Đề → Câu Hỏi

Tra ngược: interviewer hỏi chủ đề nào thì mở câu nào.

### JavaScript

| Chủ đề | Câu trong giáo án | Bổ sung |
|---|---|---|
| var/let/const, hoisting, falsy, so sánh | Câu 1–4 | [01-javascript-questions.md](./01-javascript-questions.md) |
| Closure, prototype chain | Câu 5, 6 | — |
| Event loop, microtask, starvation, rendering frame | Câu 7, 8, 9 | — |
| Promise, async/await, race condition, cancel request | Câu 10, 11, 12 | — |
| Debounce, throttle | Câu 13 | [09: Sliding Window](./09-algorithms.md#1-concepts--khái-niệm-nền) |
| GC, WeakMap, shallow/deep copy | Câu 14, 15, 16 | — |
| Memory leak trong SPA và cách debug | Câu 17, 18 | — |

### React

| Chủ đề | Câu trong giáo án | Bổ sung |
|---|---|---|
| Props/state, controlled và uncontrolled | Câu 19, 20 | [02-reactjs-questions.md](./02-reactjs-questions.md) |
| Render, re-render, reconciliation, key | Câu 21, 22 | — |
| React.memo, useMemo, useCallback | Câu 23, 24, 31, 32 | [09: Memoization](./09-algorithms.md#1-concepts--khái-niệm-nền) |
| Chọn Context / Redux / React Query, phân loại state | Câu 25, 26, 27, 28 | — |
| Redux vs Redux Toolkit | Câu 29 | — |
| Batching, functional update, stale closure, deps | Câu 30, 40 | — |
| Global store kéo re-render cả cây | Câu 33 | — |
| startTransition, useDeferredValue | Câu 34, 42 | — |
| Strict Mode, Error Boundary | Câu 35, 36 | — |
| Hooks tổng quan và từng hook | Câu 37, 38, 39, 41, 43 | — |
| React 19: use, useActionState, useOptimistic | Câu 44 | — |

### Browser, network, storage

| Chủ đề | Câu trong giáo án | Bổ sung |
|---|---|---|
| Thứ tự render CSR, Critical Rendering Path, SSR | Câu 45, 45.1, 46 | — |
| SSR / SSG / ISR / CSR | Câu 47 | — |
| Semantic HTML, accessibility, modal, keyboard, ARIA | Câu 48, 50, 51, 52 | [07-html-css-advanced.md](./07-html-css-advanced.md) |
| CSS cascade, specificity, inheritance | Câu 49 | [07-html-css-advanced.md](./07-html-css-advanced.md) |
| Layout thrashing | Câu 53 | — |
| Web Worker | Câu 54 | — |
| LocalStorage, SessionStorage, Cookies, HttpOnly | Câu 55 | — |
| CORS, preflight, credentials | Câu 56 | — |
| CDN, Cache-Control, ETag, 304, same-origin vs same-site | Câu 57, 58 | [09: DEFLATE, Brotli](./09-algorithms.md#10-compression--nén-dữ-liệu) |

### Architecture

| Chủ đề | Câu trong giáo án | Bổ sung |
|---|---|---|
| State architecture cho app nhiều team | Câu 59, 60 | [04-problem-solving-system-design.md](./04-problem-solving-system-design.md) |
| React Query: staleTime, gcTime, query key, optimistic update | Câu 61, 62 | [09: LRU Cache](./09-algorithms.md#2-data-structures--cấu-trúc-dữ-liệu) |
| RSC, Server vs Client Component, `"use client"` | Câu 63, 64 | — |
| Hydration, mismatch, Streaming SSR, Suspense | Câu 65, 66 | — |
| Server Action, đặt authentication ở đâu | Câu 67 | — |
| Migrate app cũ, Next.js vs CRA, auth Next.js | Câu 68, 69, 70 | — |
| Design system và component library | Câu 71, 72, DS-01 → DS-15 | — |

### Security

| Chủ đề | Câu trong giáo án |
|---|---|
| XSS trong React, ba dạng XSS | Câu 73, 74 |
| Lưu token ở đâu | Câu 75 |
| CSRF, SameSite, CSRF token | Câu 76 |
| CSP, clickjacking, refresh token rotation, logout | Câu 77 |
| 20 API cùng trả 401, gom về một refresh request | Câu 78 |
| Refresh token cũng hết hạn giữa chừng | Câu 79 |

### Performance

| Chủ đề | Câu trong giáo án | Bổ sung |
|---|---|---|
| Xác định bottleneck, React DevTools Profiler | Câu 80, 81, 91, 92 | [03-performance-optimization.md](./03-performance-optimization.md) |
| Search input lag, table lớn, giới hạn của virtualization | Câu 82, 83, 84 | [09: Hash Table, Sliding Window](./09-algorithms.md) |
| LCP, INP, CLS và cách debug | Câu 85, 86, 93 | — |
| Bundle tăng, code splitting, image | Câu 87, 88, 89 | [09: Compression](./09-algorithms.md#10-compression--nén-dữ-liệu) |
| Memory leak sau vài giờ dùng | Câu 90, 95 | — |
| React.memo dùng sai làm chậm hơn | Câu 94 | — |

### System Design

| Chủ đề | Câu trong giáo án | Bổ sung |
|---|---|---|
| Autocomplete / search box | Câu 96 | [09: Trie, Sliding Window](./09-algorithms.md) |
| Data table lớn có sort, filter, pagination | Câu 97 | [09: Sorting, Binary Search](./09-algorithms.md#3-sorting--sắp-xếp) |
| Dashboard realtime, chat streaming, WebSocket/SSE | Câu 98, 99, 100, 101, 102 | [09: Queue](./09-algorithms.md#2-data-structures--cấu-trúc-dữ-liệu) |
| Infinite scroll, form builder, collaborative editor | Câu 103, 104, 105 | [09: LCS](./09-algorithms.md#6-dynamic-programming--quy-hoạch-động) |

### Engineering và behavioral

| Chủ đề | Câu trong giáo án | Bổ sung |
|---|---|---|
| Test checkout flow, phân tầng test | Câu 106, 107 | [08-testing-best-practices.md](./08-testing-best-practices.md) |
| Chuyện perf có số liệu, refactor legacy | Câu 108, 109 | [05-behavioral-experience.md](./05-behavioral-experience.md) |
| Bất đồng với PM/backend/designer, review PR, mentor | Câu 110, 111, 112 | [05-behavioral-experience.md](./05-behavioral-experience.md) |
| Production incident | Câu 113 | — |
| Double submit, hai tab cùng sửa, deploy đổi contract, chunk 404 | Câu 114, 115, 116, 117 | — |

---

## 3. Sáu Dạng Câu Hỏi Và Khung Trả Lời

Giáo án có một template chung ở đầu file. Mục này chia nhỏ theo dạng, vì mỗi dạng ăn điểm ở chỗ khác nhau.

### Dạng 1 — "X là gì?"

Bốn nhịp, khoảng 60–90 giây:

1. Một câu định nghĩa, không vòng vo
2. Cơ chế bên dưới: nó hoạt động thế nào
3. Khi nào dùng và khi nào không
4. Một bẫy hoặc trade-off

Ví dụ với closure (Câu 6): "Closure là hàm nhớ được scope nơi nó được tạo ra, kể cả khi scope đó đã thoát." → cơ chế giữ tham chiếu tới biến, không phải copy giá trị → dùng cho private state, factory, hook → bẫy là giữ tham chiếu tới DOM node hoặc object lớn thì chặn GC, thành leak.

Nhịp 4 là chỗ phân biệt Senior với người học thuộc. Không bao giờ bỏ nhịp này.

### Dạng 2 — "A khác B thế nào?"

Đừng liệt kê song song hai danh sách. Chọn **trục so sánh** trước, rồi đi theo trục:

1. Nêu trục: "Hai cái này khác nhau ở ba trục: nơi lưu state, thời điểm chạy, và ai sở hữu dữ liệu"
2. Đi từng trục, mỗi trục nói cả A và B
3. Kết: "nên tôi chọn A khi ..., chọn B khi ..."

Áp dụng cho Câu 27 (bốn loại state), Câu 39 (ba loại effect), Câu 47 (SSR/SSG/ISR/CSR), Câu 58 (same-origin vs same-site).

### Dạng 3 — "Sao nó chậm / debug thế nào?"

Interviewer đang kiểm tra anh có phương pháp hay đoán mò. Luôn **đo trước, sửa sau**:

1. Đo cái gì, bằng công cụ nào, con số nào
2. Thu hẹp: network, render, layout hay bundle (Câu 80)
3. Giả thuyết cụ thể, kèm cách xác nhận
4. Sửa
5. Đo lại và so với con số ban đầu

Câu trả lời nhảy thẳng vào "tôi sẽ thêm useMemo" là trượt. Áp dụng cho Câu 80–95.

### Dạng 4 — "Thiết kế X"

1. Hỏi lại để chốt phạm vi: bao nhiêu user, bao nhiêu dữ liệu, realtime tới mức nào, mobile hay desktop
2. Nêu ràng buộc tự đặt ra
3. Vẽ luồng dữ liệu, không vẽ sơ đồ component
4. Đưa **hai** phương án, không phải một
5. Chọn một và nói rõ đánh đổi gì
6. Nhắc bốn thứ hay bị quên: cache, lỗi, accessibility, cách đo

Bước 6 chính là Câu 72. Áp dụng cho Câu 96–105.

### Dạng 5 — Live coding

1. Nói cách làm trước khi gõ phím
2. Viết bản chạy được trước, đừng tối ưu sớm
3. Nói độ phức tạp của bản đang viết
4. Nêu edge case trước khi bị hỏi: rỗng, một phần tử, trùng lặp, input rất lớn
5. Chỉ tối ưu khi đã chạy đúng, và nói rõ tối ưu cái gì

Chuẩn bị bằng [09-algorithms.md](./09-algorithms.md) mục Ưu tiên ôn trước và [find-unclosed-tags.js](./find-unclosed-tags.js).

### Dạng 6 — Behavioral

STAR có số liệu. Không có số thì câu chuyện thành kể lể:

1. **S** — bối cảnh, một câu
2. **T** — anh chịu trách nhiệm gì
3. **A** — anh làm gì, cụ thể tới mức nêu được công cụ và quyết định
4. **R** — kết quả kèm số: bao nhiêu phần trăm, từ bao nhiêu xuống bao nhiêu, trong bao lâu
5. Một câu rút ra: lần sau làm khác chỗ nào

Xem mục [7](#7-sáu-câu-chuyện-dự-án-cần-chuẩn-bị) và Câu 108–113.

---

## 4. Bẫy Hay Trượt Ở Vòng Senior

Mỗi dòng là một câu trả lời nghe có vẻ đúng nhưng để lộ là chưa làm thật.

| # | Bẫy | Thiếu gì | Đọc lại |
|---|---|---|---|
| 1 | "Dùng `useMemo` cho nhanh hơn" | Không nói được khi nào nó vô dụng hoặc phản tác dụng | Câu 31, 94 |
| 2 | "State chung thì đẩy hết vào Redux" | Không tách server state khỏi client state | Câu 27, 60 |
| 3 | "Context thay được Redux" | Quên Context làm re-render toàn bộ cây consumer | Câu 26, 33 |
| 4 | "JavaScript đơn luồng nên có event loop" rồi dừng | Không nối sang microtask, starvation, và frame rendering | Câu 7, 8, 9 |
| 5 | Dùng index làm `key` | Không nêu điều kiện nào thì index an toàn, nào thì hỏng | Câu 22 |
| 6 | "React tự escape nên không lo XSS" | Quên `dangerouslySetInnerHTML`, `href="javascript:"`, và CSP | Câu 73, 74, 77 |
| 7 | "Lưu token ở localStorage cho tiện" | Không so với HttpOnly cookie, và không nhắc CSRF đi kèm | Câu 75, 76 |
| 8 | "Lazy load hết cho nhẹ" | Lazy nhầm ảnh hero hoặc chunk trên đường LCP thì làm chậm thêm | Câu 88, 89, 93 |
| 9 | "Bảng lớn thì virtualize là xong" | Quên row cao động, cell nặng, và chi phí đo lại | Câu 84 |
| 10 | "Giảm bundle thì LCP tốt lên" | Không phân biệt bundle với TTFB và tài nguyên chặn render | Câu 93 |
| 11 | Debounce và throttle dùng lẫn lộn | Không nói được cái nào cho ô search, cái nào cho scroll | Câu 13 |
| 12 | "Chỗ đó bị memory leak" | Không mô tả được cách chứng minh bằng heap snapshot | Câu 18, 95 |
| 13 | "CORS là lỗi của backend" | Không giải thích preflight, `OPTIONS`, `credentials` | Câu 56 |
| 14 | "SSR nhanh hơn CSR" | Quên hydration và khoảng thời gian trang hiện mà chưa bấm được | Câu 46, 65, 66 |
| 15 | "Bọc `React.memo` cho chắc" | Không biết so sánh props cũng tốn, và props tham chiếu mới thì memo vô dụng | Câu 23, 94 |
| 16 | "Đã viết test rồi" | Không phân tầng unit / integration / E2E theo cái gì | Câu 106, 107 |
| 17 | Kể chuyện behavioral không có con số | Không chứng minh được tác động | Câu 108 |
| 18 | "Deploy xong là xong" | Quên user đang mở tab bản cũ, chunk 404, contract đổi | Câu 116, 117 |

---

## 5. Cây Follow-up

Câu mở đầu thường dễ. Điểm số quyết định ở nhánh thứ hai và thứ ba. Tự hỏi mình theo các cây dưới đây — nếu gãy ở đâu thì đọc lại câu ghi kèm.

| Câu mở đầu | Follow-up 1 | Follow-up 2 | Chỗ hay gãy |
|---|---|---|---|
| Closure là gì? (Câu 6) | Closure giữ gì trong bộ nhớ? | Nó gây leak thế nào, chứng minh ra sao? | Không nối được closure sang memory (Câu 14, 17, 18) |
| Event loop hoạt động thế nào? (Câu 7) | Microtask khác macrotask ở đâu? | Starvation là gì, ảnh hưởng 60fps ra sao? | Dừng ở mức "hàng đợi callback" (Câu 8, 9) |
| `useMemo` để làm gì? (Câu 23) | Khi nào nó vô dụng? | Vì sao memo khắp project lại chậm hơn? | Không biết chi phí của chính việc so sánh (Câu 31, 94) |
| Khi nào dùng Context? (Câu 25) | Vì sao Context gây re-render thừa? | Vậy server state thì để đâu? | Không phân biệt bốn loại state (Câu 26, 27, 33, 60) |
| Re-render là gì? (Câu 21) | Props không đổi sao vẫn render lại? | Re-render nhiều có luôn là vấn đề không? | Mặc định coi mọi re-render là xấu (Câu 24, 32) |
| LCP là gì? (Câu 85) | Debug LCP cao theo thứ tự nào? | Bundle giảm 3MB mà LCP không đổi, vì sao? | Gắn LCP với kích thước bundle (Câu 86, 93) |
| Token lưu ở đâu? (Câu 75) | Chống CSRF thế nào? | 20 API cùng trả 401 thì xử lý ra sao? | Không nghĩ tới hàng đợi refresh (Câu 76, 78, 79) |
| Thiết kế autocomplete (Câu 96) | User gõ nhanh, response cũ về sau thì sao? | Cancel và cache thế nào? | Chỉ nói debounce rồi dừng (Câu 11, 12, 61) |
| Table 10k rows chậm (Câu 83) | Virtualize rồi vẫn lag thì sao? | Row cao động thì đo thế nào? | Coi virtualization là thuốc chữa bách bệnh (Câu 84, 97) |
| Hydration là gì? (Câu 65) | Mismatch xảy ra vì đâu? | Streaming SSR đổi gì trong luồng đó? | Không phân biệt render server và hydrate client (Câu 66) |

---

## 6. Số Liệu Và Tên Riêng Phải Thuộc

Sai tên API hoặc sai ngưỡng là mất điểm ngay, dù phần giải thích đúng.

### Ngưỡng Core Web Vitals

| Chỉ số | Tốt | Cần cải thiện | Kém |
|---|---|---|---|
| LCP | ≤ 2.5s | 2.5s – 4.0s | > 4.0s |
| INP | ≤ 200ms | 200ms – 500ms | > 500ms |
| CLS | ≤ 0.1 | 0.1 – 0.25 | > 0.25 |

Ngưỡng được tính ở phân vị 75 của lượt truy cập thật, không phải số đo trên máy anh.

### Con số hay dùng

- **16.7ms** — ngân sách một frame ở 60fps. Trừ công việc của browser, JS chỉ còn khoảng 10ms
- **TTFB** dưới ~800ms là mốc thường được lấy làm mục tiêu
- **~170KB JS nén gzip** cho lần tải đầu trên mobile — đây là mốc tham khảo hay được trích, không phải chuẩn bắt buộc. Nói rõ là "mốc tôi dùng", đừng nói như quy định
- **Brotli nhỏ hơn gzip khoảng 15–20%** với văn bản

### Tên phải gọi đúng

- Hooks: `useSyncExternalStore`, `useDeferredValue`, `startTransition`, `useTransition`, `useInsertionEffect`, `useActionState`, `useOptimistic`
- API: `structuredClone()`, `AbortController`, `IntersectionObserver`, `requestIdleCallback`, `queueMicrotask`
- HTTP: `Cache-Control` (`max-age`, `s-maxage`, `stale-while-revalidate`), `ETag`, `304 Not Modified`, `SameSite` (`Strict`, `Lax`, `None`), `Content-Encoding` (`gzip`, `br`)
- DevTools: panel **Performance**, panel **Memory** (heap snapshot, allocation instrumentation on timeline), tab **Coverage**, **Lighthouse**
- React DevTools: **Profiler**, chế độ **Flamegraph** và **Ranked**

Chi tiết từ vựng: [glossary.md](./glossary.md).

---

## 7. Sáu Câu Chuyện Dự Án Cần Chuẩn Bị

Viết sẵn sáu câu chuyện này ra giấy trước buổi phỏng vấn. Mỗi câu 5–6 câu nói, theo khung STAR ở [dạng 6](#dạng-6--behavioral). Gần như mọi câu behavioral đều rơi vào một trong sáu ô.

| # | Câu chuyện | Phải có con số gì | Câu liên quan |
|---|---|---|---|
| 1 | Một lần tối ưu hiệu năng | Trước và sau: LCP, INP, thời gian render, dung lượng bundle | Câu 108 |
| 2 | Một bug khó, mất nhiều thời gian | Bao lâu mới tìm ra, công cụ nào, ảnh hưởng bao nhiêu user | Câu 90, 95, 113 |
| 3 | Một lần bất đồng kỹ thuật | Hai phương án là gì, chốt theo tiêu chí nào, kết quả sau đó | Câu 110 |
| 4 | Một quyết định kiến trúc | Đánh đổi gì, vì sao không chọn phương án kia, sau 6 tháng thấy đúng hay sai | Câu 59, 68, 109 |
| 5 | Một lần làm hỏng production | Phát hiện sau bao lâu, khắc phục thế nào, sau đó thêm hàng rào gì | Câu 113, 116, 117 |
| 6 | Một lần mentor hoặc nâng chất lượng team | Đổi cái gì trong quy trình, đo bằng gì | Câu 111, 112 |

Nếu một ô nào chưa có chuyện thật, đừng bịa. Nói thẳng là chưa gặp, rồi kể tình huống gần nhất và nói anh sẽ xử lý thế nào.

Viết xong thì tự chấm bằng [thang chấm ở 05-behavioral-experience.md](./05-behavioral-experience.md#thang-chấm-câu-trả-lời) — thang 5 mức, bốn thứ bắt buộc phải có, và hai câu đào sâu cho từng câu trong số 20 câu behavioral. Dưới mức 3 là chưa đủ cho vị trí Senior.

---

## 8. Checklist 24 Giờ Và Ngày Phỏng Vấn

### Hôm trước

- [ ] Đọc lại mục [4](#4-bẫy-hay-trượt-ở-vòng-senior) và [5](#5-cây-follow-up) của playbook
- [ ] Đọc to sáu câu chuyện ở mục [7](#7-sáu-câu-chuyện-dự-án-cần-chuẩn-bị), bấm giờ mỗi câu dưới 2 phút
- [ ] Rà lại ngưỡng Web Vitals và tên hook ở mục [6](#6-số-liệu-và-tên-riêng-phải-thuộc)
- [ ] Đọc lại mô tả công việc, gạch ra ba chủ đề họ chắc chắn sẽ hỏi, mở đúng câu đó trong giáo án
- [ ] Chuẩn bị 3–4 câu hỏi ngược ở mục [9](#9-câu-hỏi-nên-hỏi-ngược)
- [ ] Nếu có vòng live coding: chạy thử editor, thử chia sẻ màn hình
- [ ] Ngủ. Nhồi thêm câu mới đêm trước không có tác dụng

### Trong ngày

- [ ] 30 phút trước: chỉ liếc mục [6](#6-số-liệu-và-tên-riêng-phải-thuộc), không mở giáo án
- [ ] Kiểm tra mic, camera, đường truyền, và tên hiển thị
- [ ] Mở sẵn một file trắng để ghi chú và vẽ khi cần
- [ ] Nghe hết câu hỏi rồi mới trả lời. Không rõ thì hỏi lại, đó là điểm cộng
- [ ] Không biết thì nói không biết, rồi nói cách anh sẽ tìm ra
- [ ] Trả lời xong một ý thì dừng, để họ hỏi tiếp. Đừng nói liên tục 5 phút

---

## 9. Câu Hỏi Nên Hỏi Ngược

Hỏi theo chủ đề anh thật sự quan tâm, đừng đọc thuộc cả danh sách. Ba đến bốn câu là đủ.

**Về công việc**
- Sáu tháng đầu, người làm tốt vị trí này sẽ tạo ra khác biệt gì?
- Bài toán kỹ thuật khó nhất của team hiện giờ là gì?

**Về cách làm việc**
- Quy trình review PR đang ra sao? Một PR thường mất bao lâu để merge?
- Team xử lý nợ kỹ thuật thế nào — có thời gian dành riêng hay gộp vào sprint?
- Khi có incident trên production thì luồng xử lý và hậu kiểm thế nào?

**Về kỹ thuật**
- Frontend đang đo gì trong production, và ai xem những chỉ số đó?
- Tỉ lệ test hiện tại nằm ở tầng nào là chính?
- Có design system chưa, và team product dùng nó tới mức nào?

**Về đội ngũ**
- Team đang bao nhiêu người, chia theo sản phẩm hay theo tầng?
- Người mới vào thường mất bao lâu để lên production lần đầu?

---

## 10. Bản Đồ Tài Liệu Trong Repo

| File | Là gì | Dùng khi |
|---|---|---|
| [PLAYBOOK.md](./PLAYBOOK.md) | Chính file này | Bắt đầu ôn, và 24 giờ trước |
| [ly-thuyet/01-giao-an-4-ngay-phong-van-frontend.md](./ly-thuyet/01-giao-an-4-ngay-phong-van-frontend.md) | 133 câu có đáp án đầy đủ, chín phần | Nguồn chính để học |
| [01-javascript-questions.md](./01-javascript-questions.md) → [08-testing-best-practices.md](./08-testing-best-practices.md) | ~255 câu trắc nghiệm bốn lựa chọn | Tự kiểm tra nhanh, lấp lỗ hổng nền |
| [09-algorithms.md](./09-algorithms.md) | 49 thuật toán, độ phức tạp, link mô phỏng | Chuẩn bị vòng live coding |
| [find-unclosed-tags.js](./find-unclosed-tags.js) | Một bài live coding giải chi tiết bằng stack | Luyện cách vừa code vừa nói |
| [glossary.md](./glossary.md) | Từ vựng kỹ thuật Anh–Việt A→Z | Khi phỏng vấn bằng tiếng Anh |
| [en/](./en/) | Bản tiếng Anh của tám file trắc nghiệm | Phỏng vấn công ty nước ngoài |

---

*Cập nhật lần cuối: September 2026*
