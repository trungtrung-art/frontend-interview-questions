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

**Đánh đổi:**
Hình tháp đúng cho backend nhưng với frontend thì nhiều đội chuyển sang hình "chiếc cúp" — tầng integration dày hơn tầng unit. Lý do: phần lớn lỗi frontend nằm ở chỗ các mảnh ghép lại với nhau, còn unit test cho component thuần hiển thị chủ yếu kiểm tra chi tiết cài đặt, nên refactor là gãy dù chức năng không đổi.

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

**Đánh đổi:**
Unit test khoanh vùng lỗi chính xác và chạy trong mili giây, nhưng mỗi lần tách nhỏ là một lần phải giả lập phần xung quanh — mà giả lập sai thì test xanh trong khi production hỏng. Integration test bắt được đúng loại lỗi đó nhưng chậm hơn và khi đỏ thì phải đào lâu hơn mới biết hỏng ở đâu.

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

**Đánh đổi:**
Độ phủ đo được dòng nào đã chạy, không đo được có kiểm tra đúng hay không — một test không có `expect` nào vẫn cho 100% độ phủ. Đặt ngưỡng độ phủ trong CI chặn được việc code mới không có test, nhưng ngưỡng quá cao đẩy đội đi viết test cho getter và setter để lấy số, tốn công mà không tăng an toàn.

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

**Đánh đổi:**
Mock làm test nhanh và ổn định, nhưng mỗi mock là một giả định về cách thứ bên ngoài hoạt động — giả định đó lệch dần theo thời gian mà không ai báo. Test xanh với API đã đổi hợp đồng là tình huống kinh điển. Mock ở tầng mạng như MSW an toàn hơn mock ở tầng module, vì nó vẫn đi qua code thật của mình.

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

**Đánh đổi:**
Arrange–Act–Assert làm test dễ đọc và dễ soi, nhưng áp cứng thì thành rườm rà với test chỉ có một dòng. Và nó không ngăn được lỗi phổ biến nhất: nhiều Act trong một test. Một test nên có đúng một hành động, nếu không thì khi đỏ không biết hành động nào gây ra.

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

**Đánh đổi:**
Phân biệt mock, stub, spy, fake giúp diễn đạt ý định rõ hơn, nhưng trong thực tế các thư viện gộp hết vào một API nên ranh giới mờ. Điều đáng nhớ hơn là: kiểm tra một hàm *đã được gọi* là kiểm tra cài đặt, dễ gãy khi refactor; kiểm tra *kết quả* bền hơn nhiều.

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

**Đánh đổi:**
Snapshot bắt được thay đổi ngoài ý muốn gần như miễn phí, nhưng khi nó đỏ thì rất dễ bấm cập nhật cho xanh mà không đọc kỹ — lúc đó nó không còn bảo vệ gì. Snapshot lớn thì không ai review nổi. Dùng cho khối nhỏ và ổn định, đừng chụp cả cây component.

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

**Đánh đổi:**
Test cô lập chạy song song được và không tạo lỗi dây chuyền, nhưng cái giá là mỗi test phải tự dựng lại trạng thái — với dữ liệu phức tạp thì phần chuẩn bị dài hơn phần kiểm tra. Dùng chung trạng thái thì nhanh hơn nhiều nhưng thứ tự chạy trở thành phụ thuộc ngầm, và lỗi chỉ xuất hiện khi chạy song song.

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

**Đánh đổi:**
Test dao động tệ hơn không có test, vì nó dạy cả đội bỏ qua màu đỏ của CI. Chạy lại tự động che được triệu chứng nhưng giữ nguyên bệnh, và che luôn cả những lỗi cạnh tranh thật trong sản phẩm. Cách đúng tốn công hơn: cô lập test đó, tìm nguồn bất định, thường là chờ theo thời gian cố định thay vì chờ theo điều kiện.

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

**Đánh đổi:**
TDD buộc phải nghĩ về giao diện trước khi cài đặt, và cho bộ test tự nhiên bám vào hành vi thay vì cấu trúc. Nhưng nó chậm hơn rõ rệt khi chưa biết mình muốn gì — lúc đang dò đường thì viết thử rồi bỏ nhanh hơn. Nhiều đội dùng TDD cho logic nghiệp vụ và bỏ qua nó ở tầng giao diện đang còn thay đổi liên tục.

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

**Đánh đổi:**
Test theo cách người dùng tương tác làm test bền trước refactor và bắt được lỗi thật. Nhưng có những thứ người dùng không thấy mà vẫn cần đảm bảo, ví dụ một hàm tính toán phức tạp — ép mọi thứ qua giao diện làm test chậm và khó chỉ ra lỗi. Tầng đó nên test trực tiếp.

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

**Đánh đổi:**
Ưu tiên `getByRole` ép code phải có ngữ nghĩa và thuộc tính accessibility đúng, nên test tốt cũng là kiểm tra accessibility. Cái giá là truy vấn theo vai trò chậm hơn và khó viết hơn với giao diện phức tạp, và thông báo lỗi khi không tìm thấy thì rất dài.

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

**Đánh đổi:**
`findBy` và `waitFor` chờ theo điều kiện nên ổn định hơn hẳn chờ theo thời gian cố định. Nhưng chúng che mất việc giao diện thật sự chậm: test vẫn xanh trong khi người dùng phải đợi ba giây. Và thời gian chờ mặc định quá dài làm một test hỏng mất cả phút mới báo đỏ.

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

**Đánh đổi:**
`userEvent` mô phỏng chuỗi sự kiện thật nên bắt được lỗi mà `fireEvent` bỏ sót — ví dụ nút bị `pointer-events: none` vẫn nhận được `fireEvent.click`. Đổi lại nó chậm hơn nhiều lần và phải `await`, nên bộ test lớn sẽ thấy rõ chênh lệch thời gian.

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

**Đánh đổi:**
`renderHook` test hook trực tiếp nên nhanh và tập trung, nhưng test một hook tách khỏi component là test cài đặt — hook chỉ có ý nghĩa khi gắn vào vòng đời thật. Với hook đơn giản thì cách đó ổn; với hook có effect và dọn dẹp, test qua một component nhỏ cho tín hiệu thật hơn.

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

**Đánh đổi:**
Bọc Provider trong test cho môi trường gần thật, nhưng nếu mỗi test phải tự bọc thì sẽ có chỗ quên và chỗ bọc khác nhau. Gói vào một hàm render dùng chung là cách chữa, đổi lại nó âm thầm kéo theo mọi provider vào mọi test, làm test chậm và giấu mất phụ thuộc thật của component.

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

**Đánh đổi:**
Test theo luồng người dùng bắt được lỗi tích hợp mà test từng phần bỏ sót, nhưng khi đỏ thì phải đào qua cả luồng mới biết hỏng ở đâu. Và luồng càng dài thì càng dễ dao động. Cân bằng: một test cho luồng thành công đầy đủ, còn các trường hợp lỗi thì test riêng ở mức nhỏ hơn.

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

**Đánh đổi:**
`rerender` giữ nguyên thực thể component nên test được hành vi khi props đổi — thứ mà render mới không kiểm được. Nhưng nó cũng giữ lại state cũ, nên dùng nhầm sẽ tạo ra trạng thái mà người dùng thật không bao giờ gặp.

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

**Đánh đổi:**
Test Error Boundary đòi cố tình ném lỗi, và React sẽ in cảnh báo đỏ ra console làm nhiễu kết quả — phần lớn đội phải tắt tạm console trong test đó, mà làm vậy thì cũng che luôn lỗi thật. Và Error Boundary không bắt lỗi trong event handler, nên test sai chỗ sẽ cho cảm giác an toàn giả.

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

**Đánh đổi:**
MSW chặn ở tầng mạng nên code gọi API vẫn chạy thật, bắt được lỗi trong phần xử lý response mà mock module bỏ qua. Cái giá là thêm một lớp phải cấu hình và chạy chậm hơn, cộng với việc handler dễ lệch khỏi API thật — trừ khi sinh chúng từ lược đồ OpenAPI.

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

**Đánh đổi:**
Giới hạn E2E ở những luồng quan trọng giữ cho bộ test chạy nhanh và ít dao động, nhưng nghĩa là chấp nhận có lỗi lọt ở những đường ít đi. Đó là đánh đổi có chủ ý: chi phí một E2E gấp hàng chục lần một integration test, cả về thời gian chạy lẫn công bảo trì.

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

**Đánh đổi:**
Playwright chạy đa trình duyệt thật và nhanh hơn, còn Cypress có trải nghiệm gỡ lỗi trực quan hơn khiến đội mới tiếp cận dễ hơn. Chọn công cụ ít quan trọng bằng việc có chạy nó trong CI hay không — bộ E2E đẹp mà chỉ chạy trên máy một người thì không bảo vệ được gì.

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

**Đánh đổi:**
`data-testid` bền trước thay đổi giao diện nên test ít gãy, nhưng nó là thứ chỉ tồn tại cho test — không kiểm tra được rằng người dùng thật tìm thấy phần tử đó. Ưu tiên truy vấn theo vai trò và nhãn; dùng `data-testid` khi không còn cách nào khác, ví dụ một vùng trang trí không có ngữ nghĩa.

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

**Đánh đổi:**
Page Object gom chi tiết chọn phần tử vào một chỗ nên đổi giao diện chỉ phải sửa một nơi. Nhưng nó thêm một lớp trừu tượng, và khi lớp đó phình ra thì đọc một test phải nhảy qua ba file mới hiểu chuyện gì xảy ra. Với bộ test nhỏ, viết thẳng dễ đọc hơn.

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

**Đánh đổi:**
Kiểm thử hồi quy hình ảnh bắt được lỗi mà không test nào khác bắt nổi, nhưng nó dao động theo phiên bản trình duyệt, theo font hệ thống và theo cả cách kết xuất của máy chạy CI. Phải chạy trong container cố định và đặt ngưỡng sai khác, nếu không mỗi lần nâng phiên bản là hàng trăm ảnh đỏ.

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

**Đánh đổi:**
Factory cho dữ liệu test giảm trùng lặp và làm rõ điều gì quan trọng trong từng test — chỉ khai những trường liên quan, còn lại lấy mặc định. Cái giá là mặc định trở thành phụ thuộc ngầm: đổi giá trị mặc định có thể làm đỏ một test ở file khác mà không rõ lý do.

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

**Đánh đổi:**
Quên `await` là nguồn test xanh giả kinh điển — assertion chạy trước khi thao tác xong nên không kiểm gì cả. Quy tắc lint bắt được phần lớn trường hợp. Nhưng thêm `await` ở mọi chỗ cũng làm test tuần tự hoá không cần thiết, nên nơi nào chạy song song được thì gom bằng `Promise.all`.

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

**Đánh đổi:**
Kiểm tra cả thông điệp lỗi chặt hơn là chỉ kiểm tra có ném lỗi, nhưng làm test gắn với đúng câu chữ — sửa lại thông điệp cho dễ hiểu hơn là gãy test. Cân bằng: kiểm tra loại lỗi hoặc mã lỗi thay vì toàn bộ câu chữ, trừ khi chính thông điệp đó là thứ người dùng nhìn thấy.

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

**Đánh đổi:**
`test.each` gọn và phủ được nhiều trường hợp biên mà không lặp code. Nhưng khi một hàng đỏ thì thông báo lỗi khó lần ra hàng nào, trừ khi đặt tên có tham số. Và nó dễ bị lạm dụng thành bảng ba mươi hàng mà không ai còn biết từng hàng đang kiểm điều gì.

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

**Đánh đổi:**
`beforeAll` nhanh hơn vì chỉ chạy một lần, nhưng tạo trạng thái dùng chung giữa các test — test nào đó sửa vào đấy là gây lỗi dây chuyền rất khó tìm. `beforeEach` chậm hơn nhưng giữ được cô lập. Mặc định dùng `beforeEach`, chỉ đổi khi phần chuẩn bị thật sự đắt và chắc chắn không bị sửa.

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

**Đánh đổi:**
Danh sách tiêu chí review đầy đủ nghe hợp lý nhưng review quá rộng thì chậm và mệt, người review sẽ bắt đầu duyệt qua loa. Phần lớn tiêu chí nên đẩy cho máy: lint, kiểm tra kiểu, test, phân tích bundle. Người chỉ nên xem những thứ máy không xem được — thiết kế, đặt tên, và liệu vấn đề có đáng giải theo cách này không.

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

**Đánh đổi:**
Git Flow phù hợp với sản phẩm phát hành theo đợt và phải hỗ trợ nhiều phiên bản cùng lúc, nhưng với web deploy liên tục thì nó tạo ra nhánh sống lâu và merge đau. Trunk-based cộng feature flag hợp hơn, đổi lại đòi bộ test đủ tin cậy để merge thẳng vào nhánh chính.

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

**Đánh đổi:**
Semantic versioning chỉ có tác dụng khi người phát hành thật sự tuân thủ — mà việc xác định đâu là thay đổi phá vỡ thường không rõ ràng, nhất là khi kiểu TypeScript đổi. Người dùng thư viện vẫn phải đọc changelog. Trong monorepo nội bộ, đánh phiên bản ngặt nghèo có khi tốn công hơn lợi ích.

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

**Đánh đổi:**
Tài liệu là thứ lệch khỏi code nhanh nhất trong mọi loại tài sản. Tài liệu sai còn tệ hơn không có, vì người đọc tin vào nó. Cách bền hơn: để kiểu dữ liệu và tên hàm tự nói, còn tài liệu thì dành cho câu hỏi "vì sao" mà code không trả lời được, và đặt ví dụ trong file test để nó luôn đúng.

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

**Đánh đổi:**
Theo dõi và trả nợ dần là cách bền, nhưng danh sách nợ kỹ thuật thường phình ra rồi không ai đọc. Nó chỉ có tác dụng khi mỗi khoản nợ ghi rõ nó đang tốn gì — bao nhiêu thời gian mỗi tuần, bao nhiêu lỗi mỗi tháng. Không có con số thì mọi khoản nợ đều thua tính năng mới khi xếp ưu tiên.

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [Testing Library Docs](https://testing-library.com/)
2. [Jest Documentation](https://jestjs.io/)
3. [Cypress Documentation](https://docs.cypress.io/)
4. [Playwright Documentation](https://playwright.dev/)
5. [Kent C. Dodds - Testing JavaScript](https://testingjavascript.com/)
6. [Martin Fowler - Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
