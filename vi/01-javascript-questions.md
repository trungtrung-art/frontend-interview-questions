# Câu Hỏi Phỏng Vấn JavaScript
## Từ Junior đến Senior/Lead

---

## 📚 MỤC LỤC
- [Phần 1: Junior Level](#phần-1-junior-level)
- [Phần 2: Middle Level](#phần-2-middle-level)
- [Phần 3: Senior Level](#phần-3-senior-level)
- [Đáp Án Chi Tiết](#đáp-án-chi-tiết)

---

# PHẦN 1: JUNIOR LEVEL

## Câu 1: Closures
**Output của đoạn code sau là gì?**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

- A) `0, 1, 2`
- B) `3, 3, 3`
- C) `undefined, undefined, undefined`
- D) `0, 0, 0`

---

## Câu 2: Hoisting
**Output của đoạn code sau là gì?**

```javascript
console.log(a);
console.log(b);
var a = 1;
let b = 2;
```

- A) `undefined`, `undefined`
- B) `1`, `2`
- C) `undefined`, `ReferenceError`
- D) `ReferenceError`, `ReferenceError`

---

## Câu 3: == vs ===
**Kết quả của các biểu thức sau?**

```javascript
console.log(1 == '1');
console.log(1 === '1');
console.log(null == undefined);
console.log(null === undefined);
```

- A) `true, true, true, true`
- B) `true, false, true, false`
- C) `false, false, true, true`
- D) `true, false, false, false`

---

## Câu 4: Array Methods
**Output của đoạn code sau là gì?**

```javascript
const arr = [1, 2, 3, 4, 5];
const result = arr.filter(x => x > 2).map(x => x * 2);
console.log(result);
```

- A) `[6, 8, 10]`
- B) `[2, 4, 6, 8, 10]`
- C) `[3, 4, 5]`
- D) `[6, 8, 10, undefined, undefined]`

---

## Câu 5: typeof operator
**Output của các expression sau?**

```javascript
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof []);
```

- A) `null, undefined, NaN, array`
- B) `object, undefined, number, object`
- C) `null, undefined, number, array`
- D) `object, undefined, NaN, object`

---

## Câu 6: this keyword
**Output của đoạn code sau là gì?**

```javascript
const obj = {
  name: 'John',
  greet: function() {
    console.log(this.name);
  },
  greetArrow: () => {
    console.log(this.name);
  }
};

obj.greet();
obj.greetArrow();
```

- A) `John`, `John`
- B) `John`, `undefined`
- C) `undefined`, `John`
- D) `undefined`, `undefined`

---

## Câu 7: Spread Operator
**Output của đoạn code sau là gì?**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2.push(4);

console.log(arr1);
console.log(arr2);
```

- A) `[1,2,3,4]`, `[1,2,3,4]`
- B) `[1,2,3]`, `[1,2,3,4]`
- C) `[1,2,3,4]`, `[1,2,3]`
- D) Error

---

## Câu 8: Object Reference
**Output của đoạn code sau là gì?**

```javascript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.a = 10;
obj2.b.c = 20;

console.log(obj1.a);
console.log(obj1.b.c);
```

- A) `1`, `2`
- B) `10`, `20`
- C) `1`, `20`
- D) `10`, `2`

---

## Câu 9: Truthy/Falsy
**Giá trị nào sau đây là falsy trong JavaScript?**

- A) `0, '', null, undefined, NaN, false`
- B) `0, '', null, undefined, NaN, false, []`
- C) `0, '', null, undefined, NaN, false, {}`
- D) `0, '', null, undefined, false`

---

## Câu 10: String Methods
**Output của đoạn code sau?**

```javascript
const str = 'Hello World';
console.log(str.slice(-5));
console.log(str.substring(-5));
```

- A) `World`, `World`
- B) `World`, `Hello World`
- C) `Hello`, `Hello`
- D) Error

---

# PHẦN 2: MIDDLE LEVEL

## Câu 11: Promise
**Output của đoạn code sau là gì?**

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
```

- A) `1, 2, 3, 4`
- B) `1, 4, 2, 3`
- C) `1, 4, 3, 2`
- D) `1, 3, 4, 2`

---

## Câu 12: Event Loop
**Output của đoạn code sau?**

```javascript
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');
async1();
console.log('script end');
```

- A) `script start, async1 start, async2, async1 end, script end`
- B) `script start, async1 start, async2, script end, async1 end`
- C) `script start, script end, async1 start, async2, async1 end`
- D) `script start, async1 start, script end, async2, async1 end`

---

## Câu 13: Prototype
**Output của đoạn code sau là gì?**

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} makes a sound`;
};

const dog = new Animal('Dog');
console.log(dog.speak());
console.log(dog.hasOwnProperty('speak'));
console.log(dog.hasOwnProperty('name'));
```

- A) `Dog makes a sound`, `true`, `true`
- B) `Dog makes a sound`, `false`, `true`
- C) `Dog makes a sound`, `true`, `false`
- D) `undefined`, `false`, `true`

---

## Câu 14: Debounce vs Throttle
**Sự khác biệt chính giữa Debounce và Throttle?**

- A) Debounce chạy function ngay lập tức, Throttle delay function
- B) Debounce chờ đến khi không còn event nào, Throttle giới hạn số lần chạy trong khoảng thời gian
- C) Không có sự khác biệt
- D) Throttle chờ đến khi không còn event, Debounce giới hạn số lần chạy

---

## Câu 15: Object.freeze vs Object.seal
**Sự khác biệt giữa Object.freeze() và Object.seal()?**

- A) Không có sự khác biệt
- B) `freeze` ngăn thêm/xóa/sửa properties, `seal` chỉ ngăn thêm/xóa
- C) `seal` ngăn thêm/xóa/sửa properties, `freeze` chỉ ngăn thêm/xóa
- D) Cả hai đều chỉ ngăn xóa properties

---

## Câu 16: WeakMap vs Map
**Điều nào sau đây đúng về WeakMap?**

- A) Keys có thể là primitive values
- B) Có thể iterate qua WeakMap
- C) Keys phải là objects và được garbage collected khi không còn reference
- D) WeakMap có property `.size`

---

## Câu 17: Generator Function
**Output của đoạn code sau?**

```javascript
function* generator() {
  yield 1;
  yield 2;
  return 3;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
```

- A) `1, 2, 3, undefined`
- B) `1, 2, 3, 3`
- C) `1, 2, undefined, undefined`
- D) `1, 2, 3, Error`

---

## Câu 18: Proxy
**Output của đoạn code sau?**

```javascript
const handler = {
  get: function(target, prop) {
    return prop in target ? target[prop] : 'Property not found';
  }
};

const obj = new Proxy({ a: 1, b: 2 }, handler);
console.log(obj.a);
console.log(obj.c);
```

- A) `1`, `undefined`
- B) `1`, `Property not found`
- C) `undefined`, `Property not found`
- D) Error

---

## Câu 19: call, apply, bind
**Output của đoạn code sau?**

```javascript
const obj = { num: 2 };

function multiply(a, b) {
  return this.num * a * b;
}

console.log(multiply.call(obj, 3, 4));
console.log(multiply.apply(obj, [3, 4]));
console.log(multiply.bind(obj, 3)(4));
```

- A) `24, 24, 24`
- B) `24, [24], 24`
- C) `NaN, NaN, NaN`
- D) `24, 24, 12`

---

## Câu 20: Symbol
**Điều nào sau đây SAI về Symbol?**

- A) Symbol luôn unique
- B) Symbol có thể được sử dụng làm object key
- C) Symbol.for('key') tạo ra symbol global có thể reuse
- D) Symbol được liệt kê trong Object.keys()

---

# PHẦN 3: SENIOR LEVEL

## Câu 21: Memory Leak
**Trường hợp nào sau đây có thể gây Memory Leak trong JavaScript?**

- A) Sử dụng closure không đúng cách
- B) Không remove event listeners
- C) Circular references với closures
- D) Tất cả các đáp án trên

---

## Câu 22: Event Delegation
**Ưu điểm chính của Event Delegation?**

- A) Giảm memory usage và handle dynamic elements
- B) Tăng tốc độ xử lý event
- C) Bắt buộc phải sử dụng với React
- D) Chỉ hoạt động với click events

---

## Câu 23: Module Pattern
**Output của đoạn code sau?**

```javascript
const Module = (function() {
  let privateVar = 0;

  return {
    increment: function() {
      return ++privateVar;
    },
    getCount: function() {
      return privateVar;
    }
  };
})();

console.log(Module.increment());
console.log(Module.increment());
console.log(Module.getCount());
console.log(Module.privateVar);
```

- A) `1, 2, 2, 0`
- B) `1, 2, 2, undefined`
- C) `1, 1, 1, undefined`
- D) Error

---

## Câu 24: Currying
**Implement một curry function sao cho:**

```javascript
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
curriedAdd(1)(2)(3) // returns 6
curriedAdd(1, 2)(3) // returns 6
curriedAdd(1)(2, 3) // returns 6
```

**Đâu là implementation đúng?**

- A)
```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    }
  }
}
```

- B)
```javascript
function curry(fn) {
  return function(...args) {
    return fn(...args);
  }
}
```

- C)
```javascript
function curry(fn) {
  return fn.bind(this);
}
```

- D)
```javascript
function curry(fn) {
  return (...args) => args.reduce((acc, arg) => acc + arg, 0);
}
```

---

## Câu 25: Web Workers
**Điều nào SAI về Web Workers?**

- A) Web Workers chạy trong background thread
- B) Web Workers có thể trực tiếp access DOM
- C) Communication với main thread qua postMessage
- D) Web Workers có thể import scripts

---

## Câu 26: Service Workers
**Service Worker có thể làm gì?**

- A) Cache assets cho offline access
- B) Intercept network requests
- C) Handle push notifications
- D) Tất cả các đáp án trên

---

## Câu 27: Execution Context
**Thứ tự đúng của các phase trong Execution Context?**

- A) Execution Phase → Creation Phase
- B) Creation Phase → Execution Phase
- C) Hoisting Phase → Creation Phase → Execution Phase
- D) Memory Phase → Execution Phase → Cleanup Phase

---

## Câu 28: Tail Call Optimization
**Đoạn code nào có thể được tối ưu bằng Tail Call Optimization?**

- A)
```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

- B)
```javascript
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}
```

- C) Cả A và B
- D) Không đoạn nào

---

## Câu 29: Shared Array Buffer
**Điều nào đúng về SharedArrayBuffer?**

- A) Cho phép share memory giữa main thread và workers
- B) Yêu cầu cross-origin isolation headers
- C) Cần sử dụng Atomics API để tránh race conditions
- D) Tất cả các đáp án trên

---

## Câu 30: Performance
**Cách nào tốt nhất để đo performance của một function?**

- A) `console.time()` và `console.timeEnd()`
- B) `Date.now()` trước và sau function
- C) `performance.now()` trước và sau function
- D) `setTimeout()` với delay 0

---

---

# ĐÁP ÁN CHI TIẾT

## Junior Level

### Câu 1: Đáp án B - `3, 3, 3`

**Giải thích:**
- `var` có function scope, không có block scope
- Khi setTimeout callback được execute, vòng lặp đã kết thúc và `i = 3`
- Tất cả 3 callbacks đều reference cùng một biến `i`

**Cách fix:**
```javascript
// Cách 1: Sử dụng let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Cách 2: Sử dụng IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
```

**Tham khảo:** [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

### Câu 2: Đáp án C - `undefined`, `ReferenceError`

**Giải thích:**
- `var` được hoisted và initialized với `undefined`
- `let` được hoisted nhưng không initialized → Temporal Dead Zone (TDZ)
- Access biến trong TDZ sẽ throw ReferenceError

**Tham khảo:** [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

---

### Câu 3: Đáp án B - `true, false, true, false`

**Giải thích:**
- `==` (loose equality) thực hiện type coercion
- `===` (strict equality) không coerce types
- `null == undefined` là `true` theo spec
- `null === undefined` là `false` vì khác type

**Tham khảo:** [MDN - Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---

### Câu 4: Đáp án A - `[6, 8, 10]`

**Giải thích:**
- `filter(x => x > 2)` trả về `[3, 4, 5]`
- `map(x => x * 2)` nhân mỗi phần tử với 2 → `[6, 8, 10]`

**Tham khảo:** [MDN - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

### Câu 5: Đáp án B - `object, undefined, number, object`

**Giải thích:**
- `typeof null` là `object` (bug lịch sử của JS)
- `typeof undefined` là `undefined`
- `typeof NaN` là `number` (NaN là "Not a Number" nhưng type vẫn là number)
- `typeof []` là `object` (arrays là objects trong JS)

**Tham khảo:** [MDN - typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

---

### Câu 6: Đáp án B - `John`, `undefined`

**Giải thích:**
- Regular function: `this` được bind dựa trên cách function được gọi
- Arrow function: `this` được inherit từ enclosing scope (lexical this)
- `greetArrow` là arrow function, `this` là global/window, không có `name`

**Tham khảo:** [MDN - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

### Câu 7: Đáp án B - `[1,2,3]`, `[1,2,3,4]`

**Giải thích:**
- Spread operator tạo shallow copy
- `arr2` là array mới, independent của `arr1`
- Push vào `arr2` không ảnh hưởng `arr1`

**Tham khảo:** [MDN - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

### Câu 8: Đáp án C - `1`, `20`

**Giải thích:**
- Spread operator chỉ tạo **shallow copy**
- `obj2.a = 10` thay đổi primitive → không ảnh hưởng `obj1`
- `obj2.b.c = 20` thay đổi nested object → `obj1.b` và `obj2.b` reference cùng object

**Deep copy solution:**
```javascript
const obj2 = JSON.parse(JSON.stringify(obj1));
// hoặc
const obj2 = structuredClone(obj1);
```

**Tham khảo:** [MDN - Shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)

---

### Câu 9: Đáp án A - `0, '', null, undefined, NaN, false`

**Giải thích:**
- Có đúng 6 falsy values trong JavaScript
- `[]` và `{}` là truthy (empty array và empty object)

**Tham khảo:** [MDN - Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

---

### Câu 10: Đáp án B - `World`, `Hello World`

**Giải thích:**
- `slice(-5)` lấy 5 ký tự cuối cùng → `World`
- `substring(-5)` coi negative number như 0 → `Hello World`

**Tham khảo:** [MDN - String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

---

## Middle Level

### Câu 11: Đáp án C - `1, 4, 3, 2`

**Giải thích:**
- Event Loop priority: Call Stack → Microtask Queue → Macrotask Queue
- Synchronous code (`1`, `4`) chạy trước
- Promise callbacks (microtask) chạy trước setTimeout (macrotask)

**Tham khảo:** [JavaScript Event Loop](https://javascript.info/event-loop)

---

### Câu 12: Đáp án B - `script start, async1 start, async2, script end, async1 end`

**Giải thích:**
- `async/await` là syntactic sugar cho Promises
- Code trước `await` chạy synchronously
- Code sau `await` được wrap trong Promise và đưa vào microtask queue

**Tham khảo:** [MDN - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

---

### Câu 13: Đáp án B - `Dog makes a sound`, `false`, `true`

**Giải thích:**
- `speak` được định nghĩa trên prototype, không phải own property
- `name` được định nghĩa trong constructor, là own property
- `hasOwnProperty` chỉ check own properties, không check prototype chain

**Tham khảo:** [MDN - Inheritance and prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---

### Câu 14: Đáp án B

**Giải thích:**
- **Debounce:** Chờ đến khi user ngừng action một khoảng thời gian mới execute (search input)
- **Throttle:** Giới hạn số lần execute trong khoảng thời gian (scroll event)

```javascript
// Debounce: Chỉ search khi user ngừng gõ 300ms
const debouncedSearch = debounce(search, 300);

// Throttle: Chỉ handle scroll tối đa 1 lần/100ms
const throttledScroll = throttle(handleScroll, 100);
```

**Tham khảo:** [CSS-Tricks - Debouncing and Throttling](https://css-tricks.com/debouncing-throttling-explained-examples/)

---

### Câu 15: Đáp án B

**Giải thích:**
- `Object.freeze()`: Không thể add, delete, hoặc modify properties
- `Object.seal()`: Không thể add hoặc delete, nhưng có thể modify existing properties

```javascript
const frozen = Object.freeze({ a: 1 });
frozen.a = 2; // Không có effect
frozen.b = 3; // Không có effect

const sealed = Object.seal({ a: 1 });
sealed.a = 2; // Works! a = 2
sealed.b = 3; // Không có effect
```

**Tham khảo:** [MDN - Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

---

### Câu 16: Đáp án C

**Giải thích:**
- WeakMap keys phải là objects
- Keys được held "weakly" - có thể bị garbage collected
- Không thể iterate, không có `.size` property
- Use case: Store private data, caching

**Tham khảo:** [MDN - WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

---

### Câu 17: Đáp án A - `1, 2, 3, undefined`

**Giải thích:**
- `yield` pause function và return value với `done: false`
- `return` kết thúc generator với `done: true`
- Sau khi generator done, các `next()` tiếp theo return `{ value: undefined, done: true }`

**Tham khảo:** [MDN - function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

---

### Câu 18: Đáp án B - `1`, `Property not found`

**Giải thích:**
- Proxy intercept operations trên object
- `get` trap được gọi khi access property
- Handler trả về custom value cho non-existent properties

**Tham khảo:** [MDN - Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

---

### Câu 19: Đáp án A - `24, 24, 24`

**Giải thích:**
- `call(thisArg, arg1, arg2)`: Gọi function với `this` và arguments riêng lẻ
- `apply(thisArg, [args])`: Gọi function với `this` và array of arguments
- `bind(thisArg, arg1)`: Trả về new function với `this` và partial arguments

Tất cả đều tính: `2 * 3 * 4 = 24`

**Tham khảo:** [MDN - Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

---

### Câu 20: Đáp án D - Symbol được liệt kê trong Object.keys()

**Giải thích:**
- Symbol KHÔNG được liệt kê trong:
  - `Object.keys()`
  - `for...in` loop
  - `JSON.stringify()`
- Để get Symbol keys: `Object.getOwnPropertySymbols()`

**Tham khảo:** [MDN - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

---

## Senior Level

### Câu 21: Đáp án D - Tất cả các đáp án trên

**Giải thích:**
Common causes of memory leaks:
1. **Closures giữ reference:** Variables trong closure không được release
2. **Event listeners không remove:** DOM elements bị remove nhưng listeners vẫn còn
3. **Circular references:** Objects reference lẫn nhau với closures

**Prevention:**
```javascript
// Always remove event listeners
element.addEventListener('click', handler);
// Later:
element.removeEventListener('click', handler);

// Use WeakMap/WeakSet for caching
const cache = new WeakMap();
```

**Tham khảo:** [Chrome DevTools - Memory Leaks](https://developer.chrome.com/docs/devtools/memory-problems/)

---

### Câu 22: Đáp án A

**Giải thích:**
Event Delegation benefits:
1. **Less memory:** Một listener thay vì nhiều listeners
2. **Dynamic elements:** Tự động handle elements được add sau
3. **Better performance:** Ít listeners = ít memory

```javascript
// Instead of adding listener to each button
document.querySelector('.container').addEventListener('click', (e) => {
  if (e.target.matches('.button')) {
    // Handle button click
  }
});
```

**Tham khảo:** [JavaScript.info - Event delegation](https://javascript.info/event-delegation)

---

### Câu 23: Đáp án B - `1, 2, 2, undefined`

**Giải thích:**
- Module Pattern sử dụng IIFE + closure để create private variables
- `privateVar` không thể access từ bên ngoài
- `Module.privateVar` là `undefined` vì không được expose

**Tham khảo:** [JavaScript Module Pattern](https://www.patterns.dev/vanilla/module-pattern/)

---

### Câu 24: Đáp án A

**Giải thích:**
- Curry function check số arguments đã nhận
- Nếu đủ args (`args.length >= fn.length`), execute function
- Nếu chưa đủ, return function mới để nhận thêm args

**Tham khảo:** [JavaScript.info - Currying](https://javascript.info/currying-partials)

---

### Câu 25: Đáp án B - Web Workers có thể trực tiếp access DOM

**Giải thích:**
- Web Workers chạy trong separate thread
- **KHÔNG** có access đến DOM, window, document
- Communicate với main thread qua `postMessage()`
- Có thể import scripts với `importScripts()`

**Tham khảo:** [MDN - Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

---

### Câu 26: Đáp án D - Tất cả các đáp án trên

**Giải thích:**
Service Workers capabilities:
- Cache assets (CacheStorage API)
- Intercept fetch requests
- Background sync
- Push notifications

**Tham khảo:** [MDN - Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

---

### Câu 27: Đáp án B - Creation Phase → Execution Phase

**Giải thích:**
1. **Creation Phase:**
   - Create Scope Chain
   - Create variables, functions, arguments
   - Determine value of `this`

2. **Execution Phase:**
   - Assign values
   - Execute code line by line

**Tham khảo:** [JavaScript Execution Context](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)

---

### Câu 28: Đáp án B

**Giải thích:**
Tail Call Optimization (TCO) yêu cầu:
- Return statement là function call
- Không có operations sau recursive call

```javascript
// ❌ Không TCO: có phép nhân sau recursive call
return n * factorial(n - 1);

// ✅ TCO: return trực tiếp recursive call
return factorial(n - 1, n * acc);
```

**Note:** TCO chỉ được implement trong Safari, không phải Chrome/Firefox

**Tham khảo:** [ES6 Tail Call Optimization](https://2ality.com/2015/06/tail-call-optimization.html)

---

### Câu 29: Đáp án D - Tất cả các đáp án trên

**Giải thích:**
SharedArrayBuffer:
- Share memory giữa main thread và workers
- Yêu cầu COOP/COEP headers (cross-origin isolation)
- Cần Atomics API để synchronize và avoid race conditions

```javascript
// Required headers
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

**Tham khảo:** [MDN - SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)

---

### Câu 30: Đáp án C - `performance.now()`

**Giải thích:**
- `performance.now()` có độ chính xác cao nhất (microseconds)
- `Date.now()` chỉ có độ chính xác milliseconds
- `console.time()` tiện lợi nhưng không programmatic
- `performance.now()` không bị ảnh hưởng bởi system clock changes

```javascript
const start = performance.now();
// ... code to measure
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
```

**Tham khảo:** [MDN - performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [JavaScript.info](https://javascript.info/)
3. [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
4. [ECMAScript Specification](https://tc39.es/ecma262/)
5. [Google Web Fundamentals](https://developers.google.com/web/fundamentals)
