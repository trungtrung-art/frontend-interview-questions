# Problem Solving & System Design Interview Questions
## Frontend Architecture - Senior/Lead Level

---

## TABLE OF CONTENTS
- [Part 1: Problem Solving](#part-1-problem-solving)
- [Part 2: Frontend System Design](#part-2-frontend-system-design)
- [Part 3: Architecture Patterns](#part-3-architecture-patterns)
- [Part 4: Scenario-based Questions](#part-4-scenario-based-questions)
- [Detailed Answers](#detailed-answers)

---

# PART 1: PROBLEM SOLVING

## Question 1: Debugging Performance
**Your React application renders slowly. What's the first step to debug?**

- A) Add React.memo to all components
- B) Use React DevTools Profiler to identify bottlenecks
- C) Upgrade React version
- D) Switch to class components

---

## Question 2: Memory Leak Detection
**Users report the app gets slower over time. You suspect a memory leak. How do you confirm?**

- A) Restart server
- B) Use Chrome DevTools Memory tab, take heap snapshots
- C) Increase server RAM
- D) Clear browser cache

---

## Question 3: Race Condition
**Users encounter a bug: search results display results from an old search query. Cause and fix?**

- A) Slow server response, need to upgrade server
- B) Race condition - responses return out of order, need to cancel previous requests or ignore stale responses
- C) Browser caching issue
- D) React re-render issue

---

## Question 4: State Synchronization
**You have multiple browser tabs open with the same app. User updates data in tab 1 but tab 2 doesn't update. Solution?**

- A) Require user to refresh manually
- B) Use BroadcastChannel API, localStorage events, or WebSocket
- C) Disable multiple tabs
- D) Auto refresh every 5 seconds

---

## Question 5: Error Handling Strategy
**Best approach for error handling in a large React app?**

- A) try-catch in every component
- B) Error Boundaries for UI errors + global error handler for async errors + proper logging
- C) Only use Error Boundaries
- D) Let errors crash and rely on user refresh

---

## Question 6: Form Performance
**Form with 50+ fields renders slowly when user types. Solution?**

- A) Use uncontrolled components
- B) Implement field-level subscription (react-hook-form), debounce validation
- C) Reduce number of fields
- D) Disable real-time validation

---

## Question 7: Infinite Scroll Issues
**Your infinite scroll list causes lag after loading many items. Problem and solution?**

- A) Server pagination issue
- B) DOM has too many elements, need virtualization (react-window)
- C) API rate limiting
- D) CSS animation issue

---

## Question 8: Authentication Flow
**JWT token expires while user is using the app. Best approach?**

- A) Force logout immediately
- B) Implement silent refresh with refresh token, queue failed requests, retry after refresh
- C) Extend token expiry to 1 year
- D) Store token permanently in localStorage

---

## Question 9: API Error Handling
**API returns 500 error intermittently. Strategy to handle?**

- A) Show error message and stop
- B) Implement retry with exponential backoff, circuit breaker pattern, fallback UI
- C) Retry infinitely
- D) Ignore errors

---

## Question 10: Bundle Size Crisis
**Bundle size is too large (5MB), app loads slowly. Immediate actions?**

- A) Switch to HTTP/3
- B) Analyze bundle, code split, lazy load routes, remove unused dependencies, dynamic imports
- C) Upgrade hosting plan
- D) Enable caching

---

# PART 2: FRONTEND SYSTEM DESIGN

## Question 11: Design Notification System
**Design a real-time notification system for a web app. Considerations?**

- A) Polling every second
- B) WebSocket/SSE for real-time, notification queue, read/unread state, persistence, push notifications
- C) Email notifications only
- D) Browser alerts

---

## Question 12: Design Image Upload
**Design image upload component with preview, progress, validation. Key considerations?**

- A) Simple file input
- B) Client-side validation, compression, chunked upload for large files, progress tracking, retry mechanism, preview generation
- C) Server-side only processing
- D) Base64 encoding

---

## Question 13: Design Search Autocomplete
**Design search autocomplete like Google. Technical considerations?**

- A) Search on every keystroke
- B) Debounce input, cache results, keyboard navigation, highlight matches, handle no results, recent searches
- C) Only search on Enter
- D) Pre-load all results

---

## Question 14: Design Data Table
**Design reusable data table component with sorting, filtering, pagination. Architecture?**

- A) Monolithic component
- B) Composable design (Table, Header, Body, Row, Cell), server-side operations for large data, virtualization option, controlled/uncontrolled modes
- C) Use native HTML table only
- D) CSS Grid layout

---

## Question 15: Design Form Builder
**Design dynamic form builder (users can create forms). Architecture decisions?**

- A) Hard-code all field types
- B) Schema-driven approach, field type registry, validation rules engine, conditional logic, drag-drop interface
- C) Use Google Forms embed
- D) Only support text fields

---

## Question 16: Design Multi-step Wizard
**Design multi-step form wizard. State management approach?**

- A) Separate state for each step
- B) Centralized wizard state, step validation before proceed, allow back navigation with preserved data, progress indicator
- C) Submit each step separately
- D) Single long form

---

## Question 17: Design Offline-first App
**Design app that works offline. Architecture?**

- A) Show error when offline
- B) Service Worker caching, IndexedDB for data, sync queue for mutations, conflict resolution strategy
- C) Native app only
- D) Local storage for everything

---

## Question 18: Design Real-time Collaboration
**Design real-time document editing (like Google Docs). Key challenges?**

- A) Save on button click
- B) Operational Transform or CRDT, cursor presence, conflict resolution, version history, WebSocket connection management
- C) Lock document for one user
- D) Merge conflicts manually

---

## Question 19: Design Chat Application
**Design chat UI. Technical considerations?**

- A) HTTP polling
- B) WebSocket for real-time, message status (sent/delivered/read), optimistic updates, virtualized message list, typing indicators
- C) Refresh to see new messages
- D) Email-style threads

---

## Question 20: Design Dashboard
**Design analytics dashboard with multiple widgets. Architecture?**

- A) Single API call for all data
- B) Widget-based architecture, independent data fetching, customizable layouts, responsive grid, data refresh strategies per widget
- C) Static images
- D) Redirect to third-party tool

---

# PART 3: ARCHITECTURE PATTERNS

## Question 21: Micro-frontends
**When should you use micro-frontends architecture?**

- A) Every project
- B) Large teams, independent deployment needs, different tech stacks, clear domain boundaries
- C) Small projects
- D) Startups with 2 developers

---

## Question 22: State Management Selection
**What criteria for choosing a state management solution?**

- A) Popularity
- B) App complexity, team familiarity, bundle size, DevTools support, server state vs client state needs
- C) GitHub stars
- D) Company recommendation

---

## Question 23: API Layer Design
**Best practice for API layer in React app?**

- A) Fetch directly in components
- B) Separate API layer, centralized error handling, request/response interceptors, type-safe contracts
- C) GraphQL for everything
- D) No abstraction needed

---

## Question 24: Feature Flags
**Implement feature flags system. Considerations?**

- A) Environment variables only
- B) Remote config, gradual rollout, A/B testing capability, quick kill switch, user segment targeting
- C) Code comments
- D) Separate branches

---

## Question 25: Design System
**Key components of a Frontend Design System?**

- A) Just a UI library
- B) Design tokens, component library, documentation, accessibility guidelines, theming system, versioning strategy
- C) CSS files only
- D) Figma designs

---

## Question 26: Monorepo vs Polyrepo
**When is monorepo suitable for frontend?**

- A) Always
- B) Shared code between projects, consistent tooling, atomic changes across packages, coordinated releases
- C) Never
- D) Only for backend

---

## Question 27: SSR vs CSR vs SSG
**When to choose SSR, CSR, SSG?**

- A) SSR for everything
- B) SSR: SEO + dynamic content, CSR: interactive apps + authenticated content, SSG: static content + blogs
- C) CSR for everything
- D) Depends on framework only

---

## Question 28: Testing Strategy
**Testing pyramid for frontend?**

- A) Only E2E tests
- B) Many unit tests, fewer integration tests, few E2E tests; component testing with React Testing Library
- C) Only manual testing
- D) No testing needed

---

## Question 29: Error Monitoring
**Production error monitoring strategy?**

- A) Check server logs manually
- B) Error tracking service (Sentry), source maps, user context, performance monitoring, alerting
- C) User reports only
- D) Console.log

---

## Question 30: CI/CD for Frontend
**CI/CD pipeline for frontend project should include?**

- A) Only deployment
- B) Linting, type checking, unit tests, build, bundle analysis, E2E tests, preview deployments, production deployment
- C) Manual deployment
- D) Only production builds

---

# PART 4: SCENARIO-BASED QUESTIONS

## Question 31: Legacy Code Migration
**You join a team with large legacy jQuery codebase. Migration strategy?**

- A) Rewrite from scratch
- B) Strangler fig pattern: wrap legacy, incrementally migrate, coexist during transition, prioritize high-value areas
- C) Keep jQuery forever
- D) Hire new team

---

## Question 32: Performance Crisis
**Production app suddenly slow, users complaining. Immediate actions?**

- A) Deploy rollback and investigate
- B) Check monitoring, identify root cause (recent deploy? traffic spike? third-party?), communicate status, fix or rollback
- C) Ignore until morning
- D) Blame backend

---

## Question 33: Security Incident
**XSS vulnerability reported in app. Response?**

- A) Fix when you have time
- B) Assess severity, patch immediately, audit similar patterns, add security tests, post-mortem
- C) Ignore if not exploited
- D) Blame QA team

---

## Question 34: Team Velocity Drop
**Team velocity decreasing, technical debt increasing. How to address?**

- A) Work overtime
- B) Allocate time for refactoring, identify bottlenecks, improve tooling, reduce WIP, pay down critical debt incrementally
- C) Hire more developers
- D) Accept lower quality

---

## Question 35: Cross-team Dependency
**Feature requires backend API that's not ready. Approach?**

- A) Wait for backend
- B) Define contract together, mock API, develop in parallel, integration testing when ready
- C) Skip feature
- D) Build temporary backend

---

---

# DETAILED ANSWERS

## Part 1: Problem Solving

### Question 1: Answer B

**Explanation:**
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

**Reference:** [React Profiler](https://react.dev/reference/react/Profiler)

---

### Question 2: Answer B

**Explanation:**
Memory leak detection:
1. **Take heap snapshot** before user interaction
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

**Reference:** [Chrome Memory Tools](https://developer.chrome.com/docs/devtools/memory-problems/)

---

### Question 3: Answer B

**Explanation:**
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

### Question 4: Answer B

**Explanation:**
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

### Question 5: Answer B

**Explanation:**
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

### Question 6: Answer B

**Explanation:**
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

### Question 7: Answer B

**Explanation:**
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

### Question 8: Answer B

**Explanation:**
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

### Question 9: Answer B

**Explanation:**
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

### Question 10: Answer B

**Explanation:**
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

## Part 2: Frontend System Design

### Question 11: Answer B

**Explanation:**
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

### Question 21: Answer B

**Explanation:**
Micro-frontends use cases:

**When to use:**
- Large organizations with multiple teams
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

**Reference:** [Micro Frontends](https://micro-frontends.org/)

---

### Question 22: Answer B

**Explanation:**
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

### Question 27: Answer B

**Explanation:**
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

## Part 4: Scenario-based

### Question 31: Answer B

**Explanation:**
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

### Question 32: Answer B

**Explanation:**
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
7. Post-mortem and prevent future occurrences

---

### Question 35: Answer B

**Explanation:**
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

## REFERENCES

1. [Frontend Masters - System Design](https://frontendmasters.com/)
2. [Patterns.dev](https://www.patterns.dev/)
3. [System Design Primer](https://github.com/donnemartin/system-design-primer)
4. [React Patterns](https://reactpatterns.com/)
5. [Micro Frontends](https://micro-frontends.org/)
6. [Martin Fowler - Strangler Fig](https://martinfowler.com/bliki/StranglerFigApplication.html)
