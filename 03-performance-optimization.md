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
- B) LCP, FID, CLS
- C) TTFB, FMP, SI
- D) DCL, Load, FCP

---

## Câu 2: LCP (Largest Contentful Paint)
**LCP tốt được coi là bao nhiêu?**

- A) < 1.0 giây
- B) < 2.5 giây
- C) < 4.0 giây
- D) < 5.0 giây

---

## Câu 3: CLS (Cumulative Layout Shift)
**Nguyên nhân chính gây ra CLS cao?**

- A) JavaScript execution time dài
- B) Images không có dimensions, late-loading content, dynamic injected content
- C) Server response time chậm
- D) Large JavaScript bundles

---

## Câu 4: FID vs INP
**Sự khác biệt giữa FID (First Input Delay) và INP (Interaction to Next Paint)?**

- A) Không có sự khác biệt
- B) FID đo first interaction, INP đo overall interaction responsiveness
- C) INP chỉ đo click events
- D) FID accurate hơn INP

---

## Câu 5: TTFB
**TTFB (Time to First Byte) đo gì?**

- A) Thời gian download tất cả resources
- B) Thời gian từ request đến byte đầu tiên của response
- C) Thời gian render page
- D) Thời gian parse HTML

---

# PHẦN 2: JAVASCRIPT PERFORMANCE

## Câu 6: Main Thread Blocking
**Cách nào tốt nhất để tránh block main thread với heavy computation?**

- A) Sử dụng setTimeout với delay 0
- B) Sử dụng Web Workers
- C) Sử dụng async/await
- D) Sử dụng Promise.all

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

- A) Giảm số lượng event listeners, tiết kiệm memory
- B) Tăng tốc độ event bubbling
- C) Giảm JavaScript bundle size
- D) Tăng FCP

---

## Câu 9: requestAnimationFrame
**Khi nào nên sử dụng requestAnimationFrame?**

- A) Cho tất cả async operations
- B) Cho animations và DOM updates cần sync với browser repaint
- C) Thay thế setTimeout
- D) Cho API calls

---

## Câu 10: Script Loading
**Sự khác biệt giữa `async` và `defer` trong script loading?**

- A) Không có sự khác biệt
- B) `async` execute ngay khi download xong, `defer` chờ HTML parsing xong
- C) `defer` execute ngay khi download xong, `async` chờ HTML parsing xong
- D) Cả hai đều block HTML parsing

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

- A) Network requests
- B) Render time và commit phases
- C) Memory usage
- D) Bundle size

---

## Câu 13: Virtualization
**Khi nào nên sử dụng virtualization (react-window, react-virtuoso)?**

- A) Cho tất cả lists
- B) Khi render large lists (100+ items) với complex components
- C) Chỉ cho infinite scroll
- D) Khi sử dụng pagination

---

## Câu 14: Code Splitting Impact
**Code splitting giúp improve metric nào nhất?**

- A) CLS
- B) TTI (Time to Interactive) và FCP
- C) TTFB
- D) FID

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

- A) Không có sự khác biệt
- B) preload: high priority current page, prefetch: low priority future navigation, preconnect: establish connection early
- C) Tất cả đều load resources ngay lập tức
- D) Chỉ khác về browser support

---

## Câu 17: Image Optimization
**Cách nào KHÔNG phải best practice cho image optimization?**

- A) Sử dụng modern formats (WebP, AVIF)
- B) Lazy loading với `loading="lazy"`
- C) Load tất cả images ở highest quality
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

- A) DOM → CSSOM → Render Tree → Layout → Paint → Composite
- B) DOM → Layout → Paint → CSSOM → Composite
- C) CSSOM → DOM → Paint → Layout → Composite
- D) DOM → Paint → Layout → CSSOM → Composite

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

- A) Isolate element's rendering, limit scope của layout/paint/style calculations
- B) Hide overflow content
- C) Create new stacking context
- D) Không ảnh hưởng performance

---

## Câu 24: will-change Property
**Khi nào KHÔNG nên sử dụng `will-change`?**

- A) Khi element sẽ animate
- B) Apply cho tất cả elements "just in case"
- C) Khi cần create new compositor layer
- D) Trước heavy visual changes

---

## Câu 25: Compositor-only Properties
**Properties nào có thể animate mà không trigger layout hoặc paint?**

- A) `width`, `height`, `margin`
- B) `transform`, `opacity`
- C) `top`, `left`, `right`, `bottom`
- D) `padding`, `border`

---

## Câu 26: Long Tasks
**Long Task được định nghĩa là task chạy hơn bao nhiêu ms?**

- A) 10ms
- B) 50ms
- C) 100ms
- D) 200ms

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

- A) Network First
- B) Cache First
- C) Stale While Revalidate
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

### Câu 1: Đáp án B - LCP, FID, CLS

**Giải thích:**
Core Web Vitals (Google's key metrics):
- **LCP (Largest Contentful Paint):** Loading performance - khi largest content element visible
- **FID (First Input Delay):** Interactivity - time từ first interaction đến browser response
- **CLS (Cumulative Layout Shift):** Visual stability - unexpected layout shifts

*Note: FID đang được thay thế bởi INP (Interaction to Next Paint) từ March 2024*

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

**Tham khảo:** [web.dev - LCP](https://web.dev/lcp/)

---

### Câu 3: Đáp án B

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

**Tham khảo:** [web.dev - CLS](https://web.dev/cls/)

---

### Câu 4: Đáp án B

**Giải thích:**
- **FID:** Measures delay của FIRST interaction only
- **INP:** Measures responsiveness của ALL interactions throughout page lifecycle
- INP là metric toàn diện hơn, captures overall interactivity

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

**Tham khảo:** [web.dev - TTFB](https://web.dev/ttfb/)

---

## Phần 2: JavaScript Performance

### Câu 6: Đáp án B - Web Workers

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

**Tham khảo:** [Chrome DevTools - Memory](https://developer.chrome.com/docs/devtools/memory-problems/)

---

### Câu 8: Đáp án A

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

---

### Câu 9: Đáp án B

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

**Tham khảo:** [React - Performance](https://react.dev/learn/render-and-commit)

---

### Câu 12: Đáp án B

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

---

### Câu 14: Đáp án B - TTI và FCP

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

---

## Phần 4: Network & Loading

### Câu 16: Đáp án B

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

**Tham khảo:** [web.dev - Resource Hints](https://web.dev/preconnect-and-dns-prefetch/)

---

### Câu 17: Đáp án C - Load tất cả images ở highest quality

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

---

## Phần 5: Rendering & Browser

### Câu 21: Đáp án A

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

**Tham khảo:** [CSS Triggers](https://csstriggers.com/)

---

### Câu 23: Đáp án A

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

**Tham khảo:** [web.dev - CSS Containment](https://web.dev/content-visibility/)

---

### Câu 24: Đáp án B - Apply cho tất cả elements "just in case"

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

**Tham khảo:** [MDN - will-change](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)

---

### Câu 25: Đáp án B - `transform`, `opacity`

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

---

### Câu 26: Đáp án B - 50ms

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

**Tham khảo:** [MDN - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

### Câu 28: Đáp án B - Cache First

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

**Tham khảo:** [web.dev - Performance Budgets](https://web.dev/performance-budgets-101/)

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [web.dev Performance](https://web.dev/learn-web-vitals/)
2. [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
3. [MDN Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
4. [React Performance Documentation](https://react.dev/learn/render-and-commit)
5. [Google PageSpeed Insights](https://pagespeed.web.dev/)
6. [WebPageTest](https://www.webpagetest.org/)
