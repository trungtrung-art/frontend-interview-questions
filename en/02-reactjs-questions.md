# ReactJS Interview Questions
## From Junior to Senior/Lead

---

## TABLE OF CONTENTS
- [Part 1: Junior Level](#part-1-junior-level)
- [Part 2: Middle Level](#part-2-middle-level)
- [Part 3: Senior Level](#part-3-senior-level)
- [Detailed Answers](#detailed-answers)

---

# PART 1: JUNIOR LEVEL

## Question 1: Virtual DOM
**What is Virtual DOM in React?**

- A) A copy of Real DOM stored in database
- B) A lightweight JavaScript representation of Real DOM
- C) A CSS framework
- D) A browser API

---

## Question 2: JSX
**What is the output of the following code?**

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

- A) Displays "Hello World 0"
- B) Displays "0"
- C) Displays nothing
- D) Error

---

## Question 3: State vs Props
**Which statement is TRUE about State and Props?**

- A) Props can be changed by the receiving component
- B) State is immutable
- C) Props are passed from parent, State is managed by the component
- D) State and Props are the same

---

## Question 4: useState
**What is the output of the following code?**

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

**After clicking the button, what will count be?**

- A) 3
- B) 1
- C) 0
- D) Error

---

## Question 5: useEffect Dependencies
**Which useEffect will run when the component re-renders?**

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

- A) Only A
- B) A and C (if someValue changes)
- C) All
- D) Only B

---

## Question 6: Keys in Lists
**Why do we need keys when rendering lists in React?**

- A) For styling
- B) For React to identify which items have changed, added, or removed
- C) Not necessary, just a convention
- D) For SEO

---

## Question 7: Controlled vs Uncontrolled
**Which is a Controlled Component?**

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

- D) Both A and C

---

## Question 8: Event Handling
**What is the correct way to pass an argument to an event handler?**

- A) `onClick={handleClick(id)}`
- B) `onClick={() => handleClick(id)}`
- C) `onClick={handleClick.bind(this, id)}`
- D) Both B and C are correct

---

## Question 9: Conditional Rendering
**What is the output of the following component?**

```jsx
function App({ items }) {
  return (
    <div>
      {items.length && <List items={items} />}
    </div>
  );
}
// When items = []
```

- A) Renders nothing
- B) Renders `0`
- C) Renders `<List />`
- D) Error

---

## Question 10: Fragment
**When should you use React.Fragment?**

- A) When you need to wrap multiple elements without adding a DOM node
- B) When you need styling
- C) When rendering lists
- D) Never necessary

---

# PART 2: MIDDLE LEVEL

## Question 11: useCallback
**When should you use useCallback?**

- A) For all functions
- B) When passing callbacks to memoized child components
- C) To improve performance for every function
- D) When using with useState

---

## Question 12: useMemo vs useCallback
**What is the difference between useMemo and useCallback?**

- A) No difference
- B) useMemo caches values, useCallback caches functions
- C) useCallback caches values, useMemo caches functions
- D) useMemo is for arrays, useCallback is for objects

---

## Question 13: useRef
**Which statement is TRUE about useRef?**

- A) Changing `.current` will trigger a re-render
- B) useRef persists value across re-renders without triggering re-render
- C) useRef is only for DOM references
- D) useRef is the same as useState

---

## Question 14: Context API
**What is the main issue with Context API?**

- A) Doesn't work with functional components
- B) Causes all consumers to re-render when context value changes
- C) Cannot have nested contexts
- D) Only works with class components

---

## Question 15: React.memo
**When does React.memo NOT work?**

- A) When props are primitives
- B) When props are objects/arrays created new each render
- C) When component has state
- D) When used with hooks

---

## Question 16: Custom Hooks
**What is the output of the following custom hook?**

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

**What happens?**

- A) Displays "1 - 0"
- B) Displays "1 - 1"
- C) Infinite loop
- D) Error or unexpected behavior

---

## Question 17: useReducer
**When should you use useReducer instead of useState?**

- A) Always
- B) When state logic is complex or next state depends on previous state
- C) When there's a single simple state
- D) Never, useState is always better

---

## Question 18: Error Boundaries
**Which statement is TRUE about Error Boundaries?**

- A) Can be implemented with functional components
- B) Catches errors in event handlers
- C) Can only be implemented with class components using componentDidCatch
- D) Catches all types of errors

---

## Question 19: Reconciliation
**What does the React reconciliation algorithm do?**

- A) Compiles JSX to JavaScript
- B) Compares Virtual DOM trees and efficiently updates Real DOM
- C) Handles routing
- D) Manages state

---

## Question 20: Lifting State Up
**What does "lifting state up" mean?**

- A) Moving state to a global store
- B) Moving state to the nearest common ancestor that needs to share data
- C) Using Redux
- D) Using Context

---

# PART 3: SENIOR LEVEL

## Question 21: Fiber Architecture
**What is React Fiber?**

- A) A CSS-in-JS library
- B) Reimplementation of React's core algorithm for incremental rendering
- C) A testing framework
- D) A state management library

---

## Question 22: Concurrent Mode
**What does Concurrent Mode in React allow?**

- A) Running multiple React instances
- B) Interruptible rendering, prioritizing updates
- C) Server-side rendering only
- D) Multi-threading in JavaScript

---

## Question 23: Suspense
**What is the Suspense component used for?**

- A) Error handling
- B) Displaying fallback UI while waiting for something (lazy loading, data fetching)
- C) Animation
- D) Routing

---

## Question 24: Code Splitting
**How do you implement code splitting in React?**

- A) `import('./Component')`
- B) `React.lazy(() => import('./Component'))`
- C) `require('./Component')`
- D) `React.split('./Component')`

---

## Question 25: Server Components
**Which statement is TRUE about React Server Components?**

- A) Run on the client
- B) Can use hooks like useState
- C) Run on the server, don't bundle JavaScript for client
- D) Are just another way of writing SSR

---

## Question 26: Hydration
**What is hydration in React?**

- A) Adding CSS to components
- B) Attaching event listeners to server-rendered HTML
- C) Fetching data
- D) Caching components

---

## Question 27: Portals
**When should you use React Portals?**

- A) For routing
- B) Rendering children into a DOM node outside the parent hierarchy
- C) For state management
- D) For code splitting

---

## Question 28: useLayoutEffect vs useEffect
**What is the main difference?**

- A) No difference
- B) useLayoutEffect runs synchronously after DOM mutations, before browser paint
- C) useEffect runs before useLayoutEffect
- D) useLayoutEffect doesn't have a cleanup function

---

## Question 29: Strict Mode
**What does React.StrictMode do?**

- A) Enforces TypeScript
- B) Double-invokes functions to detect side effects, warns about deprecated APIs
- C) Enables production optimizations
- D) Handles errors

---

## Question 30: Performance Optimization
**Which is NOT a best practice for performance in React?**

- A) Using React.memo for pure components
- B) Virtualization for long lists
- C) Memoizing all functions with useCallback
- D) Code splitting with React.lazy

---

## Question 31: State Colocation
**What is the "State Colocation" principle?**

- A) Put all state in a global store
- B) Put state as close as possible to where it's used
- C) Only use local state
- D) Only use Context

---

## Question 32: Render Props vs HOC vs Hooks
**What is the advantage of Custom Hooks over HOC and Render Props?**

- A) Avoids wrapper hell, shares logic more easily
- B) Better performance
- C) Only works with class components
- D) No advantages

---

## Question 33: Batching
**What is automatic batching in React 18?**

```jsx
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // In React 18, how many re-renders?
}
```

- A) 2 re-renders
- B) 1 re-render (batched)
- C) 0 re-renders
- D) Depends on environment

---

## Question 34: useTransition
**What is the useTransition hook used for?**

- A) CSS transitions
- B) Mark state updates as non-urgent, keep UI responsive
- C) Route transitions
- D) Data fetching

---

## Question 35: useDeferredValue
**When should you use useDeferredValue?**

- A) To delay rendering of expensive computations
- B) To cache values
- C) To handle forms
- D) For routing

---

---

# DETAILED ANSWERS

## Junior Level

### Question 1: Answer B - Lightweight JavaScript representation of Real DOM

**Explanation:**
- Virtual DOM is a JavaScript object representation of Real DOM
- React compares new Virtual DOM with old one (diffing)
- Only updates changed parts to Real DOM (reconciliation)
- Minimizes expensive DOM manipulations

**Reference:** [React - Virtual DOM](https://legacy.reactjs.org/docs/faq-internals.html)

---

### Question 2: Answer B - Renders `0`

**Explanation:**
- `false`, `null`, `undefined` -> don't render
- `0` -> renders "0" (falsy but still a valid renderable value)
- `''` (empty string) -> doesn't render

**Best practice:**
```jsx
// ❌ May render 0
{items.length && <List />}

// ✅ Use ternary or boolean conversion
{items.length > 0 && <List />}
{items.length ? <List /> : null}
{!!items.length && <List />}
```

**Reference:** [React - Conditional Rendering](https://react.dev/learn/conditional-rendering)

---

### Question 3: Answer C

**Explanation:**
- **Props:** Passed from parent, read-only in component
- **State:** Managed internally by component, can be updated
- Props flow down (unidirectional data flow)

**Reference:** [React - Passing Props](https://react.dev/learn/passing-props-to-a-component)

---

### Question 4: Answer B - count = 1

**Explanation:**
- React batches state updates
- `count` in all 3 setCount calls is `0` (closure)
- All set `count = 0 + 1 = 1`

**Solution with functional update:**
```jsx
const handleClick = () => {
  setCount(c => c + 1); // 0 -> 1
  setCount(c => c + 1); // 1 -> 2
  setCount(c => c + 1); // 2 -> 3
};
```

**Reference:** [React - useState](https://react.dev/reference/react/useState)

---

### Question 5: Answer B - A and C (if someValue changes)

**Explanation:**
- **No dependencies:** Runs after every render
- **Empty array `[]`:** Runs only once after initial render
- **With dependencies:** Runs when dependencies change

**Reference:** [React - useEffect](https://react.dev/reference/react/useEffect)

---

### Question 6: Answer B

**Explanation:**
- Keys help React identify items in a list
- Efficient updates: React knows which items changed, added, or removed
- Preserve state: Component with same key preserves state

**Bad practices:**
```jsx
// ❌ Using index when list can be reordered
{items.map((item, index) => <Item key={index} />)}

// ✅ Use unique, stable ID
{items.map(item => <Item key={item.id} />)}
```

**Reference:** [React - Rendering Lists](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)

---

### Question 7: Answer B

**Explanation:**
- **Controlled:** React state is "single source of truth", value and onChange
- **Uncontrolled:** DOM is source of truth, use ref to get value

```jsx
// Controlled
const [value, setValue] = useState('');
<input value={value} onChange={e => setValue(e.target.value)} />

// Uncontrolled
const inputRef = useRef();
<input ref={inputRef} defaultValue="hello" />
```

**Reference:** [React - Controlled Components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)

---

### Question 8: Answer D - Both B and C are correct

**Explanation:**
- A will call the function immediately when rendering
- B: Arrow function wrapper - common pattern
- C: bind() - also works, older pattern

**Reference:** [React - Handling Events](https://react.dev/learn/responding-to-events)

---

### Question 9: Answer B - Renders `0`

**Explanation:**
- `[].length` = `0`
- `0 && anything` = `0` (falsy value)
- React renders `0` because it's a number

**Fix:**
```jsx
{items.length > 0 && <List items={items} />}
// or
{items.length ? <List items={items} /> : null}
```

---

### Question 10: Answer A

**Explanation:**
- Fragment wraps multiple elements without adding extra DOM node
- Useful when you need to return multiple elements from a component

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

**Reference:** [React - Fragment](https://react.dev/reference/react/Fragment)

---

## Middle Level

### Question 11: Answer B

**Explanation:**
- useCallback memoizes function reference
- Useful when passing callbacks to memoized child components
- Not needed for every function - premature optimization

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

**Reference:** [React - useCallback](https://react.dev/reference/react/useCallback)

---

### Question 12: Answer B

**Explanation:**
```jsx
// useMemo: cache computed value
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useCallback: cache function reference
const memoizedFn = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// useCallback(fn, deps) === useMemo(() => fn, deps)
```

**Reference:** [React - useMemo](https://react.dev/reference/react/useMemo)

---

### Question 13: Answer B

**Explanation:**
- useRef returns mutable ref object with `.current` property
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

**Reference:** [React - useRef](https://react.dev/reference/react/useRef)

---

### Question 14: Answer B

**Explanation:**
- When context value changes, ALL consumers re-render
- Even if consumer only needs part of the context value
- Solutions: Split contexts, memoization, state management libraries

```jsx
// Problem: All consumers re-render
const AppContext = createContext({ user: null, theme: 'light' });

// Solution: Split contexts
const UserContext = createContext(null);
const ThemeContext = createContext('light');
```

**Reference:** [React - useContext](https://react.dev/reference/react/useContext)

---

### Question 15: Answer B

**Explanation:**
- React.memo does shallow comparison of props
- New object/array reference each render -> always different -> always re-render

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

**Reference:** [React - memo](https://react.dev/reference/react/memo)

---

### Question 16: Answer D - Error or unexpected behavior

**Explanation:**
- Calling `increment()` in the render body (not in event handler)
- Violates "don't call setState during render"
- Causes infinite loop or error

**Correct usage:**
```jsx
function App() {
  const counter1 = useCounter(0);

  // ✅ Call in event handler
  return <button onClick={counter1.increment}>{counter1.count}</button>;
}
```

---

### Question 17: Answer B

**Explanation:**
useReducer is better when:
- State logic is complex with multiple sub-values
- Next state depends on previous state
- Need to pass dispatch down many levels

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

**Reference:** [React - useReducer](https://react.dev/reference/react/useReducer)

---

### Question 18: Answer C

**Explanation:**
- Error Boundaries can only be implemented with class components
- Uses `componentDidCatch` and `getDerivedStateFromError`
- Does NOT catch: event handlers, async code, SSR errors, errors in boundary itself

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

**Reference:** [React - Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

---

### Question 19: Answer B

**Explanation:**
- Reconciliation is the process of comparing 2 Virtual DOM trees
- Finds minimum number of operations to update Real DOM
- Uses heuristics: different types -> recreate, same type -> update attributes

**Reference:** [React - Reconciliation](https://legacy.reactjs.org/docs/reconciliation.html)

---

### Question 20: Answer B

**Explanation:**
- Move state up to closest common ancestor
- Allows sibling components to share state
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

**Reference:** [React - Sharing State](https://react.dev/learn/sharing-state-between-components)

---

## Senior Level

### Question 21: Answer B

**Explanation:**
- React Fiber is reimplementation of React's core algorithm (v16+)
- Enables incremental rendering: split work into chunks
- Pause, abort, resume work
- Assign priority to different types of updates
- Foundation for Concurrent Mode

**Reference:** [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

---

### Question 22: Answer B

**Explanation:**
- Concurrent Mode enables interruptible rendering
- React can pause rendering to handle more urgent updates
- Features: useTransition, useDeferredValue, Suspense for data fetching

```jsx
// UI stays responsive during expensive updates
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setSearchQuery(input); // Low priority update
});
```

**Reference:** [React - Concurrent React](https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react)

---

### Question 23: Answer B

**Explanation:**
- Suspense allows "wait" for something and show fallback
- Use cases: lazy loading, data fetching (with compatible libraries)

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

**Reference:** [React - Suspense](https://react.dev/reference/react/Suspense)

---

### Question 24: Answer B

**Explanation:**
```jsx
// Code splitting with React.lazy
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

**Reference:** [React - Code Splitting](https://react.dev/reference/react/lazy)

---

### Question 25: Answer C

**Explanation:**
- React Server Components (RSC) run on the server
- Zero bundle size - don't ship JavaScript to client
- Can directly access databases, file system
- CANNOT use hooks (useState, useEffect) or browser APIs
- Client Components for interactivity

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

**Reference:** [React - Server Components](https://react.dev/reference/rsc/server-components)

---

### Question 26: Answer B

**Explanation:**
- Server renders HTML
- Client receives HTML -> page visible immediately
- Hydration: React attaches event listeners and makes it interactive
- "Dry" HTML -> "Hydrated" interactive app

**Reference:** [React - hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot)

---

### Question 27: Answer B

**Explanation:**
- Portals render children into a different DOM node
- Use cases: modals, tooltips, dropdowns
- Events still bubble up through React tree

```jsx
function Modal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root')
  );
}
```

**Reference:** [React - createPortal](https://react.dev/reference/react-dom/createPortal)

---

### Question 28: Answer B

**Explanation:**
- `useLayoutEffect`: Fires synchronously after DOM mutations, BEFORE browser paint
- `useEffect`: Fires asynchronously AFTER browser paint
- useLayoutEffect for DOM measurements, prevent flicker

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

**Reference:** [React - useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)

---

### Question 29: Answer B

**Explanation:**
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

**Reference:** [React - StrictMode](https://react.dev/reference/react/StrictMode)

---

### Question 30: Answer C - Memoizing all functions with useCallback

**Explanation:**
- Over-memoization is an anti-pattern
- useCallback has cost: dependency comparison every render
- Only memoize when needed: pass to memoized children, in dependency arrays

**Good practices:**
- React.memo for components receiving stable props
- Virtualization (react-window, react-virtualized)
- Code splitting with React.lazy
- Proper key usage
- Avoid inline objects/arrays in props

**Reference:** [React - Performance](https://react.dev/learn/render-and-commit)

---

### Question 31: Answer B

**Explanation:**
- State Colocation: Put state as close as possible to where it's used
- Don't lift state higher than necessary
- Improves performance and maintainability

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

**Reference:** [Kent C. Dodds - State Colocation](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)

---

### Question 32: Answer A

**Explanation:**
- Custom Hooks avoid wrapper hell (HOC, Render Props)
- Easy to compose and share logic
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

// Custom Hooks - clean and composable
function MyComponent() {
  const user = useAuth();
  const theme = useTheme();
  // ...
}
```

---

### Question 33: Answer B - 1 re-render (batched)

**Explanation:**
- React 18 automatic batching: batch ALL updates
- Before React 18: only batched in React event handlers
- Now: batches in promises, setTimeout, native events

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

// Opt-out with flushSync
import { flushSync } from 'react-dom';
flushSync(() => setCount(c => c + 1)); // Force immediate render
setFlag(f => !f); // Separate render
```

**Reference:** [React 18 - Automatic Batching](https://react.dev/blog/2022/03/29/react-v18#new-feature-automatic-batching)

---

### Question 34: Answer B

**Explanation:**
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

**Reference:** [React - useTransition](https://react.dev/reference/react/useTransition)

---

### Question 35: Answer A

**Explanation:**
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

**Reference:** [React - useDeferredValue](https://react.dev/reference/react/useDeferredValue)

---

## REFERENCES

1. [React Official Documentation](https://react.dev/)
2. [React GitHub](https://github.com/facebook/react)
3. [React Patterns](https://reactpatterns.com/)
4. [Kent C. Dodds Blog](https://kentcdodds.com/blog)
5. [Dan Abramov's Overreacted](https://overreacted.io/)
6. [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
