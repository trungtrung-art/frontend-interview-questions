# Performance & Optimization Interview Questions
## Frontend Performance - Senior Level Focus

---

## TABLE OF CONTENTS
- [Part 1: Web Vitals & Metrics](#part-1-web-vitals--metrics)
- [Part 2: JavaScript Performance](#part-2-javascript-performance)
- [Part 3: React Performance](#part-3-react-performance)
- [Part 4: Network & Loading](#part-4-network--loading)
- [Part 5: Rendering & Browser](#part-5-rendering--browser)
- [Detailed Answers](#detailed-answers)

---

# PART 1: WEB VITALS & METRICS

## Question 1: Core Web Vitals
**What metrics are included in Core Web Vitals?**

- A) FCP, TTI, TBT
- B) LCP, FID, CLS
- C) TTFB, FMP, SI
- D) DCL, Load, FCP

---

## Question 2: LCP (Largest Contentful Paint)
**What is considered a good LCP score?**

- A) < 1.0 seconds
- B) < 2.5 seconds
- C) < 4.0 seconds
- D) < 5.0 seconds

---

## Question 3: CLS (Cumulative Layout Shift)
**What is the main cause of high CLS?**

- A) Long JavaScript execution time
- B) Images without dimensions, late-loading content, dynamically injected content
- C) Slow server response time
- D) Large JavaScript bundles

---

## Question 4: FID vs INP
**What is the difference between FID (First Input Delay) and INP (Interaction to Next Paint)?**

- A) No difference
- B) FID measures first interaction, INP measures overall interaction responsiveness
- C) INP only measures click events
- D) FID is more accurate than INP

---

## Question 5: TTFB
**What does TTFB (Time to First Byte) measure?**

- A) Time to download all resources
- B) Time from request to first byte of response
- C) Time to render page
- D) Time to parse HTML

---

# PART 2: JAVASCRIPT PERFORMANCE

## Question 6: Main Thread Blocking
**What is the best way to avoid blocking the main thread with heavy computation?**

- A) Use setTimeout with delay 0
- B) Use Web Workers
- C) Use async/await
- D) Use Promise.all

---

## Question 7: Memory Management
**Which code can cause a memory leak?**

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

- C) Both A and B
- D) Neither

---

## Question 8: Event Delegation Performance
**Why is Event Delegation better for performance?**

- A) Reduces number of event listeners, saves memory
- B) Speeds up event bubbling
- C) Reduces JavaScript bundle size
- D) Increases FCP

---

## Question 9: requestAnimationFrame
**When should you use requestAnimationFrame?**

- A) For all async operations
- B) For animations and DOM updates that need to sync with browser repaint
- C) To replace setTimeout
- D) For API calls

---

## Question 10: Script Loading
**What is the difference between `async` and `defer` in script loading?**

- A) No difference
- B) `async` executes when download completes, `defer` waits for HTML parsing to finish
- C) `defer` executes when download completes, `async` waits for HTML parsing to finish
- D) Both block HTML parsing

---

# PART 3: REACT PERFORMANCE

## Question 11: Unnecessary Re-renders
**What helps avoid unnecessary re-renders?**

- A) Using React.memo
- B) Using useMemo and useCallback appropriately
- C) Avoiding inline objects/functions in props
- D) All of the above

---

## Question 12: React Profiler
**What does React Profiler measure?**

- A) Network requests
- B) Render time and commit phases
- C) Memory usage
- D) Bundle size

---

## Question 13: Virtualization
**When should you use virtualization (react-window, react-virtuoso)?**

- A) For all lists
- B) When rendering large lists (100+ items) with complex components
- C) Only for infinite scroll
- D) When using pagination

---

## Question 14: Code Splitting Impact
**Which metric does code splitting improve the most?**

- A) CLS
- B) TTI (Time to Interactive) and FCP
- C) TTFB
- D) FID

---

## Question 15: State Management Performance
**What causes performance issues in state management?**

- A) Storing too much data in global state
- B) Not normalizing data
- C) Re-rendering entire tree when part of state changes
- D) All of the above

---

# PART 4: NETWORK & LOADING

## Question 16: Resource Hints
**What is the difference between preload, prefetch, and preconnect?**

- A) No difference
- B) preload: high priority current page, prefetch: low priority future navigation, preconnect: establish connection early
- C) All load resources immediately
- D) Only differ in browser support

---

## Question 17: Image Optimization
**Which is NOT a best practice for image optimization?**

- A) Using modern formats (WebP, AVIF)
- B) Lazy loading with `loading="lazy"`
- C) Loading all images at highest quality
- D) Responsive images with srcset

---

## Question 18: HTTP/2 & HTTP/3
**What are the advantages of HTTP/2 over HTTP/1.1?**

- A) Multiplexing - multiple requests on single connection
- B) Header compression
- C) Server push
- D) All of the above

---

## Question 19: Caching Strategies
**Which Cache-Control header allows browser to cache and revalidate?**

- A) `no-store`
- B) `no-cache`
- C) `max-age=0`
- D) Both B and C are correct

---

## Question 20: Bundle Optimization
**What helps reduce JavaScript bundle size?**

- A) Tree shaking
- B) Code splitting
- C) Minification and compression
- D) All of the above

---

# PART 5: RENDERING & BROWSER

## Question 21: Critical Rendering Path
**What is the correct order of the Critical Rendering Path?**

- A) DOM → CSSOM → Render Tree → Layout → Paint → Composite
- B) DOM → Layout → Paint → CSSOM → Composite
- C) CSSOM → DOM → Paint → Layout → Composite
- D) DOM → Paint → Layout → CSSOM → Composite

---

## Question 22: Reflow vs Repaint
**What triggers reflow (layout)?**

- A) Changing `background-color`
- B) Changing `width` or `height`
- C) Changing `opacity`
- D) Changing `visibility`

---

## Question 23: CSS Containment
**How does the CSS `contain` property help performance?**

- A) Isolates element's rendering, limits scope of layout/paint/style calculations
- B) Hides overflow content
- C) Creates new stacking context
- D) Doesn't affect performance

---

## Question 24: will-change Property
**When should you NOT use `will-change`?**

- A) When element will animate
- B) Apply to all elements "just in case"
- C) When you need to create a new compositor layer
- D) Before heavy visual changes

---

## Question 25: Compositor-only Properties
**Which properties can be animated without triggering layout or paint?**

- A) `width`, `height`, `margin`
- B) `transform`, `opacity`
- C) `top`, `left`, `right`, `bottom`
- D) `padding`, `border`

---

## Question 26: Long Tasks
**A Long Task is defined as a task running longer than how many ms?**

- A) 10ms
- B) 50ms
- C) 100ms
- D) 200ms

---

## Question 27: Intersection Observer
**What are the advantages of Intersection Observer over scroll event listeners?**

- A) Asynchronous, doesn't block main thread
- B) More accurate
- C) Better performance - browser optimized
- D) All of the above

---

## Question 28: Service Worker Caching
**Which Service Worker caching strategy is suitable for static assets?**

- A) Network First
- B) Cache First
- C) Stale While Revalidate
- D) Network Only

---

## Question 29: Font Loading
**What helps avoid FOIT (Flash of Invisible Text)?**

- A) `font-display: swap`
- B) `font-display: block`
- C) Preload fonts
- D) A and C

---

## Question 30: Performance Budget
**What metrics does a performance budget typically include?**

- A) Bundle size limits
- B) Core Web Vitals thresholds
- C) Number of requests
- D) All of the above

---

---

# DETAILED ANSWERS

## Part 1: Web Vitals & Metrics

### Question 1: Answer B - LCP, FID, CLS

**Explanation:**
Core Web Vitals (Google's key metrics):
- **LCP (Largest Contentful Paint):** Loading performance - when largest content element is visible
- **FID (First Input Delay):** Interactivity - time from first interaction to browser response
- **CLS (Cumulative Layout Shift):** Visual stability - unexpected layout shifts

*Note: FID is being replaced by INP (Interaction to Next Paint) from March 2024*

**Reference:** [web.dev - Core Web Vitals](https://web.dev/vitals/)

---

### Question 2: Answer B - < 2.5 seconds

**Explanation:**
LCP thresholds:
- **Good:** ≤ 2.5s
- **Needs Improvement:** 2.5s - 4.0s
- **Poor:** > 4.0s

**Improve LCP:**
- Optimize server response time
- Eliminate render-blocking resources
- Optimize images
- Preload important resources

**Reference:** [web.dev - LCP](https://web.dev/lcp/)

---

### Question 3: Answer B

**Explanation:**
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

**Reference:** [web.dev - CLS](https://web.dev/cls/)

---

### Question 4: Answer B

**Explanation:**
- **FID:** Measures delay of FIRST interaction only
- **INP:** Measures responsiveness of ALL interactions throughout page lifecycle
- INP is a more comprehensive metric, captures overall interactivity

**Reference:** [web.dev - INP](https://web.dev/inp/)

---

### Question 5: Answer B

**Explanation:**
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

**Reference:** [web.dev - TTFB](https://web.dev/ttfb/)

---

## Part 2: JavaScript Performance

### Question 6: Answer B - Web Workers

**Explanation:**
- Web Workers run in separate thread
- Don't block main thread
- Perfect for heavy computations

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
- `requestIdleCallback` for low-priority tasks
- Breaking work into chunks with `setTimeout`

**Reference:** [MDN - Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

---

### Question 7: Answer B

**Explanation:**
- **Option A:** `data` is not referenced in closure → garbage collected
- **Option B:** `data` IS referenced in closure → CANNOT be garbage collected

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

**Reference:** [Chrome DevTools - Memory](https://developer.chrome.com/docs/devtools/memory-problems/)

---

### Question 8: Answer A

**Explanation:**
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

### Question 9: Answer B

**Explanation:**
`requestAnimationFrame`:
- Syncs with browser's repaint cycle (typically 60fps)
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

**Reference:** [MDN - requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

---

### Question 10: Answer B

**Explanation:**

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

**Reference:** [JavaScript.info - Scripts async defer](https://javascript.info/script-async-defer)

---

## Part 3: React Performance

### Question 11: Answer D - All of the above

**Explanation:**

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

**Reference:** [React - Performance](https://react.dev/learn/render-and-commit)

---

### Question 12: Answer B

**Explanation:**
React Profiler measures:
- **Render phase:** Component render times
- **Commit phase:** Time to apply changes to DOM
- Which components rendered and why
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

**Reference:** [React - Profiler](https://react.dev/reference/react/Profiler)

---

### Question 13: Answer B

**Explanation:**
Virtualization renders only visible items:
- **When to use:** 100+ items with complex components
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

### Question 14: Answer B - TTI and FCP

**Explanation:**
Code splitting improves:
- **FCP:** Faster initial render with smaller initial bundle
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

### Question 15: Answer D - All of the above

**Explanation:**

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

## Part 4: Network & Loading

### Question 16: Answer B

**Explanation:**

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

**Reference:** [web.dev - Resource Hints](https://web.dev/preconnect-and-dns-prefetch/)

---

### Question 17: Answer C - Loading all images at highest quality

**Explanation:**
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

### Question 18: Answer D - All of the above

**Explanation:**
HTTP/2 improvements:
1. **Multiplexing:** Multiple requests/responses on single connection
2. **Header compression:** HPACK compression
3. **Server push:** Push resources before client requests
4. **Binary protocol:** More efficient parsing

HTTP/3 adds:
- QUIC protocol (UDP-based)
- Better performance on unreliable networks
- Faster connection establishment

---

### Question 19: Answer D - Both B and C are correct

**Explanation:**

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

**Reference:** [MDN - Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

---

### Question 20: Answer D - All of the above

**Explanation:**

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
- Terser for JS minification
- Gzip/Brotli compression
- Remove dead code, comments

**Analysis tools:**
- `webpack-bundle-analyzer`
- `source-map-explorer`

---

## Part 5: Rendering & Browser

### Question 21: Answer A

**Explanation:**
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

**Reference:** [web.dev - Critical Rendering Path](https://web.dev/critical-rendering-path/)

---

### Question 22: Answer B - Changing `width` or `height`

**Explanation:**

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

**Reference:** [CSS Triggers](https://csstriggers.com/)

---

### Question 23: Answer A

**Explanation:**
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

**Reference:** [web.dev - CSS Containment](https://web.dev/content-visibility/)

---

### Question 24: Answer B - Apply to all elements "just in case"

**Explanation:**
`will-change` creates new compositor layer:
- Uses GPU memory
- Overhead of layer management

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

**Reference:** [MDN - will-change](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)

---

### Question 25: Answer B - `transform`, `opacity`

**Explanation:**
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

### Question 26: Answer B - 50ms

**Explanation:**
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

**Reference:** [web.dev - Long Tasks](https://web.dev/optimize-long-tasks/)

---

### Question 27: Answer D - All of the above

**Explanation:**

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

**Reference:** [MDN - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

### Question 28: Answer B - Cache First

**Explanation:**

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

**Reference:** [web.dev - Service Worker Caching](https://web.dev/service-worker-caching-and-http-caching/)

---

### Question 29: Answer D - A and C

**Explanation:**
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

**Reference:** [web.dev - Font best practices](https://web.dev/font-best-practices/)

---

### Question 30: Answer D - All of the above

**Explanation:**
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

**Reference:** [web.dev - Performance Budgets](https://web.dev/performance-budgets-101/)

---

## REFERENCES

1. [web.dev Performance](https://web.dev/learn-web-vitals/)
2. [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
3. [MDN Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
4. [React Performance Documentation](https://react.dev/learn/render-and-commit)
5. [Google PageSpeed Insights](https://pagespeed.web.dev/)
6. [WebPageTest](https://www.webpagetest.org/)
