# TypeScript Interview Questions
## From Basic to Advanced

---

## TABLE OF CONTENTS
- [Part 1: Basic Types](#part-1-basic-types)
- [Part 2: Advanced Types](#part-2-advanced-types)
- [Part 3: Generics](#part-3-generics)
- [Part 4: Type Manipulation](#part-4-type-manipulation)
- [Part 5: React + TypeScript](#part-5-react--typescript)
- [Detailed Answers](#detailed-answers)

---

# PART 1: BASIC TYPES

## Question 1: Type vs Interface
**What is the difference between `type` and `interface`?**

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

- A) No difference
- B) Interface can extend and merge declarations, type can use union/intersection
- C) Type is only for primitives
- D) Interface is only for objects

---

## Question 2: unknown vs any
**What is the difference between `unknown` and `any`?**

```typescript
let valueAny: any = 10;
let valueUnknown: unknown = 10;

valueAny.foo.bar; // ?
valueUnknown.foo.bar; // ?
```

- A) No difference
- B) `any` bypasses type checking, `unknown` requires type narrowing before use
- C) `unknown` is only for functions
- D) `any` is more type-safe than `unknown`

---

## Question 3: never type
**When should you use the `never` type?**

- A) When a function doesn't return anything
- B) When a function throws error or has infinite loop - never reaches end
- C) To replace `void`
- D) For optional parameters

---

## Question 4: Type Assertion
**Which is a correct type assertion?**

```typescript
const canvas = document.getElementById('canvas');
```

- A) `canvas as HTMLCanvasElement`
- B) `<HTMLCanvasElement>canvas`
- C) Both A and B are correct
- D) `canvas: HTMLCanvasElement`

---

## Question 5: Literal Types
**What is the output of the following code?**

```typescript
let x = 'hello';
const y = 'hello';

type X = typeof x; // ?
type Y = typeof y; // ?
```

- A) `X = string`, `Y = string`
- B) `X = string`, `Y = 'hello'`
- C) `X = 'hello'`, `Y = 'hello'`
- D) Error

---

## Question 6: Optional vs Undefined
**What is the difference between optional property and property with undefined?**

```typescript
interface A {
  prop?: string;
}

interface B {
  prop: string | undefined;
}
```

- A) No difference
- B) A allows property to not exist, B requires property to exist (can be undefined)
- C) B allows property to not exist
- D) Both require property to exist

---

## Question 7: Readonly
**Which code compiles successfully?**

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
- B) Only D
- C) C and D
- D) B and D

---

## Question 8: Enum
**What is the output of the following code?**

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

- A) `0, 1, 10, 11`
- B) `'Up', 'Down', 'Left', 'Right'`
- C) `0, 1, 2, 3`
- D) `1, 2, 10, 11`

---

## Question 9: Tuple
**Which code has an error?**

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

- A) No error
- B) Only B
- C) B and C
- D) Only C

---

## Question 10: Non-null Assertion
**What does the non-null assertion operator (!) do?**

```typescript
function getValue(): string | null {
  return 'hello';
}

const value = getValue()!;
```

- A) Converts null to empty string
- B) Asserts value is not null/undefined, removes from type
- C) Throws error if null
- D) Checks null at runtime

---

# PART 2: ADVANCED TYPES

## Question 11: Union & Intersection
**What is the type of `result`?**

```typescript
type A = { a: string; common: number };
type B = { b: string; common: boolean };

type Union = A | B;
type Intersection = A & B;

const union: Union = ???
const intersection: Intersection = ???
```

- A) Union needs both a and b, Intersection needs one of them
- B) Union needs one of them (a or b + common), Intersection needs all (a, b, common but common conflicts)
- C) No difference
- D) Error because common has different types

---

## Question 12: Discriminated Unions
**Which pattern is correct for discriminated union?**

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

- A) Pattern A is correct
- B) Pattern B is correct - has discriminant property
- C) Both are correct
- D) Both are wrong

---

## Question 13: Type Guards
**Which is a valid type guard?**

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

- A) All are type guards
- B) Only A is a type guard (type predicate)
- C) A and B are type guards
- D) Only C is a type guard

---

## Question 14: Conditional Types
**What is the result type?**

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

## Question 15: infer Keyword
**What is the result type?**

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = (x: number) => string;
type Result = ReturnType<Fn>;
```

- A) `number`
- B) `string`
- C) `never`
- D) `Fn`

---

## Question 16: Mapped Types
**What is the result type?**

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

- A) Same as Original
- B) `{ readonly name: string; readonly age: number }`
- C) `{ name: readonly string; age: readonly number }`
- D) Error

---

## Question 17: Template Literal Types
**What is the type of `EventName`?**

```typescript
type Events = 'click' | 'focus' | 'blur';
type EventName = `on${Capitalize<Events>}`;
```

- A) `'onClick' | 'onFocus' | 'onBlur'`
- B) `'onclick' | 'onfocus' | 'onblur'`
- C) `string`
- D) Error

---

## Question 18: Index Signatures
**Which code has an error?**

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

- A) Both A and B have errors
- B) Only A has error (name: string not compatible with index signature number)
- C) Only B has error
- D) No error

---

## Question 19: keyof
**What is the type of `Keys`?**

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}

type Keys = keyof Person;
```

- A) `string`
- B) `'name' | 'age' | 'address'`
- C) `['name', 'age', 'address']`
- D) `{ name: string; age: number; address: string }`

---

## Question 20: typeof in Types
**What is the difference between typeof in runtime and type context?**

```typescript
const user = { name: 'John', age: 30 };

// Runtime
console.log(typeof user);

// Type context
type User = typeof user;
```

- A) Both return 'object'
- B) Runtime: `'object'`, Type context: `{ name: string; age: number }`
- C) Both return type structure
- D) Error in type context

---

# PART 3: GENERICS

## Question 21: Generic Basics
**Which is the correct generic function to get array element?**

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

- A) A is best practice
- B) B is best practice
- C) C is best practice (handles empty array)
- D) All are equivalent

---

## Question 22: Generic Constraints
**Which code compiles successfully?**

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
- C) Only B and C
- D) A, B, C but D errors

---

## Question 23: Multiple Type Parameters
**What is the type of `result`?**

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = merge({ name: 'John' }, { age: 30 });
```

- A) `{ name: string } | { age: number }`
- B) `{ name: string; age: number }`
- C) `object`
- D) `any`

---

## Question 24: Generic Defaults
**Which code uses generic default correctly?**

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

- A) A correct, B result is `number`
- B) A correct, B result is `string` (inferred)
- C) A error, B correct
- D) Both error

---

## Question 25: Generic Classes
**What is the type of `data` when gotten from NumberBox?**

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

- A) `unknown`
- B) `any`
- C) `number`
- D) `42`

---

# PART 4: TYPE MANIPULATION

## Question 26: Utility Types - Partial & Required
**What are the types of `PartialUser` and `RequiredUser`?**

```typescript
interface User {
  name: string;
  age?: number;
}

type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
```

- A) Same
- B) `PartialUser`: all optional, `RequiredUser`: all required
- C) `PartialUser`: all required, `RequiredUser`: all optional
- D) Error

---

## Question 27: Pick & Omit
**What is the type of `Result`?**

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

- A) `PublicUser` has password, `Credentials` doesn't
- B) `PublicUser` doesn't have password, `Credentials` has email and password
- C) Error
- D) Both have all properties

---

## Question 28: Record
**What is the type of `Result`?**

```typescript
type Status = 'pending' | 'approved' | 'rejected';
type StatusMap = Record<Status, number>;
```

- A) `{ [key: string]: number }`
- B) `{ pending: number; approved: number; rejected: number }`
- C) `Status[]`
- D) `number[]`

---

## Question 29: Extract & Exclude
**What are the types?**

```typescript
type T = 'a' | 'b' | 'c' | 'd';

type Extracted = Extract<T, 'a' | 'b' | 'e'>;
type Excluded = Exclude<T, 'a' | 'b'>;
```

- A) `Extracted = 'a' | 'b'`, `Excluded = 'c' | 'd'`
- B) `Extracted = 'a' | 'b' | 'e'`, `Excluded = 'a' | 'b'`
- C) `Extracted = 'e'`, `Excluded = 'a' | 'b' | 'c' | 'd'`
- D) Error

---

## Question 30: NonNullable
**What is the type of `Result`?**

```typescript
type Nullable = string | null | undefined;
type Result = NonNullable<Nullable>;
```

- A) `string | null | undefined`
- B) `string`
- C) `null | undefined`
- D) `never`

---

# PART 5: REACT + TYPESCRIPT

## Question 31: Component Props
**Which is the correct way to define props for a React component?**

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

- A) Only A
- B) Only B
- C) A and B
- D) All are correct

---

## Question 32: Event Handlers
**What is the correct type for onChange handler?**

```typescript
const Input: React.FC = () => {
  const handleChange = (e: ???) => {
    console.log(e.target.value);
  };

  return <input onChange={handleChange} />;
};
```

- A) `Event`
- B) `React.ChangeEvent<HTMLInputElement>`
- C) `React.FormEvent`
- D) `any`

---

## Question 33: useRef Types
**What is the difference between these useRef types?**

```typescript
// A
const ref1 = useRef<HTMLDivElement>(null);

// B
const ref2 = useRef<HTMLDivElement>(null!);

// C
const ref3 = useRef<HTMLDivElement | null>(null);
```

- A) No difference
- B) A: readonly ref, B: mutable (asserts not null), C: mutable ref
- C) All are mutable
- D) All are readonly

---

## Question 34: Generic Components
**Is this generic component written correctly?**

```typescript
// A
function List<T>({ items, render }: { items: T[]; render: (item: T) => React.ReactNode }) {
  return <>{items.map(render)}</>;
}

// Usage
<List items={[1, 2, 3]} render={(item) => <span>{item}</span>} />
```

- A) Correct
- B) Incorrect - cannot use generics with React components
- C) Need to use class components
- D) Need explicit type parameter

---

## Question 35: Custom Hooks Types
**What is the correct return type for this custom hook?**

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

- A) `[boolean, () => void]`
- B) `(boolean | (() => void))[]`
- C) `{ value: boolean; toggle: () => void }`
- D) A or B (B is default inference)

---

---

# DETAILED ANSWERS

## Part 1: Basic Types

### Question 1: Answer B

**Explanation:**

| Feature | interface | type |
|---------|-----------|------|
| Extend | `extends` keyword | `&` intersection |
| Merge declarations | Yes | No |
| Union types | No | Yes |
| Implement | Yes | Yes |
| Primitives | No | Yes |

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

**Reference:** [TypeScript Handbook - Types vs Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

---

### Question 2: Answer B

**Explanation:**

```typescript
let valueAny: any = 10;
let valueUnknown: unknown = 10;

// any - bypasses type checking completely
valueAny.foo.bar; // No error (dangerous!)
valueAny.anything(); // No error

// unknown - requires type narrowing
valueUnknown.foo.bar; // Error: Object is of type 'unknown'

// Must narrow first
if (typeof valueUnknown === 'string') {
  valueUnknown.toUpperCase(); // Now it's safe
}

// Or use type assertion (risky)
(valueUnknown as { foo: { bar: string } }).foo.bar;
```

**Best practice:** Prefer `unknown` over `any`. It forces you to validate types.

**Reference:** [TypeScript Handbook - unknown](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)

---

### Question 3: Answer B

**Explanation:**

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

**Reference:** [TypeScript Handbook - never](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type)

---

### Question 4: Answer C

**Explanation:**

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

---

### Question 5: Answer B

**Explanation:**

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

---

### Question 6: Answer B

**Explanation:**

```typescript
interface A {
  prop?: string;  // Property may not exist
}

interface B {
  prop: string | undefined;  // Property must exist, but can be undefined
}

const a1: A = {};           // OK
const a2: A = { prop: undefined }; // OK

const b1: B = {};           // Error: property 'prop' is missing
const b2: B = { prop: undefined }; // OK

// Practical difference with exactOptionalPropertyTypes
// tsconfig: "exactOptionalPropertyTypes": true
interface Strict {
  prop?: string;  // Can only be string or missing, NOT undefined
}
```

---

### Question 7: Answer B - Only D

**Explanation:**

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

// D - OK - reading is allowed
console.log(config.apiKey);
```

---

### Question 8: Answer A - `0, 1, 10, 11`

**Explanation:**

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

---

### Question 9: Answer B - Only B has error

**Explanation:**

```typescript
const tuple: [string, number] = ['hello', 42];

// A - OK - correct type
tuple[0] = 'world';

// B - Error: Type 'string' is not assignable to type 'number'
tuple[1] = 'not a number';

// C - Compiles! (TypeScript limitation)
// Tuples allow push/pop at runtime despite fixed type
tuple.push('extra');
// To prevent: use readonly tuple
const strictTuple: readonly [string, number] = ['hello', 42];
strictTuple.push('x'); // Error

// D - OK - destructuring
const [first, second] = tuple;
```

---

### Question 10: Answer B

**Explanation:**

```typescript
function getValue(): string | null {
  return 'hello';
}

// Non-null assertion: tells TypeScript "I know this isn't null"
const value = getValue()!; // Type: string (not string | null)

// Warning: No runtime check!
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

---

## Part 2: Advanced Types

### Question 11: Answer B

**Explanation:**

```typescript
type A = { a: string; common: number };
type B = { b: string; common: boolean };

type Union = A | B;
// Can be A OR B
// Must have properties that exist in at least one type

const union1: Union = { a: 'hello', common: 1 };     // A
const union2: Union = { b: 'world', common: true };  // B
const union3: Union = { a: 'hi', b: 'bye', common: 1 }; // Can have both

type Intersection = A & B;
// Must have ALL properties from both types
// common has conflicting types: number & boolean = never

const inter: Intersection = {
  a: 'hello',
  b: 'world',
  common: ???  // Type is 'never' - no value can satisfy both
};
```

---

### Question 12: Answer B

**Explanation:**

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

---

### Question 13: Answer B

**Explanation:**

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
    value.toUpperCase(); // Error
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

**Reference:** [TypeScript - Type Predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

---

### Question 14: Answer B

**Explanation:**

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

---

### Question 15: Answer B - `string`

**Explanation:**

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

---

### Question 16: Answer B

**Explanation:**

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

---

### Question 17: Answer A

**Explanation:**

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

---

### Question 18: Answer B

**Explanation:**

```typescript
// A - Error
interface Dictionary {
  [key: string]: number;
  length: number;    // OK - number matches index signature
  name: string;      // Error - string doesn't match number index signature
}

// B - OK
interface Dict2 {
  [key: string]: number | string;  // Union allows both
  length: number;    // OK - number is in union
  name: string;      // OK - string is in union
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

---

### Question 19: Answer B

**Explanation:**

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
getProperty(person, 'invalid');           // Error

// keyof with index signatures
type StringDict = { [key: string]: number };
type DictKeys = keyof StringDict; // string | number (number because array indices)
```

---

### Question 20: Answer B

**Explanation:**

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

---

## Part 3: Generics

### Question 21: Answer C

**Explanation:**

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

---

### Question 22: Answer D

**Explanation:**

```typescript
// Generic constraint: T must have length property
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// A - string has length
getLength('hello'); // 5

// B - array has length
getLength([1, 2, 3]); // 3

// C - object with length property
getLength({ length: 10 }); // 10

// D - Error: number doesn't have length
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

---

### Question 23: Answer B

**Explanation:**

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

---

### Question 24: Answer B

**Explanation:**

```typescript
// A - Default generic parameter
interface Container<T = string> {
  value: T;
}

const container: Container = { value: 'hello' }; // T defaults to string
const numContainer: Container<number> = { value: 42 }; // Explicit type

// B - Default parameter with inference
function process<T = number>(value: T): T {
  return value;
}

const result = process('hello');
// result type is 'string', NOT 'number'
// TypeScript infers T from argument, default is only used when
// T cannot be inferred

const resultDefault = process(); // Error - cannot infer T
// Would need: process<number>() or process(42)

// Default is useful when type cannot be inferred
function createArray<T = string>(): T[] {
  return [];
}

const arr = createArray(); // string[] (uses default)
const numArr = createArray<number>(); // number[]
```

---

### Question 25: Answer C - `number`

**Explanation:**

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

---

## Part 4: Type Manipulation

### Question 26: Answer B

**Explanation:**

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

updateUser('1', { name: 'Jane' }); // OK
updateUser('1', { age: 31 }); // OK
```

---

### Question 27: Answer B

**Explanation:**

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

---

### Question 28: Answer B

**Explanation:**

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

---

### Question 29: Answer A

**Explanation:**

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

---

### Question 30: Answer B - `string`

**Explanation:**

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

---

## Part 5: React + TypeScript

### Question 31: Answer D - All are correct

**Explanation:**

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

---

### Question 32: Answer B

**Explanation:**

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

---

### Question 33: Answer B

**Explanation:**

```tsx
// A - For DOM refs, readonly (can't reassign .current)
const ref1 = useRef<HTMLDivElement>(null);
// ref1.current is HTMLDivElement | null
// ref1.current = something; // Error: readonly

// B - Non-null assertion, mutable but risky
const ref2 = useRef<HTMLDivElement>(null!);
// ref2.current is HTMLDivElement (non-null asserted)
// ref2.current = something; // OK
// Warning: Will be null initially until ref is attached!

// C - Explicit mutable ref
const ref3 = useRef<HTMLDivElement | null>(null);
// ref3.current is HTMLDivElement | null
// ref3.current = something; // OK

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

---

### Question 34: Answer A - Correct

**Explanation:**

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

---

### Question 35: Answer A (but D explains inference)

**Explanation:**

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
toggleOpen(); // TypeScript knows it's a function
```

---

## REFERENCES

1. [TypeScript Official Handbook](https://www.typescriptlang.org/docs/handbook/)
2. [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
3. [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
4. [Total TypeScript](https://www.totaltypescript.com/)
5. [Type Challenges](https://github.com/type-challenges/type-challenges)
