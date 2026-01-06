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

- A) Thêm React.memo vào tất cả components
- B) Sử dụng React DevTools Profiler để identify bottlenecks
- C) Upgrade React version
- D) Chuyển sang class components

---

## Câu 2: Memory Leak Detection
**User report rằng app ngày càng chậm khi sử dụng lâu. Bạn nghi ngờ memory leak. Cách nào để xác nhận?**

- A) Restart server
- B) Sử dụng Chrome DevTools Memory tab, take heap snapshots
- C) Tăng server RAM
- D) Clear browser cache

---

## Câu 3: Race Condition
**User gặp bug: search results hiển thị kết quả của search query cũ. Nguyên nhân và cách fix?**

- A) Server response chậm, cần upgrade server
- B) Race condition - responses trả về không theo thứ tự, cần cancel previous requests hoặc ignore stale responses
- C) Browser caching issue
- D) React re-render issue

---

## Câu 4: State Synchronization
**Bạn có multiple browser tabs mở cùng một app. User update data ở tab 1 nhưng tab 2 không cập nhật. Solution?**

- A) Yêu cầu user refresh manually
- B) Sử dụng BroadcastChannel API, localStorage events, hoặc WebSocket
- C) Disable multiple tabs
- D) Auto refresh mỗi 5 giây

---

## Câu 5: Error Handling Strategy
**Cách tiếp cận tốt nhất cho error handling trong large React app?**

- A) try-catch trong mỗi component
- B) Error Boundaries cho UI errors + global error handler cho async errors + proper logging
- C) Chỉ sử dụng Error Boundaries
- D) Let errors crash và rely on user refresh

---

## Câu 6: Form Performance
**Form với 50+ fields render chậm khi user type. Giải pháp?**

- A) Sử dụng uncontrolled components
- B) Implement field-level subscription (react-hook-form), debounce validation
- C) Reduce số lượng fields
- D) Disable real-time validation

---

## Câu 7: Infinite Scroll Issues
**Infinite scroll list của bạn gây lag sau khi load nhiều items. Vấn đề và solution?**

- A) Server pagination issue
- B) DOM có quá nhiều elements, cần virtualization (react-window)
- C) API rate limiting
- D) CSS animation issue

---

## Câu 8: Authentication Flow
**JWT token expired trong khi user đang sử dụng app. Best approach?**

- A) Force logout immediately
- B) Implement silent refresh với refresh token, queue failed requests, retry sau khi refresh
- C) Extend token expiry lên 1 năm
- D) Store token vĩnh viễn trong localStorage

---

## Câu 9: API Error Handling
**API trả về 500 error intermittently. Strategy để handle?**

- A) Show error message và stop
- B) Implement retry với exponential backoff, circuit breaker pattern, fallback UI
- C) Retry vô hạn
- D) Ignore errors

---

## Câu 10: Bundle Size Crisis
**Bundle size quá lớn (5MB), app load chậm. Immediate actions?**

- A) Chuyển sang HTTP/3
- B) Analyze bundle, code split, lazy load routes, remove unused dependencies, dynamic imports
- C) Upgrade hosting plan
- D) Enable caching

---

# PHẦN 2: FRONTEND SYSTEM DESIGN

## Câu 11: Design Notification System
**Design real-time notification system cho web app. Considerations?**

- A) Polling every second
- B) WebSocket/SSE for real-time, notification queue, read/unread state, persistence, push notifications
- C) Email notifications only
- D) Browser alerts

---

## Câu 12: Design Image Upload
**Design image upload component with preview, progress, validation. Key considerations?**

- A) Simple file input
- B) Client-side validation, compression, chunked upload for large files, progress tracking, retry mechanism, preview generation
- C) Server-side only processing
- D) Base64 encoding

---

## Câu 13: Design Search Autocomplete
**Design search autocomplete like Google. Technical considerations?**

- A) Search on every keystroke
- B) Debounce input, cache results, keyboard navigation, highlight matches, handle no results, recent searches
- C) Only search on Enter
- D) Pre-load all results

---

## Câu 14: Design Data Table
**Design reusable data table component với sorting, filtering, pagination. Architecture?**

- A) Monolithic component
- B) Composable design (Table, Header, Body, Row, Cell), server-side operations for large data, virtualization option, controlled/uncontrolled modes
- C) Use native HTML table only
- D) CSS Grid layout

---

## Câu 15: Design Form Builder
**Design dynamic form builder (user có thể tạo forms). Architecture decisions?**

- A) Hard-code tất cả field types
- B) Schema-driven approach, field type registry, validation rules engine, conditional logic, drag-drop interface
- C) Use Google Forms embed
- D) Only support text fields

---

## Câu 16: Design Multi-step Wizard
**Design multi-step form wizard. State management approach?**

- A) Separate state cho mỗi step
- B) Centralized wizard state, step validation before proceed, allow back navigation với preserved data, progress indicator
- C) Submit mỗi step riêng
- D) Single long form

---

## Câu 17: Design Offline-first App
**Design app hoạt động offline. Architecture?**

- A) Show error khi offline
- B) Service Worker caching, IndexedDB for data, sync queue for mutations, conflict resolution strategy
- C) Native app only
- D) Local storage for everything

---

## Câu 18: Design Real-time Collaboration
**Design real-time document editing (như Google Docs). Key challenges?**

- A) Save on button click
- B) Operational Transform or CRDT, cursor presence, conflict resolution, version history, WebSocket connection management
- C) Lock document for one user
- D) Merge conflicts manually

---

## Câu 19: Design Chat Application
**Design chat UI. Technical considerations?**

- A) HTTP polling
- B) WebSocket for real-time, message status (sent/delivered/read), optimistic updates, virtualized message list, typing indicators
- C) Refresh to see new messages
- D) Email-style threads

---

## Câu 20: Design Dashboard
**Design analytics dashboard với multiple widgets. Architecture?**

- A) Single API call for all data
- B) Widget-based architecture, independent data fetching, customizable layouts, responsive grid, data refresh strategies per widget
- C) Static images
- D) Redirect to third-party tool

---

# PHẦN 3: ARCHITECTURE PATTERNS

## Câu 21: Micro-frontends
**Khi nào nên sử dụng micro-frontends architecture?**

- A) Mọi project
- B) Large teams, independent deployment needs, different tech stacks, clear domain boundaries
- C) Small projects
- D) Startups với 2 developers

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

- A) Fetch trực tiếp trong components
- B) Separate API layer, centralized error handling, request/response interceptors, type-safe contracts
- C) GraphQL cho tất cả
- D) No abstraction needed

---

## Câu 24: Feature Flags
**Implement feature flags system. Considerations?**

- A) Environment variables only
- B) Remote config, gradual rollout, A/B testing capability, quick kill switch, user segment targeting
- C) Code comments
- D) Separate branches

---

## Câu 25: Design System
**Key components của Frontend Design System?**

- A) Just a UI library
- B) Design tokens, component library, documentation, accessibility guidelines, theming system, versioning strategy
- C) CSS files only
- D) Figma designs

---

## Câu 26: Monorepo vs Polyrepo
**Khi nào monorepo phù hợp cho frontend?**

- A) Always
- B) Shared code between projects, consistent tooling, atomic changes across packages, coordinated releases
- C) Never
- D) Only for backend

---

## Câu 27: SSR vs CSR vs SSG
**Khi nào chọn SSR, CSR, SSG?**

- A) SSR cho tất cả
- B) SSR: SEO + dynamic content, CSR: interactive apps + authenticated content, SSG: static content + blogs
- C) CSR cho tất cả
- D) Depends on framework only

---

## Câu 28: Testing Strategy
**Testing pyramid cho frontend?**

- A) Only E2E tests
- B) Many unit tests, fewer integration tests, few E2E tests; component testing với React Testing Library
- C) Only manual testing
- D) No testing needed

---

## Câu 29: Error Monitoring
**Production error monitoring strategy?**

- A) Check server logs manually
- B) Error tracking service (Sentry), source maps, user context, performance monitoring, alerting
- C) User reports only
- D) Console.log

---

## Câu 30: CI/CD for Frontend
**CI/CD pipeline cho frontend project nên include?**

- A) Only deployment
- B) Linting, type checking, unit tests, build, bundle analysis, E2E tests, preview deployments, production deployment
- C) Manual deployment
- D) Only production builds

---

# PHẦN 4: SCENARIO-BASED QUESTIONS

## Câu 31: Legacy Code Migration
**Bạn join team với large legacy jQuery codebase. Migration strategy?**

- A) Rewrite từ đầu
- B) Strangler fig pattern: wrap legacy, incrementally migrate, coexist during transition, prioritize high-value areas
- C) Keep jQuery forever
- D) Hire new team

---

## Câu 32: Performance Crisis
**Production app suddenly slow, users complaining. Immediate actions?**

- A) Deploy rollback và investigate
- B) Check monitoring, identify root cause (recent deploy? traffic spike? third-party?), communicate status, fix or rollback
- C) Ignore until morning
- D) Blame backend

---

## Câu 33: Security Incident
**Report XSS vulnerability trong app. Response?**

- A) Fix khi có time
- B) Assess severity, patch immediately, audit similar patterns, add security tests, post-mortem
- C) Ignore nếu không bị exploit
- D) Blame QA team

---

## Câu 34: Team Velocity Drop
**Team velocity giảm, technical debt tăng. Address how?**

- A) Work overtime
- B) Allocate time for refactoring, identify bottlenecks, improve tooling, reduce WIP, pay down critical debt incrementally
- C) Hire more developers
- D) Accept lower quality

---

## Câu 35: Cross-team Dependency
**Feature requires backend API chưa ready. Approach?**

- A) Wait for backend
- B) Define contract together, mock API, develop in parallel, integration testing khi ready
- C) Skip feature
- D) Build temporary backend

---

---

# ĐÁP ÁN CHI TIẾT

## Phần 1: Problem Solving

### Câu 1: Đáp án B

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

**Tham khảo:** [Chrome Memory Tools](https://developer.chrome.com/docs/devtools/memory-problems/)

---

### Câu 3: Đáp án B

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

---

### Câu 4: Đáp án B

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

---

### Câu 5: Đáp án B

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

---

### Câu 6: Đáp án B

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

---

### Câu 7: Đáp án B

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

---

### Câu 8: Đáp án B

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

---

### Câu 10: Đáp án B

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

---

## Phần 2: Frontend System Design

### Câu 11: Đáp án B

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

---

### Câu 12: Đáp án B

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

---

### Câu 13: Đáp án B

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

---

### Câu 14: Đáp án B

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

---

### Câu 15: Đáp án B

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

---

## Phần 3: Architecture Patterns

### Câu 21: Đáp án B

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

---

### Câu 27: Đáp án B

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

---

## Phần 4: Scenario-based

### Câu 31: Đáp án B

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

---

### Câu 32: Đáp án B

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

---

### Câu 35: Đáp án B

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

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [Frontend Masters - System Design](https://frontendmasters.com/)
2. [Patterns.dev](https://www.patterns.dev/)
3. [System Design Primer](https://github.com/donnemartin/system-design-primer)
4. [React Patterns](https://reactpatterns.com/)
5. [Micro Frontends](https://micro-frontends.org/)
6. [Martin Fowler - Strangler Fig](https://martinfowler.com/bliki/StranglerFigApplication.html)
