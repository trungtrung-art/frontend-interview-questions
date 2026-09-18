# Câu Hỏi Testing & Best Practices
## Frontend Testing Strategies

---

## 📚 MỤC LỤC
- [Phần 1: Testing Fundamentals](#phần-1-testing-fundamentals)
- [Phần 2: React Testing](#phần-2-react-testing)
- [Phần 3: End-to-End Testing](#phần-3-end-to-end-testing)
- [Phần 4: Testing Patterns](#phần-4-testing-patterns)
- [Phần 5: Best Practices & Code Quality](#phần-5-best-practices--code-quality)
- [Đáp Án Chi Tiết](#đáp-án-chi-tiết)

---

# PHẦN 1: TESTING FUNDAMENTALS

## Câu 1: Testing Pyramid
**Testing pyramid có cấu trúc như thế nào?**

- A) Unit tests > Integration tests > E2E tests
- B) E2E tests > Integration tests > Unit tests
- C) Integration tests > Unit tests > E2E tests
- D) Tất cả test types bằng nhau

---

## Câu 2: Unit vs Integration
**Sự khác biệt giữa unit test và integration test?**

- A) Unit test chậm hơn integration test
- B) Integration test dễ viết hơn
- C) Không có sự khác biệt
- D) Unit test test isolated units, integration test test multiple units working together

---

## Câu 3: Test Coverage
**Test coverage 100% có nghĩa là?**

- A) Ứng dụng production-ready
- B) Tất cả lines/branches được execute trong tests, không đảm bảo no bugs
- C) Ứng dụng không có bugs
- D) Không cần thêm tests

---

## Câu 4: Mocking
**Khi nào nên mock dependencies?**

- A) Luôn luôn
- B) External services, APIs, modules that are slow/unpredictable/have side effects
- C) Chỉ trong E2E tests
- D) Không bao giờ

---

## Câu 5: AAA Pattern
**AAA pattern trong testing là gì?**

- A) Arrange, Act, Assert
- B) Add, Alter, Affirm
- C) Analyze, Apply, Approve
- D) Async, Await, Assert

---

## Câu 6: Test Doubles
**Sự khác biệt giữa Mock, Stub, và Spy?**

- A) Không có sự khác biệt
- B) Mock: programmable fake, Stub: simple fake return, Spy: wraps real function and records calls
- C) Mock cho async, Stub cho sync
- D) Spy chỉ dùng trong E2E

---

## Câu 7: Snapshot Testing
**Khi nào nên sử dụng snapshot testing?**

- A) Cho tất cả components
- B) Thay thế hoàn toàn unit tests
- C) Cho detecting unintended UI changes, không thay thế explicit assertions
- D) Chỉ cho large components

---

## Câu 8: Test Isolation
**Tại sao tests cần isolated?**

- A) Để tiết kiệm bộ nhớ
- B) Để viết code ngắn hơn
- C) Không cần thiết
- D) Để chạy song song và không ảnh hưởng lẫn nhau

---

## Câu 9: Flaky Tests
**Flaky test là gì và cách handle?**

- A) Test chạy chậm
- B) Test luôn pass, ignore được
- C) Test không ổn định (pass/fail randomly), cần fix root cause như timing, async issues
- D) Test cho edge cases

---

## Câu 10: TDD
**Test-Driven Development workflow?**

- A) Write test (fail) → Write code (pass) → Refactor
- B) Write test → Deploy → Debug
- C) Write code → Write test → Refactor
- D) Write code → Debug → Write test

---

# PHẦN 2: REACT TESTING

## Câu 11: Testing Library Philosophy
**React Testing Library philosophy là gì?**

- A) Test internal state
- B) Test như cách users interact với UI, không test implementation
- C) Test lifecycle methods
- D) Test implementation details

---

## Câu 12: Query Priorities
**Query priority order đúng trong React Testing Library?**

- A) getByRole > getByLabelText > getByText > getByTestId
- B) getByText > getByRole > getByTestId
- C) getByTestId > getByRole > getByText
- D) Tất cả queries bằng nhau

---

## Câu 13: Async Testing
**Cách test async operations đúng?**

```jsx
// Component fetches data on mount
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

- A) `setTimeout` trong test
- B) `getByText('Loading...')` rồi `getByText(user.name)`
- C) Sử dụng `findByText` hoặc `waitFor`
- D) Skip async tests

---

## Câu 14: User Events
**Cách simulate user typing?**

```jsx
const input = screen.getByRole('textbox');
// ?
```

- A) `fireEvent.change(input, { target: { value: 'hello' } })`
- B) `userEvent.type(input, 'hello')`
- C) Cả A và B, nhưng B simulate thực tế hơn
- D) `input.value = 'hello'`

---

## Câu 15: Custom Hooks Testing
**Cách test custom hooks?**

- A) Test trong component thực tế
- B) Sử dụng `renderHook` từ @testing-library/react
- C) Không cần test hooks
- D) Cả A và B đều valid approaches

---

## Câu 16: Context Testing
**Cách test component sử dụng Context?**

```jsx
function UserName() {
  const { user } = useContext(UserContext);
  return <span>{user.name}</span>;
}
```

- A) Test không thể
- B) Sử dụng shallow rendering
- C) Mock useContext
- D) Wrap component với Provider trong test

---

## Câu 17: Testing Forms
**Best practice test form validation?**

- A) Chỉ test submit button
- B) Skip form tests
- C) Test implementation của validation logic
- D) Test user flow: input → submit → verify error messages hoặc success

---

## Câu 18: Component Rendering
**Sự khác biệt giữa `render` và `rerender`?**

- A) `rerender` cho async components
- B) `render` mounts mới, `rerender` update props của component đã mounted
- C) `render` chỉ cho class components
- D) Không có sự khác biệt

---

## Câu 19: Testing Error Boundaries
**Cách test Error Boundary?**

- A) Không thể test
- B) Chỉ test trong browser
- C) Mock Error Boundary
- D) Render child component mà throws error, verify fallback UI

---

## Câu 20: MSW (Mock Service Worker)
**MSW được sử dụng để?**

- A) Render components
- B) Debug performance
- C) Create new components
- D) Mock API responses at network level

---

# PHẦN 3: END-TO-END TESTING

## Câu 21: E2E Test Scope
**E2E tests nên test gì?**

- A) Tất cả functionality
- B) Critical user journeys và happy paths
- C) Unit logic
- D) Styling

---

## Câu 22: Cypress vs Playwright
**Điểm khác biệt chính giữa Cypress và Playwright?**

- A) Playwright multi-browser native, Cypress có rich debugging, cả hai đều tốt
- B) Không có sự khác biệt
- C) Playwright chỉ cho Chromium
- D) Cypress nhanh hơn

---

## Câu 23: Test Selectors
**Best practice cho E2E selectors?**

- A) XPath
- B) Random selectors
- C) data-testid attributes cho test-specific selectors
- D) CSS selectors phức tạp

---

## Câu 24: Page Object Model
**Page Object Model (POM) là gì?**

- A) Testing framework
- B) Design pattern encapsulate page elements và actions, improve test maintainability
- C) CSS methodology
- D) Browser API

---

## Câu 25: Visual Regression Testing
**Visual regression testing dùng để?**

- A) Detect unintended visual changes bằng screenshot comparison
- B) Test performance
- C) Test accessibility
- D) Test SEO

---

# PHẦN 4: TESTING PATTERNS

## Câu 26: Factory Functions
**Factory functions trong testing dùng để?**

- A) Run tests faster
- B) Create database connections
- C) Generate test data với default/custom values
- D) Mock APIs

---

## Câu 27: Testing Async Code
**Pattern nào đúng cho async tests?**

```javascript
// A
test('fetches data', () => {
  const data = fetchData();
  expect(data).toBe('data');
});

// B
test('fetches data', async () => {
  const data = await fetchData();
  expect(data).toBe('data');
});
```

- A) Pattern B đúng - phải await async operations
- B) Cả hai đều đúng
- C) Cả hai đều sai
- D) Pattern A đúng

---

## Câu 28: Testing Error Cases
**Cách test function throws error?**

```javascript
function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}
```

- A) Cannot test throws
- B) `expect(divide(1, 0)).toThrow()`
- C) `expect(() => divide(1, 0)).toThrow('Cannot divide by zero')`
- D) `expect(divide(1, 0)).toBe(Error)`

---

## Câu 29: Parameterized Tests
**Cách viết parameterized tests trong Jest?**

- A) Không có cách
- B) Chỉ trong Mocha
- C) Copy paste tests
- D) Sử dụng `test.each` hoặc `it.each`

---

## Câu 30: Before/After Hooks
**Sự khác biệt giữa `beforeAll` và `beforeEach`?**

- A) `beforeAll` chạy một lần trước tất cả tests, `beforeEach` chạy trước mỗi test
- B) `beforeAll` cho async only
- C) `beforeEach` chạy một lần
- D) Không có sự khác biệt

---

# PHẦN 5: BEST PRACTICES & CODE QUALITY

## Câu 31: Code Review
**Code review nên focus vào gì?**

- A) Chỉ tìm bugs
- B) Chỉ coding style
- C) Logic, security, performance, maintainability, testing
- D) Chỉ formatting

---

## Câu 32: Git Branching
**Git Flow branching strategy phù hợp khi nào?**

- A) Small projects
- B) Mọi project
- C) Projects với scheduled releases, multiple versions in production
- D) Single developer

---

## Câu 33: Semantic Versioning
**Version 2.3.1 có nghĩa gì?**

- A) Team.Sprint.Task
- B) Year.Month.Day
- C) Random numbers
- D) MAJOR.MINOR.PATCH - breaking changes, new features, bug fixes

---

## Câu 34: Documentation
**Code documentation nên include?**

- A) Public API docs, complex logic explanation, examples, không comment obvious code
- B) Chỉ README
- C) Không cần documentation
- D) Comment mọi line

---

## Câu 35: Technical Debt
**Cách manage technical debt?**

- A) Track, prioritize, allocate time để address incrementally
- B) Rewrite từ đầu
- C) Ignore hoàn toàn
- D) Đợi đến khi có problems

---

---

# ĐÁP ÁN CHI TIẾT

## Phần 1: Testing Fundamentals

### Câu 1: Đáp án A

**Giải thích:**
Testing Pyramid (từ nhiều đến ít):
```
        /\
       /E2E\        (Few - Slow, Expensive)
      /─────\
     / Integ \      (Some)
    /─────────\
   /   Unit    \    (Many - Fast, Cheap)
  /─────────────\
```

**Characteristics:**
| Type | Speed | Cost | Confidence | Quantity |
|------|-------|------|------------|----------|
| Unit | Fast | Low | Low | Many |
| Integration | Medium | Medium | Medium | Some |
| E2E | Slow | High | High | Few |

---

### Câu 2: Đáp án D

**Giải thích:**
```javascript
// Unit Test - isolated unit
function add(a, b) {
  return a + b;
}

test('add function', () => {
  expect(add(1, 2)).toBe(3);
});

// Integration Test - multiple units together
function calculateTotal(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = calculateTax(subtotal);
  const discount = applyDiscount(subtotal);
  return subtotal + tax - discount;
}

test('calculateTotal with tax and discount', () => {
  const items = [{ price: 100 }, { price: 50 }];
  const total = calculateTotal(items);
  expect(total).toBe(150 + 15 - 10); // 155
});
```

---

### Câu 3: Đáp án B

**Giải thích:**
```javascript
// 100% coverage doesn't mean bug-free!

function divide(a, b) {
  return a / b;
}

// This achieves 100% line coverage
test('divide', () => {
  expect(divide(10, 2)).toBe(5);
});

// But misses edge cases!
divide(10, 0);  // Returns Infinity - is this correct?
divide('10', 2); // Returns 5 - should it validate types?

// Better approach: Test behavior, not just coverage
test('divide handles division by zero', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});
```

**Good coverage targets:**
- 70-80% for most projects
- Focus on critical paths
- Don't chase 100% blindly

---

### Câu 4: Đáp án B

**Giải thích:**
```javascript
// Mock external services
jest.mock('./api', () => ({
  fetchUser: jest.fn().mockResolvedValue({ name: 'John' }),
}));

// Mock slow operations
jest.mock('./heavyComputation', () => ({
  calculate: jest.fn().mockReturnValue(100),
}));

// Mock side effects
jest.mock('./analytics', () => ({
  track: jest.fn(),
}));

// DON'T mock everything - test real behavior when possible
// Unit under test should use real implementation
function processOrder(order) {
  const validated = validateOrder(order);  // Real function
  const total = calculateTotal(validated); // Real function
  return saveOrder(validated, total);      // Mock this (database)
}
```

---

### Câu 5: Đáp án A

**Giải thích:**
```javascript
test('user can login', async () => {
  // Arrange - Setup test conditions
  const user = { email: 'test@example.com', password: 'password123' };
  render(<LoginForm />);

  // Act - Perform the action
  await userEvent.type(screen.getByLabelText('Email'), user.email);
  await userEvent.type(screen.getByLabelText('Password'), user.password);
  await userEvent.click(screen.getByRole('button', { name: 'Login' }));

  // Assert - Verify the result
  expect(screen.getByText('Welcome!')).toBeInTheDocument();
});

// Alternative pattern: Given-When-Then (BDD)
describe('Login', () => {
  it('should redirect to dashboard when credentials are valid', () => {
    // Given
    const validCredentials = { email: 'test@test.com', password: 'valid' };

    // When
    login(validCredentials);

    // Then
    expect(window.location.pathname).toBe('/dashboard');
  });
});
```

---

### Câu 6: Đáp án B

**Giải thích:**
```javascript
// STUB - Simple fake return value
const userStub = {
  getName: () => 'John Doe',
};

// MOCK - Programmable fake with expectations
const userMock = jest.fn();
userMock.mockReturnValue({ name: 'John' });
// Can verify: expect(userMock).toHaveBeenCalledWith('123');

// SPY - Wraps real function, records calls
const user = {
  getName() {
    return this.name;
  },
  name: 'John',
};
const spy = jest.spyOn(user, 'getName');
user.getName();
expect(spy).toHaveBeenCalled();
expect(spy).toHaveReturnedWith('John');

// FAKE - Working implementation with shortcuts
class FakeUserRepository {
  constructor() {
    this.users = [];
  }

  save(user) {
    this.users.push(user);
    return { ...user, id: this.users.length };
  }

  findById(id) {
    return this.users[id - 1];
  }
}
```

---

### Câu 7: Đáp án C

**Giải thích:**
```javascript
// Good use of snapshots - detect unintended changes
test('renders correctly', () => {
  const { container } = render(<Button>Click me</Button>);
  expect(container).toMatchSnapshot();
});

// But snapshots have limitations:
// - Easy to update without reviewing
// - Large snapshots are hard to review
// - Don't test behavior

// Better: Combine with explicit assertions
test('Button renders with correct text and styles', () => {
  render(<Button variant="primary">Click me</Button>);

  const button = screen.getByRole('button', { name: 'Click me' });
  expect(button).toHaveClass('btn-primary');
  expect(button).toBeEnabled();
});

// Use inline snapshots for small outputs
test('formats date', () => {
  expect(formatDate(new Date('2024-01-01'))).toMatchInlineSnapshot(
    `"January 1, 2024"`
  );
});
```

---

### Câu 8: Đáp án D

**Giải thích:**
```javascript
// ❌ Tests that share state - can fail randomly
let counter = 0;

test('increments counter', () => {
  counter++;
  expect(counter).toBe(1);
});

test('counter is still 1', () => {
  expect(counter).toBe(1); // Depends on previous test!
});

// ✅ Isolated tests
describe('Counter', () => {
  let counter;

  beforeEach(() => {
    counter = 0; // Fresh state for each test
  });

  test('increments counter', () => {
    counter++;
    expect(counter).toBe(1);
  });

  test('starts at zero', () => {
    expect(counter).toBe(0); // Independent!
  });
});

// Benefits of isolation:
// - Tests can run in parallel
// - Tests can run in any order
// - Failures are easier to debug
// - Tests are independent units
```

---

### Câu 9: Đáp án C

**Giải thích:**
```javascript
// Flaky test causes:
// 1. Timing issues
test('shows notification', async () => {
  render(<App />);
  // ❌ Arbitrary timeout
  await new Promise(resolve => setTimeout(resolve, 100));
  expect(screen.getByText('Notification')).toBeInTheDocument();

  // ✅ Wait for element
  expect(await screen.findByText('Notification')).toBeInTheDocument();
});

// 2. Shared state
// 3. Network dependencies
// 4. Date/time dependencies
test('shows current date', () => {
  // ❌ Flaky - depends on actual time
  expect(screen.getByText(new Date().toDateString()));

  // ✅ Mock time
  jest.useFakeTimers().setSystemTime(new Date('2024-01-01'));
  expect(screen.getByText('Mon Jan 01 2024'));
});

// 5. Random data
test('generates ID', () => {
  // ❌ Random output
  const id = generateId();
  expect(id).toBeDefined();

  // ✅ Mock randomness or test pattern
  jest.spyOn(Math, 'random').mockReturnValue(0.5);
  expect(generateId()).toBe('expected-id');
});
```

---

### Câu 10: Đáp án A

**Giải thích:**
```javascript
// TDD Cycle: Red → Green → Refactor

// 1. RED - Write failing test first
test('adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});
// Test fails: add is not defined

// 2. GREEN - Write minimum code to pass
function add(a, b) {
  return a + b;
}
// Test passes!

// 3. REFACTOR - Improve code without changing behavior
function add(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
// Tests still pass!

// Benefits:
// - Tests drive design
// - High test coverage naturally
// - Confidence to refactor
// - Documentation through tests
```

---

## Phần 2: React Testing

### Câu 11: Đáp án B

**Giải thích:**
```jsx
// ❌ Testing implementation details
test('sets state when clicked', () => {
  const { result } = renderHook(() => useState(false));
  // Don't test internal state!
});

// ❌ Testing component internals
test('calls internal method', () => {
  const wrapper = shallow(<Button />);
  wrapper.instance().handleClick();
  // Don't test private methods!
});

// ✅ Test like a user
test('button shows loading state when clicked', async () => {
  render(<SubmitButton />);

  // User sees a button
  const button = screen.getByRole('button', { name: 'Submit' });

  // User clicks it
  await userEvent.click(button);

  // User sees loading indicator
  expect(screen.getByRole('button', { name: 'Loading...' })).toBeDisabled();
});
```

**Guiding principles:**
- Test what users see and do
- Don't test implementation details
- If refactoring breaks tests, tests are too coupled

---

### Câu 12: Đáp án A

**Giải thích:**
```jsx
// Query Priority Order (most to least preferred):

// 1. Accessible by Everyone
screen.getByRole('button', { name: 'Submit' }); // ✅ Best
screen.getByLabelText('Email');                  // ✅ For form fields
screen.getByPlaceholderText('Enter email');      // OK
screen.getByText('Welcome');                     // OK

// 2. Semantic Queries
screen.getByAltText('Profile photo');            // For images
screen.getByTitle('Close');                      // For tooltips

// 3. Test IDs (last resort)
screen.getByTestId('submit-button');             // ❌ Avoid if possible

// Why this order?
// - getByRole uses accessibility tree (tests a11y for free)
// - getByLabelText ensures labels are associated
// - getByTestId doesn't reflect user experience

// Example
function LoginForm() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />

      <button type="submit">Log In</button>
    </form>
  );
}

test('login form', () => {
  render(<LoginForm />);

  // ✅ Preferred
  screen.getByRole('textbox', { name: 'Email' });
  screen.getByRole('button', { name: 'Log In' });

  // ❌ Avoid
  screen.getByTestId('email-input');
});
```

---

### Câu 13: Đáp án C

**Giải thích:**
```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}

// ❌ Won't work - assertion runs before fetch completes
test('bad async test', () => {
  render(<UserProfile userId="1" />);
  expect(screen.getByText('John')).toBeInTheDocument(); // Fails!
});

// ✅ Use findBy (combines getBy + waitFor)
test('shows user name after loading', async () => {
  render(<UserProfile userId="1" />);

  // findBy waits for element to appear
  expect(await screen.findByText('John')).toBeInTheDocument();
});

// ✅ Use waitFor for complex assertions
test('shows user name after loading', async () => {
  render(<UserProfile userId="1" />);

  await waitFor(() => {
    expect(screen.getByText('John')).toBeInTheDocument();
  });
});

// ✅ Verify loading state first
test('shows loading then user', async () => {
  render(<UserProfile userId="1" />);

  // Initially shows loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Then shows user
  expect(await screen.findByText('John')).toBeInTheDocument();
  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});
```

---

### Câu 14: Đáp án C

**Giải thích:**
```jsx
// fireEvent - low level DOM events
test('using fireEvent', () => {
  render(<input />);
  const input = screen.getByRole('textbox');

  // Directly sets value - doesn't simulate typing
  fireEvent.change(input, { target: { value: 'hello' } });
  expect(input).toHaveValue('hello');
});

// userEvent - simulates real user behavior (PREFERRED)
test('using userEvent', async () => {
  render(<input />);
  const input = screen.getByRole('textbox');

  // Simulates actual typing - fires focus, keydown, keypress, input, keyup
  await userEvent.type(input, 'hello');
  expect(input).toHaveValue('hello');
});

// userEvent advantages:
// - Fires all events a real user would trigger
// - Tests event handlers properly
// - More realistic testing

// More userEvent examples
await userEvent.click(button);           // Click
await userEvent.dblClick(element);       // Double click
await userEvent.hover(element);          // Hover
await userEvent.tab();                   // Tab navigation
await userEvent.keyboard('{Enter}');     // Keyboard input
await userEvent.selectOptions(select, ['option1']); // Select
await userEvent.clear(input);            // Clear input
await userEvent.upload(fileInput, file); // File upload
```

---

### Câu 15: Đáp án D

**Giải thích:**
```jsx
// Custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);

  return { count, increment, decrement };
}

// Option A: Test in component (integration test)
function TestComponent() {
  const { count, increment } = useCounter(0);
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

test('useCounter in component', async () => {
  render(<TestComponent />);

  expect(screen.getByTestId('count')).toHaveTextContent('0');
  await userEvent.click(screen.getByRole('button'));
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

// Option B: Test with renderHook (unit test)
import { renderHook, act } from '@testing-library/react';

test('useCounter with renderHook', () => {
  const { result } = renderHook(() => useCounter(0));

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

// renderHook with rerender
test('useCounter with initial value change', () => {
  const { result, rerender } = renderHook(
    ({ initialValue }) => useCounter(initialValue),
    { initialProps: { initialValue: 0 } }
  );

  expect(result.current.count).toBe(0);

  rerender({ initialValue: 10 });
  // Note: count doesn't change on rerender (useState behavior)
});
```

---

### Câu 16: Đáp án D

**Giải thích:**
```jsx
// Component using context
function UserName() {
  const { user } = useContext(UserContext);
  return <span>{user.name}</span>;
}

// Test with wrapper
const mockUser = { name: 'John Doe', email: 'john@example.com' };

test('displays user name from context', () => {
  render(
    <UserContext.Provider value={{ user: mockUser }}>
      <UserName />
    </UserContext.Provider>
  );

  expect(screen.getByText('John Doe')).toBeInTheDocument();
});

// Custom render function for reusability
const AllTheProviders = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: mockUser }}>
      <ThemeContext.Provider value="light">
        {children}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Usage
test('with custom render', () => {
  customRender(<UserName />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});
```

---

### Câu 17: Đáp án D

**Giải thích:**
```jsx
function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (password.length < 8) newErrors.password = 'Password must be 8+ chars';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-describedby="email-error"
        />
      </label>
      {errors.email && <span id="email-error">{errors.email}</span>}

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          aria-describedby="password-error"
        />
      </label>
      {errors.password && <span id="password-error">{errors.password}</span>}

      <button type="submit">Login</button>
    </form>
  );
}

// Test user flow, not implementation
describe('LoginForm', () => {
  test('shows error when email is empty', async () => {
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    await userEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('shows error when password too short', async () => {
    render(<LoginForm onSubmit={jest.fn()} />);

    await userEvent.type(screen.getByLabelText('Email'), 'test@test.com');
    await userEvent.type(screen.getByLabelText('Password'), '1234567');
    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Password must be 8+ chars')).toBeInTheDocument();
  });

  test('submits when valid', async () => {
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    await userEvent.type(screen.getByLabelText('Email'), 'test@test.com');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');
    await userEvent.click(screen.getByRole('button'));

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@test.com',
      password: 'password123',
    });
  });
});
```

---

### Câu 18: Đáp án B

**Giải thích:**
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

test('render vs rerender', () => {
  // render - mounts new component
  const { rerender } = render(<Greeting name="John" />);
  expect(screen.getByText('Hello, John!')).toBeInTheDocument();

  // rerender - updates props of existing component
  rerender(<Greeting name="Jane" />);
  expect(screen.getByText('Hello, Jane!')).toBeInTheDocument();

  // Component instance is preserved (same as prop change in real app)
});

// Use rerender to test prop changes
test('component updates on prop change', () => {
  const { rerender } = render(<Counter count={0} />);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();

  rerender(<Counter count={5} />);
  expect(screen.getByText('Count: 5')).toBeInTheDocument();
});

// Contrast with unmount + remount
test('remount creates new instance', () => {
  const { unmount } = render(<StatefulComponent />);
  // Do something
  unmount();
  render(<StatefulComponent />); // Fresh instance, state reset
});
```

---

### Câu 19: Đáp án D

**Giải thích:**
```jsx
// Error Boundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}

// Component that throws
function BrokenComponent() {
  throw new Error('Test error');
}

// Test
test('ErrorBoundary catches errors', () => {
  // Suppress console.error for cleaner test output
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  render(
    <ErrorBoundary>
      <BrokenComponent />
    </ErrorBoundary>
  );

  expect(screen.getByText('Something went wrong')).toBeInTheDocument();

  consoleSpy.mockRestore();
});

// Test that it renders children normally
test('ErrorBoundary renders children when no error', () => {
  render(
    <ErrorBoundary>
      <div>Child content</div>
    </ErrorBoundary>
  );

  expect(screen.getByText('Child content')).toBeInTheDocument();
});
```

---

### Câu 20: Đáp án D

**Giải thích:**
```javascript
// MSW - Mock Service Worker
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Define handlers
const handlers = [
  rest.get('/api/user/:id', (req, res, ctx) => {
    return res(
      ctx.json({ id: req.params.id, name: 'John Doe' })
    );
  }),

  rest.post('/api/login', async (req, res, ctx) => {
    const { email, password } = await req.json();
    if (password === 'correct') {
      return res(ctx.json({ token: 'fake-token' }));
    }
    return res(ctx.status(401), ctx.json({ error: 'Invalid credentials' }));
  }),
];

// Setup server
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Test
test('fetches user data', async () => {
  render(<UserProfile userId="123" />);

  // MSW intercepts the real fetch call
  expect(await screen.findByText('John Doe')).toBeInTheDocument();
});

// Override handler for specific test
test('handles error', async () => {
  server.use(
    rest.get('/api/user/:id', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<UserProfile userId="123" />);
  expect(await screen.findByText('Error loading user')).toBeInTheDocument();
});
```

---

## Phần 3: End-to-End Testing

### Câu 21: Đáp án B

**Giải thích:**
```javascript
// E2E tests are expensive - focus on critical paths

// ✅ Test critical user journeys
describe('E-commerce checkout', () => {
  it('user can complete purchase', () => {
    cy.visit('/products');
    cy.get('[data-testid="product-1"]').click();
    cy.contains('Add to Cart').click();
    cy.visit('/cart');
    cy.contains('Checkout').click();
    cy.get('#email').type('user@example.com');
    cy.get('#card').type('4242424242424242');
    cy.contains('Pay').click();
    cy.contains('Order Confirmed').should('be.visible');
  });
});

// ✅ Test authentication flow
describe('Authentication', () => {
  it('user can sign up and log in', () => {
    cy.visit('/signup');
    cy.get('#email').type('new@user.com');
    cy.get('#password').type('password123');
    cy.contains('Sign Up').click();
    cy.contains('Welcome').should('be.visible');
  });
});

// ❌ Don't test every edge case in E2E
// Use unit/integration tests for that
```

---

### Câu 22: Đáp án A

**Giải thích:**
```javascript
// CYPRESS
// Pros:
// - Rich debugging (time travel, DOM snapshots)
// - Automatic waiting
// - Great DX
// - Large ecosystem

// Cypress example
cy.visit('/login');
cy.get('[data-testid="email"]').type('user@test.com');
cy.get('[data-testid="password"]').type('password');
cy.get('button[type="submit"]').click();
cy.url().should('include', '/dashboard');

// PLAYWRIGHT
// Pros:
// - Multi-browser native (Chrome, Firefox, Safari)
// - Faster execution
// - Better for CI/CD
// - Auto-waiting

// Playwright example
await page.goto('/login');
await page.fill('[data-testid="email"]', 'user@test.com');
await page.fill('[data-testid="password"]', 'password');
await page.click('button[type="submit"]');
await expect(page).toHaveURL(/dashboard/);

// Both are excellent choices - pick based on team needs
```

---

### Câu 23: Đáp án C

**Giải thích:**
```html
<!-- data-testid for reliable selection -->
<button data-testid="submit-button">Submit</button>

<!-- Don't rely on implementation details -->
<button class="btn btn-primary">Submit</button> <!-- Classes can change -->
```

```javascript
// ✅ Good selectors
cy.get('[data-testid="submit-button"]');  // Test-specific
cy.contains('Submit');                      // By text
cy.get('button[type="submit"]');           // By semantic attribute

// ❌ Avoid
cy.get('.btn-primary');                     // CSS classes change
cy.get('#submit-btn');                      // IDs are implementation detail
cy.get('div > div > button:first-child'); // Brittle structure
cy.get('[style*="color: red"]');           // Styling is not behavior

// Best practices:
// 1. Prefer data-testid for test-only selectors
// 2. Use semantic selectors when possible
// 3. Avoid implementation-dependent selectors
// 4. Keep selectors simple and stable
```

---

### Câu 24: Đáp án B

**Giải thích:**
```javascript
// Page Object Model - encapsulate page structure

// pages/LoginPage.js
class LoginPage {
  // Selectors
  get emailInput() { return cy.get('[data-testid="email"]'); }
  get passwordInput() { return cy.get('[data-testid="password"]'); }
  get submitButton() { return cy.get('[data-testid="submit"]'); }
  get errorMessage() { return cy.get('[data-testid="error"]'); }

  // Actions
  visit() {
    cy.visit('/login');
    return this;
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.submitButton.click();
    return this;
  }

  // Assertions
  assertErrorVisible(message) {
    this.errorMessage.should('contain', message);
    return this;
  }
}

// Usage in tests
describe('Login', () => {
  const loginPage = new LoginPage();

  it('shows error for invalid credentials', () => {
    loginPage
      .visit()
      .login('invalid@email.com', 'wrongpassword')
      .assertErrorVisible('Invalid credentials');
  });
});

// Benefits:
// - DRY - selectors defined once
// - Maintainable - change in one place
// - Readable - tests describe behavior, not mechanics
```

---

### Câu 25: Đáp án A

**Giải thích:**
```javascript
// Visual regression with Percy (or Chromatic)
describe('Button', () => {
  it('renders correctly', () => {
    cy.visit('/buttons');
    cy.percySnapshot('Button variants');
  });
});

// Visual regression with Playwright
test('homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('homepage.png');
});

// With threshold for minor differences
await expect(page).toHaveScreenshot('homepage.png', {
  maxDiffPixels: 100,
});

// Tools:
// - Percy (paid, CI integration)
// - Chromatic (Storybook integration)
// - Playwright built-in
// - BackstopJS (open source)

// Best practices:
// - Test on consistent environment (CI)
// - Handle dynamic content (mock dates, hide animations)
// - Review changes carefully before approving
```

---

## Phần 4: Testing Patterns

### Câu 26: Đáp án C

**Giải thích:**
```javascript
// Factory function for test data
function createUser(overrides = {}) {
  return {
    id: 'user-1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    createdAt: new Date('2024-01-01'),
    ...overrides,
  };
}

// Usage
test('displays user name', () => {
  const user = createUser(); // Use defaults
  render(<UserCard user={user} />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});

test('displays admin badge for admin users', () => {
  const adminUser = createUser({ role: 'admin' }); // Override role
  render(<UserCard user={adminUser} />);
  expect(screen.getByText('Admin')).toBeInTheDocument();
});

// Factory with relationships
function createOrder(overrides = {}) {
  return {
    id: 'order-1',
    user: createUser(),
    items: [createProduct(), createProduct()],
    status: 'pending',
    total: 100,
    ...overrides,
  };
}

// Using faker for realistic data
import { faker } from '@faker-js/faker';

function createRandomUser() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}
```

---

### Câu 27: Đáp án A

**Giải thích:**
```javascript
// ❌ Pattern A - Won't work for async
test('bad async test', () => {
  const data = fetchData(); // Returns Promise, not data!
  expect(data).toBe('data'); // Comparing Promise to string
});

// ✅ Pattern B - Properly awaits
test('good async test', async () => {
  const data = await fetchData();
  expect(data).toBe('data');
});

// More async patterns
// Using .resolves
test('with resolves', async () => {
  await expect(fetchData()).resolves.toBe('data');
});

// Using .rejects
test('handles rejection', async () => {
  await expect(fetchBadData()).rejects.toThrow('Not found');
});

// Testing multiple async operations
test('parallel async', async () => {
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts(),
  ]);

  expect(user.name).toBe('John');
  expect(posts).toHaveLength(5);
});
```

---

### Câu 28: Đáp án C

**Giải thích:**
```javascript
function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

// ✅ Wrap in function for toThrow
test('throws on divide by zero', () => {
  expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
});

// Can also match error type
test('throws Error type', () => {
  expect(() => divide(1, 0)).toThrow(Error);
});

// Match with regex
test('throws with pattern', () => {
  expect(() => divide(1, 0)).toThrow(/divide by zero/);
});

// For async throws
async function asyncDivide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

test('async throws', async () => {
  await expect(asyncDivide(1, 0)).rejects.toThrow('Cannot divide by zero');
});

// ❌ Common mistake - calling function directly
test('wrong way', () => {
  expect(divide(1, 0)).toThrow(); // Error thrown before expect runs!
});
```

---

### Câu 29: Đáp án D

**Giải thích:**
```javascript
// test.each with array
test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 2, 4],
])('add(%i, %i) = %i', (a, b, expected) => {
  expect(add(a, b)).toBe(expected);
});

// test.each with objects
test.each([
  { input: 'hello', expected: 'HELLO' },
  { input: 'World', expected: 'WORLD' },
  { input: '', expected: '' },
])('toUpperCase("$input") = "$expected"', ({ input, expected }) => {
  expect(input.toUpperCase()).toBe(expected);
});

// test.each with template literal
test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${2} | ${4}
`('add($a, $b) = $expected', ({ a, b, expected }) => {
  expect(add(a, b)).toBe(expected);
});

// describe.each for grouped tests
describe.each([
  ['admin', true],
  ['user', false],
  ['guest', false],
])('%s role', (role, canDelete) => {
  test(`canDelete is ${canDelete}`, () => {
    const user = createUser({ role });
    expect(user.canDelete()).toBe(canDelete);
  });
});
```

---

### Câu 30: Đáp án A

**Giải thích:**
```javascript
describe('Hooks', () => {
  // beforeAll - once before all tests in describe
  beforeAll(() => {
    console.log('Setup database connection');
    // Runs once
  });

  // beforeEach - before each test
  beforeEach(() => {
    console.log('Reset state');
    // Runs before every test
  });

  // afterEach - after each test
  afterEach(() => {
    console.log('Cleanup');
    // Runs after every test
  });

  // afterAll - once after all tests
  afterAll(() => {
    console.log('Close database');
    // Runs once at end
  });

  test('test 1', () => {});
  test('test 2', () => {});
});

// Execution order:
// 1. beforeAll
// 2. beforeEach
// 3. test 1
// 4. afterEach
// 5. beforeEach
// 6. test 2
// 7. afterEach
// 8. afterAll

// Async hooks
beforeAll(async () => {
  await connectDatabase();
});

afterAll(async () => {
  await disconnectDatabase();
});
```

---

## Phần 5: Best Practices & Code Quality

### Câu 31: Đáp án C

**Giải thích:**
Code review checklist:
```markdown
## Functionality
- [ ] Code does what it's supposed to do
- [ ] Edge cases handled
- [ ] Error handling appropriate

## Security
- [ ] No exposed secrets
- [ ] Input validated
- [ ] XSS/SQL injection prevented

## Performance
- [ ] No obvious performance issues
- [ ] Efficient algorithms
- [ ] Appropriate caching

## Maintainability
- [ ] Code is readable
- [ ] Good naming conventions
- [ ] No unnecessary complexity
- [ ] DRY principles followed

## Testing
- [ ] Tests cover new functionality
- [ ] Tests are meaningful (not just coverage)
- [ ] Edge cases tested

## Style
- [ ] Follows team conventions
- [ ] Consistent formatting
- [ ] No commented-out code
```

---

### Câu 32: Đáp án C

**Giải thích:**
```
Git Flow:
├── main (production)
├── develop (integration)
├── feature/* (new features)
├── release/* (release preparation)
├── hotfix/* (production fixes)
└── support/* (older version support)

Best for:
- Scheduled releases
- Multiple versions in production
- Larger teams

Not ideal for:
- Continuous deployment
- Small teams
- Simple projects

Alternative: GitHub Flow (simpler)
├── main (production)
└── feature/* (everything else)
```

---

### Câu 33: Đáp án D

**Giải thích:**
```
Semantic Versioning: MAJOR.MINOR.PATCH

2.3.1
│ │ └── PATCH: Bug fixes (backward compatible)
│ └──── MINOR: New features (backward compatible)
└────── MAJOR: Breaking changes

Examples:
1.0.0 → 1.0.1  Bug fix
1.0.1 → 1.1.0  New feature
1.1.0 → 2.0.0  Breaking change

Pre-release versions:
1.0.0-alpha.1
1.0.0-beta.2
1.0.0-rc.1

Rules:
- Increment MAJOR for breaking changes
- Increment MINOR for new features (reset PATCH)
- Increment PATCH for bug fixes
- Pre-1.0.0: Development, anything goes
```

---

### Câu 34: Đáp án A

**Giải thích:**
```javascript
// ❌ Over-commenting obvious code
// Increment i by 1
i++;

// ✅ Document complex logic
/**
 * Calculate discount based on user tier and cart value.
 *
 * Discount tiers:
 * - Gold: 20% on orders > $100
 * - Silver: 15% on orders > $50
 * - Bronze: 10% on orders > $25
 *
 * @param {User} user - User with tier information
 * @param {number} cartValue - Total cart value
 * @returns {number} Discount percentage (0-100)
 */
function calculateDiscount(user, cartValue) {
  // ...
}

// ✅ Document public APIs
/**
 * Custom hook for managing form state.
 *
 * @example
 * ```tsx
 * const { values, errors, handleChange } = useForm({
 *   initialValues: { email: '' },
 *   validate: (values) => ({ email: !values.email ? 'Required' : null }),
 * });
 * ```
 */
function useForm<T>(config: FormConfig<T>): FormResult<T> {
  // ...
}

// ✅ Document "why", not "what"
// Using setTimeout to debounce rapid state updates
// that were causing performance issues (see #123)
setTimeout(() => {
  setSearchResults(results);
}, 100);
```

---

### Câu 35: Đáp án A

**Giải thích:**
```markdown
## Technical Debt Management

### 1. Track
- Document in issue tracker
- Tag with "tech-debt"
- Include impact assessment

### 2. Prioritize
- High impact, low effort → Do now
- High impact, high effort → Plan into roadmap
- Low impact, low effort → Boy Scout rule
- Low impact, high effort → Monitor

### 3. Allocate Time
- 20% rule: Reserve time in each sprint
- Tech debt sprints: Periodic focused cleanup
- Boy Scout rule: Leave code better than you found it

### 4. Prevent
- Code reviews catch new debt
- Testing prevents regression
- Documentation reduces confusion
- Regular refactoring keeps code healthy

### 5. Measure
- Track debt items over time
- Monitor code quality metrics
- Review velocity impact
```

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [Testing Library Docs](https://testing-library.com/)
2. [Jest Documentation](https://jestjs.io/)
3. [Cypress Documentation](https://docs.cypress.io/)
4. [Playwright Documentation](https://playwright.dev/)
5. [Kent C. Dodds - Testing JavaScript](https://testingjavascript.com/)
6. [Martin Fowler - Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
