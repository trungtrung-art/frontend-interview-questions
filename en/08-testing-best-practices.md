# Testing & Best Practices Interview Questions
## Frontend Testing Strategies

---

## TABLE OF CONTENTS
- [Part 1: Testing Fundamentals](#part-1-testing-fundamentals)
- [Part 2: React Testing](#part-2-react-testing)
- [Part 3: End-to-End Testing](#part-3-end-to-end-testing)
- [Part 4: Testing Patterns](#part-4-testing-patterns)
- [Part 5: Best Practices & Code Quality](#part-5-best-practices--code-quality)
- [Detailed Answers](#detailed-answers)

---

# PART 1: TESTING FUNDAMENTALS

## Question 1: Testing Pyramid
**What is the structure of the testing pyramid?**

- A) E2E tests > Integration tests > Unit tests
- B) Unit tests > Integration tests > E2E tests
- C) Integration tests > Unit tests > E2E tests
- D) All test types are equal

---

## Question 2: Unit vs Integration
**What is the difference between unit tests and integration tests?**

- A) Unit tests are slower than integration tests
- B) Unit tests test isolated units, integration tests test multiple units working together
- C) There is no difference
- D) Integration tests are easier to write

---

## Question 3: Test Coverage
**What does 100% test coverage mean?**

- A) The application has no bugs
- B) All lines/branches are executed in tests, does not guarantee no bugs
- C) The application is production-ready
- D) No more tests are needed

---

## Question 4: Mocking
**When should you mock dependencies?**

- A) Always
- B) External services, APIs, modules that are slow/unpredictable/have side effects
- C) Never
- D) Only in E2E tests

---

## Question 5: AAA Pattern
**What is the AAA pattern in testing?**

- A) Arrange, Act, Assert
- B) Analyze, Apply, Approve
- C) Add, Alter, Affirm
- D) Async, Await, Assert

---

## Question 6: Test Doubles
**What is the difference between Mock, Stub, and Spy?**

- A) There is no difference
- B) Mock: programmable fake, Stub: simple fake return, Spy: wraps real function and records calls
- C) Mock for async, Stub for sync
- D) Spy is only used in E2E

---

## Question 7: Snapshot Testing
**When should you use snapshot testing?**

- A) For all components
- B) For detecting unintended UI changes, does not replace explicit assertions
- C) To completely replace unit tests
- D) Only for large components

---

## Question 8: Test Isolation
**Why do tests need to be isolated?**

- A) To run in parallel and not affect each other
- B) To save memory
- C) To write shorter code
- D) Not necessary

---

## Question 9: Flaky Tests
**What is a flaky test and how do you handle it?**

- A) A test that always passes, can be ignored
- B) An unstable test (passes/fails randomly), need to fix root cause like timing, async issues
- C) A slow running test
- D) A test for edge cases

---

## Question 10: TDD
**What is the Test-Driven Development workflow?**

- A) Write code → Write test → Refactor
- B) Write test (fail) → Write code (pass) → Refactor
- C) Write test → Deploy → Debug
- D) Write code → Debug → Write test

---

# PART 2: REACT TESTING

## Question 11: Testing Library Philosophy
**What is the React Testing Library philosophy?**

- A) Test implementation details
- B) Test like users interact with UI, don't test implementation
- C) Test internal state
- D) Test lifecycle methods

---

## Question 12: Query Priorities
**What is the correct query priority order in React Testing Library?**

- A) getByTestId > getByRole > getByText
- B) getByRole > getByLabelText > getByText > getByTestId
- C) getByText > getByRole > getByTestId
- D) All queries are equal

---

## Question 13: Async Testing
**What is the correct way to test async operations?**

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

- A) `getByText('Loading...')` then `getByText(user.name)`
- B) Use `findByText` or `waitFor`
- C) Use `setTimeout` in test
- D) Skip async tests

---

## Question 14: User Events
**How do you simulate user typing?**

```jsx
const input = screen.getByRole('textbox');
// ?
```

- A) `fireEvent.change(input, { target: { value: 'hello' } })`
- B) `userEvent.type(input, 'hello')`
- C) Both A and B, but B simulates more realistically
- D) `input.value = 'hello'`

---

## Question 15: Custom Hooks Testing
**How do you test custom hooks?**

- A) Test in an actual component
- B) Use `renderHook` from @testing-library/react
- C) No need to test hooks
- D) Both A and B are valid approaches

---

## Question 16: Context Testing
**How do you test a component that uses Context?**

```jsx
function UserName() {
  const { user } = useContext(UserContext);
  return <span>{user.name}</span>;
}
```

- A) Mock useContext
- B) Wrap component with Provider in test
- C) Cannot test
- D) Use shallow rendering

---

## Question 17: Testing Forms
**What is the best practice for testing form validation?**

- A) Test implementation of validation logic
- B) Test user flow: input → submit → verify error messages or success
- C) Only test submit button
- D) Skip form tests

---

## Question 18: Component Rendering
**What is the difference between `render` and `rerender`?**

- A) There is no difference
- B) `render` mounts new component, `rerender` updates props of already mounted component
- C) `rerender` is for async components
- D) `render` is only for class components

---

## Question 19: Testing Error Boundaries
**How do you test Error Boundaries?**

- A) Cannot test
- B) Render a child component that throws an error, verify fallback UI
- C) Mock Error Boundary
- D) Only test in browser

---

## Question 20: MSW (Mock Service Worker)
**What is MSW used for?**

- A) Render components
- B) Mock API responses at network level
- C) Create new components
- D) Debug performance

---

# PART 3: END-TO-END TESTING

## Question 21: E2E Test Scope
**What should E2E tests test?**

- A) All functionality
- B) Critical user journeys and happy paths
- C) Unit logic
- D) Styling

---

## Question 22: Cypress vs Playwright
**What is the main difference between Cypress and Playwright?**

- A) There is no difference
- B) Playwright has native multi-browser support, Cypress has rich debugging, both are excellent
- C) Cypress is faster
- D) Playwright is only for Chromium

---

## Question 23: Test Selectors
**What is the best practice for E2E selectors?**

- A) Complex CSS selectors
- B) data-testid attributes for test-specific selectors
- C) XPath
- D) Random selectors

---

## Question 24: Page Object Model
**What is Page Object Model (POM)?**

- A) CSS methodology
- B) Design pattern that encapsulates page elements and actions, improves test maintainability
- C) Testing framework
- D) Browser API

---

## Question 25: Visual Regression Testing
**What is visual regression testing used for?**

- A) Test performance
- B) Detect unintended visual changes through screenshot comparison
- C) Test accessibility
- D) Test SEO

---

# PART 4: TESTING PATTERNS

## Question 26: Factory Functions
**What are factory functions in testing used for?**

- A) Create database connections
- B) Generate test data with default/custom values
- C) Run tests faster
- D) Mock APIs

---

## Question 27: Testing Async Code
**Which pattern is correct for async tests?**

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

- A) Pattern A is correct
- B) Pattern B is correct - must await async operations
- C) Both are correct
- D) Both are wrong

---

## Question 28: Testing Error Cases
**How do you test a function that throws an error?**

```javascript
function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}
```

- A) `expect(divide(1, 0)).toThrow()`
- B) `expect(() => divide(1, 0)).toThrow('Cannot divide by zero')`
- C) `expect(divide(1, 0)).toBe(Error)`
- D) Cannot test throws

---

## Question 29: Parameterized Tests
**How do you write parameterized tests in Jest?**

- A) Copy paste tests
- B) Use `test.each` or `it.each`
- C) There is no way
- D) Only in Mocha

---

## Question 30: Before/After Hooks
**What is the difference between `beforeAll` and `beforeEach`?**

- A) There is no difference
- B) `beforeAll` runs once before all tests, `beforeEach` runs before each test
- C) `beforeEach` runs once
- D) `beforeAll` is for async only

---

# PART 5: BEST PRACTICES & CODE QUALITY

## Question 31: Code Review
**What should code review focus on?**

- A) Only coding style
- B) Logic, security, performance, maintainability, testing
- C) Only finding bugs
- D) Only formatting

---

## Question 32: Git Branching
**When is Git Flow branching strategy appropriate?**

- A) Every project
- B) Projects with scheduled releases, multiple versions in production
- C) Small projects
- D) Single developer

---

## Question 33: Semantic Versioning
**What does version 2.3.1 mean?**

- A) Random numbers
- B) MAJOR.MINOR.PATCH - breaking changes, new features, bug fixes
- C) Year.Month.Day
- D) Team.Sprint.Task

---

## Question 34: Documentation
**What should code documentation include?**

- A) Comment every line
- B) Public API docs, complex logic explanation, examples, don't comment obvious code
- C) No documentation needed
- D) Only README

---

## Question 35: Technical Debt
**How do you manage technical debt?**

- A) Ignore completely
- B) Track, prioritize, allocate time to address incrementally
- C) Rewrite from scratch
- D) Wait until there are problems

---

---

# DETAILED ANSWERS

## Part 1: Testing Fundamentals

### Question 1: Answer B

**Explanation:**
Testing Pyramid (from most to least):
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

### Question 2: Answer B

**Explanation:**
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

### Question 3: Answer B

**Explanation:**
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

### Question 4: Answer B

**Explanation:**
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

### Question 5: Answer A

**Explanation:**
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

### Question 6: Answer B

**Explanation:**
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

### Question 7: Answer B

**Explanation:**
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

### Question 8: Answer A

**Explanation:**
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

### Question 9: Answer B

**Explanation:**
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

### Question 10: Answer B

**Explanation:**
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

## Part 2: React Testing

### Question 11: Answer B

**Explanation:**
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

### Question 12: Answer B

**Explanation:**
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

### Question 13: Answer B

**Explanation:**
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

### Question 14: Answer C

**Explanation:**
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

### Question 15: Answer D

**Explanation:**
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

### Question 16: Answer B

**Explanation:**
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

### Question 17: Answer B

**Explanation:**
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

### Question 18: Answer B

**Explanation:**
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

### Question 19: Answer B

**Explanation:**
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

### Question 20: Answer B

**Explanation:**
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

## Part 3: End-to-End Testing

### Question 21: Answer B

**Explanation:**
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

### Question 22: Answer B

**Explanation:**
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

### Question 23: Answer B

**Explanation:**
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

### Question 24: Answer B

**Explanation:**
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

### Question 25: Answer B

**Explanation:**
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

## Part 4: Testing Patterns

### Question 26: Answer B

**Explanation:**
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

### Question 27: Answer B

**Explanation:**
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

### Question 28: Answer B

**Explanation:**
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

### Question 29: Answer B

**Explanation:**
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

### Question 30: Answer B

**Explanation:**
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

## Part 5: Best Practices & Code Quality

### Question 31: Answer B

**Explanation:**
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

### Question 32: Answer B

**Explanation:**
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

### Question 33: Answer B

**Explanation:**
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

### Question 34: Answer B

**Explanation:**
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

### Question 35: Answer B

**Explanation:**
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

## REFERENCES

1. [Testing Library Docs](https://testing-library.com/)
2. [Jest Documentation](https://jestjs.io/)
3. [Cypress Documentation](https://docs.cypress.io/)
4. [Playwright Documentation](https://playwright.dev/)
5. [Kent C. Dodds - Testing JavaScript](https://testingjavascript.com/)
6. [Martin Fowler - Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
