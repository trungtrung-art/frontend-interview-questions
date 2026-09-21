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
- B) Một CSS framework
- C) Một lightweight JavaScript representation của Real DOM
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

- A) Không hiển thị gì
- B) Error
- C) Hiển thị "0"
- D) Hiển thị "Hello World 0"

---

## Câu 3: State vs Props
**Điều nào sau đây ĐÚNG về State và Props?**

- A) Props được truyền từ parent, State được quản lý bởi component
- B) Props có thể thay đổi bởi component nhận nó
- C) State và Props là giống nhau
- D) State là immutable

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

- A) 0
- B) 3
- C) Error
- D) 1

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

- A) Để React identify items đã thay đổi, thêm, hoặc xóa
- B) Không cần thiết, chỉ là convention
- C) Để SEO
- D) Để styling

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

- A) Error
- B) Render `0`
- C) Render `<List />`
- D) Không render gì

---

## Câu 10: Fragment
**Khi nào nên sử dụng React.Fragment?**

- A) Khi render list
- B) Không bao giờ cần thiết
- C) Khi cần wrap multiple elements mà không thêm DOM node
- D) Khi cần styling

---

# PHẦN 2: MIDDLE LEVEL

## Câu 11: useCallback
**Khi nào nên sử dụng useCallback?**

- A) Để tăng performance cho mọi function
- B) Khi pass callback xuống child components được memo
- C) Khi sử dụng với useState
- D) Cho tất cả functions

---

## Câu 12: useMemo vs useCallback
**Sự khác biệt giữa useMemo và useCallback?**

- A) useMemo cache value, useCallback cache function
- B) useMemo cho arrays, useCallback cho objects
- C) useCallback cache value, useMemo cache function
- D) Không có sự khác biệt

---

## Câu 13: useRef
**Điều nào ĐÚNG về useRef?**

- A) useRef chỉ dùng cho DOM references
- B) useRef persist value qua các re-renders mà không trigger re-render
- C) useRef giống như useState
- D) Thay đổi `.current` sẽ trigger re-render

---

## Câu 14: Context API
**Vấn đề chính của Context API?**

- A) Không thể nested contexts
- B) Gây re-render tất cả consumers khi context value thay đổi
- C) Không hoạt động với functional components
- D) Chỉ hoạt động với class components

---

## Câu 15: React.memo
**Khi nào React.memo KHÔNG hoạt động?**

- A) Khi sử dụng với hooks
- B) Khi props là objects/arrays được tạo mới mỗi render
- C) Khi component có state
- D) Khi props là primitives

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

- A) Error hoặc unexpected behavior
- B) Infinite loop
- C) Hiển thị "1 - 1"
- D) Hiển thị "1 - 0"

---

## Câu 17: useReducer
**Khi nào nên sử dụng useReducer thay vì useState?**

- A) Khi state logic phức tạp hoặc state tiếp theo phụ thuộc vào state trước
- B) Không bao giờ, useState luôn tốt hơn
- C) Luôn luôn
- D) Khi có 1 state đơn giản

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

- A) So sánh Virtual DOM trees và update Real DOM hiệu quả
- B) Manage state
- C) Compile JSX thành JavaScript
- D) Handle routing

---

## Câu 20: Lifting State Up
**"Lifting state up" có nghĩa là?**

- A) Sử dụng Redux
- B) Di chuyển state lên ancestor component gần nhất cần share data
- C) Sử dụng Context
- D) Di chuyển state lên global store

---

# PHẦN 3: SENIOR LEVEL

## Câu 21: Fiber Architecture
**React Fiber là gì?**

- A) Một state management library
- B) Một CSS-in-JS library
- C) Một testing framework
- D) Reimplementation của React core algorithm cho incremental rendering

---

## Câu 22: Concurrent Mode
**Concurrent Mode trong React cho phép?**

- A) Server-side rendering only
- B) Multi-threading trong JavaScript
- C) Interruptible rendering, prioritize updates
- D) Chạy multiple React instances

---

## Câu 23: Suspense
**Suspense component được sử dụng cho?**

- A) Hiển thị fallback UI trong khi chờ something (lazy loading, data fetching)
- B) Error handling
- C) Routing
- D) Animation

---

## Câu 24: Code Splitting
**Cách implement code splitting trong React?**

- A) `React.lazy(() => import('./Component'))`
- B) `import('./Component')`
- C) `React.split('./Component')`
- D) `require('./Component')`

---

## Câu 25: Server Components
**Điều nào ĐÚNG về React Server Components?**

- A) Là cách viết khác của SSR
- B) Có thể sử dụng hooks như useState
- C) Chạy trên server, không bundle JavaScript cho client
- D) Chạy trên client

---

## Câu 26: Hydration
**Hydration trong React là gì?**

- A) Adding CSS to components
- B) Caching components
- C) Attaching event listeners đến server-rendered HTML
- D) Fetching data

---

## Câu 27: Portals
**Khi nào sử dụng React Portals?**

- A) Render children vào DOM node khác ngoài parent hierarchy
- B) Để state management
- C) Để code splitting
- D) Để routing

---

## Câu 28: useLayoutEffect vs useEffect
**Sự khác biệt chính?**

- A) Không có sự khác biệt
- B) useEffect chạy trước useLayoutEffect
- C) useLayoutEffect chạy synchronously sau DOM mutations, trước browser paint
- D) useLayoutEffect không có cleanup function

---

## Câu 29: Strict Mode
**React.StrictMode làm gì?**

- A) Enforce TypeScript
- B) Enable production optimizations
- C) Double-invoke functions để detect side effects, warn về deprecated APIs
- D) Handle errors

---

## Câu 30: Performance Optimization
**Cách nào KHÔNG phải là best practice cho performance trong React?**

- A) Virtualization cho long lists
- B) Memoize tất cả functions với useCallback
- C) Sử dụng React.memo cho pure components
- D) Code splitting với React.lazy

---

## Câu 31: State Colocation
**"State Colocation" principle là gì?**

- A) Chỉ sử dụng local state
- B) Đặt tất cả state ở global store
- C) Chỉ sử dụng Context
- D) Đặt state gần nhất với nơi sử dụng nó

---

## Câu 32: Render Props vs HOC vs Hooks
**Ưu điểm của Custom Hooks so với HOC và Render Props?**

- A) Performance tốt hơn
- B) Tránh wrapper hell, share logic dễ dàng hơn
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

- A) 1 re-render (batched)
- B) Depends on environment
- C) 0 re-renders
- D) 2 re-renders

---

## Câu 34: useTransition
**useTransition hook được sử dụng cho?**

- A) CSS transitions
- B) Mark state updates as non-urgent, keep UI responsive
- C) Data fetching
- D) Route transitions

---

## Câu 35: useDeferredValue
**Khi nào sử dụng useDeferredValue?**

- A) Để cache values
- B) Để routing
- C) Để handle forms
- D) Để delay rendering của expensive computations

---

---

# ĐÁP ÁN CHI TIẾT

## Junior Level

### Câu 1: Đáp án C - Lightweight JavaScript representation của Real DOM

**Giải thích:**
- Virtual DOM là một JavaScript object representation của Real DOM
- React so sánh Virtual DOM mới với cũ (diffing)
- Chỉ update những phần thay đổi vào Real DOM (reconciliation)
- Giảm thiểu expensive DOM manipulations

**Đánh đổi:**
Virtual DOM không nhanh hơn thao tác DOM trực tiếp — nó chậm hơn, vì phải dựng cây, so sánh, rồi mới chạm vào DOM thật. Thứ nó đổi lấy là anh viết code khai báo mà không phải tự tính ra tập thao tác tối thiểu. Svelte và Solid bỏ hẳn Virtual DOM và nhanh hơn ở nhiều phép đo, đổi lại mất tính linh hoạt lúc chạy.

**Tham khảo:** [React - Virtual DOM](https://legacy.reactjs.org/docs/faq-internals.html)

---

### Câu 2: Đáp án C - Render `0`

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

**Đánh đổi:**
Dùng `&&` gọn hơn toán tử ba ngôi nhưng rò rỉ những giá trị falsy không phải boolean — `0` và `NaN` bị render thẳng ra màn hình. Viết `count > 0 && ...` hoặc dùng ba ngôi thì dài hơn vài ký tự nhưng không bao giờ dính lỗi này. Đây là lỗi hay gặp nhất khi render danh sách rỗng.

**Tham khảo:** [React - Conditional Rendering](https://react.dev/learn/conditional-rendering)

---

### Câu 3: Đáp án A

**Giải thích:**
- **Props:** Passed from parent, read-only trong component
- **State:** Managed internally by component, có thể update
- Props flow down (unidirectional data flow)

**Đánh đổi:**
Đưa dữ liệu thành props làm component dễ test và dễ dùng lại, nhưng đẩy trách nhiệm quản lý lên cha — qua nhiều tầng thì thành prop drilling. Giữ làm state thì component tự chủ nhưng khó dùng lại ở nơi cần điều khiển giá trị từ bên ngoài. Câu hỏi quyết định luôn là: ai là nguồn sự thật của dữ liệu này?

**Tham khảo:** [React - Passing Props](https://react.dev/learn/passing-props-to-a-component)

---

### Câu 4: Đáp án D - count = 1

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

**Đánh đổi:**
Gọi `setCount(count + 1)` đọc dễ và đủ dùng cho phần lớn trường hợp, nhưng sai khi có nhiều lần cập nhật trong cùng một lượt, hoặc khi setter nằm trong callback bất đồng bộ đã đóng gói giá trị cũ. Dạng hàm `setCount(c => c + 1)` luôn đúng nhưng không cho phép đọc giá trị hiện tại để dùng cho logic khác. Quy tắc: state mới phụ thuộc state cũ thì bắt buộc dùng dạng hàm.

**Tham khảo:** [React - useState](https://react.dev/reference/react/useState)

---

### Câu 5: Đáp án B - A và C (nếu someValue thay đổi)

**Giải thích:**
- **No dependencies:** Chạy sau mỗi render
- **Empty array `[]`:** Chỉ chạy 1 lần sau initial render
- **With dependencies:** Chạy khi dependencies thay đổi

**Đánh đổi:**
Khai báo đủ mảng phụ thuộc là đúng về ngữ nghĩa nhưng dễ tạo vòng lặp vô hạn khi trong đó có object hoặc hàm được tạo mới mỗi lần render. Cách chữa không phải là bớt phụ thuộc đi mà là làm cho chúng ổn định — `useCallback`, `useMemo`, hoặc đưa giá trị ra ngoài component. Bớt phụ thuộc là mua yên ổn hôm nay bằng một lỗi stale closure sẽ nổ sau.

**Tham khảo:** [React - useEffect](https://react.dev/reference/react/useEffect)

---

### Câu 6: Đáp án A

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

**Đánh đổi:**
Dùng index làm key thì rẻ và luôn có sẵn, nhưng sai ngay khi danh sách bị chèn, xoá hoặc sắp xếp: React dùng lại nhầm state của phần tử khác, ô input giữ giá trị của dòng vừa bị xoá. Dùng id ổn định thì đúng nhưng đòi backend phải trả id, hoặc phải tự sinh và giữ. Index chỉ an toàn khi danh sách tĩnh và bên trong mỗi phần tử không có state.

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

**Đánh đổi:**
Controlled cho phép validate theo từng phím gõ và đồng bộ với state khác, nhưng mỗi phím là một lần re-render — form 50 trường sẽ thấy giật trên máy yếu. Uncontrolled nhanh hơn hẳn và ít code hơn, đổi lại không kiểm soát được giá trị trong lúc đang gõ. React Hook Form chọn uncontrolled làm mặc định chính vì lý do này.

**Tham khảo:** [React - Controlled Components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)

---

### Câu 8: Đáp án D - B và C đều đúng

**Giải thích:**
- A sẽ gọi function ngay lập tức khi render
- B: Arrow function wrapper - common pattern
- C: bind() - also works, older pattern

**Đánh đổi:**
React gom sự kiện ở gốc cây thay vì gắn vào từng node, nên gắn handler cho 1000 dòng không tạo ra 1000 listener. Cái mất là `e.stopPropagation()` của React không chặn được listener gắn trực tiếp bằng `addEventListener`, và thứ tự chạy giữa hai hệ thống dễ gây bất ngờ khi tích hợp thư viện bên ngoài.

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

**Đánh đổi:**
Với điều kiện ngắn thì `&&` gọn, nhưng khi vế trái là số hoặc chuỗi rỗng thì chính giá trị đó bị render. Toán tử ba ngôi với `null` ở nhánh sai luôn an toàn, đổi lại dài dòng hơn. Khi điều kiện lồng nhau, tách ra thành biến hoặc component con đọc dễ hơn cả hai cách.

---

### Câu 10: Đáp án C

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

**Đánh đổi:**
Fragment tránh được div thừa vốn hay phá layout của flex và grid, nhưng cũng mất luôn chỗ để gắn class, ref hay thuộc tính. Dạng ngắn `<>` không nhận `key`, nên khi render danh sách vẫn phải viết đầy đủ `<React.Fragment key={...}>`.

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

**Đánh đổi:**
`useCallback` không miễn phí: nó vẫn tạo hàm mới mỗi lần render rồi mới quyết định trả bản cũ hay bản mới, cộng thêm chi phí so sánh mảng phụ thuộc. Nó chỉ có lãi khi hàm đó được truyền xuống component đã bọc `memo`, hoặc nằm trong mảng phụ thuộc của một effect khác. Bọc mọi hàm là trả chi phí mà không nhận lại gì.

**Tham khảo:** [React - useCallback](https://react.dev/reference/react/useCallback)

---

### Câu 12: Đáp án A

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

**Đánh đổi:**
`useMemo` chỉ đáng khi phép tính thật sự đắt, hoặc khi kết quả được dùng làm phụ thuộc cho chỗ khác. Với phép tính rẻ, chi phí so sánh phụ thuộc cộng bộ nhớ giữ giá trị còn lớn hơn chính phép tính. Và React không cam kết giữ cache mãi — nó được phép bỏ để giải phóng bộ nhớ, nên đừng dùng `useMemo` như một chỗ lưu trữ.

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

**Đánh đổi:**
Ref không kích hoạt render nên rất rẻ, nhưng chính vì thế mà giao diện không tự cập nhật theo nó. Đặt vào ref thứ mà giao diện cần hiển thị là lỗi khó tìm: giá trị đúng trong bộ nhớ mà màn hình vẫn hiện cái cũ. Ranh giới: cần hiển thị thì dùng state, cần nhớ giữa các lần render mà không hiển thị thì dùng ref.

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

**Đánh đổi:**
Context giải được prop drilling mà không cần thư viện ngoài, nhưng mọi consumer re-render khi giá trị đổi, kể cả consumer chỉ đọc một trường. Giảm được bằng cách tách thành nhiều context theo nhịp thay đổi, và bọc `useMemo` cho value. Khi số consumer lớn và giá trị đổi liên tục, thư viện có selector như Zustand hay Redux rẻ hơn hẳn.

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

**Đánh đổi:**
`React.memo` thêm một phép so sánh props trước mỗi lần render. Với component nhẹ, phép so sánh đó tốn hơn chính việc render lại. Nó chỉ có lãi khi component nặng và props thật sự ổn định — mà props chứa object hoặc hàm viết inline thì không bao giờ ổn định, nên `memo` vừa vô dụng vừa tốn thêm.

**Tham khảo:** [React - memo](https://react.dev/reference/react/memo)

---

### Câu 16: Đáp án A - Error hoặc unexpected behavior

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

**Đánh đổi:**
Quy tắc không gọi hook trong điều kiện cho phép React nhận diện hook bằng thứ tự gọi, nhờ đó không cần định danh và API gọn hơn hẳn — đổi lại người viết mất tự do. Khi cần logic có điều kiện, cách đúng là đưa điều kiện vào bên trong hook, hoặc tách thành component con để React quyết định có mount hay không.

---

### Câu 17: Đáp án A

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

**Đánh đổi:**
`useReducer` gom mọi chuyển trạng thái vào một chỗ, dễ test và dễ lần lại vì sao state thành ra như vậy, nhưng tốn nhiều code hơn `useState` cho việc đơn giản. Ranh giới thực dụng: từ ba trường state trở lên mà chúng luôn thay đổi cùng nhau, hoặc trạng thái sau phụ thuộc trạng thái trước, thì reducer bắt đầu có lãi.

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

**Đánh đổi:**
Error Boundary chỉ bắt lỗi trong lúc render, trong lifecycle và trong constructor — nó không bắt lỗi trong event handler, trong `setTimeout`, hay trong code bất đồng bộ. Đặt một boundary duy nhất ở gốc thì đơn giản nhưng một lỗi nhỏ làm trắng cả trang; đặt nhiều boundary nhỏ thì cô lập tốt hơn nhưng tốn code và dễ nuốt mất lỗi mà không ai biết.

**Tham khảo:** [React - Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

---

### Câu 19: Đáp án A

**Giải thích:**
- Reconciliation là process so sánh 2 Virtual DOM trees
- Tìm minimum number of operations để update Real DOM
- Uses heuristics: different types → recreate, same type → update attributes

**Đánh đổi:**
Thuật toán so sánh của React chấp nhận không tối ưu tuyệt đối để đổi lấy độ phức tạp O(n) thay vì O(n³) của bài toán so sánh cây tổng quát. Cái giá là nó giả định hai phần tử khác loại thì cây con bên dưới cũng khác hẳn — đổi một thẻ `<div>` thành `<span>` là huỷ và dựng lại toàn bộ cây con, mất sạch state bên trong.

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

**Đánh đổi:**
Nâng state lên cho phép chia sẻ, nhưng mỗi lần nâng là mở rộng vùng bị re-render — cha đổi state thì mọi con đều render lại. Nâng quá tay thành "state nằm ở gốc, cả cây render mỗi lần gõ phím". Nguyên tắc ngược lại là colocation: chỉ nâng đúng tới tổ tiên chung gần nhất thật sự cần dữ liệu đó.

**Tham khảo:** [React - Sharing State](https://react.dev/learn/sharing-state-between-components)

---

## Senior Level

### Câu 21: Đáp án D

**Giải thích:**
- React Fiber là reimplementation của React's core algorithm (v16+)
- Enables incremental rendering: split work into chunks
- Pause, abort, resume work
- Assign priority to different types of updates
- Foundation for Concurrent Mode

**Đánh đổi:**
Fiber cho phép cắt công việc render thành từng mẩu để nhường lại luồng chính, đổi lại mỗi mẩu phải lưu đủ trạng thái để tiếp tục được — tốn bộ nhớ hơn và làm tổng thời gian render dài hơn so với chạy một mạch. Đây là đánh đổi tổng thông lượng lấy độ mượt của phản hồi.

**Tham khảo:** [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

---

### Câu 22: Đáp án C

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

**Đánh đổi:**
Render có thể bị ngắt nghĩa là một lần render có thể bị bỏ dở rồi chạy lại từ đầu, nên hàm render bắt buộc phải thuần và không có tác dụng phụ. Code cũ dựa vào giả định render chạy đúng một lần sẽ hỏng theo cách rất khó tìm. Đây chính là lý do Strict Mode gọi hai lần trong môi trường phát triển.

**Tham khảo:** [React - Concurrent React](https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react)

---

### Câu 23: Đáp án A

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

**Đánh đổi:**
Suspense làm code lấy dữ liệu gọn hẳn vì không phải tự quản cờ `isLoading`, nhưng đặt ranh giới quá rộng thì cả một mảng lớn biến thành khung chờ mỗi lần một phần nhỏ tải lại — người dùng thấy giao diện nhảy. Đặt ranh giới hẹp thì mượt hơn nhưng nhiều khung chờ rời rạc cũng gây nhiễu thị giác.

**Tham khảo:** [React - Suspense](https://react.dev/reference/react/Suspense)

---

### Câu 24: Đáp án A

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

**Đánh đổi:**
Chia nhỏ bundle giảm được dung lượng tải lần đầu, nhưng mỗi chunk là một lượt đi về mạng — chia quá vụn thì tổng thời gian tệ hơn vì độ trễ cộng dồn, nhất là trên mạng di động. Và lazy nhầm thứ nằm trên đường hiển thị nội dung chính sẽ làm LCP xấu đi. Chia theo ranh giới route là điểm cân bằng an toàn để bắt đầu.

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

**Đánh đổi:**
Server Component bỏ hẳn JavaScript của component ra khỏi bundle client, nhưng mọi tương tác đều phải đi qua ranh giới `"use client"` — đặt ranh giới sai chỗ thì kéo cả cây con thành client component và mất sạch lợi ích. Đổi lại, component chạy trên server không có state, không có effect và không gắn được trình xử lý sự kiện.

**Tham khảo:** [React - Server Components](https://react.dev/reference/rsc/server-components)

---

### Câu 26: Đáp án C

**Giải thích:**
- Server renders HTML
- Client receives HTML → page visible ngay
- Hydration: React attaches event listeners và makes it interactive
- "Dry" HTML → "Hydrated" interactive app

**Đánh đổi:**
SSR cho nội dung hiện sớm, nhưng giữa lúc hiện ra và lúc hydrate xong thì trang nhìn thấy mà bấm không ăn — thao tác của người dùng trong khoảng đó rơi vào hư không. Trang càng nhiều JavaScript thì khoảng đó càng dài, và nó không hiện lên trong chỉ số LCP. Đây chính là bài toán mà RSC và hydration chọn lọc sinh ra để giải.

**Tham khảo:** [React - hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot)

---

### Câu 27: Đáp án A

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

**Đánh đổi:**
Portal đưa DOM ra ngoài cây cha nên thoát được `overflow: hidden` và bẫy `z-index`, nhưng sự kiện vẫn nổi bọt theo cây React chứ không theo cây DOM — chỗ này hay gây bất ngờ khi debug. Và phải tự lo quản lý focus cùng thuộc tính ARIA, vì trình đọc màn hình đi theo cây DOM chứ không theo cây React.

**Tham khảo:** [React - createPortal](https://react.dev/reference/react-dom/createPortal)

---

### Câu 28: Đáp án C

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

**Đánh đổi:**
`useLayoutEffect` chạy trước khi trình duyệt vẽ nên tránh được nhấp nháy khi phải đo rồi chỉnh DOM ngay, nhưng nó chặn luồng vẽ — code nặng đặt trong đó làm trang đứng hình. Nó cũng không chạy khi render ở server nên gây cảnh báo trong SSR. Mặc định dùng `useEffect`, chỉ đổi khi thật sự nhìn thấy nhấp nháy.

**Tham khảo:** [React - useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)

---

### Câu 29: Đáp án C

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

**Đánh đổi:**
Gọi hai lần giúp lộ ra tác dụng phụ và effect thiếu hàm dọn dẹp ngay từ lúc phát triển, đổi lại log hiện hai lần và mọi phép đo thời gian trong môi trường phát triển không còn tin được. Strict Mode chỉ chạy ở bản phát triển, nên đừng dùng số đo ở đó để kết luận bất cứ điều gì về hiệu năng production.

**Tham khảo:** [React - StrictMode](https://react.dev/reference/react/StrictMode)

---

### Câu 30: Đáp án B - Memoize tất cả functions với useCallback

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

**Đánh đổi:**
Ba cách còn lại cũng không hề miễn phí. Ảo hoá danh sách làm hỏng `Ctrl+F` của trình duyệt và gây khó cho trình đọc màn hình. `React.memo` tốn một phép so sánh props mỗi lần render. Chia nhỏ bundle thêm lượt đi mạng. Điểm chung của cả ba: tối ưu nào cũng có giá, nên phải đo rồi mới áp dụng đúng chỗ, chứ không rải đều cho yên tâm.

**Tham khảo:** [React - Performance](https://react.dev/learn/render-and-commit)

---

### Câu 31: Đáp án D

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

**Đánh đổi:**
Đặt state gần nơi dùng thu hẹp vùng re-render và làm component tự chủ, nhưng khi xuất hiện nơi thứ hai cần cùng dữ liệu thì phải nâng lên — tức là sửa lại chỗ đã viết xong. Đó là chi phí chấp nhận được: nâng lên khi có nhu cầu thật dễ hơn nhiều so với gỡ một mẩu state ra khỏi store toàn cục sau khi nó đã có mười chỗ đọc.

**Tham khảo:** [Kent C. Dodds - State Colocation](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)

---

### Câu 32: Đáp án B

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

**Đánh đổi:**
Hook tránh được tầng bọc lồng nhau nhưng không chia sẻ được phần JSX — muốn tái dùng cả giao diện lẫn logic thì render prop vẫn hợp hơn. HOC còn giá trị khi cần bọc component lớp cũ, hoặc thêm hành vi từ bên ngoài mà không được sửa component gốc. Ba cách không thay thế hoàn toàn cho nhau.

---

### Câu 33: Đáp án A - 1 re-render (batched)

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

**Đánh đổi:**
Gom nhiều lần cập nhật thành một lần render giảm công việc thừa, nhưng nghĩa là đọc state ngay sau khi gọi setter sẽ thấy giá trị cũ. Từ React 18, việc gom áp dụng cả trong code bất đồng bộ, nên code cũ dựa vào việc render ngay sau `setState` trong `setTimeout` có thể đổi hành vi. Cần chạy ngoài cơ chế gom thì có `flushSync`, nhưng nó tiêu đúng phần vừa tiết kiệm được.

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

**Đánh đổi:**
Đánh dấu cập nhật là không khẩn giữ cho ô nhập liệu phản hồi tức thì, nhưng phần nội dung nặng sẽ hiện chậm hơn và có thể giữ dữ liệu cũ một lúc — phải có chỉ báo đang tải, nếu không người dùng tưởng ứng dụng treo. Không dùng cho những cập nhật mà người dùng cần thấy ngay lập tức, ví dụ bật tắt một công tắc.

**Tham khảo:** [React - useTransition](https://react.dev/reference/react/useTransition)

---

### Câu 35: Đáp án D

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

**Đánh đổi:**
Khác `useTransition` ở chỗ nó hoãn một *giá trị* chứ không hoãn một *hành động*, nên dùng được khi giá trị đến từ nơi mình không kiểm soát, chẳng hạn props từ cha. Cái giá là có một khoảng thời gian hiển thị kết quả cũ. Và nó không làm phép tính nhanh lên chút nào, chỉ dời thời điểm chạy — phép tính thật sự nặng vẫn cần `useMemo` hoặc đẩy sang web worker.

**Tham khảo:** [React - useDeferredValue](https://react.dev/reference/react/useDeferredValue)

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [React Official Documentation](https://react.dev/)
2. [React GitHub](https://github.com/facebook/react)
3. [React Patterns](https://reactpatterns.com/)
4. [Kent C. Dodds Blog](https://kentcdodds.com/blog)
5. [Dan Abramov's Overreacted](https://overreacted.io/)
6. [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
