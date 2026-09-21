# Câu Hỏi Phỏng Vấn TypeScript
## Từ Cơ Bản đến Nâng Cao

---

## 📚 MỤC LỤC
- [Phần 1: Basic Types](#phần-1-basic-types)
- [Phần 2: Advanced Types](#phần-2-advanced-types)
- [Phần 3: Generics](#phần-3-generics)
- [Phần 4: Type Manipulation](#phần-4-type-manipulation)
- [Phần 5: React + TypeScript](#phần-5-react--typescript)
- [Đáp Án Chi Tiết](#đáp-án-chi-tiết)

---

# PHẦN 1: BASIC TYPES

## Câu 1: Type vs Interface
**Sự khác biệt giữa `type` và `interface`?**

```typescript
type UserType = {
  name: string;
  age: number;
};

interface UserInterface {
  name: string;
  age: number;
}
```

- A) Interface chỉ dùng cho objects
- B) Type chỉ dùng cho primitives
- C) Không có sự khác biệt
- D) Interface có thể extend và merge declarations, type có thể dùng union/intersection

---

## Câu 2: unknown vs any
**Sự khác biệt giữa `unknown` và `any`?**

```typescript
let valueAny: any = 10;
let valueUnknown: unknown = 10;

valueAny.foo.bar; // ?
valueUnknown.foo.bar; // ?
```

- A) `any` bypass type checking, `unknown` yêu cầu type narrowing trước khi sử dụng
- B) Không có sự khác biệt
- C) `unknown` chỉ dùng cho functions
- D) `any` là type-safe hơn `unknown`

---

## Câu 3: never type
**Khi nào sử dụng `never` type?**

- A) Khi function throw error hoặc có infinite loop - never reaches end
- B) Khi function không return gì
- C) Cho optional parameters
- D) Thay thế cho `void`

---

## Câu 4: Type Assertion
**Đâu là type assertion đúng?**

```typescript
const canvas = document.getElementById('canvas');
```

- A) `canvas as HTMLCanvasElement`
- B) `<HTMLCanvasElement>canvas`
- C) Cả A và B đều đúng
- D) `canvas: HTMLCanvasElement`

---

## Câu 5: Literal Types
**Output của đoạn code sau?**

```typescript
let x = 'hello';
const y = 'hello';

type X = typeof x; // ?
type Y = typeof y; // ?
```

- A) `X = string`, `Y = 'hello'`
- B) `X = string`, `Y = string`
- C) Error
- D) `X = 'hello'`, `Y = 'hello'`

---

## Câu 6: Optional vs Undefined
**Sự khác biệt giữa optional property và property với undefined?**

```typescript
interface A {
  prop?: string;
}

interface B {
  prop: string | undefined;
}
```

- A) Không có sự khác biệt
- B) Cả hai đều bắt buộc có property
- C) B cho phép không có property
- D) A cho phép không có property, B yêu cầu property phải tồn tại (có thể là undefined)

---

## Câu 7: Readonly
**Đoạn code nào compile thành công?**

```typescript
interface Config {
  readonly apiKey: string;
  endpoints: readonly string[];
}

const config: Config = {
  apiKey: 'abc123',
  endpoints: ['api.example.com']
};

// A
config.apiKey = 'new-key';

// B
config.endpoints.push('new-endpoint');

// C
config.endpoints = ['new-endpoint'];

// D
console.log(config.apiKey);
```

- A) A, B, C, D
- B) Chỉ D
- C) C và D
- D) B và D

---

## Câu 8: Enum
**Output của đoạn code sau?**

```typescript
enum Direction {
  Up,
  Down,
  Left = 10,
  Right
}

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
```

- A) `'Up', 'Down', 'Left', 'Right'`
- B) `0, 1, 2, 3`
- C) `0, 1, 10, 11`
- D) `1, 2, 10, 11`

---

## Câu 9: Tuple
**Đoạn code nào có lỗi?**

```typescript
const tuple: [string, number] = ['hello', 42];

// A
tuple[0] = 'world';

// B
tuple[1] = 'not a number';

// C
tuple.push('extra');

// D
const [first, second] = tuple;
```

- A) Không có lỗi
- B) Chỉ B
- C) B và C
- D) Chỉ C

---

## Câu 10: Non-null Assertion
**Non-null assertion operator (!) làm gì?**

```typescript
function getValue(): string | null {
  return 'hello';
}

const value = getValue()!;
```

- A) Throws error nếu null
- B) Convert null thành empty string
- C) Check runtime null
- D) Asserts value is not null/undefined, remove from type

---

# PHẦN 2: ADVANCED TYPES

## Câu 11: Union & Intersection
**Type của `result` là gì?**

```typescript
type A = { a: string; common: number };
type B = { b: string; common: boolean };

type Union = A | B;
type Intersection = A & B;

const union: Union = ???
const intersection: Intersection = ???
```

- A) Union cần cả a và b, Intersection cần một trong hai
- B) Union cần một trong hai (a hoặc b + common), Intersection cần tất cả (a, b, common nhưng common conflict)
- C) Không có sự khác biệt
- D) Error vì common type khác nhau

---

## Câu 12: Discriminated Unions
**Pattern nào đúng cho discriminated union?**

```typescript
// A
type Shape = Circle | Square;
type Circle = { radius: number };
type Square = { side: number };

// B
type Shape = Circle | Square;
type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; side: number };
```

- A) Pattern B đúng - có discriminant property
- B) Pattern A đúng
- C) Cả hai đều sai
- D) Cả hai đều đúng

---

## Câu 13: Type Guards
**Cách nào là valid type guard?**

```typescript
// A
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// B
function isString(value: unknown): boolean {
  return typeof value === 'string';
}

// C
const isString = (value: unknown) => typeof value === 'string';
```

- A) Tất cả đều là type guards
- B) Chỉ A là type guard (type predicate)
- C) A và B là type guards
- D) Chỉ C là type guard

---

## Câu 14: Conditional Types
**Result type là gì?**

```typescript
type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>;
type B = IsString<number>;
type C = IsString<'hello'>;
```

- A) `A = 'yes'`, `B = 'no'`, `C = 'no'`
- B) `A = 'yes'`, `B = 'no'`, `C = 'yes'`
- C) `A = 'yes'`, `B = 'yes'`, `C = 'yes'`
- D) Error

---

## Câu 15: infer Keyword
**Result type là gì?**

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = (x: number) => string;
type Result = ReturnType<Fn>;
```

- A) `never`
- B) `string`
- C) `Fn`
- D) `number`

---

## Câu 16: Mapped Types
**Result type là gì?**

```typescript
type Original = {
  name: string;
  age: number;
};

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Result = Readonly<Original>;
```

- A) `{ readonly name: string; readonly age: number }`
- B) Error
- C) `{ name: readonly string; age: readonly number }`
- D) Same as Original

---

## Câu 17: Template Literal Types
**Type của `EventName` là gì?**

```typescript
type Events = 'click' | 'focus' | 'blur';
type EventName = `on${Capitalize<Events>}`;
```

- A) Error
- B) `'onclick' | 'onfocus' | 'onblur'`
- C) `'onClick' | 'onFocus' | 'onBlur'`
- D) `string`

---

## Câu 18: Index Signatures
**Đoạn code nào có lỗi?**

```typescript
interface Dictionary {
  [key: string]: number;
  length: number;
  // A
  name: string;
}

// B
interface Dict2 {
  [key: string]: number | string;
  length: number;
  name: string;
}
```

- A) Cả A và B đều lỗi
- B) Chỉ A lỗi (name: string không compatible với index signature number)
- C) Chỉ B lỗi
- D) Không có lỗi

---

## Câu 19: keyof
**Type của `Keys` là gì?**

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}

type Keys = keyof Person;
```

- A) `'name' | 'age' | 'address'`
- B) `string`
- C) `['name', 'age', 'address']`
- D) `{ name: string; age: number; address: string }`

---

## Câu 20: typeof in Types
**Sự khác biệt giữa typeof trong runtime và type context?**

```typescript
const user = { name: 'John', age: 30 };

// Runtime
console.log(typeof user);

// Type context
type User = typeof user;
```

- A) Cả hai đều return 'object'
- B) Runtime: `'object'`, Type context: `{ name: string; age: number }`
- C) Error trong type context
- D) Cả hai đều return type structure

---

# PHẦN 3: GENERICS

## Câu 21: Generic Basics
**Đâu là generic function đúng để get array element?**

```typescript
// A
function getFirst(arr: any[]): any {
  return arr[0];
}

// B
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// C
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

- A) C là best practice (handle empty array)
- B) Tất cả đều equivalent
- C) A là best practice
- D) B là best practice

---

## Câu 22: Generic Constraints
**Code nào compile thành công?**

```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// A
getLength('hello');

// B
getLength([1, 2, 3]);

// C
getLength({ length: 10 });

// D
getLength(123);
```

- A) A, B, C
- B) A, B, C, D
- C) Chỉ B và C
- D) A, B, C nhưng D lỗi

---

## Câu 23: Multiple Type Parameters
**Type của `result` là gì?**

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = merge({ name: 'John' }, { age: 30 });
```

- A) `{ name: string; age: number }`
- B) `any`
- C) `{ name: string } | { age: number }`
- D) `object`

---

## Câu 24: Generic Defaults
**Code nào sử dụng generic default đúng?**

```typescript
// A
interface Container<T = string> {
  value: T;
}
const container: Container = { value: 'hello' };

// B
function process<T = number>(value: T): T {
  return value;
}
const result = process('hello'); // result type?
```

- A) A error, B correct
- B) A correct, B result là `string` (inferred)
- C) A correct, B result là `number`
- D) Both error

---

## Câu 25: Generic Classes
**Type của `data` khi get từ NumberBox?**

```typescript
class Box<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box(42);
const data = numberBox.getValue();
```

- A) `42`
- B) `any`
- C) `unknown`
- D) `number`

---

# PHẦN 4: TYPE MANIPULATION

## Câu 26: Utility Types - Partial & Required
**Types của `PartialUser` và `RequiredUser` là gì?**

```typescript
interface User {
  name: string;
  age?: number;
}

type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
```

- A) Error
- B) Giống nhau
- C) `PartialUser`: tất cả optional, `RequiredUser`: tất cả required
- D) `PartialUser`: tất cả required, `RequiredUser`: tất cả optional

---

## Câu 27: Pick & Omit
**Type của `Result` là gì?**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, 'password'>;
type Credentials = Pick<User, 'email' | 'password'>;
```

- A) Error
- B) `PublicUser` không có password, `Credentials` có email và password
- C) Cả hai đều có tất cả properties
- D) `PublicUser` có password, `Credentials` không có

---

## Câu 28: Record
**Type của `Result` là gì?**

```typescript
type Status = 'pending' | 'approved' | 'rejected';
type StatusMap = Record<Status, number>;
```

- A) `Status[]`
- B) `{ pending: number; approved: number; rejected: number }`
- C) `{ [key: string]: number }`
- D) `number[]`

---

## Câu 29: Extract & Exclude
**Types là gì?**

```typescript
type T = 'a' | 'b' | 'c' | 'd';

type Extracted = Extract<T, 'a' | 'b' | 'e'>;
type Excluded = Exclude<T, 'a' | 'b'>;
```

- A) Error
- B) `Extracted = 'e'`, `Excluded = 'a' | 'b' | 'c' | 'd'`
- C) `Extracted = 'a' | 'b'`, `Excluded = 'c' | 'd'`
- D) `Extracted = 'a' | 'b' | 'e'`, `Excluded = 'a' | 'b'`

---

## Câu 30: NonNullable
**Type của `Result` là gì?**

```typescript
type Nullable = string | null | undefined;
type Result = NonNullable<Nullable>;
```

- A) `string | null | undefined`
- B) `never`
- C) `null | undefined`
- D) `string`

---

# PHẦN 5: REACT + TYPESCRIPT

## Câu 31: Component Props
**Cách định nghĩa props đúng cho React component?**

```typescript
// A
interface Props {
  name: string;
  age?: number;
  children: React.ReactNode;
}

// B
type Props = {
  name: string;
  age?: number;
  children: React.ReactNode;
};

// C
function Component(props: { name: string }) {}

// D
All above are correct
```

- A) Chỉ A
- B) Chỉ B
- C) A và B
- D) Tất cả đều đúng

---

## Câu 32: Event Handlers
**Type đúng cho onChange handler?**

```typescript
const Input: React.FC = () => {
  const handleChange = (e: ???) => {
    console.log(e.target.value);
  };

  return <input onChange={handleChange} />;
};
```

- A) `React.FormEvent`
- B) `React.ChangeEvent<HTMLInputElement>`
- C) `any`
- D) `Event`

---

## Câu 33: useRef Types
**Sự khác biệt giữa các useRef types?**

```typescript
// A
const ref1 = useRef<HTMLDivElement>(null);

// B
const ref2 = useRef<HTMLDivElement>(null!);

// C
const ref3 = useRef<HTMLDivElement | null>(null);
```

- A) Tất cả đều mutable
- B) Không có sự khác biệt
- C) A: readonly ref, B: mutable (asserts not null), C: mutable ref
- D) Tất cả đều readonly

---

## Câu 34: Generic Components
**Cách viết generic component đúng?**

```typescript
// A
function List<T>({ items, render }: { items: T[]; render: (item: T) => React.ReactNode }) {
  return <>{items.map(render)}</>;
}

// Usage
<List items={[1, 2, 3]} render={(item) => <span>{item}</span>} />
```

- A) Need to use class components
- B) Incorrect - cannot use generics with React components
- C) Need explicit type parameter
- D) Correct

---

## Câu 35: Custom Hooks Types
**Return type đúng cho custom hook?**

```typescript
function useToggle(initial: boolean): ??? {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

// Usage
const [isOpen, toggleOpen] = useToggle(false);
toggleOpen(); // Should work
```

- A) A hoặc B (B là default inference)
- B) `[boolean, () => void]`
- C) `(boolean | (() => void))[]`
- D) `{ value: boolean; toggle: () => void }`

---

---

# ĐÁP ÁN CHI TIẾT

## Phần 1: Basic Types

### Câu 1: Đáp án D

**Giải thích:**

| Feature | interface | type |
|---------|-----------|------|
| Extend | `extends` keyword | `&` intersection |
| Merge declarations | ✅ Yes | ❌ No |
| Union types | ❌ No | ✅ Yes |
| Implement | ✅ Yes | ✅ Yes |
| Primitives | ❌ No | ✅ Yes |

```typescript
// Interface merging
interface User {
  name: string;
}
interface User {
  age: number;
}
// User now has both name and age

// Type union (interface can't do this)
type Result = Success | Error;
type ID = string | number;
```

**Best practice:** Use `interface` for public API definitions (better error messages, extensible). Use `type` for unions, complex types.

**Đánh đổi:**
`interface` gộp được nhiều khai báo cùng tên, rất tiện khi cần mở rộng kiểu của thư viện bên ngoài — nhưng chính tính chất đó khiến một file bất kỳ có thể âm thầm thêm trường vào kiểu của anh. `type` không gộp nên an toàn hơn, đổi lại không mở rộng được từ ngoài. Quy ước phổ biến: `interface` cho API công khai, `type` cho mọi thứ khác.

**Tham khảo:** [TypeScript Handbook - Types vs Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

---

### Câu 2: Đáp án A

**Giải thích:**

```typescript
let valueAny: any = 10;
let valueUnknown: unknown = 10;

// any - bypasses type checking completely
valueAny.foo.bar; // ✅ No error (dangerous!)
valueAny.anything(); // ✅ No error

// unknown - requires type narrowing
valueUnknown.foo.bar; // ❌ Error: Object is of type 'unknown'

// Must narrow first
if (typeof valueUnknown === 'string') {
  valueUnknown.toUpperCase(); // ✅ Now it's safe
}

// Or use type assertion (risky)
(valueUnknown as { foo: { bar: string } }).foo.bar;
```

**Best practice:** Prefer `unknown` over `any`. It forces you to validate types.

**Đánh đổi:**
`unknown` buộc phải thu hẹp kiểu trước khi dùng nên an toàn, nhưng làm code dài ra và đôi khi phải viết type guard cho thứ mình đã chắc chắn. `any` gọn nhưng tắt kiểm tra kiểu theo kiểu lây lan — một `any` chảy qua mười hàm là mười chỗ mất an toàn mà không ai thấy. Dùng `unknown` ở ranh giới dữ liệu vào, `any` chỉ khi đang gỡ dần code cũ.

**Tham khảo:** [TypeScript Handbook - unknown](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)

---

### Câu 3: Đáp án A

**Giải thích:**

```typescript
// never - function never returns
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

// void - function returns undefined
function logMessage(message: string): void {
  console.log(message);
  // implicitly returns undefined
}

// never in exhaustive checks
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    default:
      const _exhaustive: never = shape;
      return _exhaustive; // Error if Shape adds new type
  }
}
```

**Đánh đổi:**
`never` giúp trình biên dịch bắt lỗi khi thêm nhánh mới vào union mà quên xử lý — kỹ thuật kiểm tra vét cạn rất đáng dùng trong `switch`. Đổi lại thông báo lỗi của nó khó đọc với người chưa quen, thường chỉ nói "không gán được cho never" mà không chỉ ra thiếu nhánh nào.

**Tham khảo:** [TypeScript Handbook - never](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type)

---

### Câu 4: Đáp án C

**Giải thích:**

```typescript
// Both are valid type assertions
const canvas1 = document.getElementById('canvas') as HTMLCanvasElement;
const canvas2 = <HTMLCanvasElement>document.getElementById('canvas');

// Note: Angle bracket syntax conflicts with JSX
// In .tsx files, use `as` syntax

// Double assertion for "impossible" conversions
const value = (expr as unknown) as TargetType;
```

**Best practice:** Use `as` syntax, especially in React/JSX projects.

**Đánh đổi:**
Type assertion nói với trình biên dịch "tin tôi đi" nên tắt luôn phần kiểm tra ở đúng chỗ đó — nếu anh sai thì lỗi chuyển sang lúc chạy. Nó cần thiết khi làm việc với API bên ngoài hoặc DOM, nhưng mỗi lần dùng là một chỗ trình biên dịch không còn bảo vệ được. Type guard tốn nhiều code hơn nhưng giữ được an toàn thật.

---

### Câu 5: Đáp án A

**Giải thích:**

```typescript
let x = 'hello';     // Type: string (widened)
const y = 'hello';   // Type: 'hello' (literal type - const narrowing)

type X = typeof x;   // string
type Y = typeof y;   // 'hello'

// as const for literal types with let
let z = 'hello' as const; // Type: 'hello'

// as const for objects
const config = {
  endpoint: '/api',
  timeout: 3000
} as const;
// Type: { readonly endpoint: '/api'; readonly timeout: 3000 }
```

**Đánh đổi:**
Literal type cho phép mô tả chính xác tập giá trị hợp lệ, thay thế enum trong phần lớn trường hợp mà không sinh code lúc chạy. Cái giá là khi tập giá trị lớn hoặc thay đổi thường xuyên, khai báo union dài trở nên khó bảo trì — lúc đó sinh kiểu từ một hằng số bằng `as const` kèm `typeof` gọn hơn.

---

### Câu 6: Đáp án D

**Giải thích:**

```typescript
interface A {
  prop?: string;  // Property may not exist
}

interface B {
  prop: string | undefined;  // Property must exist, but can be undefined
}

const a1: A = {};           // ✅ OK
const a2: A = { prop: undefined }; // ✅ OK

const b1: B = {};           // ❌ Error: property 'prop' is missing
const b2: B = { prop: undefined }; // ✅ OK

// Practical difference with exactOptionalPropertyTypes
// tsconfig: "exactOptionalPropertyTypes": true
interface Strict {
  prop?: string;  // Can only be string or missing, NOT undefined
}
```

**Đánh đổi:**
Dấu `?` và kiểu `| undefined` khác nhau ở chỗ có bắt buộc khai báo trường hay không, và sự khác biệt đó chỉ lộ ra khi bật `exactOptionalPropertyTypes`. Bật cờ này bắt được cả lớp lỗi khi đặt giá trị `undefined` một cách vô tình, đổi lại làm gãy nhiều kiểu của thư viện bên ngoài vốn không viết chặt như vậy.

---

### Câu 7: Đáp án B - Chỉ D

**Giải thích:**

```typescript
interface Config {
  readonly apiKey: string;        // Cannot reassign
  endpoints: readonly string[];   // Cannot modify array
}

const config: Config = {
  apiKey: 'abc123',
  endpoints: ['api.example.com']
};

// A - Error: Cannot assign to 'apiKey' because it is a read-only property
config.apiKey = 'new-key';

// B - Error: Property 'push' does not exist on type 'readonly string[]'
config.endpoints.push('new-endpoint');

// C - Error: Cannot assign to 'endpoints' because it is a read-only property
config.endpoints = ['new-endpoint'];

// D - ✅ OK - reading is allowed
console.log(config.apiKey);
```

**Đánh đổi:**
`readonly` chỉ là ràng buộc lúc biên dịch — không có gì chặn việc sửa lúc chạy, và nó biến mất hoàn toàn sau khi biên dịch. Và nó cũng chỉ nông một tầng: `readonly` cho một đối tượng không làm các đối tượng lồng bên trong bất biến. Cần bất biến thật thì vẫn phải dùng `Object.freeze` hoặc thư viện chuyên dụng.

---

### Câu 8: Đáp án C - `0, 1, 10, 11`

**Giải thích:**

```typescript
enum Direction {
  Up,       // 0 (starts at 0 by default)
  Down,     // 1 (auto-increment)
  Left = 10,// 10 (explicit value)
  Right     // 11 (continues from previous)
}

// String enums
enum DirectionStr {
  Up = 'UP',
  Down = 'DOWN',
}

// const enum - inlined at compile time
const enum ConstDirection {
  Up,
  Down,
}

// Prefer union types over enums for simple cases
type Direction = 'up' | 'down' | 'left' | 'right';
```

**Đánh đổi:**
Enum là một trong số ít cấu trúc của TypeScript sinh ra code lúc chạy, nên nó nằm trong bundle và không bị tree shaking loại bỏ. Union của literal cho gần như cùng lợi ích mà không tốn byte nào. Riêng `const enum` thì không sinh code nhưng lại không dùng được khi biên dịch từng file riêng lẻ, vốn là cách mọi bundler hiện đại làm việc.

---

### Câu 9: Đáp án B - Chỉ B có lỗi

**Giải thích:**

```typescript
const tuple: [string, number] = ['hello', 42];

// A - ✅ OK - correct type
tuple[0] = 'world';

// B - ❌ Error: Type 'string' is not assignable to type 'number'
tuple[1] = 'not a number';

// C - ✅ Compiles! (TypeScript limitation)
// Tuples allow push/pop at runtime despite fixed type
tuple.push('extra');
// To prevent: use readonly tuple
const strictTuple: readonly [string, number] = ['hello', 42];
strictTuple.push('x'); // ❌ Error

// D - ✅ OK - destructuring
const [first, second] = tuple;
```

**Đánh đổi:**
Tuple mô tả được vị trí và kiểu của từng phần tử, nên hợp cho giá trị trả về nhiều thành phần như của `useState`. Nhưng đọc theo chỉ số làm code khó hiểu khi có hơn ba phần tử — từ đó trở đi, trả về một đối tượng có tên trường rõ ràng dễ bảo trì hơn nhiều, dù dài hơn khi dùng.

---

### Câu 10: Đáp án D

**Giải thích:**

```typescript
function getValue(): string | null {
  return 'hello';
}

// Non-null assertion: tells TypeScript "I know this isn't null"
const value = getValue()!; // Type: string (not string | null)

// ⚠️ Warning: No runtime check!
// If getValue() actually returns null, you'll get runtime error

// Safer alternatives:
// 1. Nullish coalescing
const safe1 = getValue() ?? 'default';

// 2. Type guard
const result = getValue();
if (result !== null) {
  // result is string here
}

// 3. Optional chaining
const length = getValue()?.length;
```

**Đánh đổi:**
Dấu `!` gọn hơn hẳn việc kiểm tra null, nhưng nó tắt đúng cái biện pháp bảo vệ có giá trị nhất của TypeScript. Mỗi dấu `!` là một lời hứa mà trình biên dịch không kiểm được — và lời hứa đó sẽ sai sau vài lần refactor. Ưu tiên optional chaining hoặc kiểm tra tường minh; giữ `!` cho chỗ thật sự không diễn đạt được cách khác.

---

## Phần 2: Advanced Types

### Câu 11: Đáp án B

**Giải thích:**

```typescript
type A = { a: string; common: number };
type B = { b: string; common: boolean };

type Union = A | B;
// Can be A OR B
// Must have properties that exist in at least one type

const union1: Union = { a: 'hello', common: 1 };     // ✅ A
const union2: Union = { b: 'world', common: true };  // ✅ B
const union3: Union = { a: 'hi', b: 'bye', common: 1 }; // ✅ Can have both

type Intersection = A & B;
// Must have ALL properties from both types
// common has conflicting types: number & boolean = never

const inter: Intersection = {
  a: 'hello',
  b: 'world',
  common: ???  // Type is 'never' - no value can satisfy both
};
```

**Đánh đổi:**
Intersection nghe như "gộp hai kiểu" nhưng với hai kiểu có cùng tên trường mà khác kiểu dữ liệu, kết quả là `never` chứ không phải lỗi biên dịch — rất khó tìm ra. Union thì ngược lại: an toàn nhưng phải thu hẹp trước khi truy cập trường riêng của từng nhánh, làm code dài hơn.

---

### Câu 12: Đáp án A

**Giải thích:**

```typescript
// Discriminated Union - has a common literal property
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      // TypeScript knows shape is Circle here
      return Math.PI * shape.radius ** 2;
    case 'square':
      // TypeScript knows shape is Square here
      return shape.side ** 2;
  }
}

// Without discriminant - harder to narrow
type ShapeBad = Circle | Square;
type Circle = { radius: number };
type Square = { side: number };

function getAreaBad(shape: ShapeBad): number {
  // How to tell if it's Circle or Square?
  if ('radius' in shape) {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side ** 2;
}
```

**Đánh đổi:**
Discriminated union cho trình biên dịch tự thu hẹp kiểu chỉ bằng một phép so sánh, và kiểm tra vét cạn hoạt động — đây là công cụ mạnh nhất của TypeScript cho việc mô hình hoá trạng thái. Cái giá là phải thêm một trường phân biệt vào dữ liệu, nên khi kiểu đến từ API bên ngoài không có trường đó thì phải tự gắn ở ranh giới.

---

### Câu 13: Đáp án B

**Giải thích:**

```typescript
// Type predicate - tells TypeScript how to narrow
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Using the type guard
function process(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  }
}

// Without type predicate - doesn't narrow
function isStringBool(value: unknown): boolean {
  return typeof value === 'string';
}

function processBad(value: unknown) {
  if (isStringBool(value)) {
    // value is still 'unknown' - no narrowing!
    value.toUpperCase(); // ❌ Error
  }
}

// Custom type guards for complex types
interface User {
  name: string;
  email: string;
}

function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'name' in obj &&
    'email' in obj
  );
}
```

**Đánh đổi:**
Type predicate dạng `x is T` cho trình biên dịch tin vào logic của anh — nghĩa là nếu logic đó sai thì kiểu sai mà không ai báo. Nó mạnh nhưng là một điểm mất an toàn tự nguyện. Với dữ liệu từ mạng, dùng thư viện kiểm tra lược đồ như Zod an toàn hơn, vì nó vừa kiểm lúc chạy vừa sinh ra kiểu.

**Tham khảo:** [TypeScript - Type Predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

---

### Câu 14: Đáp án B

**Giải thích:**

```typescript
type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>;   // 'yes' - string extends string
type B = IsString<number>;   // 'no' - number doesn't extend string
type C = IsString<'hello'>;  // 'yes' - 'hello' extends string (literal is subtype)

// Distributive conditional types
type ToArray<T> = T extends any ? T[] : never;
type Result = ToArray<string | number>; // string[] | number[]

// Prevent distribution with [T]
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type Result2 = ToArrayNonDist<string | number>; // (string | number)[]
```

**Đánh đổi:**
Conditional type cho phép biểu đạt logic ở tầng kiểu, nhưng lồng nhiều tầng thì thông báo lỗi trở nên gần như không đọc nổi và thời gian biên dịch tăng rõ rệt trên dự án lớn. Quy tắc thực dụng: nếu phải mất hơn một phút để hiểu lại kiểu mình vừa viết, viết đơn giản hơn dù trùng lặp một chút.

---

### Câu 15: Đáp án B - `string`

**Giải thích:**

```typescript
// infer keyword - captures type within conditional
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = (x: number) => string;
type Result = ReturnType<Fn>; // string

// More infer examples
type FirstArg<T> = T extends (first: infer F, ...args: any[]) => any ? F : never;
type First = FirstArg<(a: string, b: number) => void>; // string

type ArrayElement<T> = T extends (infer E)[] ? E : never;
type Element = ArrayElement<string[]>; // string

type PromiseValue<T> = T extends Promise<infer V> ? V : never;
type Value = PromiseValue<Promise<number>>; // number
```

**Đánh đổi:**
`infer` rút được kiểu từ bên trong một cấu trúc, rất mạnh khi viết kiểu tiện ích. Nhưng nó chỉ dùng được trong conditional type, và khi có nhiều chỗ khớp thì quy tắc chọn không hiển nhiên — với kiểu hàm nạp chồng, `infer` chỉ lấy được chữ ký cuối cùng, chỗ này hay gây bất ngờ.

---

### Câu 16: Đáp án A

**Giải thích:**

```typescript
type Original = {
  name: string;
  age: number;
};

// Mapped type - transforms each property
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Result = Readonly<Original>;
// { readonly name: string; readonly age: number }

// More mapped type examples
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Key remapping (TS 4.1+)
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<Original>;
// { getName: () => string; getAge: () => number }
```

**Đánh đổi:**
Mapped type tránh được việc viết tay từng trường, nên kiểu luôn đồng bộ khi nguồn thay đổi. Cái giá là khi có lỗi, trình biên dịch chỉ vào kiểu đã được sinh ra chứ không chỉ vào chỗ anh viết, nên việc lần ngược rất mất thời gian. Và chúng làm chậm việc gợi ý code trong editor trên dự án lớn.

---

### Câu 17: Đáp án C

**Giải thích:**

```typescript
type Events = 'click' | 'focus' | 'blur';

// Template literal type
type EventName = `on${Capitalize<Events>}`;
// 'onClick' | 'onFocus' | 'onBlur'

// Built-in string manipulation types
type Upper = Uppercase<'hello'>;      // 'HELLO'
type Lower = Lowercase<'HELLO'>;      // 'hello'
type Cap = Capitalize<'hello'>;       // 'Hello'
type Uncap = Uncapitalize<'Hello'>;   // 'hello'

// Complex template literals
type PropEventHandler<T extends string> = `on${Capitalize<T>}Change`;
type NameHandler = PropEventHandler<'name'>; // 'onNameChange'

// CSS-like types
type Color = 'red' | 'blue';
type Size = 'sm' | 'md' | 'lg';
type ClassName = `${Color}-${Size}`; // 'red-sm' | 'red-md' | 'red-lg' | 'blue-sm' | 'blue-md' | 'blue-lg'
```

**Đánh đổi:**
Template literal type cho phép ràng buộc chuỗi theo mẫu, ví dụ mọi khoá phải bắt đầu bằng `on`. Rất mạnh cho API kiểu design system. Nhưng kết hợp với union lớn thì số tổ hợp bùng nổ — TypeScript có giới hạn khoảng 100.000 thành viên trong một union và sẽ từ chối biên dịch khi vượt.

---

### Câu 18: Đáp án B

**Giải thích:**

```typescript
// A - Error
interface Dictionary {
  [key: string]: number;
  length: number;    // ✅ OK - number matches index signature
  name: string;      // ❌ Error - string doesn't match number index signature
}

// B - OK
interface Dict2 {
  [key: string]: number | string;  // Union allows both
  length: number;    // ✅ OK - number is in union
  name: string;      // ✅ OK - string is in union
}

// Solution for A
interface DictionaryFixed {
  [key: string]: number | string;
  length: number;
  name: string;
}

// Or use intersection
type DictionaryAlt = {
  [key: string]: number;
} & {
  name: string;
};
```

**Đánh đổi:**
Index signature cho phép nhận khoá bất kỳ, nhưng đổi lại mọi trường khai báo tường minh phải tương thích với kiểu giá trị chung — đó chính là lý do lỗi trong câu này. Và nó làm mất khả năng bắt lỗi gõ sai tên khoá. `Record` với union khoá cụ thể chặt hơn nhiều nếu tập khoá là hữu hạn và biết trước.

---

### Câu 19: Đáp án A

**Giải thích:**

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}

type Keys = keyof Person; // 'name' | 'age' | 'address'

// Using keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: 'John', age: 30, address: '123 Main' };
const name = getProperty(person, 'name'); // string
const age = getProperty(person, 'age');   // number
getProperty(person, 'invalid');           // ❌ Error

// keyof with index signatures
type StringDict = { [key: string]: number };
type DictKeys = keyof StringDict; // string | number (number because array indices)
```

**Đánh đổi:**
`keyof` giữ kiểu luôn đồng bộ với đối tượng nguồn, nên đổi tên một trường là mọi chỗ dùng đều báo lỗi ngay — đúng cái ta muốn. Nhưng với đối tượng có index signature, `keyof` trả về `string | number` chứ không phải danh sách khoá cụ thể, làm mất hết ích lợi mà không có cảnh báo nào.

---

### Câu 20: Đáp án B

**Giải thích:**

```typescript
const user = { name: 'John', age: 30 };

// Runtime typeof - returns string
console.log(typeof user); // 'object'

// Type context typeof - returns type structure
type User = typeof user; // { name: string; age: number }

// Combining with keyof
type UserKeys = keyof typeof user; // 'name' | 'age'

// With const assertion
const config = {
  api: '/api',
  version: 1
} as const;

type Config = typeof config;
// { readonly api: '/api'; readonly version: 1 }

// typeof with functions
function createUser(name: string) {
  return { name, createdAt: new Date() };
}

type CreateUserReturn = ReturnType<typeof createUser>;
// { name: string; createdAt: Date }
```

**Đánh đổi:**
`typeof` ở ngữ cảnh kiểu cho phép sinh kiểu từ một giá trị đã có, tránh khai báo hai lần và lệch nhau. Cái giá là kiểu trở nên phụ thuộc vào chi tiết cài đặt của giá trị đó — đổi giá trị là đổi kiểu công khai mà không chủ ý. Với API công khai, khai báo kiểu tường minh an toàn hơn.

---

## Phần 3: Generics

### Câu 21: Đáp án A

**Giải thích:**

```typescript
// A - any loses type information
function getFirstAny(arr: any[]): any {
  return arr[0]; // No type safety
}

// B - preserves type but doesn't handle empty array
function getFirstB<T>(arr: T[]): T {
  return arr[0]; // What if arr is empty? Returns undefined but typed as T
}

// C - Best practice: explicit about undefined possibility
function getFirstC<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Or use overloads for more specific typing
function getFirst<T>(arr: [T, ...T[]]): T;  // Non-empty array
function getFirst<T>(arr: T[]): T | undefined;  // Possibly empty
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const result1 = getFirst([1, 2, 3] as [number, ...number[]]); // number
const result2 = getFirst([1, 2, 3]); // number | undefined
```

**Đánh đổi:**
Generic giữ được quan hệ giữa đầu vào và đầu ra nên tốt hơn hẳn `any`, nhưng lạm dụng làm chữ ký hàm khó đọc. Quy tắc: một tham số kiểu chỉ xuất hiện đúng một lần trong chữ ký thì nó không mang thông tin gì — thay bằng kiểu cụ thể hoặc `unknown` sẽ rõ hơn.

---

### Câu 22: Đáp án D

**Giải thích:**

```typescript
// Generic constraint: T must have length property
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// A - ✅ string has length
getLength('hello'); // 5

// B - ✅ array has length
getLength([1, 2, 3]); // 3

// C - ✅ object with length property
getLength({ length: 10 }); // 10

// D - ❌ Error: number doesn't have length
getLength(123);
// Argument of type 'number' is not assignable to parameter
// of type '{ length: number }'

// More constraint examples
interface HasId {
  id: number;
}

function processEntities<T extends HasId>(entities: T[]): number[] {
  return entities.map(e => e.id);
}
```

**Đánh đổi:**
Ràng buộc bằng `extends` thu hẹp những gì generic nhận vào nên bắt được lỗi sớm, nhưng ràng buộc quá chặt làm hàm mất tính tái dùng, còn quá lỏng thì bên trong không làm được gì với giá trị. Ràng buộc đúng là ràng buộc nhỏ nhất đủ cho phần thân hàm hoạt động.

---

### Câu 23: Đáp án A

**Giải thích:**

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = merge({ name: 'John' }, { age: 30 });
// Type: { name: string } & { age: number }
// Which simplifies to: { name: string; age: number }

// TypeScript infers T and U from arguments
// T = { name: string }
// U = { age: number }
// T & U = { name: string; age: number }

// More examples
const merged = merge(
  { a: 1, b: 2 },
  { b: 'override', c: 3 }
);
// Type: { a: number; b: number } & { b: string; c: number }
// Note: b has type number & string which is never in strict mode
```

**Đánh đổi:**
Nhiều tham số kiểu cho phép mô tả quan hệ phức tạp hơn, nhưng mỗi tham số thêm vào là một chỗ nữa trình biên dịch có thể suy luận sai và người gọi phải tự khai báo. Quá ba tham số thì thường nên gói vào một đối tượng kiểu, vừa đọc được vừa cho phép đặt tên.

---

### Câu 24: Đáp án B

**Giải thích:**

```typescript
// A - Default generic parameter
interface Container<T = string> {
  value: T;
}

const container: Container = { value: 'hello' }; // ✅ T defaults to string
const numContainer: Container<number> = { value: 42 }; // ✅ Explicit type

// B - Default parameter with inference
function process<T = number>(value: T): T {
  return value;
}

const result = process('hello');
// result type is 'string', NOT 'number'
// TypeScript infers T from argument, default is only used when
// T cannot be inferred

const resultDefault = process(); // ❌ Error - cannot infer T
// Would need: process<number>() or process(42)

// Default is useful when type cannot be inferred
function createArray<T = string>(): T[] {
  return [];
}

const arr = createArray(); // string[] (uses default)
const numArr = createArray<number>(); // number[]
```

**Đánh đổi:**
Giá trị mặc định cho tham số kiểu làm người gọi đỡ phải viết, nhưng cũng che mất trường hợp suy luận thất bại — thay vì báo lỗi, TypeScript lặng lẽ dùng mặc định và lỗi chuyển sang chỗ khác. Đặt mặc định là `never` hoặc `unknown` sẽ làm lỗi nổ đúng chỗ.

---

### Câu 25: Đáp án D - `number`

**Giải thích:**

```typescript
class Box<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}

// TypeScript infers T from constructor argument
const numberBox = new Box(42); // Box<number>
const data = numberBox.getValue(); // number

// Explicit type parameter
const stringBox = new Box<string>('hello'); // Box<string>

// Complex generic class
class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }
}

interface User {
  id: number;
  name: string;
}

const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: 'John' });
const user = userRepo.findById(1); // User | undefined
```

**Đánh đổi:**
Generic class giữ kiểu xuyên suốt vòng đời đối tượng, nhưng tham số kiểu không tồn tại lúc chạy nên không kiểm tra được bên trong constructor. Nhiều trường hợp một hàm generic trả về đối tượng còn gọn hơn class, và tránh được vấn đề `this` cùng kế thừa.

---

## Phần 4: Type Manipulation

### Câu 26: Đáp án C

**Giải thích:**

```typescript
interface User {
  name: string;
  age?: number;
}

// Partial - makes all properties optional
type PartialUser = Partial<User>;
// { name?: string; age?: number }

// Required - makes all properties required
type RequiredUser = Required<User>;
// { name: string; age: number }

// Implementation
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type MyRequired<T> = {
  [K in keyof T]-?: T[K];  // -? removes optional modifier
};

// Use case: Partial for updates
function updateUser(id: string, updates: Partial<User>) {
  // Can update name only, age only, or both
}

updateUser('1', { name: 'Jane' }); // ✅
updateUser('1', { age: 31 }); // ✅
```

**Đánh đổi:**
`Partial` rất tiện cho hàm cập nhật từng phần, nhưng nó bỏ đi mọi ràng buộc bắt buộc — dùng cho dữ liệu khởi tạo là mở đường cho đối tượng thiếu trường đi khắp hệ thống. Và cả `Partial` lẫn `Required` đều chỉ tác động một tầng, đối tượng lồng bên trong giữ nguyên.

---

### Câu 27: Đáp án B

**Giải thích:**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Omit - removes specified properties
type PublicUser = Omit<User, 'password'>;
// { id: number; name: string; email: string }

// Pick - keeps only specified properties
type Credentials = Pick<User, 'email' | 'password'>;
// { email: string; password: string }

// Implementation
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Use cases
function createPublicUser(user: User): PublicUser {
  const { password, ...publicUser } = user;
  return publicUser;
}

function login(credentials: Credentials): Promise<User> {
  // ...
}
```

**Đánh đổi:**
`Omit` tiện nhưng không kiểm tra tên trường bị loại có thật hay không — gõ sai tên thì nó im lặng không loại gì cả. `Pick` thì báo lỗi ngay khi tên sai, nên với kiểu quan trọng, liệt kê những gì muốn giữ an toàn hơn liệt kê những gì muốn bỏ.

---

### Câu 28: Đáp án B

**Giải thích:**

```typescript
type Status = 'pending' | 'approved' | 'rejected';

// Record creates object type with specified keys and value type
type StatusMap = Record<Status, number>;
// { pending: number; approved: number; rejected: number }

// Implementation
type MyRecord<K extends keyof any, V> = {
  [P in K]: V;
};

// Use cases
const statusCounts: StatusMap = {
  pending: 5,
  approved: 10,
  rejected: 2
};

// Dynamic keys
type PageViews = Record<string, number>;
const views: PageViews = {
  '/home': 100,
  '/about': 50,
};

// Typed keys with union
type Roles = 'admin' | 'user' | 'guest';
type Permissions = Record<Roles, string[]>;
const perms: Permissions = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read'],
};
```

**Đánh đổi:**
`Record` gọn cho ánh xạ khoá sang giá trị, nhưng khi khoá là `string` thì TypeScript coi mọi khoá đều tồn tại — truy cập khoá không có vẫn qua kiểm tra kiểu rồi trả `undefined` lúc chạy. Bật `noUncheckedIndexedAccess` chặn được điều đó, đổi lại phải kiểm tra null ở mọi lần truy cập.

---

### Câu 29: Đáp án C

**Giải thích:**

```typescript
type T = 'a' | 'b' | 'c' | 'd';

// Extract - keeps types that extend the union
type Extracted = Extract<T, 'a' | 'b' | 'e'>;
// 'a' | 'b' (keeps 'a' and 'b', 'e' not in T so ignored)

// Exclude - removes types that extend the union
type Excluded = Exclude<T, 'a' | 'b'>;
// 'c' | 'd'

// Implementation
type MyExtract<T, U> = T extends U ? T : never;
type MyExclude<T, U> = T extends U ? never : T;

// Use cases
type AllEvents = 'click' | 'focus' | 'blur' | 'submit' | 'reset';
type MouseEvents = Extract<AllEvents, 'click'>;
type FormEvents = Extract<AllEvents, 'submit' | 'reset'>;
type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;

// With objects
type Animal = { type: 'dog' } | { type: 'cat' } | { type: 'bird' };
type Mammal = Extract<Animal, { type: 'dog' | 'cat' }>;
```

**Đánh đổi:**
`Extract` và `Exclude` gọn cho việc lọc union, nhưng chúng làm việc theo khả năng gán được chứ không theo sự bằng nhau — với union chứa `any` hoặc kiểu quá rộng, kết quả không như mong đợi. Và khi union nguồn đổi, kết quả lọc đổi theo một cách âm thầm.

---

### Câu 30: Đáp án D - `string`

**Giải thích:**

```typescript
type Nullable = string | null | undefined;

// NonNullable removes null and undefined
type Result = NonNullable<Nullable>; // string

// Implementation
type MyNonNullable<T> = T extends null | undefined ? never : T;

// Use cases
function processValue<T>(value: T): NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error('Value is null or undefined');
  }
  return value as NonNullable<T>;
}

const maybeString: string | null = 'hello';
const definitelyString = processValue(maybeString); // string
```

**Đánh đổi:**
`NonNullable` sạch hơn nhiều so với rải dấu `!`, vì nó xử lý ở tầng kiểu thay vì tắt kiểm tra tại từng điểm. Nhưng nó chỉ nói kiểu không còn null, không hề kiểm tra lúc chạy — nếu giá trị thật sự là null thì lỗi vẫn nổ, chỉ là muộn hơn và ở chỗ khác.

---

## Phần 5: React + TypeScript

### Câu 31: Đáp án D - Tất cả đều đúng

**Giải thích:**

```tsx
// All valid ways to define props

// A - Interface
interface Props {
  name: string;
  age?: number;
  children: React.ReactNode;
}

// B - Type alias
type Props = {
  name: string;
  age?: number;
  children: React.ReactNode;
};

// C - Inline type
function Component(props: { name: string }) {
  return <div>{props.name}</div>;
}

// Best practices:
// 1. Use interface for public component APIs
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

// 2. Use PropsWithChildren for convenience
import { PropsWithChildren } from 'react';

interface CardProps {
  title: string;
}

function Card({ title, children }: PropsWithChildren<CardProps>) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// 3. Component type annotation
const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
```

**Đánh đổi:**
`React.FC` từng là mặc định nhưng nay không còn được khuyến nghị: nó ngầm thêm `children` ở React 17 trở về trước, và làm generic component khó viết. Khai báo props trực tiếp trên tham số hàm rõ ràng hơn, đổi lại phải tự khai kiểu trả về nếu muốn chặt chẽ.

---

### Câu 32: Đáp án B

**Giải thích:**

```tsx
// Common event types
const Input: React.FC = () => {
  // Input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // Form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // Click
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.clientX, e.clientY);
  };

  // Keyboard
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // ...
    }
  };

  // Focus
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('focused');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
};
```

**Đánh đổi:**
Kiểu sự kiện của React chính xác nhưng dài, và gắn chặt component vào loại phần tử cụ thể — đổi từ `input` sang `textarea` là phải sửa kiểu. Dùng kiểu rộng hơn thì dễ đổi nhưng mất khả năng truy cập các trường riêng như `checked`. Với component dùng lại nhiều, nhận vào giá trị đã xử lý thay vì cả đối tượng sự kiện linh hoạt hơn.

---

### Câu 33: Đáp án C

**Giải thích:**

```tsx
// A - For DOM refs, readonly (can't reassign .current)
const ref1 = useRef<HTMLDivElement>(null);
// ref1.current is HTMLDivElement | null
// ref1.current = something; // ❌ Error: readonly

// B - Non-null assertion, mutable but risky
const ref2 = useRef<HTMLDivElement>(null!);
// ref2.current is HTMLDivElement (non-null asserted)
// ref2.current = something; // ✅ OK
// ⚠️ Will be null initially until ref is attached!

// C - Explicit mutable ref
const ref3 = useRef<HTMLDivElement | null>(null);
// ref3.current is HTMLDivElement | null
// ref3.current = something; // ✅ OK

// Use cases:
// A - For attaching to JSX elements
function Component1() {
  const divRef = useRef<HTMLDivElement>(null);
  return <div ref={divRef} />;
}

// C - For storing mutable values
function Component2() {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {}, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
}
```

**Đánh đổi:**
Ba dạng `useRef` khác nhau ở chỗ ref có thể gán lại hay không, và chọn sai làm TypeScript báo lỗi ở chỗ tưởng như vô lý. Dùng `useRef<T>(null!)` để khỏi kiểm tra null là mua tiện lợi bằng một lỗi lúc chạy nếu ref chưa được gắn — nguy hiểm nhất khi component render có điều kiện.

---

### Câu 34: Đáp án D - Correct

**Giải thích:**

```tsx
// Generic components are fully supported

// Basic generic component
function List<T>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
}) {
  return <ul>{items.map((item, i) => <li key={i}>{render(item)}</li>)}</ul>;
}

// Usage - type is inferred
<List
  items={[1, 2, 3]}
  render={(item) => <span>{item * 2}</span>}
/>

<List
  items={[{ name: 'John' }, { name: 'Jane' }]}
  render={(user) => <span>{user.name}</span>}
/>

// More complex generic component
interface SelectProps<T> {
  items: T[];
  value: T;
  onChange: (value: T) => void;
  getLabel: (item: T) => string;
  getValue: (item: T) => string | number;
}

function Select<T>({
  items,
  value,
  onChange,
  getLabel,
  getValue,
}: SelectProps<T>) {
  return (
    <select
      value={getValue(value) as string}
      onChange={(e) => {
        const selected = items.find(
          (item) => String(getValue(item)) === e.target.value
        );
        if (selected) onChange(selected);
      }}
    >
      {items.map((item) => (
        <option key={getValue(item)} value={getValue(item)}>
          {getLabel(item)}
        </option>
      ))}
    </select>
  );
}
```

**Đánh đổi:**
Generic component giữ được quan hệ kiểu giữa dữ liệu vào và hàm render, rất đáng cho component danh sách hay bảng. Nhưng cú pháp trong file `.tsx` vướng vì dấu ngoặc nhọn bị hiểu thành JSX, phải viết `<T,>` — và thông báo lỗi khi suy luận thất bại rất khó đọc.

---

### Câu 35: Đáp án B (but D explains inference)

**Giải thích:**

```tsx
// Without explicit type, TypeScript infers array union
function useToggleBad(initial: boolean) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
  // Inferred: (boolean | (() => void))[]
  // Problem: can't destructure with correct types
}

// Solution 1: Explicit tuple return type
function useToggle(initial: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

// Solution 2: as const
function useToggle2(initial: boolean) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle] as const;
  // Returns: readonly [boolean, () => void]
}

// Solution 3: Object return (often preferred)
function useToggle3(initial: boolean) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return { value, toggle };
}

// Usage
const [isOpen, toggleOpen] = useToggle(false);
toggleOpen(); // ✅ TypeScript knows it's a function
```

**Đánh đổi:**
Trả về tuple cho phép người dùng tự đặt tên khi giải cấu trúc, giống `useState`. Nhưng phải khai kiểu tuple tường minh hoặc dùng `as const`, nếu không TypeScript suy ra mảng union và mọi thứ hỏng. Từ ba giá trị trả về trở lên, một đối tượng có tên trường rõ ràng đáng hơn.

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [TypeScript Official Handbook](https://www.typescriptlang.org/docs/handbook/)
2. [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
3. [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
4. [Total TypeScript](https://www.totaltypescript.com/)
5. [Type Challenges](https://github.com/type-challenges/type-challenges)
