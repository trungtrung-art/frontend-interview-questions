# Câu Hỏi Problem Solving & System Design
## Frontend Architecture - Senior/Lead Level

---

## 📚 MỤC LỤC
- [Phần 1: Problem Solving](#phần-1-problem-solving)
- [Phần 2: Frontend System Design](#phần-2-frontend-system-design)
- [Phần 3: Architecture Patterns](#phần-3-architecture-patterns)
- [Phần 4: Scenario-based Questions](#phần-4-scenario-based-questions)
- [Đáp Án Chi Tiết](#đáp-án-chi-tiết)

---

# PHẦN 1: PROBLEM SOLVING

## Câu 1: Debugging Performance
**Ứng dụng React của bạn render chậm. Bước đầu tiên bạn làm gì để debug?**

- A) Chuyển sang class components
- B) Thêm React.memo vào tất cả components
- C) Sử dụng React DevTools Profiler để identify bottlenecks
- D) Upgrade React version

---

## Câu 2: Memory Leak Detection
**User report rằng app ngày càng chậm khi sử dụng lâu. Bạn nghi ngờ memory leak. Cách nào để xác nhận?**

- A) Restart server
- B) Sử dụng Chrome DevTools Memory tab, take heap snapshots
- C) Clear browser cache
- D) Tăng server RAM

---

## Câu 3: Race Condition
**User gặp bug: search results hiển thị kết quả của search query cũ. Nguyên nhân và cách fix?**

- A) React re-render issue
- B) Browser caching issue
- C) Server response chậm, cần upgrade server
- D) Race condition - responses trả về không theo thứ tự, cần cancel previous requests hoặc ignore stale responses

---

## Câu 4: State Synchronization
**Bạn có multiple browser tabs mở cùng một app. User update data ở tab 1 nhưng tab 2 không cập nhật. Solution?**

- A) Auto refresh mỗi 5 giây
- B) Disable multiple tabs
- C) Sử dụng BroadcastChannel API, localStorage events, hoặc WebSocket
- D) Yêu cầu user refresh manually

---

## Câu 5: Error Handling Strategy
**Cách tiếp cận tốt nhất cho error handling trong large React app?**

- A) try-catch trong mỗi component
- B) Let errors crash và rely on user refresh
- C) Chỉ sử dụng Error Boundaries
- D) Error Boundaries cho UI errors + global error handler cho async errors + proper logging

---

## Câu 6: Form Performance
**Form với 50+ fields render chậm khi user type. Giải pháp?**

- A) Sử dụng uncontrolled components
- B) Disable real-time validation
- C) Implement field-level subscription (react-hook-form), debounce validation
- D) Reduce số lượng fields

---

## Câu 7: Infinite Scroll Issues
**Infinite scroll list của bạn gây lag sau khi load nhiều items. Vấn đề và solution?**

- A) DOM có quá nhiều elements, cần virtualization (react-window)
- B) CSS animation issue
- C) Server pagination issue
- D) API rate limiting

---

## Câu 8: Authentication Flow
**JWT token expired trong khi user đang sử dụng app. Best approach?**

- A) Store token vĩnh viễn trong localStorage
- B) Extend token expiry lên 1 năm
- C) Force logout immediately
- D) Implement silent refresh với refresh token, queue failed requests, retry sau khi refresh

---

## Câu 9: API Error Handling
**API trả về 500 error intermittently. Strategy để handle?**

- A) Retry vô hạn
- B) Implement retry với exponential backoff, circuit breaker pattern, fallback UI
- C) Ignore errors
- D) Show error message và stop

---

## Câu 10: Bundle Size Crisis
**Bundle size quá lớn (5MB), app load chậm. Immediate actions?**

- A) Upgrade hosting plan
- B) Enable caching
- C) Analyze bundle, code split, lazy load routes, remove unused dependencies, dynamic imports
- D) Chuyển sang HTTP/3

---

# PHẦN 2: FRONTEND SYSTEM DESIGN

## Câu 11: Design Notification System
**Design real-time notification system cho web app. Considerations?**

- A) Browser alerts
- B) Polling every second
- C) WebSocket/SSE for real-time, notification queue, read/unread state, persistence, push notifications
- D) Email notifications only

---

## Câu 12: Design Image Upload
**Design image upload component with preview, progress, validation. Key considerations?**

- A) Server-side only processing
- B) Base64 encoding
- C) Simple file input
- D) Client-side validation, compression, chunked upload for large files, progress tracking, retry mechanism, preview generation

---

## Câu 13: Design Search Autocomplete
**Design search autocomplete like Google. Technical considerations?**

- A) Debounce input, cache results, keyboard navigation, highlight matches, handle no results, recent searches
- B) Only search on Enter
- C) Pre-load all results
- D) Search on every keystroke

---

## Câu 14: Design Data Table
**Design reusable data table component với sorting, filtering, pagination. Architecture?**

- A) Use native HTML table only
- B) CSS Grid layout
- C) Monolithic component
- D) Composable design (Table, Header, Body, Row, Cell), server-side operations for large data, virtualization option, controlled/uncontrolled modes

---

## Câu 15: Design Form Builder
**Design dynamic form builder (user có thể tạo forms). Architecture decisions?**

- A) Schema-driven approach, field type registry, validation rules engine, conditional logic, drag-drop interface
- B) Use Google Forms embed
- C) Only support text fields
- D) Hard-code tất cả field types

---

## Câu 16: Design Multi-step Wizard
**Design multi-step form wizard. State management approach?**

- A) Mỗi step giữ state riêng trong component của nó và submit lên server ngay khi step đó xong
- B) Một form dài duy nhất, dùng CSS ẩn hiện từng phần, validate toàn bộ lúc submit
- C) State tập trung ở cấp wizard, validate theo từng step trước khi cho đi tiếp, quay lại không mất dữ liệu, và lưu nháp để khôi phục khi tải lại trang
- D) Đẩy toàn bộ state lên URL query string, mỗi step là một route riêng, không cần state chung

---

## Câu 17: Design Offline-first App
**Design app hoạt động offline. Architecture?**

- A) Cache toàn bộ response API vào localStorage rồi đọc từ đó khi mất mạng
- B) Service Worker cache phần vỏ ứng dụng, IndexedDB giữ dữ liệu, hàng đợi mutation gửi lại khi có mạng, kèm chiến lược giải quyết xung đột
- C) Theo dõi `navigator.onLine` rồi khoá mọi thao tác ghi cho tới khi có mạng lại
- D) Đặt `Cache-Control` thời hạn dài để trình duyệt tự phục vụ từ HTTP cache khi offline

---

## Câu 18: Design Real-time Collaboration
**Design real-time document editing (như Google Docs). Key challenges?**

- A) Khoá tài liệu cho một người sửa tại một thời điểm, người khác chỉ xem
- B) Mỗi client gửi toàn bộ nội dung sau mỗi thay đổi, server giữ bản đến sau cùng
- C) Gộp thay đổi bằng thuật toán diff ba chiều lúc lưu, giống cách Git merge
- D) Operational Transform hoặc CRDT để hợp nhất thao tác đồng thời, kèm con trỏ của người khác, lịch sử phiên bản và quản lý vòng đời kết nối WebSocket

---

## Câu 19: Design Chat Application
**Design chat UI. Technical considerations?**

- A) WebSocket cho tin đến, trạng thái gửi/nhận/đã đọc, optimistic update khi gửi, danh sách ảo hoá, và chỉ báo đang gõ
- B) Gọi API mỗi 2 giây để lấy tin mới rồi render lại toàn bộ danh sách
- C) Dùng Server-Sent Events cho cả chiều gửi lẫn chiều nhận
- D) Tải toàn bộ lịch sử khi mở phòng và giữ hết trong state, không phân trang

---

## Câu 20: Design Dashboard
**Design analytics dashboard với multiple widgets. Architecture?**

- A) Một lần gọi API lấy toàn bộ dữ liệu cho mọi widget rồi render một lượt
- B) Mỗi widget là một route riêng, xem widget khác thì chuyển trang
- C) Kiến trúc theo widget: mỗi widget tự lấy dữ liệu và tự quản trạng thái tải, lưới bố cục đáp ứng, nhịp làm mới riêng cho từng widget
- D) Render sẵn toàn bộ dashboard ở server rồi trả về ảnh tĩnh, làm mới theo chu kỳ

---

# PHẦN 3: ARCHITECTURE PATTERNS

## Câu 21: Micro-frontends
**Khi nào nên sử dụng micro-frontends architecture?**

- A) Large teams, independent deployment needs, different tech stacks, clear domain boundaries
- B) Mọi project
- C) Startups với 2 developers
- D) Small projects

---

## Câu 22: State Management Selection
**Criteria nào để chọn state management solution?**

- A) Popularity
- B) App complexity, team familiarity, bundle size, DevTools support, server state vs client state needs
- C) GitHub stars
- D) Company recommendation

---

## Câu 23: API Layer Design
**Best practice cho API layer trong React app?**

- A) Gọi `fetch` thẳng trong component và xử lý lỗi ngay tại chỗ dùng
- B) Bọc tất cả vào một hàm request duy nhất nhận URL và trả về JSON đã parse
- C) Chuyển toàn bộ sang GraphQL để client tự chọn trường cần lấy
- D) Tầng API tách riêng, xử lý lỗi tập trung, interceptor cho request và response, và kiểu dữ liệu ràng buộc theo hợp đồng API

---

## Câu 24: Feature Flags
**Implement feature flags system. Considerations?**

- A) Dùng biến môi trường và build riêng cho từng cấu hình
- B) Cấu hình từ xa, bật dần theo phần trăm người dùng, phân nhóm đối tượng, và công tắc tắt nhanh không cần deploy
- C) Tạo nhánh Git riêng cho mỗi tính năng rồi merge khi sẵn sàng
- D) Đọc cờ từ `localStorage` để mỗi người tự bật tính năng muốn thử

---

## Câu 25: Design System
**Key components của Frontend Design System?**

- A) Design token, thư viện component, tài liệu sử dụng, chuẩn accessibility, hệ thống theme, và quy tắc đánh phiên bản
- B) Một thư viện component React được publish lên npm cho các đội cùng dùng
- C) Bộ file Figma có đủ màu, khoảng cách và kiểu chữ để designer dùng chung
- D) Một file CSS chứa biến toàn cục mà mọi dự án import vào

---

## Câu 26: Monorepo vs Polyrepo
**Khi nào monorepo phù hợp cho frontend?**

- A) Luôn nên dùng monorepo, vì mọi thứ nằm một chỗ thì dễ tìm hơn
- B) Chỉ khi cả công ty dùng chung một ngôn ngữ lập trình
- C) Khi nhiều dự án dùng chung code, cần thống nhất công cụ, và cần đổi nhiều package trong cùng một commit rồi phát hành phối hợp
- D) Chỉ khi đội dưới năm người, vì đông hơn thì CI sẽ quá chậm

---

## Câu 27: SSR vs CSR vs SSG
**Khi nào chọn SSR, CSR, SSG?**

- A) Depends on framework only
- B) SSR cho tất cả
- C) SSR: SEO + dynamic content, CSR: interactive apps + authenticated content, SSG: static content + blogs
- D) CSR cho tất cả

---

## Câu 28: Testing Strategy
**Testing pyramid cho frontend?**

- A) Chỉ viết E2E vì nó kiểm được luồng thật của người dùng
- B) Chỉ viết unit test vì chạy nhanh và dễ giữ cho xanh
- C) Chia đều ba tầng để tầng nào cũng có độ phủ như nhau
- D) Nhiều unit test, ít hơn integration test, rất ít E2E; component test bằng React Testing Library nằm ở tầng integration

---

## Câu 29: Error Monitoring
**Production error monitoring strategy?**

- A) Đọc log server mỗi khi có người dùng báo lỗi
- B) Dịch vụ theo dõi lỗi kèm source map để đọc được stack trace, ngữ cảnh người dùng và số hiệu bản build, cùng cảnh báo theo ngưỡng
- C) Bọc toàn bộ ứng dụng trong một Error Boundary và hiện thông báo xin lỗi
- D) Rải `console.log` ở những chỗ nghi ngờ rồi nhờ người dùng gửi ảnh chụp màn hình

---

## Câu 30: CI/CD for Frontend
**CI/CD pipeline cho frontend project nên include?**

- A) Lint, kiểm tra kiểu, unit test, build, phân tích kích thước bundle, E2E, bản xem trước cho mỗi pull request, rồi deploy production
- B) Chỉ build và deploy, còn test để người review tự chạy trên máy
- C) Chạy toàn bộ test trên mọi commit của mọi nhánh để bắt lỗi sớm nhất
- D) Deploy thẳng lên production mỗi khi merge, không cần môi trường trung gian

---

# PHẦN 4: SCENARIO-BASED QUESTIONS

## Câu 31: Legacy Code Migration
**Bạn join team với large legacy jQuery codebase. Migration strategy?**

- A) Strangler fig pattern: wrap legacy, incrementally migrate, coexist during transition, prioritize high-value areas
- B) Hire new team
- C) Rewrite từ đầu
- D) Keep jQuery forever

---

## Câu 32: Performance Crisis
**Production app suddenly slow, users complaining. Immediate actions?**

- A) Check monitoring, identify root cause (recent deploy? traffic spike? third-party?), communicate status, fix or rollback
- B) Blame backend
- C) Deploy rollback và investigate
- D) Ignore until morning

---

## Câu 33: Security Incident
**Report XSS vulnerability trong app. Response?**

- A) Ghi vào backlog và xử lý ở sprint sau cho đúng quy trình
- B) Vá ngay chỗ được báo rồi đóng ticket
- C) Đánh giá mức nghiêm trọng và phạm vi ảnh hưởng, vá ngay, rà soát những chỗ khác dùng cùng kiểu code, thêm test chặn tái diễn, rồi họp rút kinh nghiệm
- D) Chờ xác nhận có ai khai thác thật chưa rồi mới quyết định mức ưu tiên

---

## Câu 34: Team Velocity Drop
**Team velocity giảm, technical debt tăng. Address how?**

- A) Làm thêm giờ cho tới khi bắt kịp tiến độ đã cam kết
- B) Tuyển thêm người để tăng năng lực của đội
- C) Dừng làm tính năng mới vài sprint để viết lại phần code cũ
- D) Dành một phần cố định mỗi sprint cho việc dọn nợ, đo xem chỗ nào thực sự làm chậm, cải thiện công cụ, giảm số việc làm dở song song, và trả nợ dần theo mức ảnh hưởng

---

## Câu 35: Cross-team Dependency
**Feature requires backend API chưa ready. Approach?**

- A) Define contract together, mock API, develop in parallel, integration testing khi ready
- B) Wait for backend
- C) Build temporary backend
- D) Skip feature

---

---

# PHẦN 5: QUY MÔ TỔ CHỨC

## Câu 36: i18n - Tổ chức chuỗi dịch
**Tổ chức chuỗi dịch cho app nhiều ngôn ngữ thế nào để không lệch giữa các bản?**

- A) Để chuỗi tiếng Anh thẳng trong code, dịch tự động lúc chạy bằng API dịch máy
- B) Khoá dịch theo không gian tên gắn với tính năng, tiếng gốc là nguồn sự thật, thiếu khoá thì fallback về tiếng gốc và báo trong CI
- C) Một file JSON phẳng cho mỗi ngôn ngữ, khoá đặt theo chính câu tiếng Việt
- D) Lưu mọi chuỗi trong cơ sở dữ liệu và gọi API lấy về khi trang tải

---

## Câu 37: i18n - Số nhiều và định dạng
**Hiển thị "1 tin nhắn" / "5 tin nhắn" và ngày giờ theo từng ngôn ngữ. Cách đúng?**

- A) Viết hàm tự kiểm tra `count === 1` rồi chọn một trong hai chuỗi
- B) Nối chuỗi thủ công theo mẫu `${count} ${đơn vị}` cho mọi ngôn ngữ
- C) Dùng thư viện định dạng ngày như dayjs và tự viết logic số nhiều
- D) Dùng `Intl.PluralRules` cùng `Intl.NumberFormat` và `Intl.DateTimeFormat`, hoặc định dạng ICU MessageFormat

---

## Câu 38: i18n - Giao diện phải sang trái
**Hỗ trợ tiếng Ả Rập hoặc Do Thái (RTL). Chuẩn bị giao diện thế nào?**

- A) Dùng thuộc tính logic của CSS (`margin-inline-start`, `padding-block`) và đặt `dir` trên thẻ gốc, thay vì left/right cố định
- B) Viết một file CSS riêng cho RTL, lật toàn bộ left thành right
- C) Dùng `transform: scaleX(-1)` cho toàn bộ trang khi ở chế độ RTL
- D) Chỉ đổi hướng chữ bằng `direction: rtl`, phần bố cục giữ nguyên

---

## Câu 39: Monorepo - CI chỉ chạy phần đã đổi
**Monorepo 20 package, CI chạy 40 phút mỗi commit. Xử lý thế nào?**

- A) Chỉ chạy CI trên nhánh chính, các nhánh khác bỏ qua
- B) Tách repo ra để mỗi package có CI riêng
- C) Dựng đồ thị phụ thuộc, chỉ build và test những package bị ảnh hưởng, kèm cache từ xa dùng chung cho cả đội
- D) Giảm số test để CI chạy nhanh hơn

---

## Câu 40: Monorepo - Phiên bản package nội bộ
**Trong monorepo, các package dùng lẫn nhau nên tham chiếu phiên bản thế nào?**

- A) Ghim phiên bản cụ thể như với package ngoài, nâng thủ công khi cần
- B) Dùng workspace protocol để luôn lấy mã nguồn trong repo, chỉ đánh phiên bản thật khi phát hành ra ngoài
- C) Không đánh phiên bản gì cả, import thẳng theo đường dẫn tương đối
- D) Mỗi package tự publish lên registry nội bộ sau mỗi commit

---

## Câu 41: Observability - Source map cho production
**Bundle production đã minify, stack trace báo về là `a.js:1:28471`. Cách xử lý?**

- A) Deploy kèm source map lên CDN để trình duyệt tự đọc được
- B) Bỏ minify ở production để stack trace đọc được
- C) Ghi log thủ công tên hàm ở mọi chỗ có thể lỗi
- D) Sinh source map trong CI rồi đẩy riêng lên dịch vụ theo dõi lỗi, không phục vụ công khai, và gắn số hiệu bản build vào mỗi báo cáo

---

## Câu 42: Observability - Dữ liệu thật và đo tổng hợp
**Lighthouse cho điểm 95 nhưng người dùng vẫn than chậm. Vì sao và đo thế nào?**

- A) Lighthouse là đo tổng hợp trên một máy và một đường mạng cố định; cần thêm dữ liệu người dùng thật để thấy phân vị 75 trên thiết bị và mạng thực tế
- B) Điểm Lighthouse sai, nên chạy lại nhiều lần rồi lấy điểm cao nhất
- C) Người dùng cảm nhận sai, số liệu mới là thứ đáng tin
- D) Chạy Lighthouse trên máy cấu hình yếu hơn là đủ để phản ánh thực tế

---

## Câu 43: Micro-frontend - Chia sẻ thư viện dùng chung
**Ba micro-frontend cùng dùng React. Xử lý phần dùng chung thế nào?**

- A) Mỗi mảnh đóng gói React riêng cho độc lập hoàn toàn
- B) Đặt React vào biến toàn cục rồi mọi mảnh cùng đọc
- C) Khai làm shared singleton trong Module Federation với khoảng phiên bản tương thích, và có kiểm tra ở CI khi phiên bản lệch nhau
- D) Gộp ba mảnh lại thành một ứng dụng để khỏi phải chia sẻ

---

## Câu 44: Build tool - Vite và Webpack
**Vite khởi động dev server tức thì trong khi Webpack mất 40 giây. Vì sao?**

- A) Vite viết bằng ngôn ngữ biên dịch nên nhanh hơn về bản chất
- B) Ở chế độ phát triển, Vite phục vụ trực tiếp bằng module ES gốc của trình duyệt nên không cần đóng gói trước; Webpack dựng đồ thị và đóng gói toàn bộ trước khi phục vụ
- C) Vite bỏ qua bước kiểm tra kiểu nên nhanh hơn
- D) Vite lưu cache trên đĩa còn Webpack thì không

---

## Câu 45: Chi phí kỹ thuật - Thuyết phục bằng con số
**Muốn xin hai tuần để nâng cấp hạ tầng build. Trình bày với quản lý thế nào?**

- A) Giải thích rằng công cụ hiện tại đã cũ và cộng đồng đã chuyển sang cái mới
- B) Nói rằng đội đang rất khó chịu và tinh thần làm việc đi xuống
- C) Đề nghị làm âm thầm xen vào các sprint mà không báo
- D) Quy ra con số: thời gian chờ build mỗi người mỗi ngày nhân số người nhân số ngày, cộng chi phí CI, so với hai tuần bỏ ra và thời điểm hoàn vốn

---

# ĐÁP ÁN CHI TIẾT

## Phần 1: Problem Solving

### Câu 1: Đáp án C

**Giải thích:**
Debugging workflow:
1. **React DevTools Profiler:** Identify which components render, render time, why rendered
2. **Chrome Performance tab:** Analyze runtime performance
3. **Analyze findings:** Find actual bottleneck
4. **Apply targeted fixes:** React.memo, useMemo, code splitting based on data

```jsx
// After identifying slow component
const SlowComponent = React.memo(({ data }) => {
  // Component code
}, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
```

**Đánh đổi:**
Profiler chỉ ra component nào tốn thời gian, nhưng số đo lấy ở bản phát triển nên luôn chậm hơn production — dùng để so sánh tương đối thì tốt, làm con số tuyệt đối thì sai. Và nó chỉ thấy được phần React; nếu nút thắt nằm ở layout của trình duyệt hay ở mạng thì Profiler im lặng, phải đổi sang tab Performance.

**Tham khảo:** [React Profiler](https://react.dev/reference/react/Profiler)

---

### Câu 2: Đáp án B

**Giải thích:**
Memory leak detection:
1. **Take heap snapshot** trước user interaction
2. **Perform actions** (navigate, open modals, etc.)
3. **Take another snapshot**
4. **Compare:** Objects retained between snapshots

Common leaks:
- Event listeners not removed
- Timers not cleared
- Closures holding references
- Detached DOM nodes

```javascript
// Common leak pattern
useEffect(() => {
  const handler = () => { /* ... */ };
  window.addEventListener('resize', handler);
  // ❌ Missing cleanup!

  // ✅ Fix
  return () => window.removeEventListener('resize', handler);
}, []);
```

**Đánh đổi:**
Heap snapshot chứng minh được rò rỉ nhưng đọc rất tốn công, và bản thân việc chụp làm treo trang vài giây. So sánh hai snapshot cách nhau một thao tác lặp lại cho tín hiệu rõ hơn là nhìn một ảnh đơn lẻ. Lưu ý là bộ nhớ tăng không đồng nghĩa với rò rỉ — cache có chủ đích cũng làm tăng.

**Tham khảo:** [Chrome Memory Tools](https://developer.chrome.com/docs/devtools/memory-problems/)

---

### Câu 3: Đáp án D

**Giải thích:**
Race condition scenario:
- User types "abc", request sent
- User types "abcd", another request sent
- "abcd" response arrives first
- "abc" response arrives later, overwrites correct result

**Solutions:**

```javascript
// 1. AbortController
function useSearch(query) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/search?q=${query}`, { signal: controller.signal })
      .then(res => res.json())
      .then(setResults)
      .catch(err => {
        if (err.name !== 'AbortError') throw err;
      });

    return () => controller.abort();
  }, [query]);

  return results;
}

// 2. Request ID tracking
function useSearch(query) {
  const requestIdRef = useRef(0);

  useEffect(() => {
    const currentRequestId = ++requestIdRef.current;

    fetch(`/api/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        // Ignore stale responses
        if (currentRequestId === requestIdRef.current) {
          setResults(data);
        }
      });
  }, [query]);
}
```

**Đánh đổi:**
Huỷ request cũ bằng `AbortController` sạch hơn là bỏ qua kết quả đến muộn, vì nó tiết kiệm cả băng thông. Nhưng huỷ quá tay làm mất dữ liệu đã tải gần xong, và người dùng gõ chậm sẽ thấy nhiều request bị huỷ liên tục. Cách bỏ qua theo số thứ tự đơn giản hơn và không cần huỷ, đổi lại vẫn tốn mạng.

---

### Câu 4: Đáp án C

**Giải thích:**
Cross-tab synchronization options:

```javascript
// 1. BroadcastChannel API
const channel = new BroadcastChannel('app-sync');

// Send update
channel.postMessage({ type: 'DATA_UPDATE', payload: newData });

// Receive in other tabs
channel.onmessage = (event) => {
  if (event.data.type === 'DATA_UPDATE') {
    updateLocalState(event.data.payload);
  }
};

// 2. localStorage event
window.addEventListener('storage', (event) => {
  if (event.key === 'userData') {
    const newData = JSON.parse(event.newValue);
    updateLocalState(newData);
  }
});

// 3. WebSocket - real-time sync
socket.on('dataUpdate', (data) => {
  updateLocalState(data);
});
```

**Đánh đổi:**
`BroadcastChannel` gọn và nhanh nhưng không lưu lại — tab mở sau không biết chuyện đã xảy ra. Sự kiện `storage` thì có trạng thái bền nhưng chỉ bắn ở các tab *khác*, không bắn ở tab vừa ghi, và chỉ truyền được chuỗi. Đồng bộ nhiều tab luôn phải chọn giữa tức thời và bền vững; muốn cả hai thì dùng cả hai.

---

### Câu 5: Đáp án D

**Giải thích:**
Comprehensive error handling:

```jsx
// 1. Error Boundary for UI errors
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    errorReportingService.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onRetry={() => this.setState({ hasError: false })} />;
    }
    return this.props.children;
  }
}

// 2. Global error handler
window.addEventListener('unhandledrejection', (event) => {
  errorReportingService.log(event.reason);
});

// 3. API error handling
const api = {
  async fetch(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new ApiError(response.status, await response.text());
      }
      return response.json();
    } catch (error) {
      errorReportingService.log(error);
      throw error;
    }
  }
};
```

**Đánh đổi:**
Error Boundary giữ cho lỗi render không làm trắng cả trang, nhưng nó không bắt lỗi trong event handler, trong code bất đồng bộ hay trong chính nó. Bắt lỗi toàn cục thì phủ rộng nhưng dễ nuốt mất lỗi lập trình thật, làm chúng không bao giờ bị phát hiện. Bắt lỗi mà không gửi báo cáo còn tệ hơn để lỗi nổ.

---

### Câu 6: Đáp án C

**Giải thích:**
Form performance optimization:

```jsx
// ❌ Re-renders entire form on every change
function SlowForm() {
  const [form, setForm] = useState({ field1: '', field2: '', ... });

  return (
    <form>
      {Object.keys(form).map(key => (
        <input
          value={form[key]}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
    </form>
  );
}

// ✅ react-hook-form - field-level subscription
import { useForm } from 'react-hook-form';

function FastForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('field1')} />
      <input {...register('field2')} />
    </form>
  );
}

// ✅ Debounced validation
const { register } = useForm({
  mode: 'onChange',
  reValidateMode: 'onChange',
  delayError: 500 // Debounce validation
});
```

**Đánh đổi:**
Đăng ký theo từng trường làm form lớn mượt hẳn vì mỗi phím gõ chỉ render một ô. Cái giá là giá trị nằm trong ref chứ không trong state, nên logic phụ thuộc lẫn nhau giữa các trường khó viết hơn, và việc hiển thị lại theo giá trị cần đăng ký tường minh. Với form dưới mười trường, controlled đơn giản hơn nhiều.

---

### Câu 7: Đáp án A

**Giải thích:**
Virtualization solution:

```jsx
// ❌ Problem: 10,000 DOM nodes
function SlowList({ items }) {
  return (
    <div>
      {items.map(item => <ComplexItem key={item.id} item={item} />)}
    </div>
  );
}

// ✅ Solution: Only render visible items
import { FixedSizeList } from 'react-window';

function FastList({ items }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <ComplexItem item={items[index]} />
        </div>
      )}
    </FixedSizeList>
  );
}

// For variable height items
import { VariableSizeList } from 'react-window';
// Or use react-virtuoso for dynamic heights
import { Virtuoso } from 'react-virtuoso';
```

**Đánh đổi:**
Ảo hoá làm danh sách vô hạn chạy được, nhưng mất `Ctrl+F`, gây khó cho trình đọc màn hình, và hỏng khi chiều cao mỗi dòng khác nhau. Ngoài ra cuộn vô hạn tự nó đã đánh đổi: người dùng không tới được chân trang và không quay lại đúng vị trí cũ khi bấm back — phân trang không có hai vấn đề đó.

---

### Câu 8: Đáp án D

**Giải thích:**
Token refresh strategy:

```javascript
// API interceptor pattern
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Queue requests while refreshing
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { token } = await refreshToken();
        processQueue(null, token);
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        logout();
        throw refreshError;
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
```

**Đánh đổi:**
Làm mới token ngầm giữ người dùng không bị đăng xuất giữa chừng, nhưng hàng đợi request chờ token mới là chỗ dễ sai nhất: quên gom lại thì hai mươi request cùng gọi làm mới, và server thường chỉ chấp nhận một. Và nếu chính lần làm mới cũng hỏng thì phải có đường thoát, nếu không hàng đợi treo vĩnh viễn.

---

### Câu 9: Đáp án B

**Giải thích:**
Resilient API handling:

```javascript
// Exponential backoff with jitter
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;

      // Don't retry client errors (4xx)
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`Client error: ${response.status}`);
      }

      throw new Error(`Server error: ${response.status}`);
    } catch (error) {
      if (attempt === maxRetries) throw error;

      // Exponential backoff with jitter
      const delay = Math.min(1000 * 2 ** attempt + Math.random() * 1000, 10000);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Circuit breaker pattern
class CircuitBreaker {
  constructor(threshold = 5, resetTimeout = 30000) {
    this.failures = 0;
    this.threshold = threshold;
    this.resetTimeout = resetTimeout;
    this.state = 'CLOSED';
  }

  async call(fn) {
    if (this.state === 'OPEN') {
      throw new Error('Circuit is open');
    }

    try {
      const result = await fn();
      this.failures = 0;
      return result;
    } catch (error) {
      this.failures++;
      if (this.failures >= this.threshold) {
        this.state = 'OPEN';
        setTimeout(() => {
          this.state = 'HALF-OPEN';
        }, this.resetTimeout);
      }
      throw error;
    }
  }
}
```

**Đánh đổi:**
Thử lại với khoảng cách tăng dần chịu được lỗi mạng thoáng qua, nhưng thử lại một request không idempotent có thể tạo hai đơn hàng — chỉ thử lại `GET`, hoặc dùng khoá idempotency cho `POST`. Và thử lại đồng loạt sau khi server phục hồi sẽ đánh sập nó lần nữa, nên phải thêm nhiễu ngẫu nhiên vào khoảng chờ.

---

### Câu 10: Đáp án C

**Giải thích:**
Bundle optimization steps:

```javascript
// 1. Analyze bundle
// npm install -D webpack-bundle-analyzer
// Add to webpack config:
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
plugins: [new BundleAnalyzerPlugin()]

// 2. Code splitting - Route-based
const Home = lazy(() => import('./routes/Home'));
const Dashboard = lazy(() => import('./routes/Dashboard'));

// 3. Dynamic imports for heavy libraries
const handleExport = async () => {
  const { exportToPDF } = await import('./utils/pdfExport');
  exportToPDF(data);
};

// 4. Replace heavy dependencies
// ❌ moment.js (300KB) → ✅ date-fns (tree-shakeable)
// ❌ lodash (70KB) → ✅ lodash-es or individual imports

// 5. Check for duplicates
// Use npm ls or yarn why to find duplicate packages

// 6. Tree shaking - use ES modules
// ❌ import _ from 'lodash';
// ✅ import { debounce } from 'lodash-es';
```

**Đánh đổi:**
Chia nhỏ và tải trễ giảm dung lượng lần đầu nhưng mỗi chunk thêm một lượt đi mạng, và lazy nhầm thứ nằm trên đường hiển thị nội dung chính sẽ làm LCP tệ hơn. Gỡ thư viện không dùng cho lợi ích chắc chắn nhất mà không mất gì — nên bắt đầu từ đó trước khi động vào cấu trúc tải.

---

## Phần 2: Frontend System Design

### Câu 11: Đáp án C

**Giải thích:**
Notification system design:

```
┌─────────────────────────────────────────────────────────────┐
│                    NOTIFICATION SYSTEM                        │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────┐     ┌──────────────┐     ┌───────────────┐ │
│  │   Server    │────▶│  WebSocket   │────▶│   Client      │ │
│  │  (Events)   │     │  /SSE        │     │  (Real-time)  │ │
│  └─────────────┘     └──────────────┘     └───────────────┘ │
│                              │                               │
│                              ▼                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                 NOTIFICATION STATE                     │   │
│  │  - Notification Queue (priority-based)                │   │
│  │  - Read/Unread tracking                               │   │
│  │  - Persistence (IndexedDB/localStorage)               │   │
│  │  - Push notification integration                      │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

```typescript
// Notification service
interface Notification {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  action?: { label: string; url: string };
}

class NotificationService {
  private socket: WebSocket;
  private queue: Notification[] = [];
  private listeners: Set<(n: Notification) => void> = new Set();

  connect() {
    this.socket = new WebSocket('wss://api.example.com/notifications');
    this.socket.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      this.handleNotification(notification);
    };
  }

  private handleNotification(notification: Notification) {
    this.queue.push(notification);
    this.persist();
    this.notifyListeners(notification);
    this.showPushNotification(notification);
  }

  subscribe(callback: (n: Notification) => void) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }
}
```

**Đánh đổi:**
WebSocket cho thông báo tức thì nhưng phải tự lo kết nối lại, nhịp tim và xác thực; SSE nhẹ hơn nhiều và tự kết nối lại, đổi lại chỉ một chiều. Với thông báo thì một chiều thường là đủ. Và dù chọn cách nào, trạng thái đã đọc vẫn phải là nguồn sự thật ở server, vì người dùng mở nhiều thiết bị.

---

### Câu 12: Đáp án D

**Giải thích:**
Image upload design:

```typescript
interface UploadConfig {
  maxSize: number;           // bytes
  allowedTypes: string[];    // ['image/jpeg', 'image/png']
  maxDimensions?: { width: number; height: number };
  compression?: { quality: number; maxWidth: number };
  chunkSize?: number;        // for chunked upload
}

class ImageUploader {
  // Client-side validation
  validate(file: File, config: UploadConfig): ValidationResult {
    if (file.size > config.maxSize) {
      return { valid: false, error: 'File too large' };
    }
    if (!config.allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Invalid file type' };
    }
    return { valid: true };
  }

  // Generate preview
  async createPreview(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result as string);
      reader.readAsDataURL(file);
    });
  }

  // Compress image
  async compress(file: File, config: CompressionConfig): Promise<Blob> {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = await this.loadImage(file);

    // Calculate dimensions
    const { width, height } = this.calculateDimensions(img, config.maxWidth);
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img, 0, 0, width, height);
    return new Promise(resolve => {
      canvas.toBlob(resolve, 'image/jpeg', config.quality);
    });
  }

  // Chunked upload with progress
  async uploadChunked(file: File, chunkSize: number): AsyncGenerator<Progress> {
    const totalChunks = Math.ceil(file.size / chunkSize);

    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);

      await this.uploadChunk(chunk, i, totalChunks);

      yield {
        uploaded: end,
        total: file.size,
        percentage: Math.round((end / file.size) * 100)
      };
    }
  }
}
```

**Đánh đổi:**
Nén ở phía client tiết kiệm băng thông và thời gian chờ, nhưng tốn CPU của máy người dùng và làm giảm chất lượng ảnh gốc — không dùng được cho ảnh cần giữ nguyên bản. Tải theo từng mẩu cho phép tiếp tục khi đứt mạng nhưng phức tạp hơn hẳn; chỉ đáng khi tệp lớn hoặc người dùng ở mạng yếu.

---

### Câu 13: Đáp án A

**Giải thích:**
Search autocomplete design:

```typescript
class SearchAutocomplete {
  private cache = new Map<string, SearchResult[]>();
  private debounceTimer: number;
  private abortController: AbortController;

  constructor(
    private inputElement: HTMLInputElement,
    private config: AutocompleteConfig
  ) {
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.inputElement.addEventListener('input', this.handleInput);
    this.inputElement.addEventListener('keydown', this.handleKeyboard);
  }

  private handleInput = (e: Event) => {
    const query = (e.target as HTMLInputElement).value;

    clearTimeout(this.debounceTimer);

    if (query.length < this.config.minChars) {
      this.hideResults();
      return;
    }

    // Debounce
    this.debounceTimer = setTimeout(() => {
      this.search(query);
    }, this.config.debounceMs);
  };

  private async search(query: string) {
    // Check cache
    if (this.cache.has(query)) {
      this.showResults(this.cache.get(query)!);
      return;
    }

    // Cancel previous request
    this.abortController?.abort();
    this.abortController = new AbortController();

    try {
      const results = await this.fetchResults(query);
      this.cache.set(query, results);
      this.showResults(results);
    } catch (error) {
      if (error.name !== 'AbortError') {
        this.showError(error);
      }
    }
  }

  private handleKeyboard = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        this.highlightNext();
        break;
      case 'ArrowUp':
        this.highlightPrevious();
        break;
      case 'Enter':
        this.selectHighlighted();
        break;
      case 'Escape':
        this.hideResults();
        break;
    }
  };

  private showResults(results: SearchResult[]) {
    // Highlight matching text
    const html = results.map(result => `
      <li class="autocomplete-item" data-id="${result.id}">
        ${this.highlightMatch(result.text, this.inputElement.value)}
      </li>
    `).join('');

    this.resultsContainer.innerHTML = html;
    this.resultsContainer.style.display = 'block';
  }
}
```

**Đánh đổi:**
Debounce giảm số request nhưng thêm độ trễ cảm nhận; cache kết quả làm gõ lùi lại thấy ngay nhưng có thể trả về dữ liệu cũ. Và gợi ý hiển thị lịch sử tìm kiếm thì tiện nhưng là dữ liệu cá nhân, phải xoá được. Bài toán autocomplete là chuỗi đánh đổi giữa tức thời, chính xác và tiết kiệm.

---

### Câu 14: Đáp án D

**Giải thích:**
Data table architecture:

```tsx
// Composable design
interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  // Controlled modes
  sorting?: SortingState;
  onSortingChange?: (sorting: SortingState) => void;
  pagination?: PaginationState;
  onPaginationChange?: (pagination: PaginationState) => void;
  // Features
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enablePagination?: boolean;
  enableVirtualization?: boolean;
  // Server-side
  serverSide?: boolean;
  totalCount?: number;
  loading?: boolean;
}

function DataTable<T>({
  data,
  columns,
  serverSide = false,
  enableVirtualization = false,
  ...props
}: TableProps<T>) {
  // Use TanStack Table for headless logic
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: serverSide ? undefined : getSortedRowModel(),
    getFilteredRowModel: serverSide ? undefined : getFilteredRowModel(),
    getPaginationRowModel: serverSide ? undefined : getPaginationRowModel(),
  });

  const { rows } = table.getRowModel();

  return (
    <div className="table-container">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead
                  key={header.id}
                  sortable={header.column.getCanSort()}
                  sorted={header.column.getIsSorted()}
                  onSort={header.column.getToggleSortingHandler()}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody virtualized={enableVirtualization} rowCount={rows.length}>
          {rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {props.enablePagination && <TablePagination table={table} />}
    </div>
  );
}
```

**Đánh đổi:**
Thiết kế ghép mảnh cho phép dùng lại từng phần và tuỳ biến sâu, nhưng người dùng phải viết nhiều hơn và dễ ghép sai. API một khối thì dùng nhanh nhưng mọi nhu cầu ngoài dự kiến đều phải thêm props, và bảng dữ liệu là nơi nhu cầu ngoài dự kiến nhiều nhất. Nhiều thư viện chọn đường giữa: lõi headless cộng một bản dựng sẵn.

---

### Câu 15: Đáp án A

**Giải thích:**
Form builder architecture:

```typescript
// Schema-driven form
interface FormSchema {
  fields: FieldConfig[];
  validation?: ValidationRule[];
  conditionalLogic?: ConditionalRule[];
}

interface FieldConfig {
  id: string;
  type: FieldType;
  label: string;
  required?: boolean;
  defaultValue?: any;
  options?: SelectOption[];
  validation?: FieldValidation[];
}

// Field type registry
const fieldRegistry = {
  text: TextInput,
  number: NumberInput,
  select: SelectInput,
  checkbox: CheckboxInput,
  date: DatePicker,
  file: FileUpload,
  // Custom fields can be registered
};

// Dynamic form renderer
function FormBuilder({ schema, onSubmit }: FormBuilderProps) {
  const form = useForm({
    defaultValues: buildDefaultValues(schema),
    resolver: buildResolver(schema.validation),
  });

  const visibleFields = useConditionalLogic(schema, form.watch());

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {visibleFields.map(field => {
        const FieldComponent = fieldRegistry[field.type];

        if (!FieldComponent) {
          console.warn(`Unknown field type: ${field.type}`);
          return null;
        }

        return (
          <FieldComponent
            key={field.id}
            {...field}
            control={form.control}
            errors={form.formState.errors}
          />
        );
      })}

      <button type="submit">Submit</button>
    </form>
  );
}

// Validation rules engine
function buildResolver(rules?: ValidationRule[]) {
  return async (values: Record<string, any>) => {
    const errors: Record<string, { message: string }> = {};

    for (const rule of rules || []) {
      const fieldValue = values[rule.field];
      const isValid = await validateRule(rule, fieldValue, values);

      if (!isValid) {
        errors[rule.field] = { message: rule.message };
      }
    }

    return { values, errors };
  };
}
```

**Đánh đổi:**
Form theo lược đồ cho phép sinh giao diện từ cấu hình, rất mạnh khi người không lập trình cần tự tạo form. Cái giá là mọi thứ ngoài lược đồ đều khó — bố cục đặc biệt, phụ thuộc chéo phức tạp, thành phần tuỳ biến. Và lỗi chuyển từ lúc biên dịch sang lúc chạy, vì lược đồ chỉ được kiểm khi thực thi.

---

### Câu 16: Đáp án C

**Giải thích:**
Wizard khác form dài ở chỗ người dùng được đi tới đi lui. Điều đó buộc state phải sống ở cấp wizard chứ không nằm trong từng step — step bị unmount mà dữ liệu vẫn còn. Validate theo từng step là thứ chặn người dùng mang lỗi sang bước sau. Lưu nháp vào `sessionStorage` hoặc server là để đóng nhầm tab không mất 10 phút vừa nhập.

**Đánh đổi:** state tập trung làm các step dính vào nhau — thêm một step là phải sửa hình dạng state dùng chung, và mọi step cùng re-render nếu không tách selector. Nếu các step thực sự độc lập và ngắn, phương án A đơn giản hơn hẳn.

Phương án D không sai về nguyên tắc: với wizard 2–3 bước, đưa state lên URL cho ngay nút back của trình duyệt và link chia sẻ được. Nhưng URL bị ghi vào log server, lịch sử duyệt web và Referer header — không đặt dữ liệu cá nhân ở đó, và URL có giới hạn độ dài.

A tạo bản ghi dở dang trên server mỗi lần người dùng bỏ ngang, phải có việc dọn dẹp. B thì mọi field vẫn được mount và validate cuối cùng, mất đúng cái lợi của wizard là chia nhỏ gánh nặng nhập liệu.

---

### Câu 17: Đáp án B

**Giải thích:**
Bốn mảnh ghép, mỗi mảnh giải một việc khác nhau. Service Worker chặn được tầng network nên mở app lúc offline vẫn ra giao diện. IndexedDB giữ dữ liệu có cấu trúc, bất đồng bộ và dung lượng lớn. Hàng đợi mutation là thứ biến app từ *đọc được khi offline* thành *offline-first* — người dùng ghi được, thao tác xếp hàng, có mạng thì gửi. Và ngay khi chấp nhận ghi lúc offline thì xung đột là chuyện chắc chắn xảy ra, phải chọn cách xử lý từ đầu.

**Đánh đổi:** phần đắt nhất là giải quyết xung đột. Lấy bản ghi sau cùng thì rẻ nhưng mất dữ liệu của người kia. Gộp theo từng trường hoặc dùng CRDT thì giữ được nhưng tốn rất nhiều công. Chọn theo câu hỏi: hai người có sửa cùng một bản ghi không? Nếu không, lấy bản sau cùng là đủ.

A sai vì `localStorage` là API đồng bộ nên chặn luồng chính, chỉ chứa chuỗi, và giới hạn khoảng 5MB. C là *chịu được offline* chứ không phải offline-first, và `navigator.onLine` nói dối — nối wifi ở quán cà phê chưa đăng nhập thì nó vẫn báo true. D không dùng được cho POST, mà cũng không xếp hàng được thao tác ghi.

---

### Câu 18: Đáp án D

**Giải thích:**
Vấn đề gốc là hai người gõ cùng lúc vào cùng một chỗ. OT và CRDT là hai lời giải cho đúng việc đó: biến thao tác của người này qua hệ quy chiếu đã đổi bởi người kia, sao cho mọi bản sao hội tụ về cùng một kết quả.

**Đánh đổi giữa hai cách:** OT cần một server đứng giữa để xếp thứ tự thao tác, dữ liệu gọn nhưng hàm transform rất khó viết đúng — Google Docs mất nhiều năm mới ổn định. CRDT hội tụ được mà không cần trọng tài, dễ suy luận hơn, nhưng mang theo metadata phình dần theo lịch sử sửa, tài liệu dùng lâu sẽ nặng.

Con trỏ người khác và lịch sử phiên bản không phải trang trí: thấy người khác đang ở đâu thì người dùng tự tránh nhau, còn lịch sử là đường lùi khi thuật toán hợp nhất ra kết quả không như mong đợi.

A đúng về mặt kỹ thuật nhưng hỏng trải nghiệm ngay khi có người thứ hai. B là lấy bản sau cùng, tức là xoá thẳng những gì người kia vừa gõ. C dùng được cho những lần commit rời rạc, không dùng được cho từng phím gõ.

---

### Câu 19: Đáp án A

**Giải thích:**
WebSocket vì chat cần hai chiều và độ trễ thấp. Optimistic update là thứ làm nút gửi có cảm giác tức thì: hiện tin ngay với id tạm phía client, khi server trả về thì khớp lại bằng id đó. Ảo hoá danh sách là bắt buộc vì lịch sử chat không có giới hạn trên.

**Đánh đổi:** optimistic update bắt buộc phải có đường lùi. Gửi hỏng thì tin đó phải chuyển sang trạng thái lỗi cho gửi lại, chứ không được lặng lẽ biến mất. Và phải có id tạm ổn định, nếu không lúc server trả về sẽ thành hai tin trùng nhau. Bỏ qua hai chi tiết này là lỗi hay gặp nhất khi làm chat.

C không hẳn sai: SSE nhận tin rất tốt, nhẹ hơn WebSocket và tự kết nối lại. Nhưng SSE chỉ có một chiều server đến client, nên vẫn phải gửi tin bằng HTTP POST — thành kiến trúc lai. Chọn được khi phần lớn lưu lượng là chiều nhận.

B tốn request mà vẫn trễ tới 2 giây, lại render lại cả danh sách. D làm bộ nhớ phình theo lịch sử, phòng chat cũ là treo máy.

---

### Câu 20: Đáp án C

**Giải thích:**
Cái lợi chính là cách ly: một widget gọi API chậm hoặc lỗi thì phần còn lại vẫn hiện. Và nhịp làm mới khác nhau theo bản chất dữ liệu — ô "doanh thu hôm nay" cần 30 giây một lần, ô "tổng quan năm" một giờ một lần là thừa.

**Đánh đổi:** N widget là N request. Dashboard 20 ô sẽ tạo ra một đợt request đồng loạt, ăn hết giới hạn kết nối của trình duyệt và làm chậm chính nó. Cách dung hoà thường dùng là gom lại ở tầng BFF: client gọi một lần, server tự fan-out rồi trả về theo từng phần dưới dạng stream. Nên phương án A không sai về ý tưởng, nó chỉ sai khi áp dụng tuyệt đối — gom request tốt, nhưng đừng để một truy vấn chậm giữ toàn bộ dashboard trắng trang.

B phá đúng lý do dashboard tồn tại là nhìn nhiều chỉ số cùng lúc. D mất hết tương tác, không chọn được khoảng thời gian, không đọc được bằng trình đọc màn hình, và không cho phép sao chép số liệu.

---

## Phần 3: Architecture Patterns

### Câu 21: Đáp án A

**Giải thích:**
Micro-frontends use cases:

**When to use:**
- Large organizations với multiple teams
- Need independent deployment cycles
- Different tech requirements per domain
- Clear domain boundaries

**When NOT to use:**
- Small teams (< 10 developers)
- Tightly coupled domains
- Performance-critical apps (overhead)
- Simple applications

```
┌────────────────────────────────────────────────────────┐
│                    Container App                        │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐        │
│  │  Team A    │ │  Team B    │ │  Team C    │        │
│  │  (React)   │ │  (Vue)     │ │  (Angular) │        │
│  │  Products  │ │  Cart      │ │  Checkout  │        │
│  └────────────┘ └────────────┘ └────────────┘        │
│                                                        │
│  ┌─────────────────────────────────────────────────┐  │
│  │              Shared Dependencies                  │  │
│  │  - Design System                                  │  │
│  │  - Authentication                                 │  │
│  │  - Routing                                        │  │
│  └─────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

**Đánh đổi:**
Micro-frontend cho các đội phát hành độc lập, đúng khi tổ chức lớn và các phần thật sự tách bạch. Nhưng nó nhân bản chi phí: mỗi mảnh mang theo runtime riêng nên tổng dung lượng tăng, chia sẻ state giữa các mảnh trở nên khó, và trải nghiệm dễ mất nhất quán. Với dưới ba đội thì chi phí này gần như luôn lớn hơn lợi ích.

**Tham khảo:** [Micro Frontends](https://micro-frontends.org/)

---

### Câu 22: Đáp án B

**Giải thích:**
State management decision matrix:

| Criteria | Local State | Context | Redux/Zustand | React Query |
|----------|-------------|---------|---------------|-------------|
| Component state | ✅ | ❌ | ❌ | ❌ |
| Shared UI state | ❌ | ✅ | ✅ | ❌ |
| Complex state logic | ❌ | ❌ | ✅ | ❌ |
| Server state | ❌ | ❌ | ⚠️ | ✅ |
| DevTools | ❌ | ❌ | ✅ | ✅ |
| Bundle size | 0KB | 0KB | ~2-15KB | ~12KB |

**Recommendations:**
- **Server state:** React Query / SWR / Apollo
- **Client state:** Zustand / Jotai (simple), Redux Toolkit (complex)
- **Form state:** React Hook Form / Formik
- **URL state:** React Router / nuqs

**Đánh đổi:**
Tiêu chí chọn đúng nhưng thứ tự quan trọng: mức độ quen thuộc của đội thường thắng mọi tiêu chí kỹ thuật khác, vì công cụ tốt mà không ai dùng đúng thì tệ hơn công cụ thường mà cả đội thạo. Và phần lớn ứng dụng không cần store toàn cục — tách server state ra cho React Query rồi mới xem phần còn lại có đáng một thư viện không.

---

### Câu 23: Đáp án D

**Giải thích:**
Lý do tách tầng không phải cho gọn mà là để những việc lặp lại chỉ viết một lần: gắn token, làm mới token khi gặp 401, thử lại khi lỗi mạng, ghi log, huỷ request cũ. Kiểu dữ liệu ràng buộc bắt được lúc build khi backend đổi hợp đồng, thay vì để người dùng gặp `undefined` lúc chạy.

**Đánh đổi:** thêm một lớp là thêm một chặng khi debug, và lớp đó rất dễ phình. Dấu hiệu hỏng là component bắt đầu truyền đủ loại tuỳ chọn riêng xuống tầng API — lúc đó lớp trừu tượng đang rò rỉ. Giữ nó mỏng: chỉ lo chuyện vận chuyển, không nhét logic nghiệp vụ vào.

B là bản rút gọn của D và dùng tốt cho dự án nhỏ, nhưng thiếu chỗ móc cho interceptor nên việc làm mới token sẽ lại rải ra khắp nơi. C nhầm tầng: GraphQL là lựa chọn thiết kế API phía server, chọn nó rồi thì client vẫn cần một tầng lo cache, lỗi và xác thực. A gọn cho một hai chỗ, nhưng khi có 40 chỗ gọi API thì mỗi lần đổi cách xử lý lỗi là sửa 40 nơi.

---

### Câu 24: Đáp án B

**Giải thích:**
Giá trị cốt lõi của feature flag là đổi hành vi mà không cần deploy. Công tắc tắt nhanh là phần quan trọng nhất: tính năng mới gây sự cố lúc 2 giờ sáng thì tắt trong 10 giây, thay vì chờ một vòng build và deploy. Bật dần theo phần trăm và phân nhóm là thứ biến việc phát hành thành có kiểm soát.

**Đánh đổi lớn nhất là nợ tích luỹ.** Mỗi cờ nhân đôi số nhánh code phải kiểm thử, và cờ thì không tự chết. Một codebase có 80 cờ đang sống thì về lý thuyết có 2^80 tổ hợp trạng thái, thực tế nghĩa là không ai còn dám xoá nhánh nào. Cách chữa là quy định từ đầu: mỗi cờ có người chịu trách nhiệm và hạn xoá, quá hạn thì hoặc gỡ hoặc chuyển thành cấu hình chính thức.

A hỏng đúng chỗ cờ sinh ra để giải quyết: biến môi trường cố định lúc build nên đổi là phải build và deploy lại. C là vấn đề mà cờ giải, vì nhánh sống lâu thì merge càng ngày càng đau. D không có điều khiển tập trung nên không tắt được cho tất cả người dùng khi có sự cố.

---

### Câu 25: Đáp án A

**Giải thích:**
Thư viện component chỉ là một tầng. Thiếu design token thì không đổi theme được vì màu nằm rải trong từng component. Thiếu tài liệu thì không ai dùng, đội product tự viết component riêng và hệ thống chết dần. Thiếu quy tắc phiên bản thì bên dùng không dám nâng cấp vì không biết bản mới phá cái gì. Thiếu chuẩn accessibility thì mỗi lần dùng lại phải tự lo, đúng cái mà hệ thống sinh ra để gánh hộ.

**Đánh đổi:** một design system đầy đủ cần người duy trì riêng. Với một sản phẩm và một đội, chi phí đó không hoàn lại được — một thư mục component dùng chung là đủ. Nó chỉ đáng khi có nhiều đội cần thống nhất giao diện và cần phát hành độc lập theo nhịp riêng.

B, C và D đều là một lớp của A. Riêng C là chỗ hay lẫn nhất: có token trong Figma mà không có đường đồng bộ sang code thì hai bên trôi khỏi nhau sau vài tháng.

---

### Câu 26: Đáp án C

**Giải thích:**
Yếu tố quyết định là **thay đổi nguyên tử xuyên package**. Sửa một component dùng chung mà ba nơi đang dùng nó phải sửa theo: ở polyrepo là ba pull request, một vòng publish phiên bản, và một khoảng thời gian các repo không khớp nhau. Ở monorepo là một commit, CI kiểm cả ba nơi cùng lúc.

**Đánh đổi:** monorepo không làm chi phí biến mất mà dời nó sang công cụ. CI bắt buộc phải biết chỉ build lại phần đã đổi, nếu không mỗi commit là build toàn bộ. Phân quyền cũng thô hơn, khó giới hạn ai được sửa gì. Đổi lại, polyrepo giữ từng repo đơn giản nhưng làm việc nâng cấp code dùng chung chậm và dễ bỏ sót.

D nhầm nguyên nhân: chi phí CI đi theo khối lượng code và chất lượng cache, không theo số người. Với cache từ xa, monorepo hàng trăm người vẫn chạy nhanh. A và B đều là quy tắc cứng cho một quyết định vốn phụ thuộc mức độ phụ thuộc giữa các dự án.

---

### Câu 27: Đáp án C

**Giải thích:**
Rendering strategy selection:

| Strategy | Use Case | SEO | Initial Load | Interactivity |
|----------|----------|-----|--------------|---------------|
| **CSR** | Dashboards, authenticated apps | ❌ | Slow | Fast |
| **SSR** | Dynamic content + SEO | ✅ | Fast | Medium |
| **SSG** | Blogs, docs, marketing | ✅ | Fastest | Fast |
| **ISR** | E-commerce, news | ✅ | Fast | Fast |

```jsx
// Next.js examples

// SSG - Static Generation
export async function getStaticProps() {
  const posts = await fetchPosts();
  return { props: { posts } };
}

// SSR - Server-side Rendering
export async function getServerSideProps(context) {
  const user = await fetchUser(context.params.id);
  return { props: { user } };
}

// ISR - Incremental Static Regeneration
export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: { products },
    revalidate: 60 // Regenerate every 60 seconds
  };
}

// CSR - Client-side only
function Dashboard() {
  const { data, isLoading } = useQuery('dashboard', fetchDashboard);
  // ...
}
```

**Đánh đổi:**
SSR cho SEO và nội dung hiện sớm nhưng tốn máy chủ và thêm một hệ thống phải vận hành. SSG rẻ nhất và nhanh nhất nhưng mỗi lần đổi nội dung là dựng lại, không hợp với dữ liệu thay đổi liên tục. CSR đơn giản nhất về hạ tầng nhưng trả giá bằng trang trắng ban đầu. Thực tế hiếm khi chọn một: phần lớn ứng dụng trộn cả ba theo từng route.

---

### Câu 28: Đáp án D

**Giải thích:**
Hình tháp phản ánh hai thứ cùng tăng theo tầng: chi phí chạy và độ dao động. Một unit test hỏng chỉ rõ hàm nào sai; một E2E hỏng chỉ nói "luồng thanh toán lỗi" và mất nửa ngày để biết lỗi ở đâu. Càng lên cao càng chậm phản hồi và càng khó khoanh vùng.

**Đánh đổi:** với frontend, hình tháp nghiêm ngặt không phải lúc nào cũng đúng. Unit test cho component thuần hiển thị thường kiểm tra chi tiết cài đặt chứ không kiểm hành vi, nên sửa refactor là gãy test dù chức năng không đổi. Nhiều đội chuyển sang hình "chiếc cúp" — tầng integration dày hơn tầng unit — vì phần lớn lỗi frontend nằm ở chỗ các mảnh ghép lại với nhau, không nằm trong từng mảnh.

A cho tín hiệu chậm và hay đỏ giả, đội sẽ bắt đầu bỏ qua kết quả CI. B bỏ lọt đúng loại lỗi hay xảy ra nhất. C tốn nhất ở tầng đắt nhất mà không đổi lại được tương xứng.

---

### Câu 29: Đáp án B

**Giải thích:**
Ba mảnh phải có đủ mới dùng được. Không có source map thì stack trace của bundle đã minify chỉ là `a.js:1:28471`, vô giá trị. Không có số hiệu bản build thì không biết bản vá đã lên hay chưa, và lỗi cũ vẫn chảy về làm nhiễu. Không có ngữ cảnh người dùng và trình duyệt thì không tái hiện được, mà phần lớn lỗi frontend chỉ xảy ra trên một loại thiết bị.

**Đánh đổi:** source map để lộ mã nguồn, nên đẩy riêng lên dịch vụ theo dõi chứ đừng phục vụ công khai từ CDN. Và lượng lỗi tăng theo lưu lượng, một vòng lặp lỗi có thể bắn hàng triệu sự kiện trong vài phút — phải lấy mẫu và đặt trần, nếu không là vỡ hoá đơn.

C mới làm nửa việc: Error Boundary bắt được lỗi và giữ cho trang không trắng, nhưng bản thân nó không báo cho ai. Nó là phần giao diện, cần gắn thêm phần gửi báo cáo. A và D đều phụ thuộc vào việc người dùng chịu khó báo, mà đa số họ chỉ lặng lẽ rời đi.

---

### Câu 30: Đáp án A

**Giải thích:**
Thứ tự quan trọng ngang nội dung: xếp phép kiểm rẻ lên trước để một lỗi gõ sai bị chặn sau 30 giây thay vì sau 12 phút. Lint và kiểm tra kiểu chạy trong vài giây, E2E chạy cuối.

Hai bước hay bị bỏ mà đáng giá nhất: **phân tích kích thước bundle** là thứ chặn được tình huống một pull request làm bundle tăng 300KB mà không ai biết — đặt ngưỡng và cho CI đỏ khi vượt. **Bản xem trước cho mỗi pull request** đổi việc review từ đọc diff sang bấm thử, bắt được lỗi giao diện mà không test nào bắt được.

**Đánh đổi:** chạy đủ bộ E2E trên mọi pull request thì chậm và hay đỏ giả, đội sẽ bắt đầu bấm merge bỏ qua. Cách dung hoà phổ biến là chạy một tập E2E rút gọn cho luồng quan trọng ở pull request, còn bộ đầy đủ chạy hằng đêm hoặc trước khi phát hành.

B đẩy việc kiểm cho người, và người sẽ quên. C đốt phút CI cho rất ít tín hiệu thêm. D bỏ mất chỗ để phát hiện lỗi trước khi người dùng thật gặp.

---

## Phần 4: Scenario-based

### Câu 31: Đáp án A

**Giải thích:**
Legacy migration strategy (Strangler Fig Pattern):

```
Phase 1: Wrap                Phase 2: Migrate              Phase 3: Complete
┌──────────────┐            ┌──────────────┐              ┌──────────────┐
│   Wrapper    │            │   Wrapper    │              │              │
│  ┌────────┐  │            │  ┌────────┐  │              │   Modern     │
│  │ React  │  │            │  │ React  │  │              │    App       │
│  │  App   │  │            │  │  App   │  │              │              │
│  └────────┘  │            │  └───┬────┘  │              │              │
│  ┌────────┐  │            │      │       │              │              │
│  │ jQuery │  │            │  ┌───▼────┐  │              │              │
│  │ Legacy │  │            │  │  Less  │  │              │              │
│  └────────┘  │            │  │ jQuery │  │              │              │
└──────────────┘            └──────────────┘              └──────────────┘
```

**Steps:**
1. **Assess:** Map dependencies, identify high-value areas
2. **Setup:** Configure modern tooling alongside legacy
3. **Bridge:** Create communication layer between old and new
4. **Migrate incrementally:** Start with leaf components
5. **Remove legacy:** Delete old code as features migrate

```javascript
// Bridge pattern example
// legacy-bridge.js
window.LegacyBridge = {
  emit(event, data) {
    window.dispatchEvent(new CustomEvent(`legacy:${event}`, { detail: data }));
  },
  on(event, callback) {
    window.addEventListener(`react:${event}`, (e) => callback(e.detail));
  }
};

// In React
useEffect(() => {
  const handler = (e) => setData(e.detail);
  window.addEventListener('legacy:dataUpdate', handler);
  return () => window.removeEventListener('legacy:dataUpdate', handler);
}, []);

// Communicate back
window.dispatchEvent(new CustomEvent('react:ready', { detail: { version: '1.0' } }));
```

**Đánh đổi:**
Strangler fig cho phép chuyển dần mà vẫn giao hàng được, nhưng nghĩa là hai hệ thống cùng sống trong một thời gian dài — hai bộ công cụ, hai phong cách, và chỗ giáp ranh là nơi lỗi tập trung. Rủi ro lớn nhất không phải kỹ thuật mà là dừng giữa chừng: khi có việc gấp hơn, phần còn lại của di trú bị bỏ lại vĩnh viễn.

---

### Câu 32: Đáp án A

**Giải thích:**
Production incident response:

```
┌─────────────────────────────────────────────────────────────┐
│                    INCIDENT RESPONSE FLOW                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  1. DETECT          2. ASSESS           3. COMMUNICATE       │
│  ┌─────────┐        ┌─────────┐         ┌─────────┐         │
│  │Monitor- │───────▶│Severity │────────▶│Status   │         │
│  │ing Alert│        │Check    │         │Page     │         │
│  └─────────┘        └─────────┘         └─────────┘         │
│                                               │               │
│  4. INVESTIGATE     5. MITIGATE         6. RESOLVE          │
│  ┌─────────┐        ┌─────────┐         ┌─────────┐         │
│  │Check    │◀───────│Rollback │◀────────│Fix &    │         │
│  │Recent   │        │OR       │         │Deploy   │         │
│  │Changes  │        │Hotfix   │         │         │         │
│  └─────────┘        └─────────┘         └─────────┘         │
│                                               │               │
│  7. POST-MORTEM                                              │
│  ┌───────────────────────────────────────────┐              │
│  │ - Root cause analysis                      │              │
│  │ - Prevention measures                      │              │
│  │ - Documentation                            │              │
│  └───────────────────────────────────────────┘              │
└─────────────────────────────────────────────────────────────┘
```

**Checklist:**
1. Check error monitoring (Sentry, LogRocket)
2. Review recent deployments
3. Check infrastructure (CDN, API, third-party services)
4. Assess impact and communicate
5. Decide: rollback vs hotfix
6. Execute fix
7. Post-mortem và prevent future occurrences

**Đánh đổi:**
Nhìn giám sát trước khi đoán là đúng thứ tự, nhưng chỉ làm được nếu đã có giám sát từ trước — dựng nó trong lúc đang có sự cố là quá muộn. Và khi đã xác định do bản deploy gần nhất, rollback nhanh hơn là sửa, dù nghĩa là mất phần việc đã làm. Ưu tiên khôi phục cho người dùng trước, tìm nguyên nhân sau.

---

### Câu 33: Đáp án C

**Giải thích:**
Chỗ được báo là triệu chứng, không phải bệnh. Nếu một nơi dùng `dangerouslySetInnerHTML` mà không làm sạch dữ liệu, gần như chắc chắn còn nơi khác làm y hệt — người viết chỗ đó không biết là sai thì đã viết nhiều lần. Bước rà soát cùng kiểu code là bước phân biệt xử lý sự cố với vá tạm. Test chặn tái diễn là thứ giữ cho lỗi không quay lại sau vài tháng khi người khác sửa vào đúng chỗ đó.

**Đánh đổi:** "đánh giá trước" và "vá ngay" mâu thuẫn nhau khi bản vá có rủi ro. Với XSS thì bản vá thường nhỏ mà phơi nhiễm đang diễn ra liên tục, nên vá nhanh là đúng. Nhưng với lỗ hổng nằm trong luồng xác thực, một bản vá vội có thể gây sự cố lớn hơn chính lỗ hổng — lúc đó đánh giá kỹ rồi vá có kiểm soát mới đúng.

B sửa được ca bệnh, bỏ qua cả lớp bệnh. D nhầm ở chỗ không thấy dấu vết khai thác không có nghĩa là chưa bị khai thác — XSS thường không để lại log phía server. A sai mức ưu tiên: lỗ hổng bảo mật đang mở không xếp hàng cùng tính năng mới.

---

### Câu 34: Đáp án D

**Giải thích:**
Điểm mấu chốt là **đo trước khi sửa**. Nợ kỹ thuật mà đội cảm thấy khó chịu nhất thường không phải nợ đang tốn tiền nhất. Thứ tốn thật hay nằm ở chỗ ít ai nhắc: build mất 8 phút, test hay đỏ giả nên phải chạy lại hai ba lần, môi trường staging dựng bằng tay. Cải thiện công cụ thường cho hiệu quả cao hơn viết lại code, mà rủi ro gần bằng không.

Giảm số việc làm dở song song là đòn bẩy nhanh nhất và không tốn gì: đội làm 8 việc cùng lúc thì thời gian chờ và chi phí chuyển ngữ cảnh ăn hết năng suất, dù mỗi người vẫn bận rộn.

**Đánh đổi:** tỉ lệ cố định, chẳng hạn 20% mỗi sprint, thì dễ lập kế hoạch và không phải thuyết phục lại mỗi lần, nhưng quá chậm khi có một nút thắt lớn chi phối tất cả. Một đợt tập trung dọn dẹp thì nhanh hơn nhưng dừng giao hàng và rất khó thuyết phục. Chọn theo hình dạng của vấn đề: chi phí rải đều thì dùng tỉ lệ cố định, chi phí dồn vào một chỗ thì dứt điểm chỗ đó.

A tiêu vào sức người và làm chất lượng tệ thêm, vòng lặp càng xấu. B là quan sát cũ của Brooks — thêm người vào dự án đang chậm làm nó chậm hơn, vì người cũ phải dừng lại để hướng dẫn. C là canh bạc: viết lại gần như luôn vượt thời gian dự tính, mà trong lúc đó sản phẩm đứng yên.

---

### Câu 35: Đáp án A

**Giải thích:**
API contract-first development:

```typescript
// 1. Define contract together
// api-contracts/user.ts
interface UserAPI {
  getUser: (id: string) => Promise<User>;
  updateUser: (id: string, data: UpdateUserDTO) => Promise<User>;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// 2. Create mock server
// mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/users/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        id: req.params.id,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user'
      })
    );
  }),

  rest.patch('/api/users/:id', async (req, res, ctx) => {
    const body = await req.json();
    return res(
      ctx.json({
        id: req.params.id,
        ...body
      })
    );
  })
];

// 3. Setup MSW in development
// src/mocks/browser.ts
import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

// 4. Develop frontend independently
function UserProfile({ userId }) {
  const { data: user, isLoading } = useQuery(
    ['user', userId],
    () => api.getUser(userId)
  );

  // Works with mock data during development
  // Seamlessly switches to real API when ready
}

// 5. Integration testing when API ready
describe('User API Integration', () => {
  beforeAll(() => {
    // Disable mocks for integration tests
    worker.stop();
  });

  it('fetches real user data', async () => {
    const user = await api.getUser('123');
    expect(user).toMatchSchema(UserSchema);
  });
});
```

**Đánh đổi:**
Thống nhất hợp đồng rồi dùng mock để chạy song song giúp hai đội không chặn nhau, nhưng mock sẽ lệch khỏi API thật nếu không có gì ràng buộc — nên hợp đồng phải là tài liệu máy đọc được như OpenAPI, và mock sinh ra từ đó, không viết tay. Và vẫn cần một buổi kiểm tra tích hợp thật trước khi phát hành.

---

## Phần 5: Quy mô tổ chức

### Câu 36: Đáp án B

**Giải thích:**
Vấn đề thật của i18n không phải dịch mà là **giữ các bản không lệch nhau**. Khoá theo không gian tên gắn với tính năng cho phép xoá cả cụm khi tính năng bị gỡ, thay vì để lại chuỗi chết mãi mãi. Tiếng gốc làm nguồn sự thật thì mọi ngôn ngữ khác so vào đó được, và CI phát hiện được khoá thiếu trước khi lên production.

**Đánh đổi:** khoá có cấu trúc thì bền nhưng khó đọc trong code — nhìn `checkout.payment.error.declined` không biết nó hiện ra chữ gì, phải mở file dịch. Đặt khoá theo chính câu tiếng gốc (phương án C) đọc ngay được, nhưng sửa một dấu phẩy trong câu gốc là mất toàn bộ bản dịch của khoá đó.

A không dùng được vì dịch máy sai ngữ cảnh và không kiểm soát được thuật ngữ sản phẩm. D làm chuỗi phụ thuộc mạng, trang sẽ nhấp nháy chữ khi tải, và mất luôn khả năng render ở server.

---

### Câu 37: Đáp án D

**Giải thích:**
Quy tắc số nhiều không phải đâu cũng hai dạng. Tiếng Việt và tiếng Nhật chỉ có một dạng, tiếng Anh có hai, tiếng Nga có ba, tiếng Ả Rập có sáu. `Intl.PluralRules` mang sẵn bảng quy tắc của mọi ngôn ngữ, nên code không phải biết. Tương tự, thứ tự ngày tháng, dấu phân cách hàng nghìn và ký hiệu tiền tệ đều khác nhau theo vùng — `Intl` có sẵn trong trình duyệt và không tốn byte bundle nào.

**Đánh đổi:** `Intl` chạy lúc render nên có chi phí, và tạo mới đối tượng định dạng trong vòng lặp là lỗi hiệu năng hay gặp — nên tạo một lần rồi dùng lại. Ngoài ra kết quả khác nhau giữa các phiên bản trình duyệt và giữa Node với trình duyệt, nên đừng so khớp chuỗi đã định dạng trong test.

A đúng cho tiếng Anh và sai cho phần lớn ngôn ngữ còn lại. B tạo ra câu sai ngữ pháp ngay khi ngôn ngữ đích đặt số sau danh từ.

---

### Câu 38: Đáp án A

**Giải thích:**
Thuộc tính logic mô tả vị trí theo *hướng đọc* chứ không theo *hướng màn hình*, nên cùng một khai báo chạy đúng cho cả hai chiều. Đặt `dir` ở thẻ gốc là đủ để trình duyệt tự lật. Đây là cách duy nhất không phải duy trì hai bộ style.

**Đánh đổi:** thuộc tính logic đọc khó hơn với người quen left/right, và một số thứ **không được lật**: số điện thoại, biểu đồ có trục thời gian, nút play của trình phát nhạc, logo thương hiệu. Nên vẫn cần chỗ để ghi đè thủ công cho những ngoại lệ đó.

B tạo ra hai bộ style phải giữ đồng bộ, lệch nhau chỉ sau vài tháng. C lật cả chữ và ảnh thành gương, không dùng được. D để chữ chạy ngược chiều trong một bố cục vẫn xuôi, kết quả rối hơn là không làm gì.

---

### Câu 39: Đáp án C

**Giải thích:**
Công cụ như Turborepo hoặc Nx dựng đồ thị phụ thuộc rồi chỉ chạy lại phần bị ảnh hưởng bởi thay đổi. Cache từ xa là phần quan trọng hơn: kết quả build của người này dùng lại được cho người khác và cho CI, nên cùng một commit không bao giờ bị build hai lần. Đây là thứ làm monorepo lớn vẫn chạy nhanh.

**Đánh đổi:** cache chỉ đúng khi khai báo đầu vào chính xác — quên khai một biến môi trường là cache trả về kết quả sai, và loại lỗi này cực kỳ khó tìm vì nó chỉ xuất hiện trên máy có cache. Và hạ tầng cache từ xa là một thứ nữa phải vận hành và trả tiền.

A để lỗi lọt tới nhánh chính, đúng chỗ đắt nhất để sửa. B là quay về polyrepo và mang theo bài toán đồng bộ phiên bản. D đổi thời gian CI lấy rủi ro production.

---

### Câu 40: Đáp án B

**Giải thích:**
Workspace protocol (`workspace:*`) cho trình quản lý gói biết lấy mã nguồn ngay trong repo thay vì tải từ registry. Nhờ đó sửa một package là các package dùng nó thấy ngay, và commit nguyên tử xuyên package hoạt động đúng như mong đợi. Khi thật sự phát hành ra ngoài thì công cụ như Changesets thay ký hiệu đó bằng số phiên bản thật.

**Đánh đổi:** vì luôn dùng bản mới nhất trong repo nên không thể có hai phiên bản khác nhau của cùng một package cùng tồn tại — nếu một đội cần bản cũ thì buộc phải nâng cấp theo, tức là mọi thay đổi phá vỡ đều đụng tới tất cả cùng lúc. Đó là mặt trái của chính lợi ích lớn nhất của monorepo.

A làm mất lợi thế của monorepo. C bỏ qua ranh giới package nên mọi thứ dính vào nhau và tree shaking không hoạt động. D tạo ra rác trong registry và làm chậm mọi thứ.

---

### Câu 41: Đáp án D

**Giải thích:**
Source map là thứ biến stack trace vô nghĩa thành số dòng trong mã nguồn thật. Đẩy riêng lên dịch vụ theo dõi thì vừa đọc được stack trace vừa không lộ mã nguồn ra công chúng. Số hiệu bản build là mảnh ghép hay bị quên: không có nó thì không biết lỗi đến từ bản nào, và bản vá đã lên hay chưa.

**Đánh đổi:** source map làm bước build chậm hơn và tốn dung lượng lưu trữ theo từng bản phát hành. Và chúng có thời hạn hữu dụng — giữ source map của bản deploy sáu tháng trước thường vô ích, nên cần chính sách dọn.

A để lộ toàn bộ mã nguồn cho bất kỳ ai mở DevTools. B làm bundle lớn gấp nhiều lần, trả giá bằng trải nghiệm của mọi người dùng để tiện cho lập trình viên. C là công việc thủ công không bao giờ phủ hết.

---

### Câu 42: Đáp án A

**Giải thích:**
Đo tổng hợp chạy trong điều kiện cố định nên lặp lại được và hợp để chặn hồi quy trong CI, nhưng nó không biết gì về thiết bị thật, mạng thật và hành vi thật của người dùng. Dữ liệu người dùng thật cho phân vị 75 trên tập người dùng thực — chính là con số Google dùng để xếp hạng, và cũng là con số phản ánh điều anh nghe được từ người dùng.

**Đánh đổi:** dữ liệu thật đến chậm, cần đủ lưu lượng mới có ý nghĩa thống kê, và không chỉ ra nguyên nhân — nó nói trang chậm chứ không nói vì sao. Đo tổng hợp thì ngược lại: có ngay, tái lập được, chỉ ra được nguyên nhân cụ thể. Hai loại bổ sung nhau, dùng một loại là mù một nửa.

B là chọn số liệu đẹp rồi tự lừa mình. C bỏ qua đúng tín hiệu quan trọng nhất. D thu hẹp khoảng cách nhưng vẫn là một điểm đo duy nhất.

---

### Câu 43: Đáp án C

**Giải thích:**
React phải là singleton, nếu không hook sẽ hỏng ngay — hai bản React trong một trang nghĩa là hai bộ dispatcher và lỗi "invalid hook call". Module Federation cho khai báo phụ thuộc dùng chung kèm khoảng phiên bản chấp nhận được, và chọn bản phù hợp lúc chạy.

**Đánh đổi:** đây chính là điểm yếu cốt lõi của micro-frontend. Chia sẻ phụ thuộc thì tiết kiệm dung lượng nhưng buộc các đội phải nâng cấp đồng bộ — tức là mất đúng sự độc lập mà micro-frontend sinh ra để có. Không chia sẻ thì thật sự độc lập nhưng người dùng tải ba bản React, và với React thì còn hỏng chức năng chứ không chỉ nặng.

A hỏng hook. B là cách làm thủ công của chính C nhưng không có kiểm soát phiên bản. D có thể là câu trả lời đúng nếu ba đội không thật sự cần phát hành độc lập.

---

### Câu 44: Đáp án B

**Giải thích:**
Khác biệt nằm ở kiến trúc chứ không phải tối ưu hoá. Vite để trình duyệt tự phân giải import, nên khởi động chỉ cần chuẩn bị các phụ thuộc trong `node_modules` bằng esbuild, còn mã nguồn của anh thì biên dịch theo yêu cầu từng file khi trình duyệt hỏi tới. Thời gian khởi động vì thế gần như không tăng theo kích thước dự án.

**Đánh đổi:** vì môi trường phát triển và môi trường production dùng hai cơ chế khác nhau — module ES gốc so với Rollup — nên có loại lỗi chỉ xuất hiện ở bản build. Đó là cái giá thật của mô hình này, và là lý do vẫn cần chạy bản production trong CI chứ không tin hoàn toàn vào dev server.

A sai nguyên nhân: esbuild viết bằng Go có góp phần nhưng không phải lý do chính. C không liên quan, cả hai đều không kiểm tra kiểu khi build. D thì Webpack cũng có cache trên đĩa.

---

### Câu 45: Đáp án D

**Giải thích:**
Quản lý không từ chối việc cải thiện hạ tầng, họ từ chối một khoản chi không có hình dạng. Build chậm 8 phút, chạy 15 lần một ngày, 6 người — là 12 giờ công mỗi ngày, tương đương một người rưỡi. Đặt cạnh hai tuần đầu tư thì phép tính tự nói. Thêm hoá đơn CI vào là có luôn con số tiền mặt.

**Đánh đổi:** cách này chỉ dùng được khi có số liệu, mà muốn có số liệu thì phải đo từ trước — bắt đầu đo lúc cần xin là đã muộn. Và quy mọi thứ ra tiền có mặt trái: những cải thiện khó đo như code dễ đọc hơn sẽ luôn thua trong cuộc so sánh này, dù chúng vẫn quan trọng.

A là lý lẽ kỹ thuật, không trả lời câu hỏi "đổi lại được gì". B mô tả triệu chứng chứ không mô tả chi phí. C làm mất niềm tin và khiến lần sau xin khó hơn.

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [Frontend Masters - System Design](https://frontendmasters.com/)
2. [Patterns.dev](https://www.patterns.dev/)
3. [System Design Primer](https://github.com/donnemartin/system-design-primer)
4. [React Patterns](https://reactpatterns.com/)
5. [Micro Frontends](https://micro-frontends.org/)
6. [Martin Fowler - Strangler Fig](https://martinfowler.com/bliki/StranglerFigApplication.html)
