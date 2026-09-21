# Câu Hỏi Phỏng Vấn Performance & Optimization
## Frontend Performance - Senior Level Focus

---

## 📚 MỤC LỤC
- [Phần 1: Web Vitals & Metrics](#phần-1-web-vitals--metrics)
- [Phần 2: JavaScript Performance](#phần-2-javascript-performance)
- [Phần 3: React Performance](#phần-3-react-performance)
- [Phần 4: Network & Loading](#phần-4-network--loading)
- [Phần 5: Rendering & Browser](#phần-5-rendering--browser)
- [Đáp Án Chi Tiết](#đáp-án-chi-tiết)

---

# PHẦN 1: WEB VITALS & METRICS

## Câu 1: Core Web Vitals
**Core Web Vitals bao gồm những metrics nào?**

- A) FCP, TTI, TBT
- B) TTFB, FMP, SI
- C) LCP, FID, CLS
- D) DCL, Load, FCP

---

## Câu 2: LCP (Largest Contentful Paint)
**LCP tốt được coi là bao nhiêu?**

- A) < 5.0 giây
- B) < 2.5 giây
- C) < 1.0 giây
- D) < 4.0 giây

---

## Câu 3: CLS (Cumulative Layout Shift)
**Nguyên nhân chính gây ra CLS cao?**

- A) Server response time chậm
- B) JavaScript execution time dài
- C) Images không có dimensions, late-loading content, dynamic injected content
- D) Large JavaScript bundles

---

## Câu 4: FID vs INP
**Sự khác biệt giữa FID (First Input Delay) và INP (Interaction to Next Paint)?**

- A) INP chỉ đo click events
- B) FID đo first interaction, INP đo overall interaction responsiveness
- C) Không có sự khác biệt
- D) FID accurate hơn INP

---

## Câu 5: TTFB
**TTFB (Time to First Byte) đo gì?**

- A) Thời gian parse HTML
- B) Thời gian từ request đến byte đầu tiên của response
- C) Thời gian render page
- D) Thời gian download tất cả resources

---

# PHẦN 2: JAVASCRIPT PERFORMANCE

## Câu 6: Main Thread Blocking
**Cách nào tốt nhất để tránh block main thread với heavy computation?**

- A) Sử dụng setTimeout với delay 0
- B) Sử dụng Promise.all
- C) Sử dụng Web Workers
- D) Sử dụng async/await

---

## Câu 7: Memory Management
**Đoạn code nào có thể gây memory leak?**

- A)
```javascript
function createHandler() {
  const data = new Array(1000000);
  return () => console.log('clicked');
}
element.addEventListener('click', createHandler());
```

- B)
```javascript
function createHandler() {
  const data = new Array(1000000);
  return () => console.log(data.length);
}
element.addEventListener('click', createHandler());
```

- C) Cả A và B
- D) Không có đoạn nào

---

## Câu 8: Event Delegation Performance
**Tại sao Event Delegation tốt hơn cho performance?**

- A) Tăng FCP
- B) Giảm số lượng event listeners, tiết kiệm memory
- C) Giảm JavaScript bundle size
- D) Tăng tốc độ event bubbling

---

## Câu 9: requestAnimationFrame
**Khi nào nên sử dụng requestAnimationFrame?**

- A) Cho tất cả async operations
- B) Thay thế setTimeout
- C) Cho API calls
- D) Cho animations và DOM updates cần sync với browser repaint

---

## Câu 10: Script Loading
**Sự khác biệt giữa `async` và `defer` trong script loading?**

- A) Cả hai đều block HTML parsing
- B) `async` execute ngay khi download xong, `defer` chờ HTML parsing xong
- C) `defer` execute ngay khi download xong, `async` chờ HTML parsing xong
- D) Không có sự khác biệt

---

# PHẦN 3: REACT PERFORMANCE

## Câu 11: Unnecessary Re-renders
**Cách nào giúp tránh unnecessary re-renders?**

- A) Sử dụng React.memo
- B) Sử dụng useMemo và useCallback appropriately
- C) Tránh inline objects/functions trong props
- D) Tất cả các đáp án trên

---

## Câu 12: React Profiler
**React Profiler đo những gì?**

- A) Memory usage
- B) Network requests
- C) Render time và commit phases
- D) Bundle size

---

## Câu 13: Virtualization
**Khi nào nên sử dụng virtualization (react-window, react-virtuoso)?**

- A) Chỉ cho infinite scroll
- B) Khi render large lists (100+ items) với complex components
- C) Cho tất cả lists
- D) Khi sử dụng pagination

---

## Câu 14: Code Splitting Impact
**Code splitting giúp improve metric nào nhất?**

- A) TTFB
- B) CLS
- C) FID
- D) TTI (Time to Interactive) và FCP

---

## Câu 15: State Management Performance
**Điều nào gây performance issues trong state management?**

- A) Storing too much data in global state
- B) Not normalizing data
- C) Re-rendering entire tree khi một phần state thay đổi
- D) Tất cả các đáp án trên

---

# PHẦN 4: NETWORK & LOADING

## Câu 16: Resource Hints
**Sự khác biệt giữa preload, prefetch, và preconnect?**

- A) preload: high priority current page, prefetch: low priority future navigation, preconnect: establish connection early
- B) Không có sự khác biệt
- C) Chỉ khác về browser support
- D) Tất cả đều load resources ngay lập tức

---

## Câu 17: Image Optimization
**Cách nào KHÔNG phải best practice cho image optimization?**

- A) Sử dụng modern formats (WebP, AVIF)
- B) Load tất cả images ở highest quality
- C) Lazy loading với `loading="lazy"`
- D) Responsive images với srcset

---

## Câu 18: HTTP/2 & HTTP/3
**Ưu điểm của HTTP/2 so với HTTP/1.1?**

- A) Multiplexing - multiple requests trên single connection
- B) Header compression
- C) Server push
- D) Tất cả các đáp án trên

---

## Câu 19: Caching Strategies
**Cache-Control header nào cho phép browser cache và revalidate?**

- A) `no-store`
- B) `no-cache`
- C) `max-age=0`
- D) B và C đều đúng

---

## Câu 20: Bundle Optimization
**Cách nào giúp giảm JavaScript bundle size?**

- A) Tree shaking
- B) Code splitting
- C) Minification và compression
- D) Tất cả các đáp án trên

---

# PHẦN 5: RENDERING & BROWSER

## Câu 21: Critical Rendering Path
**Thứ tự đúng của Critical Rendering Path?**

- A) DOM → Layout → Paint → CSSOM → Composite
- B) DOM → Paint → Layout → CSSOM → Composite
- C) DOM → CSSOM → Render Tree → Layout → Paint → Composite
- D) CSSOM → DOM → Paint → Layout → Composite

---

## Câu 22: Reflow vs Repaint
**Điều nào trigger reflow (layout)?**

- A) Changing `background-color`
- B) Changing `width` hoặc `height`
- C) Changing `opacity`
- D) Changing `visibility`

---

## Câu 23: CSS Containment
**CSS `contain` property giúp gì cho performance?**

- A) Không ảnh hưởng performance
- B) Isolate element's rendering, limit scope của layout/paint/style calculations
- C) Hide overflow content
- D) Create new stacking context

---

## Câu 24: will-change Property
**Khi nào KHÔNG nên sử dụng `will-change`?**

- A) Khi element sẽ animate
- B) Khi cần create new compositor layer
- C) Apply cho tất cả elements "just in case"
- D) Trước heavy visual changes

---

## Câu 25: Compositor-only Properties
**Properties nào có thể animate mà không trigger layout hoặc paint?**

- A) `width`, `height`, `margin`
- B) `padding`, `border`
- C) `transform`, `opacity`
- D) `top`, `left`, `right`, `bottom`

---

## Câu 26: Long Tasks
**Long Task được định nghĩa là task chạy hơn bao nhiêu ms?**

- A) 10ms
- B) 200ms
- C) 100ms
- D) 50ms

---

## Câu 27: Intersection Observer
**Ưu điểm của Intersection Observer so với scroll event listeners?**

- A) Asynchronous, không block main thread
- B) More accurate
- C) Better performance - browser optimized
- D) Tất cả các đáp án trên

---

## Câu 28: Service Worker Caching
**Service Worker caching strategy nào phù hợp cho static assets?**

- A) Stale While Revalidate
- B) Network First
- C) Cache First
- D) Network Only

---

## Câu 29: Font Loading
**Cách nào giúp tránh FOIT (Flash of Invisible Text)?**

- A) `font-display: swap`
- B) `font-display: block`
- C) Preload fonts
- D) A và C

---

## Câu 30: Performance Budget
**Performance budget thường bao gồm những metrics nào?**

- A) Bundle size limits
- B) Core Web Vitals thresholds
- C) Number of requests
- D) Tất cả các đáp án trên

---

---

# ĐÁP ÁN CHI TIẾT

## Phần 1: Web Vitals & Metrics

### Câu 1: Đáp án C - LCP, FID, CLS

**Giải thích:**
Core Web Vitals (Google's key metrics):
- **LCP (Largest Contentful Paint):** Loading performance - khi largest content element visible
- **FID (First Input Delay):** Interactivity - time từ first interaction đến browser response
- **CLS (Cumulative Layout Shift):** Visual stability - unexpected layout shifts

*Note: FID đang được thay thế bởi INP (Interaction to Next Paint) từ March 2024*

**Đánh đổi:**
Bộ ba này là bản lịch sử: từ tháng 3 năm 2024, **INP đã thay FID** trong Core Web Vitals. Nói "FID" trong phỏng vấn hôm nay sẽ bị hỏi lại ngay. Và cả ba chỉ số đều lấy ở phân vị 75 của lưu lượng thật, nên điểm Lighthouse chạy trên máy anh không phải con số Google dùng để xếp hạng.

**Tham khảo:** [web.dev - Core Web Vitals](https://web.dev/vitals/)

---

### Câu 2: Đáp án B - < 2.5 giây

**Giải thích:**
LCP thresholds:
- **Good:** ≤ 2.5s
- **Needs Improvement:** 2.5s - 4.0s
- **Poor:** > 4.0s

**Improve LCP:**
- Optimize server response time
- Eliminate render-blocking resources
- Optimize images
- Preload important resources

**Đánh đổi:**
Ngưỡng 2,5 giây đo ở phân vị 75 của người dùng thật, không phải số trên máy dev. Tối ưu vừa chạm ngưỡng rồi dừng là rủi ro: nếu phần lớn người dùng ở mạng chậm, phân vị 75 thật sẽ khác hẳn số anh nhìn thấy. Và LCP chỉ đo đúng phần tử lớn nhất — trang có thể đạt LCP đẹp mà vẫn cảm giác chậm vì nội dung quan trọng khác đến muộn.

**Tham khảo:** [web.dev - LCP](https://web.dev/lcp/)

---

### Câu 3: Đáp án C

**Giải thích:**
Common causes of CLS:
1. **Images without dimensions:** Browser doesn't know space to reserve
2. **Ads, embeds, iframes without dimensions**
3. **Dynamically injected content**
4. **Web fonts causing FOIT/FOUT**
5. **Actions waiting for network before updating DOM**

**Fix:**
```html
<!-- Always include width and height -->
<img src="image.jpg" width="640" height="480" alt="..." />

<!-- Or use aspect-ratio -->
<style>
img {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
}
</style>
```

**Đánh đổi:**
Đặt kích thước cố định cho ảnh và khung quảng cáo chữa được CLS nhưng tạo khoảng trống khi nội dung chưa về. Đó là đánh đổi có chủ ý: khoảng trống ổn định luôn tốt hơn nội dung nhảy dưới ngón tay người dùng. Dùng `aspect-ratio` thì giữ được chỗ mà vẫn co giãn. Riêng nội dung chèn ngay sau thao tác của người dùng không bị tính vào CLS, nên không cần né.

**Tham khảo:** [web.dev - CLS](https://web.dev/cls/)

---

### Câu 4: Đáp án B

**Giải thích:**
- **FID:** Measures delay của FIRST interaction only
- **INP:** Measures responsiveness của ALL interactions throughout page lifecycle
- INP là metric toàn diện hơn, captures overall interactivity

**Đánh đổi:**
INP khó đạt hơn FID nhiều, vì nó đo mọi tương tác suốt phiên chứ không chỉ lần đầu — trang qua FID dễ dàng vẫn có thể trượt INP. Cải thiện INP thường phải cắt nhỏ tác vụ dài và hoãn việc không khẩn, tức là đụng vào kiến trúc chứ không phải chỉnh vài chỗ.

**Tham khảo:** [web.dev - INP](https://web.dev/inp/)

---

### Câu 5: Đáp án B

**Giải thích:**
TTFB measures time from:
1. Request start
2. → DNS lookup
3. → TCP connection
4. → SSL handshake
5. → Server processing
6. → First byte of response

**Improve TTFB:**
- Use CDN
- Optimize server code
- Use caching
- Reduce redirects

**Đánh đổi:**
TTFB phần lớn nằm ở server và đường truyền nên frontend can thiệp được ít; CDN và cache ở biên là đòn bẩy chính. Nhưng TTFB tốt không đảm bảo LCP tốt: byte đầu về nhanh mà tài nguyên chặn render đến muộn thì người dùng vẫn nhìn trang trắng.

**Tham khảo:** [web.dev - TTFB](https://web.dev/ttfb/)

---

## Phần 2: JavaScript Performance

### Câu 6: Đáp án C - Web Workers

**Giải thích:**
- Web Workers run in separate thread
- Don't block main thread
- Perfect cho heavy computations

```javascript
// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: largeArray });
worker.onmessage = (e) => {
  console.log('Result:', e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};
```

**Alternatives:**
- `requestIdleCallback` cho low-priority tasks
- Breaking work into chunks với `setTimeout`

**Đánh đổi:**
Worker chạy ở luồng riêng nên không chặn giao diện, nhưng giao tiếp qua `postMessage` phải sao chép dữ liệu — truyền mảng lớn qua lại có khi tốn hơn chính phép tính. Dùng `Transferable` hoặc `SharedArrayBuffer` thì tránh được sao chép nhưng phức tạp hơn nhiều. Và worker không chạm được DOM, nên mọi kết quả vẫn phải quay về luồng chính để hiển thị.

**Tham khảo:** [MDN - Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

---

### Câu 7: Đáp án B

**Giải thích:**
- **Option A:** `data` không được reference trong closure → garbage collected
- **Option B:** `data` được reference trong closure → CANNOT be garbage collected

```javascript
// Memory leak - data array cannot be freed
function createHandler() {
  const data = new Array(1000000); // 1MB+
  return () => console.log(data.length); // References data
}
// Every call creates new handler holding 1MB
```

**Prevention:**
```javascript
// Only capture what you need
function createHandler() {
  const data = new Array(1000000);
  const length = data.length; // Capture only needed value
  return () => console.log(length);
}
```

**Đánh đổi:**
Closure là công cụ chính để đóng gói trạng thái riêng tư, nên "tránh closure" không phải lời khuyên đúng. Vấn đề chỉ xuất hiện khi closure sống lâu hơn dữ liệu nó giữ — handler gắn vào phần tử tồn tại suốt phiên, hoặc callback trong `setInterval` không bao giờ bị huỷ. Cách chữa là dọn dẹp đúng chỗ, không phải bỏ closure.

**Tham khảo:** [Chrome DevTools - Memory](https://developer.chrome.com/docs/devtools/memory-problems/)

---

### Câu 8: Đáp án B

**Giải thích:**
Event Delegation benefits:
1. **Fewer event listeners** → Less memory
2. **Works with dynamic elements** → No need to re-attach
3. **Single point of handling** → Easier maintenance

```javascript
// ❌ Bad: 1000 listeners
items.forEach(item => {
  item.addEventListener('click', handleClick);
});

// ✅ Good: 1 listener
container.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    handleClick(e);
  }
});
```

**Đánh đổi:**
Uỷ quyền sự kiện giảm số listener và tự áp dụng cho cả phần tử thêm sau, nhưng mỗi sự kiện phải chạy qua bước kiểm tra `event.target` — với sự kiện bắn liên tục như `mousemove` thì chi phí đó đáng kể. Và nó không dùng được cho sự kiện không nổi bọt như `focus` hay `blur`, phải thay bằng `focusin` và `focusout`.

---

### Câu 9: Đáp án D

**Giải thích:**
`requestAnimationFrame`:
- Syncs với browser's repaint cycle (typically 60fps)
- Browser can optimize and batch
- Pauses when tab is inactive

```javascript
// Smooth animation
function animate() {
  element.style.transform = `translateX(${x}px)`;
  x += 1;
  if (x < 100) {
    requestAnimationFrame(animate);
  }
}
requestAnimationFrame(animate);

// Efficient DOM reads/writes
requestAnimationFrame(() => {
  // Batch reads
  const width = element.offsetWidth;
  const height = element.offsetHeight;

  // Then batch writes
  element.style.transform = `translate(${width}px, ${height}px)`;
});
```

**Đánh đổi:**
`requestAnimationFrame` đồng bộ với nhịp vẽ nên hoạt ảnh mượt và tự dừng khi tab bị ẩn, nhưng code bên trong vẫn chạy trên luồng chính — đặt việc nặng vào là mất khung hình. Với hoạt ảnh thuần chuyển động hoặc mờ dần, CSS transition còn tốt hơn vì trình duyệt đẩy được sang luồng compositor.

**Tham khảo:** [MDN - requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

---

### Câu 10: Đáp án B

**Giải thích:**

| Attribute | Download | Execute | Blocks HTML |
|-----------|----------|---------|-------------|
| None | When encountered | Immediately | Yes |
| `async` | Parallel | When ready | Partially |
| `defer` | Parallel | After HTML parsed | No |

```html
<!-- Blocks parsing -->
<script src="script.js"></script>

<!-- Download parallel, execute when ready (order not guaranteed) -->
<script async src="analytics.js"></script>

<!-- Download parallel, execute after parsing (order preserved) -->
<script defer src="app.js"></script>
```

**Best practices:**
- `defer` for scripts that depend on DOM
- `async` for independent scripts (analytics)

**Đánh đổi:**
`async` tải xong là chạy ngay nên thứ tự giữa các script không đảm bảo — chỉ hợp với script độc lập như đo đạc. `defer` giữ đúng thứ tự và chạy sau khi phân tích HTML xong, hợp với script phụ thuộc nhau. Nhưng cả hai đều không cứu được gì nếu chính script đó là thứ dựng nên nội dung chính: lúc ấy nội dung vẫn đến muộn.

**Tham khảo:** [JavaScript.info - Scripts async defer](https://javascript.info/script-async-defer)

---

## Phần 3: React Performance

### Câu 11: Đáp án D - Tất cả các đáp án trên

**Giải thích:**

```jsx
// 1. React.memo - prevent re-render if props same
const MemoizedComponent = React.memo(Component);

// 2. useMemo - cache expensive computations
const expensiveValue = useMemo(() => compute(a, b), [a, b]);

// 3. useCallback - stable function reference
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// 4. Avoid inline objects/functions
// ❌ Bad - new object every render
<Component style={{ color: 'red' }} />

// ✅ Good - stable reference
const style = useMemo(() => ({ color: 'red' }), []);
<Component style={style} />
```

**Đánh đổi:**
Re-render không phải lúc nào cũng là vấn đề. Một component nhẹ render lại 60 lần mỗi giây vẫn có thể nằm gọn trong ngân sách khung hình. Truy tìm và chặn mọi re-render tốn công và làm code khó đọc; chỉ đáng làm khi Profiler chỉ đích danh component đang ăn thời gian.

**Tham khảo:** [React - Performance](https://react.dev/learn/render-and-commit)

---

### Câu 12: Đáp án C

**Giải thích:**
React Profiler measures:
- **Render phase:** Component render times
- **Commit phase:** Time để apply changes to DOM
- Which components rendered và why
- Wasted renders

```jsx
<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>

function onRenderCallback(
  id,           // Profiler tree id
  phase,        // "mount" | "update"
  actualDuration,  // Time spent rendering
  baseDuration,    // Estimated time without memoization
  startTime,
  commitTime,
) {
  console.log({ id, phase, actualDuration });
}
```

**Đánh đổi:**
Số đo của Profiler lấy ở bản phát triển nên luôn chậm hơn production đáng kể — dùng để so sánh tương đối giữa các component thì tốt, dùng làm con số tuyệt đối thì sai. Bản thân việc bật Profiler cũng thêm chi phí, làm lệch kết quả với những component vốn render rất nhanh.

**Tham khảo:** [React - Profiler](https://react.dev/reference/react/Profiler)

---

### Câu 13: Đáp án B

**Giải thích:**
Virtualization renders only visible items:
- **When to use:** 100+ items với complex components
- **Benefits:** Constant render time regardless of list size

```jsx
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={50}
    >
      {({ index, style }) => (
        <div style={style}>{items[index].name}</div>
      )}
    </FixedSizeList>
  );
}
```

**Libraries:**
- `react-window` (lighter)
- `react-virtuoso` (more features)
- `@tanstack/react-virtual`

**Đánh đổi:**
Ảo hoá làm thời gian render gần như không phụ thuộc số dòng, nhưng mất `Ctrl+F` của trình duyệt, gây khó cho trình đọc màn hình, và hỏng khi chiều cao mỗi dòng thay đổi — lúc đó phải đo động và thanh cuộn sẽ nhảy. Dưới khoảng 100 dòng đơn giản thì chi phí phức tạp không đáng.

---

### Câu 14: Đáp án D - TTI và FCP

**Giải thích:**
Code splitting improves:
- **FCP:** Faster initial render với smaller initial bundle
- **TTI:** Page becomes interactive sooner
- **LCP:** Can improve if critical content loads faster

```jsx
// Route-based splitting
const Home = lazy(() => import('./Home'));
const Dashboard = lazy(() => import('./Dashboard'));

// Component-based splitting
const HeavyChart = lazy(() => import('./HeavyChart'));
```

**Đánh đổi:**
Chia nhỏ cải thiện TTI và FCP nhưng không tự động cải thiện LCP — nếu phần tử lớn nhất là một tấm ảnh thì bundle nhỏ đi chẳng đổi gì. Và chia quá vụn làm tổng thời gian tệ hơn, vì mỗi chunk thêm một lượt đi mạng với độ trễ cộng dồn.

---

### Câu 15: Đáp án D - Tất cả các đáp án trên

**Giải thích:**

1. **Too much global state:**
```jsx
// ❌ Everything in global store
const store = { user, posts, comments, ui, forms, ... };

// ✅ Colocate state
// Only truly global data in store
```

2. **Not normalizing:**
```jsx
// ❌ Nested data - hard to update
{ posts: [{ id: 1, comments: [...] }] }

// ✅ Normalized
{
  posts: { 1: { id: 1, commentIds: [1, 2] } },
  comments: { 1: {...}, 2: {...} }
}
```

3. **Re-rendering entire tree:**
```jsx
// ✅ Use selectors to minimize re-renders
const user = useSelector(state => state.user.name);
// NOT: useSelector(state => state.user)
```

**Đánh đổi:**
Selector và chuẩn hoá state giảm re-render nhưng làm code khó đọc hơn và thêm một lớp phải bảo trì. Với ứng dụng nhỏ, chi phí đó lớn hơn lợi ích. Chuẩn hoá chỉ thật sự đáng khi cùng một thực thể xuất hiện ở nhiều nơi và phải luôn đồng bộ với nhau.

---

## Phần 4: Network & Loading

### Câu 16: Đáp án A

**Giải thích:**

```html
<!-- Preconnect: Establish connection early (DNS, TCP, TLS) -->
<link rel="preconnect" href="https://api.example.com">

<!-- Preload: High priority, current page, specific resource -->
<link rel="preload" href="/critical.css" as="style">
<link rel="preload" href="/hero.jpg" as="image">

<!-- Prefetch: Low priority, future navigation -->
<link rel="prefetch" href="/next-page.js">

<!-- DNS-prefetch: Only DNS lookup -->
<link rel="dns-prefetch" href="https://cdn.example.com">
```

**Đánh đổi:**
`preload` giành quyền ưu tiên, nên dùng sai chỗ là cướp băng thông của thứ thật sự cần — preload quá nhiều còn tệ hơn không preload gì. `prefetch` thì tải thứ có thể không bao giờ được dùng, tốn dữ liệu của người dùng di động. Chỉ preload thứ chắc chắn cần ngay trên đường hiển thị nội dung chính.

**Tham khảo:** [web.dev - Resource Hints](https://web.dev/preconnect-and-dns-prefetch/)

---

### Câu 17: Đáp án B - Load tất cả images ở highest quality

**Giải thích:**
Image optimization best practices:

```html
<!-- 1. Modern formats -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="...">
</picture>

<!-- 2. Lazy loading -->
<img src="image.jpg" loading="lazy" alt="...">

<!-- 3. Responsive images -->
<img
  srcset="small.jpg 300w, medium.jpg 600w, large.jpg 1200w"
  sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
  src="medium.jpg"
  alt="..."
>

<!-- 4. Proper dimensions -->
<img src="image.jpg" width="800" height="600" alt="...">
```

**Đánh đổi:**
Ba cách đúng còn lại cũng có giá. Định dạng mới như AVIF nén tốt hơn nhiều nhưng mã hoá chậm và trình duyệt cũ không đọc được, nên luôn phải có dự phòng. `loading="lazy"` tiết kiệm băng thông nhưng đặt nhầm vào ảnh đầu trang thì làm LCP tệ hẳn đi. Ảnh đáp ứng đúng cách đòi sinh nhiều kích thước và quản lý chúng.

---

### Câu 18: Đáp án D - Tất cả các đáp án trên

**Giải thích:**
HTTP/2 improvements:
1. **Multiplexing:** Multiple requests/responses trên single connection
2. **Header compression:** HPACK compression
3. **Server push:** Push resources before client requests
4. **Binary protocol:** More efficient parsing

HTTP/3 adds:
- QUIC protocol (UDP-based)
- Better performance on unreliable networks
- Faster connection establishment

**Đánh đổi:**
HTTP/2 gộp nhiều request trên một kết nối, nên những thủ thuật cũ như gộp file và chia nhỏ domain trở thành phản tác dụng. Nhưng nó vẫn chịu head-of-line blocking ở tầng TCP: mất một gói là chặn mọi luồng. HTTP/3 chuyển sang QUIC để giải đúng chỗ đó, đổi lại một số mạng doanh nghiệp chặn UDP.

---

### Câu 19: Đáp án D - B và C đều đúng

**Giải thích:**

```
Cache-Control: no-store
→ Don't cache at all

Cache-Control: no-cache
→ Cache but always revalidate before use

Cache-Control: max-age=0
→ Same as no-cache, must revalidate

Cache-Control: max-age=31536000, immutable
→ Cache for 1 year, never revalidate (for versioned assets)
```

**Strategy:**
```
# HTML - always fresh
Cache-Control: no-cache

# JS/CSS with hash - cache forever
Cache-Control: max-age=31536000, immutable

# API responses - short cache
Cache-Control: max-age=60, stale-while-revalidate=600
```

**Đánh đổi:**
`Cache-Control: immutable` với thời hạn dài cho tài nguyên có hash trong tên gần như không mất gì. Nhưng với HTML thì ngược lại: cache lâu nghĩa là người dùng giữ bản cũ và tham chiếu tới chunk đã bị xoá, gây lỗi 404 sau mỗi lần deploy. `stale-while-revalidate` là điểm giữa — phục vụ bản cũ ngay rồi làm mới ở nền.

**Tham khảo:** [MDN - Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

---

### Câu 20: Đáp án D - Tất cả các đáp án trên

**Giải thích:**

1. **Tree shaking:** Remove unused code
```javascript
// Only imports what's used
import { debounce } from 'lodash-es';
```

2. **Code splitting:** Load on demand
```javascript
const Dashboard = lazy(() => import('./Dashboard'));
```

3. **Minification & Compression:**
- Terser cho JS minification
- Gzip/Brotli compression
- Remove dead code, comments

**Analysis tools:**
- `webpack-bundle-analyzer`
- `source-map-explorer`

**Đánh đổi:**
Tree shaking chỉ hiệu quả khi thư viện xuất theo ES module và không có tác dụng phụ, mà nhiều thư viện phổ biến không đạt — khai `sideEffects: false` sai sẽ xoá nhầm code cần thiết và lỗi chỉ lộ ra ở production. Phân tích bundle nên chạy trong CI kèm ngưỡng chặn, vì để thủ công thì sẽ không ai chạy.

---

## Phần 5: Rendering & Browser

### Câu 21: Đáp án C

**Giải thích:**
Critical Rendering Path:

1. **DOM Construction:** Parse HTML → DOM tree
2. **CSSOM Construction:** Parse CSS → CSSOM tree
3. **Render Tree:** Combine DOM + CSSOM
4. **Layout:** Calculate positions and dimensions
5. **Paint:** Fill pixels
6. **Composite:** Layer composition

**Optimize:**
- Minimize critical resources
- Minimize critical path length
- Minimize critical bytes

**Đánh đổi:**
Nội tuyến CSS quan trọng vào HTML loại bỏ được một lượt chặn render, nhưng làm HTML nặng hơn và phần CSS đó không cache lại được giữa các trang. Đáng làm với trang đích chỉ tải một lần; phản tác dụng với ứng dụng nhiều trang mà người dùng duyệt liên tục.

**Tham khảo:** [web.dev - Critical Rendering Path](https://web.dev/critical-rendering-path/)

---

### Câu 22: Đáp án B - Changing `width` hoặc `height`

**Giải thích:**

| Property | Trigger |
|----------|---------|
| `width`, `height`, `margin`, `padding`, `top`, `left` | Reflow + Repaint |
| `background-color`, `color`, `visibility` | Repaint only |
| `transform`, `opacity` | Composite only |

```javascript
// ❌ Forces reflow
element.style.width = '100px';
const width = element.offsetWidth; // Forces layout

// ✅ Batch reads and writes
// Read phase
const width = element.offsetWidth;
const height = element.offsetHeight;

// Write phase
element.style.transform = `translate(${width}px, ${height}px)`;
```

**Đánh đổi:**
Đổi `transform` thay vì `width` để tránh reflow là đúng, nhưng không phải lúc nào cũng thay được — bố cục thật sự thay đổi thì buộc phải reflow. Cách giảm tổn thất là gom hết thao tác đọc rồi mới gom thao tác ghi, tránh xen kẽ gây layout thrashing, và đọc thuộc tính bố cục càng ít lần càng tốt.

**Tham khảo:** [CSS Triggers](https://csstriggers.com/)

---

### Câu 23: Đáp án B

**Giải thích:**
CSS Containment isolates subtree:

```css
.card {
  contain: layout;     /* Layout changes don't affect outside */
  contain: paint;      /* Painting limited to element bounds */
  contain: style;      /* Counters and quotes scoped */
  contain: size;       /* Size independent of children */
  contain: content;    /* layout + paint + style */
  contain: strict;     /* All containment */
}

/* content-visibility for lazy rendering */
.section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}
```

**Đánh đổi:**
`contain` cho trình duyệt biết có thể bỏ qua phần cây bên ngoài khi tính toán, tiết kiệm đáng kể với danh sách dài. Nhưng `contain: size` bắt phần tử tự khai kích thước và không cho co theo nội dung — đặt nhầm là phần tử sập xuống thành không. Bắt đầu bằng `content` an toàn hơn `strict`.

**Tham khảo:** [web.dev - CSS Containment](https://web.dev/content-visibility/)

---

### Câu 24: Đáp án C - Apply cho tất cả elements "just in case"

**Giải thích:**
`will-change` creates new compositor layer:
- Uses GPU memory
- Overhead của layer management

```css
/* ❌ Bad - applied to everything */
* { will-change: transform; }

/* ❌ Bad - always on */
.element { will-change: transform; }

/* ✅ Good - apply before animation */
.element:hover { will-change: transform; }
.element:active { transform: scale(1.1); }

/* ✅ Good - JavaScript control */
element.style.willChange = 'transform';
// After animation
element.style.willChange = 'auto';
```

**Đánh đổi:**
Ba cách dùng đúng còn lại cũng không miễn phí. `will-change` báo trước để trình duyệt tạo lớp riêng, mà mỗi lớp tốn bộ nhớ GPU — rải khắp nơi làm máy yếu hết bộ nhớ và chậm hơn hẳn lúc không dùng. Cách đúng là đặt ngay trước khi hoạt ảnh bắt đầu rồi gỡ ra khi xong; với hoạt ảnh ngắn thì thường không cần.

**Tham khảo:** [MDN - will-change](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)

---

### Câu 25: Đáp án C - `transform`, `opacity`

**Giải thích:**
Compositor-only properties:
- `transform`
- `opacity`
- `filter` (partially)

```css
/* ❌ Triggers layout */
.animate {
  animation: move 1s;
}
@keyframes move {
  to { left: 100px; }
}

/* ✅ Compositor only - smooth 60fps */
.animate {
  animation: move 1s;
}
@keyframes move {
  to { transform: translateX(100px); }
}
```

**Đánh đổi:**
`transform` và `opacity` chạy trên luồng compositor nên mượt cả khi luồng chính đang bận, nhưng phần tử bị đẩy lên lớp riêng sẽ tốn bộ nhớ và có thể bị mờ chữ trên một số màn hình. Và không phải hiệu ứng nào cũng diễn đạt được bằng hai thuộc tính này — đổi màu nền hay bóng đổ thì không.

---

### Câu 26: Đáp án D - 50ms

**Giải thích:**
- Long Task: > 50ms on main thread
- Blocks user interactions
- Causes jank

**Detect Long Tasks:**
```javascript
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Long Task:', entry.duration);
  }
});
observer.observe({ type: 'longtask', buffered: true });
```

**Solutions:**
- Break up long tasks
- Use Web Workers
- `requestIdleCallback` for non-critical work

**Đánh đổi:**
Cắt tác vụ dài thành nhiều mẩu ngắn cải thiện khả năng phản hồi nhưng làm tổng thời gian dài hơn, vì mỗi lần nhường luồng là một lần tốn chi phí lập lịch. Đây là đổi thông lượng lấy độ mượt — đúng khi người dùng đang chờ tương tác, sai khi đó là việc nền không ai nhìn.

**Tham khảo:** [web.dev - Long Tasks](https://web.dev/optimize-long-tasks/)

---

### Câu 27: Đáp án D - Tất cả các đáp án trên

**Giải thích:**

```javascript
// ❌ Scroll event - fires many times, blocks main thread
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if (isInViewport(el)) loadImage(el);
  });
});

// ✅ Intersection Observer - async, optimized
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '100px' });

images.forEach(img => observer.observe(img));
```

**Use cases:**
- Lazy loading images
- Infinite scroll
- Analytics (element visibility)
- Animations on scroll

**Đánh đổi:**
Rẻ hơn hẳn so với nghe sự kiện cuộn vì nó chạy ngoài luồng chính, nhưng callback là bất đồng bộ nên không dùng được khi cần phản ứng đồng bộ theo vị trí cuộn. Và `rootMargin` đặt quá hẹp thì ảnh lazy chỉ bắt đầu tải đúng lúc người dùng nhìn tới, tức là vẫn thấy khoảng trống.

**Tham khảo:** [MDN - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

### Câu 28: Đáp án C - Cache First

**Giải thích:**

| Strategy | Use Case |
|----------|----------|
| Cache First | Static assets (JS, CSS, images) |
| Network First | API calls, frequently changing data |
| Stale While Revalidate | Semi-static content |
| Network Only | Real-time data |
| Cache Only | Offline-first apps |

```javascript
// Cache First for static assets
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return cached || fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open('images').then(cache => cache.put(event.request, clone));
          return response;
        });
      })
    );
  }
});
```

**Đánh đổi:**
Cache First cho tốc độ tốt nhất nhưng người dùng có thể thấy nội dung cũ vô thời hạn nếu không có cơ chế làm mới — chỉ dùng cho tài nguyên có hash trong tên. Với dữ liệu thay đổi, Network First hoặc Stale While Revalidate đúng hơn. Chọn sai chiến lược cho sai loại tài nguyên là lỗi hay gặp nhất khi làm service worker.

**Tham khảo:** [web.dev - Service Worker Caching](https://web.dev/service-worker-caching-and-http-caching/)

---

### Câu 29: Đáp án D - A và C

**Giải thích:**
Font loading issues:
- **FOIT (Flash of Invisible Text):** Text invisible until font loads
- **FOUT (Flash of Unstyled Text):** Fallback font then switches

```html
<!-- Preload critical fonts -->
<link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin>
```

```css
@font-face {
  font-family: 'MyFont';
  src: url('/font.woff2') format('woff2');
  font-display: swap; /* Show fallback immediately, swap when ready */
}

/* font-display values:
   auto - browser decides
   block - FOIT (short)
   swap - FOUT (recommended)
   fallback - short FOIT, then fallback if slow
   optional - use font only if already cached
*/
```

**Đánh đổi:**
`font-display: swap` tránh được khoảng chữ vô hình nhưng gây nhảy chữ khi font thật về — đó là đánh đổi trực tiếp giữa CLS và thời gian thấy nội dung. `optional` bỏ hẳn font nếu về chậm, ổn định nhất nhưng có người dùng không bao giờ thấy font thương hiệu. Preload font quan trọng và dùng `size-adjust` cho font dự phòng sẽ giảm được cú nhảy.

**Tham khảo:** [web.dev - Font best practices](https://web.dev/font-best-practices/)

---

### Câu 30: Đáp án D - Tất cả các đáp án trên

**Giải thích:**
Performance Budget examples:

```javascript
// Budget configuration
{
  "budgets": [
    {
      "resourceSizes": [
        { "resourceType": "script", "budget": 300 }, // KB
        { "resourceType": "total", "budget": 500 }
      ],
      "resourceCounts": [
        { "resourceType": "third-party", "budget": 10 }
      ],
      "timings": [
        { "metric": "interactive", "budget": 3000 }, // ms
        { "metric": "first-contentful-paint", "budget": 1500 }
      ]
    }
  ]
}
```

**Tools:**
- Lighthouse CI
- bundlesize
- webpack performance hints
- SpeedCurve

**Đánh đổi:**
Ngân sách chỉ có tác dụng khi nó chặn được merge — đặt ngưỡng rồi chỉ cảnh báo thì sau vài tuần sẽ không ai để ý nữa. Nhưng đặt quá chặt làm CI đỏ liên tục và đội sẽ tìm cách vô hiệu hoá. Cách dùng được: lấy mức hiện tại cộng một khoảng nhỏ làm ngưỡng, rồi siết dần theo thời gian.

**Tham khảo:** [web.dev - Performance Budgets](https://web.dev/performance-budgets-101/)

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [web.dev Performance](https://web.dev/learn-web-vitals/)
2. [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
3. [MDN Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
4. [React Performance Documentation](https://react.dev/learn/render-and-commit)
5. [Google PageSpeed Insights](https://pagespeed.web.dev/)
6. [WebPageTest](https://www.webpagetest.org/)
