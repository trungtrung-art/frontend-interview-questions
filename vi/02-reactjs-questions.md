# Câu Hỏi Phỏng Vấn ReactJS
## Từ Junior đến Senior/Lead

---

## 📚 MỤC LỤC
- [Phần 1: Junior Level](#phần-1-junior-level)
- [Phần 2: Middle Level](#phần-2-middle-level)
- [Phần 3: Senior Level](#phần-3-senior-level)
- [Đáp Án Chi Tiết](#đáp-án-chi-tiết)

---

# PHẦN 1: JUNIOR LEVEL

## Câu 1: Virtual DOM
**Virtual DOM trong React là gì?**

- A) Một bản sao của Real DOM được lưu trong database
- B) Một lightweight JavaScript representation của Real DOM
- C) Một CSS framework
- D) Một browser API

---

## Câu 2: JSX
**Output của đoạn code sau?**

```jsx
const element = (
  <div>
    {false && <p>Hello</p>}
    {null}
    {undefined}
    {0}
    {'' && <p>World</p>}
  </div>
);
```

- A) Hiển thị "Hello World 0"
- B) Hiển thị "0"
- C) Không hiển thị gì
- D) Error

---

## Câu 3: State vs Props
**Điều nào sau đây ĐÚNG về State và Props?**

- A) Props có thể thay đổi bởi component nhận nó
- B) State là immutable
- C) Props được truyền từ parent, State được quản lý bởi component
- D) State và Props là giống nhau

---

## Câu 4: useState
**Output của đoạn code sau?**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

**Sau khi click button, count sẽ là?**

- A) 3
- B) 1
- C) 0
- D) Error

---

## Câu 5: useEffect Dependencies
**useEffect nào sẽ chạy khi component re-render?**

```jsx
// A
useEffect(() => {
  console.log('A');
});

// B
useEffect(() => {
  console.log('B');
}, []);

// C
useEffect(() => {
  console.log('C');
}, [someValue]);
```

- A) Chỉ A
- B) A và C (nếu someValue thay đổi)
- C) Tất cả
- D) Chỉ B

---

## Câu 6: Keys in Lists
**Tại sao cần key khi render list trong React?**

- A) Để styling
- B) Để React identify items đã thay đổi, thêm, hoặc xóa
- C) Không cần thiết, chỉ là convention
- D) Để SEO

---

## Câu 7: Controlled vs Uncontrolled
**Đâu là Controlled Component?**

- A)
```jsx
<input defaultValue="hello" />
```

- B)
```jsx
<input value={value} onChange={handleChange} />
```

- C)
```jsx
<input ref={inputRef} />
```

- D) Cả A và C

---

## Câu 8: Event Handling
**Cách đúng để pass argument vào event handler?**

- A) `onClick={handleClick(id)}`
- B) `onClick={() => handleClick(id)}`
- C) `onClick={handleClick.bind(this, id)}`
- D) B và C đều đúng

---

## Câu 9: Conditional Rendering
**Output của component sau?**

```jsx
function App({ items }) {
  return (
    <div>
      {items.length && <List items={items} />}
    </div>
  );
}
// Khi items = []
```

- A) Không render gì
- B) Render `0`
- C) Render `<List />`
- D) Error

---

## Câu 10: Fragment
**Khi nào nên sử dụng React.Fragment?**

- A) Khi cần wrap multiple elements mà không thêm DOM node
- B) Khi cần styling
- C) Khi render list
- D) Không bao giờ cần thiết

---

# PHẦN 2: MIDDLE LEVEL

## Câu 11: useCallback
**Khi nào nên sử dụng useCallback?**

- A) Cho tất cả functions
- B) Khi pass callback xuống child components được memo
- C) Để tăng performance cho mọi function
- D) Khi sử dụng với useState

---

## Câu 12: useMemo vs useCallback
**Sự khác biệt giữa useMemo và useCallback?**

- A) Không có sự khác biệt
- B) useMemo cache value, useCallback cache function
- C) useCallback cache value, useMemo cache function
- D) useMemo cho arrays, useCallback cho objects

---

## Câu 13: useRef
**Điều nào ĐÚNG về useRef?**

- A) Thay đổi `.current` sẽ trigger re-render
- B) useRef persist value qua các re-renders mà không trigger re-render
- C) useRef chỉ dùng cho DOM references
- D) useRef giống như useState

---

## Câu 14: Context API
**Vấn đề chính của Context API?**

- A) Không hoạt động với functional components
- B) Gây re-render tất cả consumers khi context value thay đổi
- C) Không thể nested contexts
- D) Chỉ hoạt động với class components

---

## Câu 15: React.memo
**Khi nào React.memo KHÔNG hoạt động?**

- A) Khi props là primitives
- B) Khi props là objects/arrays được tạo mới mỗi render
- C) Khi component có state
- D) Khi sử dụng với hooks

---

## Câu 16: Custom Hooks
**Output của custom hook sau?**

```jsx
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  return { count, increment };
}

function App() {
  const counter1 = useCounter(0);
  const counter2 = useCounter(0);

  counter1.increment();

  return <div>{counter1.count} - {counter2.count}</div>;
}
```

**Điều gì xảy ra?**

- A) Hiển thị "1 - 0"
- B) Hiển thị "1 - 1"
- C) Infinite loop
- D) Error hoặc unexpected behavior

---

## Câu 17: useReducer
**Khi nào nên sử dụng useReducer thay vì useState?**

- A) Luôn luôn
- B) Khi state logic phức tạp hoặc state tiếp theo phụ thuộc vào state trước
- C) Khi có 1 state đơn giản
- D) Không bao giờ, useState luôn tốt hơn

---

## Câu 18: Error Boundaries
**Điều nào ĐÚNG về Error Boundaries?**

- A) Có thể implement bằng functional components
- B) Catch errors trong event handlers
- C) Chỉ có thể implement bằng class components với componentDidCatch
- D) Catch tất cả các loại errors

---

## Câu 19: Reconciliation
**React reconciliation algorithm làm gì?**

- A) Compile JSX thành JavaScript
- B) So sánh Virtual DOM trees và update Real DOM hiệu quả
- C) Handle routing
- D) Manage state

---

## Câu 20: Lifting State Up
**"Lifting state up" có nghĩa là?**

- A) Di chuyển state lên global store
- B) Di chuyển state lên ancestor component gần nhất cần share data
- C) Sử dụng Redux
- D) Sử dụng Context

---

# PHẦN 3: SENIOR LEVEL

## Câu 21: Fiber Architecture
**React Fiber là gì?**

- A) Một CSS-in-JS library
- B) Reimplementation của React core algorithm cho incremental rendering
- C) Một testing framework
- D) Một state management library

---

## Câu 22: Concurrent Mode
**Concurrent Mode trong React cho phép?**

- A) Chạy multiple React instances
- B) Interruptible rendering, prioritize updates
- C) Server-side rendering only
- D) Multi-threading trong JavaScript

---

## Câu 23: Suspense
**Suspense component được sử dụng cho?**

- A) Error handling
- B) Hiển thị fallback UI trong khi chờ something (lazy loading, data fetching)
- C) Animation
- D) Routing

---

## Câu 24: Code Splitting
**Cách implement code splitting trong React?**

- A) `import('./Component')`
- B) `React.lazy(() => import('./Component'))`
- C) `require('./Component')`
- D) `React.split('./Component')`

---

## Câu 25: Server Components
**Điều nào ĐÚNG về React Server Components?**

- A) Chạy trên client
- B) Có thể sử dụng hooks như useState
- C) Chạy trên server, không bundle JavaScript cho client
- D) Là cách viết khác của SSR

---

## Câu 26: Hydration
**Hydration trong React là gì?**

- A) Adding CSS to components
- B) Attaching event listeners đến server-rendered HTML
- C) Fetching data
- D) Caching components

---

## Câu 27: Portals
**Khi nào sử dụng React Portals?**

- A) Để routing
- B) Render children vào DOM node khác ngoài parent hierarchy
- C) Để state management
- D) Để code splitting

---

## Câu 28: useLayoutEffect vs useEffect
**Sự khác biệt chính?**

- A) Không có sự khác biệt
- B) useLayoutEffect chạy synchronously sau DOM mutations, trước browser paint
- C) useEffect chạy trước useLayoutEffect
- D) useLayoutEffect không có cleanup function

---

## Câu 29: Strict Mode
**React.StrictMode làm gì?**

- A) Enforce TypeScript
- B) Double-invoke functions để detect side effects, warn về deprecated APIs
- C) Enable production optimizations
- D) Handle errors

---

## Câu 30: Performance Optimization
**Cách nào KHÔNG phải là best practice cho performance trong React?**

- A) Sử dụng React.memo cho pure components
- B) Virtualization cho long lists
- C) Memoize tất cả functions với useCallback
- D) Code splitting với React.lazy

---

## Câu 31: State Colocation
**"State Colocation" principle là gì?**

- A) Đặt tất cả state ở global store
- B) Đặt state gần nhất với nơi sử dụng nó
- C) Chỉ sử dụng local state
- D) Chỉ sử dụng Context

---

## Câu 32: Render Props vs HOC vs Hooks
**Ưu điểm của Custom Hooks so với HOC và Render Props?**

- A) Tránh wrapper hell, share logic dễ dàng hơn
- B) Performance tốt hơn
- C) Chỉ hoạt động với class components
- D) Không có ưu điểm

---

## Câu 33: Batching
**Automatic batching trong React 18 là gì?**

```jsx
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Trong React 18, bao nhiêu re-renders?
}
```

- A) 2 re-renders
- B) 1 re-render (batched)
- C) 0 re-renders
- D) Depends on environment

---

## Câu 34: useTransition
**useTransition hook được sử dụng cho?**

- A) CSS transitions
- B) Mark state updates as non-urgent, keep UI responsive
- C) Route transitions
- D) Data fetching

---

## Câu 35: useDeferredValue
**Khi nào sử dụng useDeferredValue?**

- A) Để delay rendering của expensive computations
- B) Để cache values
- C) Để handle forms
- D) Để routing

---

---

# ĐÁP ÁN CHI TIẾT

## Junior Level

### Câu 1: Đáp án B - Lightweight JavaScript representation của Real DOM

**Giải thích:**
- Virtual DOM là một JavaScript object representation của Real DOM
- React so sánh Virtual DOM mới với cũ (diffing)
- Chỉ update những phần thay đổi vào Real DOM (reconciliation)
- Giảm thiểu expensive DOM manipulations

**Tham khảo:** [React - Virtual DOM](https://legacy.reactjs.org/docs/faq-internals.html)

---

### Câu 2: Đáp án B - Render `0`

**Giải thích:**
- `false`, `null`, `undefined` → không render
- `0` → render "0" (falsy nhưng vẫn là valid renderable value)
- `''` (empty string) → không render

**Best practice:**
```jsx
// ❌ Có thể render 0
{items.length && <List />}

// ✅ Sử dụng ternary hoặc boolean conversion
{items.length > 0 && <List />}
{items.length ? <List /> : null}
{!!items.length && <List />}
```

**Tham khảo:** [React - Conditional Rendering](https://react.dev/learn/conditional-rendering)

---

### Câu 3: Đáp án C

**Giải thích:**
- **Props:** Passed from parent, read-only trong component
- **State:** Managed internally by component, có thể update
- Props flow down (unidirectional data flow)

**Tham khảo:** [React - Passing Props](https://react.dev/learn/passing-props-to-a-component)

---

### Câu 4: Đáp án B - count = 1

**Giải thích:**
- React batches state updates
- `count` trong cả 3 setCount calls đều là `0` (closure)
- Tất cả đều set `count = 0 + 1 = 1`

**Solution với functional update:**
```jsx
const handleClick = () => {
  setCount(c => c + 1); // 0 -> 1
  setCount(c => c + 1); // 1 -> 2
  setCount(c => c + 1); // 2 -> 3
};
```

**Tham khảo:** [React - useState](https://react.dev/reference/react/useState)

---

### Câu 5: Đáp án B - A và C (nếu someValue thay đổi)

**Giải thích:**
- **No dependencies:** Chạy sau mỗi render
- **Empty array `[]`:** Chỉ chạy 1 lần sau initial render
- **With dependencies:** Chạy khi dependencies thay đổi

**Tham khảo:** [React - useEffect](https://react.dev/reference/react/useEffect)

---

### Câu 6: Đáp án B

**Giải thích:**
- Keys giúp React identify items trong list
- Efficient updates: React biết item nào thay đổi, thêm, xóa
- Preserve state: Component với key giữ nguyên sẽ preserve state

**Bad practices:**
```jsx
// ❌ Sử dụng index khi list có thể reorder
{items.map((item, index) => <Item key={index} />)}

// ✅ Sử dụng unique, stable ID
{items.map(item => <Item key={item.id} />)}
```

**Tham khảo:** [React - Rendering Lists](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)

---

### Câu 7: Đáp án B

**Giải thích:**
- **Controlled:** React state là "single source of truth", value và onChange
- **Uncontrolled:** DOM là source of truth, sử dụng ref để get value

```jsx
// Controlled
const [value, setValue] = useState('');
<input value={value} onChange={e => setValue(e.target.value)} />

// Uncontrolled
const inputRef = useRef();
<input ref={inputRef} defaultValue="hello" />
```

**Tham khảo:** [React - Controlled Components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)

---

### Câu 8: Đáp án D - B và C đều đúng

**Giải thích:**
- A sẽ gọi function ngay lập tức khi render
- B: Arrow function wrapper - common pattern
- C: bind() - also works, older pattern

**Tham khảo:** [React - Handling Events](https://react.dev/learn/responding-to-events)

---

### Câu 9: Đáp án B - Render `0`

**Giải thích:**
- `[].length` = `0`
- `0 && anything` = `0` (falsy value)
- React renders `0` vì nó là number

**Fix:**
```jsx
{items.length > 0 && <List items={items} />}
// hoặc
{items.length ? <List items={items} /> : null}
```

---

### Câu 10: Đáp án A

**Giải thích:**
- Fragment wrap multiple elements mà không thêm extra DOM node
- Useful khi cần return multiple elements từ component

```jsx
// Adds extra div
<div>
  <Header />
  <Content />
</div>

// No extra DOM node
<>
  <Header />
  <Content />
</>

// With key (in lists)
<React.Fragment key={id}>
  <Header />
  <Content />
</React.Fragment>
```

**Tham khảo:** [React - Fragment](https://react.dev/reference/react/Fragment)

---

## Middle Level

### Câu 11: Đáp án B

**Giải thích:**
- useCallback memoize function reference
- Useful khi passing callbacks to memoized child components
- Không cần cho mọi function - premature optimization

```jsx
const MemoizedChild = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  // ✅ useCallback needed - Child is memoized
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);

  return <MemoizedChild onClick={handleClick} />;
}
```

**Tham khảo:** [React - useCallback](https://react.dev/reference/react/useCallback)

---

### Câu 12: Đáp án B

**Giải thích:**
```jsx
// useMemo: cache computed value
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useCallback: cache function reference
const memoizedFn = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// useCallback(fn, deps) === useMemo(() => fn, deps)
```

**Tham khảo:** [React - useMemo](https://react.dev/reference/react/useMemo)

---

### Câu 13: Đáp án B

**Giải thích:**
- useRef returns mutable ref object với `.current` property
- Changes to `.current` don't trigger re-render
- Persists across re-renders
- Use cases: DOM refs, storing previous values, mutable values

```jsx
const renderCount = useRef(0);
renderCount.current++; // Doesn't trigger re-render

const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus(); // Access DOM element
```

**Tham khảo:** [React - useRef](https://react.dev/reference/react/useRef)

---

### Câu 14: Đáp án B

**Giải thích:**
- Khi context value thay đổi, ALL consumers re-render
- Even if consumer chỉ cần một phần của context value
- Solutions: Split contexts, memoization, state management libraries

```jsx
// Problem: All consumers re-render
const AppContext = createContext({ user: null, theme: 'light' });

// Solution: Split contexts
const UserContext = createContext(null);
const ThemeContext = createContext('light');
```

**Tham khảo:** [React - useContext](https://react.dev/reference/react/useContext)

---

### Câu 15: Đáp án B

**Giải thích:**
- React.memo shallow compare props
- New object/array reference mỗi render → always different → always re-render

```jsx
// ❌ Won't work - new object every render
<MemoizedComponent style={{ color: 'red' }} />

// ✅ Works - stable reference
const style = useMemo(() => ({ color: 'red' }), []);
<MemoizedComponent style={style} />

// ✅ Custom comparison
const MemoizedComponent = React.memo(Component, (prev, next) => {
  return prev.id === next.id;
});
```

**Tham khảo:** [React - memo](https://react.dev/reference/react/memo)

---

### Câu 16: Đáp án D - Error hoặc unexpected behavior

**Giải thích:**
- Gọi `increment()` trong render body (không trong event handler)
- Violates "don't call setState during render"
- Causes infinite loop hoặc error

**Correct usage:**
```jsx
function App() {
  const counter1 = useCounter(0);

  // ✅ Call in event handler
  return <button onClick={counter1.increment}>{counter1.count}</button>;
}
```

---

### Câu 17: Đáp án B

**Giải thích:**
useReducer tốt hơn khi:
- State logic phức tạp với multiple sub-values
- Next state phụ thuộc vào previous state
- Cần pass dispatch xuống nhiều levels

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

**Tham khảo:** [React - useReducer](https://react.dev/reference/react/useReducer)

---

### Câu 18: Đáp án C

**Giải thích:**
- Error Boundaries chỉ có thể implement với class components
- Sử dụng `componentDidCatch` và `getDerivedStateFromError`
- KHÔNG catch: event handlers, async code, SSR errors, errors trong boundary itself

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

**Tham khảo:** [React - Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

---

### Câu 19: Đáp án B

**Giải thích:**
- Reconciliation là process so sánh 2 Virtual DOM trees
- Tìm minimum number of operations để update Real DOM
- Uses heuristics: different types → recreate, same type → update attributes

**Tham khảo:** [React - Reconciliation](https://legacy.reactjs.org/docs/reconciliation.html)

---

### Câu 20: Đáp án B

**Giải thích:**
- Move state up to closest common ancestor
- Cho phép sibling components share state
- Parent owns state, passes down via props

```jsx
// Before: State in Child
function Child() {
  const [value, setValue] = useState('');
  // ...
}

// After: State lifted to Parent
function Parent() {
  const [value, setValue] = useState('');
  return (
    <>
      <Child1 value={value} onChange={setValue} />
      <Child2 value={value} />
    </>
  );
}
```

**Tham khảo:** [React - Sharing State](https://react.dev/learn/sharing-state-between-components)

---

## Senior Level

### Câu 21: Đáp án B

**Giải thích:**
- React Fiber là reimplementation của React's core algorithm (v16+)
- Enables incremental rendering: split work into chunks
- Pause, abort, resume work
- Assign priority to different types of updates
- Foundation for Concurrent Mode

**Tham khảo:** [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

---

### Câu 22: Đáp án B

**Giải thích:**
- Concurrent Mode enables interruptible rendering
- React có thể pause rendering để handle more urgent updates
- Features: useTransition, useDeferredValue, Suspense for data fetching

```jsx
// UI stays responsive during expensive updates
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setSearchQuery(input); // Low priority update
});
```

**Tham khảo:** [React - Concurrent React](https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react)

---

### Câu 23: Đáp án B

**Giải thích:**
- Suspense cho phép "wait" for something và show fallback
- Use cases: lazy loading, data fetching (với compatible libraries)

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
```

**Tham khảo:** [React - Suspense](https://react.dev/reference/react/Suspense)

---

### Câu 24: Đáp án B

**Giải thích:**
```jsx
// Code splitting với React.lazy
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}

// Route-based code splitting
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
```

**Tham khảo:** [React - Code Splitting](https://react.dev/reference/react/lazy)

---

### Câu 25: Đáp án C

**Giải thích:**
- React Server Components (RSC) chạy trên server
- Zero bundle size - không ship JavaScript cho client
- Có thể directly access databases, file system
- KHÔNG thể sử dụng hooks (useState, useEffect) hoặc browser APIs
- Client Components cho interactivity

```jsx
// Server Component (default in Next.js App Router)
async function ServerComponent() {
  const data = await db.query('SELECT * FROM posts');
  return <div>{data.map(post => <p>{post.title}</p>)}</div>;
}

// Client Component
'use client';
function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

**Tham khảo:** [React - Server Components](https://react.dev/reference/rsc/server-components)

---

### Câu 26: Đáp án B

**Giải thích:**
- Server renders HTML
- Client receives HTML → page visible ngay
- Hydration: React attaches event listeners và makes it interactive
- "Dry" HTML → "Hydrated" interactive app

**Tham khảo:** [React - hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot)

---

### Câu 27: Đáp án B

**Giải thích:**
- Portals render children vào DOM node khác
- Use cases: modals, tooltips, dropdowns
- Events vẫn bubble up qua React tree

```jsx
function Modal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root')
  );
}
```

**Tham khảo:** [React - createPortal](https://react.dev/reference/react-dom/createPortal)

---

### Câu 28: Đáp án B

**Giải thích:**
- `useLayoutEffect`: Fires synchronously after DOM mutations, BEFORE browser paint
- `useEffect`: Fires asynchronously AFTER browser paint
- useLayoutEffect cho DOM measurements, prevent flicker

```jsx
// useLayoutEffect: Measure DOM before paint
useLayoutEffect(() => {
  const { height } = ref.current.getBoundingClientRect();
  setHeight(height);
}, []);

// useEffect: Most cases, doesn't block paint
useEffect(() => {
  fetchData();
}, []);
```

**Tham khảo:** [React - useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)

---

### Câu 29: Đáp án B

**Giải thích:**
StrictMode in development:
- Double-invokes components, effects, reducers to find bugs
- Warns about deprecated APIs
- Warns about legacy string refs
- Helps detect side effects

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

**Tham khảo:** [React - StrictMode](https://react.dev/reference/react/StrictMode)

---

### Câu 30: Đáp án C - Memoize tất cả functions với useCallback

**Giải thích:**
- Over-memoization is an anti-pattern
- useCallback có cost: dependency comparison mỗi render
- Chỉ memoize khi cần: pass to memoized children, trong dependency arrays

**Good practices:**
- React.memo cho components nhận stable props
- Virtualization (react-window, react-virtualized)
- Code splitting với React.lazy
- Proper key usage
- Avoid inline objects/arrays in props

**Tham khảo:** [React - Performance](https://react.dev/learn/render-and-commit)

---

### Câu 31: Đáp án B

**Giải thích:**
- State Colocation: Đặt state gần nhất với nơi cần nó
- Don't lift state higher than necessary
- Improves performance và maintainability

```jsx
// ❌ State too high - causes unnecessary re-renders
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Header />  {/* Re-renders unnecessarily */}
    <SearchInput value={searchTerm} onChange={setSearchTerm} />
  );
}

// ✅ State colocated
function App() {
  return (
    <Header />
    <SearchSection />  {/* State inside */}
  );
}
```

**Tham khảo:** [Kent C. Dodds - State Colocation](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)

---

### Câu 32: Đáp án A

**Giải thích:**
- Custom Hooks tránh wrapper hell (HOC, Render Props)
- Dễ compose và share logic
- Better TypeScript support
- Easier to test

```jsx
// HOC - wrapper hell
export default withAuth(withTheme(withRouter(MyComponent)));

// Render Props - nested callbacks
<Auth>
  {user => (
    <Theme>
      {theme => <MyComponent user={user} theme={theme} />}
    </Theme>
  )}
</Auth>

// Custom Hooks - clean và composable
function MyComponent() {
  const user = useAuth();
  const theme = useTheme();
  // ...
}
```

---

### Câu 33: Đáp án B - 1 re-render (batched)

**Giải thích:**
- React 18 automatic batching: batch ALL updates
- Trước React 18: chỉ batch trong React event handlers
- Bây giờ: batch trong promises, setTimeout, native events

```jsx
// React 18: All batched into 1 re-render
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
}

// Even in async code
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Still 1 re-render!
}, 1000);

// Opt-out với flushSync
import { flushSync } from 'react-dom';
flushSync(() => setCount(c => c + 1)); // Force immediate render
setFlag(f => !f); // Separate render
```

**Tham khảo:** [React 18 - Automatic Batching](https://react.dev/blog/2022/03/29/react-v18#new-feature-automatic-batching)

---

### Câu 34: Đáp án B

**Giải thích:**
- useTransition marks updates as non-urgent
- UI remains responsive
- Shows pending state while transitioning

```jsx
function SearchResults() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');

  function handleChange(e) {
    // Urgent: Update input immediately
    setInputValue(e.target.value);

    // Non-urgent: Update results (can be interrupted)
    startTransition(() => {
      setQuery(e.target.value);
    });
  }

  return (
    <>
      <input onChange={handleChange} />
      {isPending && <Spinner />}
      <Results query={query} />
    </>
  );
}
```

**Tham khảo:** [React - useTransition](https://react.dev/reference/react/useTransition)

---

### Câu 35: Đáp án A

**Giải thích:**
- useDeferredValue defers updating part of UI
- Shows "stale" value while new value is computing
- Good for expensive renders

```jsx
function SearchResults({ query }) {
  // deferredQuery lags behind query
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <div style={{ opacity: isStale ? 0.5 : 1 }}>
      <ExpensiveList query={deferredQuery} />
    </div>
  );
}
```

**Tham khảo:** [React - useDeferredValue](https://react.dev/reference/react/useDeferredValue)

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [React Official Documentation](https://react.dev/)
2. [React GitHub](https://github.com/facebook/react)
3. [React Patterns](https://reactpatterns.com/)
4. [Kent C. Dodds Blog](https://kentcdodds.com/blog)
5. [Dan Abramov's Overreacted](https://overreacted.io/)
6. [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
