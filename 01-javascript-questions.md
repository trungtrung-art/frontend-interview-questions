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

- A) `0, 0, 0`
- B) `0, 1, 2`
- C) `3, 3, 3`
- D) `undefined, undefined, undefined`

---

## Câu 2: Hoisting
**Output của đoạn code sau là gì?**

```javascript
console.log(a);
console.log(b);
var a = 1;
let b = 2;
```

- A) `ReferenceError`, `ReferenceError`
- B) `undefined`, `undefined`
- C) `1`, `2`
- D) `undefined`, `ReferenceError`

---

## Câu 3: == vs ===
**Kết quả của các biểu thức sau?**

```javascript
console.log(1 == '1');
console.log(1 === '1');
console.log(null == undefined);
console.log(null === undefined);
```

- A) `true, false, false, false`
- B) `true, true, true, true`
- C) `true, false, true, false`
- D) `false, false, true, true`

---

## Câu 4: Array Methods
**Output của đoạn code sau là gì?**

```javascript
const arr = [1, 2, 3, 4, 5];
const result = arr.filter(x => x > 2).map(x => x * 2);
console.log(result);
```

- A) `[2, 4, 6, 8, 10]`
- B) `[3, 4, 5]`
- C) `[6, 8, 10, undefined, undefined]`
- D) `[6, 8, 10]`

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
- B) `null, undefined, number, array`
- C) `object, undefined, number, object`
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

- A) `undefined`, `undefined`
- B) `undefined`, `John`
- C) `John`, `undefined`
- D) `John`, `John`

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

- A) `[1,2,3,4]`, `[1,2,3]`
- B) Error
- C) `[1,2,3,4]`, `[1,2,3,4]`
- D) `[1,2,3]`, `[1,2,3,4]`

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
- B) `10`, `2`
- C) `10`, `20`
- D) `1`, `20`

---

## Câu 9: Truthy/Falsy
**Giá trị nào sau đây là falsy trong JavaScript?**

- A) `0, '', null, undefined, NaN, false`
- B) `0, '', null, undefined, NaN, false, {}`
- C) `0, '', null, undefined, false`
- D) `0, '', null, undefined, NaN, false, []`

---

## Câu 10: String Methods
**Output của đoạn code sau?**

```javascript
const str = 'Hello World';
console.log(str.slice(-5));
console.log(str.substring(-5));
```

- A) `World`, `Hello World`
- B) `Hello`, `Hello`
- C) Error
- D) `World`, `World`

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

- A) `script start, async1 start, script end, async2, async1 end`
- B) `script start, async1 start, async2, script end, async1 end`
- C) `script start, async1 start, async2, async1 end, script end`
- D) `script start, script end, async1 start, async2, async1 end`

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

- A) `Dog makes a sound`, `true`, `false`
- B) `Dog makes a sound`, `true`, `true`
- C) `Dog makes a sound`, `false`, `true`
- D) `undefined`, `false`, `true`

---

## Câu 14: Debounce vs Throttle
**Sự khác biệt chính giữa Debounce và Throttle?**

- A) Debounce chờ đến khi không còn event nào, Throttle giới hạn số lần chạy trong khoảng thời gian
- B) Không có sự khác biệt
- C) Debounce chạy function ngay lập tức, Throttle delay function
- D) Throttle chờ đến khi không còn event, Debounce giới hạn số lần chạy

---

## Câu 15: Object.freeze vs Object.seal
**Sự khác biệt giữa Object.freeze() và Object.seal()?**

- A) Không có sự khác biệt
- B) Cả hai đều chỉ ngăn xóa properties
- C) `freeze` ngăn thêm/xóa/sửa properties, `seal` chỉ ngăn thêm/xóa
- D) `seal` ngăn thêm/xóa/sửa properties, `freeze` chỉ ngăn thêm/xóa

---

## Câu 16: WeakMap vs Map
**Điều nào sau đây đúng về WeakMap?**

- A) WeakMap có property `.size`
- B) Có thể iterate qua WeakMap
- C) Keys phải là objects và được garbage collected khi không còn reference
- D) Keys có thể là primitive values

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

- A) `1, 2, 3, 3`
- B) `1, 2, 3, undefined`
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
- C) Error
- D) `undefined`, `Property not found`

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
- B) `24, 24, 12`
- C) `NaN, NaN, NaN`
- D) `24, [24], 24`

---

## Câu 20: Symbol
**Điều nào sau đây SAI về Symbol?**

- A) Symbol được liệt kê trong Object.keys()
- B) Symbol có thể được sử dụng làm object key
- C) Symbol luôn unique
- D) Symbol.for('key') tạo ra symbol global có thể reuse

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

- A) Tăng tốc độ xử lý event
- B) Chỉ hoạt động với click events
- C) Giảm memory usage và handle dynamic elements
- D) Bắt buộc phải sử dụng với React

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

- A) `1, 2, 2, undefined`
- B) `1, 2, 2, 0`
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
  return (...args) => args.reduce((acc, arg) => acc + arg, 0);
}
```

- C)
```javascript
function curry(fn) {
  return function(...args) {
    return fn(...args);
  }
}
```

- D)
```javascript
function curry(fn) {
  return fn.bind(this);
}
```

---

## Câu 25: Web Workers
**Điều nào SAI về Web Workers?**

- A) Web Workers chạy trong background thread
- B) Web Workers có thể import scripts
- C) Communication với main thread qua postMessage
- D) Web Workers có thể trực tiếp access DOM

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
- B) Memory Phase → Execution Phase → Cleanup Phase
- C) Creation Phase → Execution Phase
- D) Hoisting Phase → Creation Phase → Execution Phase

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

- A) `Date.now()` trước và sau function
- B) `setTimeout()` với delay 0
- C) `console.time()` và `console.timeEnd()`
- D) `performance.now()` trước và sau function

---

---

# ĐÁP ÁN CHI TIẾT

## Junior Level

### Câu 1: Đáp án C - `3, 3, 3`

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

**Đánh đổi:**
`let` trong vòng lặp tạo một ràng buộc mới mỗi vòng nên chạy đúng, nhưng đó là cơ chế ngầm mà người đọc phải biết trước mới hiểu vì sao. Cách cũ dùng IIFE thì lộ rõ ý định hơn nhưng dài và tốn một lớp hàm mỗi vòng. Với vòng lặp hàng chục nghìn phần tử, chi phí tạo phạm vi mỗi vòng là có thật, dù hiếm khi đáng kể.

**Tham khảo:** [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

### Câu 2: Đáp án D - `undefined`, `ReferenceError`

**Giải thích:**
- `var` được hoisted và initialized với `undefined`
- `let` được hoisted nhưng không initialized → Temporal Dead Zone (TDZ)
- Access biến trong TDZ sẽ throw ReferenceError

**Đánh đổi:**
Vùng chết tạm thời của `let` và `const` biến một lỗi im lặng thành lỗi nổ ngay tại dòng gây ra, dễ tìm hơn hẳn `var` trả về `undefined`. Cái giá là không dùng được biến trước dòng khai báo, kể cả trong trường hợp hợp lệ như hai hàm gọi lẫn nhau — lúc đó phải dùng khai báo hàm, vốn vẫn được hoisting đầy đủ.

**Tham khảo:** [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

---

### Câu 3: Đáp án C - `true, false, true, false`

**Giải thích:**
- `==` (loose equality) thực hiện type coercion
- `===` (strict equality) không coerce types
- `null == undefined` là `true` theo spec
- `null === undefined` là `false` vì khác type

**Đánh đổi:**
Dùng `===` luôn là lời khuyên an toàn, nhưng có đúng một chỗ `==` gọn hơn mà vẫn đúng: `x == null` bắt cả `null` lẫn `undefined` trong một phép so sánh. Viết `x === null || x === undefined` thì rõ hơn nhưng dài. Nhiều bộ quy tắc lint cho phép ngoại lệ đúng ở chỗ này.

**Tham khảo:** [MDN - Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---

### Câu 4: Đáp án D - `[6, 8, 10]`

**Giải thích:**
- `filter(x => x > 2)` trả về `[3, 4, 5]`
- `map(x => x * 2)` nhân mỗi phần tử với 2 → `[6, 8, 10]`

**Đánh đổi:**
Chuỗi `map`, `filter`, `reduce` đọc dễ nhưng mỗi bước tạo một mảng trung gian — với mảng hàng trăm nghìn phần tử thì vừa tốn bộ nhớ vừa chậm vì duyệt nhiều lượt. Một vòng `for` duy nhất nhanh hơn nhưng khó đọc hơn. Ranh giới thực dụng: dưới vài nghìn phần tử thì ưu tiên dễ đọc, đừng tối ưu sớm.

**Tham khảo:** [MDN - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

### Câu 5: Đáp án C - `object, undefined, number, object`

**Giải thích:**
- `typeof null` là `object` (bug lịch sử của JS)
- `typeof undefined` là `undefined`
- `typeof NaN` là `number` (NaN là "Not a Number" nhưng type vẫn là number)
- `typeof []` là `object` (arrays là objects trong JS)

**Đánh đổi:**
`typeof` an toàn với cả biến chưa khai báo, nên là cách duy nhất kiểm tra sự tồn tại mà không ném lỗi. Nhưng nó trả `"object"` cho `null` và cho mọi mảng — lỗi lịch sử không sửa được vì sẽ phá vỡ web đang chạy. Kiểm tra mảng phải dùng `Array.isArray`, kiểm tra null phải so sánh trực tiếp.

**Tham khảo:** [MDN - typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

---

### Câu 6: Đáp án C - `John`, `undefined`

**Giải thích:**
- Regular function: `this` được bind dựa trên cách function được gọi
- Arrow function: `this` được inherit từ enclosing scope (lexical this)
- `greetArrow` là arrow function, `this` là global/window, không có `name`

**Đánh đổi:**
Hàm mũi tên giữ `this` từ nơi khai báo nên tránh được lỗi mất ngữ cảnh trong callback, nhưng chính vì thế mà không dùng được làm phương thức khi cần `this` trỏ vào chính đối tượng, và không dùng được làm hàm khởi tạo. Quy tắc gọn: callback thì mũi tên, phương thức của đối tượng thì hàm thường.

**Tham khảo:** [MDN - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

### Câu 7: Đáp án D - `[1,2,3]`, `[1,2,3,4]`

**Giải thích:**
- Spread operator tạo shallow copy
- `arr2` là array mới, independent của `arr1`
- Push vào `arr2` không ảnh hưởng `arr1`

**Đánh đổi:**
Spread chỉ sao chép nông, nên sửa đối tượng lồng bên trong vẫn ảnh hưởng bản gốc — nguồn lỗi hay gặp nhất khi cập nhật state trong React. Sao chép sâu bằng `structuredClone` thì đúng nhưng tốn hơn nhiều và không sao chép được hàm. Với mảng lớn, mỗi lần spread là một lần cấp phát mới.

**Tham khảo:** [MDN - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

### Câu 8: Đáp án D - `1`, `20`

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

**Đánh đổi:**
Truyền tham chiếu rẻ vì không sao chép, nhưng nghĩa là hàm nhận vào có thể sửa dữ liệu của người gọi mà người gọi không biết. Làm bất biến thì an toàn và dễ suy luận, đổi lại tốn bộ nhớ và thời gian cấp phát. Immer chọn đường giữa: cho viết như sửa tại chỗ rồi sinh ra bản bất biến, để có cả hai.

**Tham khảo:** [MDN - Shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)

---

### Câu 9: Đáp án A - `0, '', null, undefined, NaN, false`

**Giải thích:**
- Có đúng 6 falsy values trong JavaScript
- `[]` và `{}` là truthy (empty array và empty object)

**Đánh đổi:**
Kiểm tra `if (x)` gọn nhưng gộp chung `0`, chuỗi rỗng và `false` vào nhóm "không có giá trị" — sai ngay khi `0` là giá trị hợp lệ, ví dụ số lượng hàng tồn. Toán tử `??` chỉ bắt `null` và `undefined` nên đúng hơn cho giá trị mặc định, nhưng người quen `||` rất dễ nhầm hai cái.

**Tham khảo:** [MDN - Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

---

### Câu 10: Đáp án A - `World`, `Hello World`

**Giải thích:**
- `slice(-5)` lấy 5 ký tự cuối cùng → `World`
- `substring(-5)` coi negative number như 0 → `Hello World`

**Đánh đổi:**
Chuỗi trong JavaScript là bất biến nên mọi thao tác đều tạo chuỗi mới — nối chuỗi trong vòng lặp lớn là cách chậm kinh điển, gom vào mảng rồi `join` nhanh hơn nhiều. Và các phương thức làm việc theo đơn vị mã UTF-16, nên emoji và ký tự ngoài mặt phẳng cơ bản bị cắt sai; muốn đúng phải duyệt bằng `for...of` hoặc `Intl.Segmenter`.

**Tham khảo:** [MDN - String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

---

## Middle Level

### Câu 11: Đáp án C - `1, 4, 3, 2`

**Giải thích:**
- Event Loop priority: Call Stack → Microtask Queue → Macrotask Queue
- Synchronous code (`1`, `4`) chạy trước
- Promise callbacks (microtask) chạy trước setTimeout (macrotask)

**Đánh đổi:**
Microtask chạy cho hết trước khi trình duyệt được vẽ, nên một chuỗi promise dài làm trễ khung hình mà không hiện ra dưới dạng tác vụ dài nào cả. Đó là lý do vòng lặp promise vô tận làm treo trang dù không có `while` nào. Cần nhường luồng thì phải dùng macrotask như `setTimeout`, hoặc `scheduler.yield` ở trình duyệt mới.

**Tham khảo:** [JavaScript Event Loop](https://javascript.info/event-loop)

---

### Câu 12: Đáp án B - `script start, async1 start, async2, script end, async1 end`

**Giải thích:**
- `async/await` là syntactic sugar cho Promises
- Code trước `await` chạy synchronously
- Code sau `await` được wrap trong Promise và đưa vào microtask queue

**Đánh đổi:**
`async/await` đọc như code đồng bộ nên dễ hiểu hơn chuỗi `.then`, nhưng che mất chỗ nào thật sự dừng lại — người viết rất dễ vô tình tuần tự hoá những việc đáng lẽ chạy song song. Hai lệnh `await` liên tiếp là chờ lần lượt; muốn song song phải gom bằng `Promise.all`. Đây là lỗi hiệu năng hay gặp nhất trong code bất đồng bộ.

**Tham khảo:** [MDN - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

---

### Câu 13: Đáp án C - `Dog makes a sound`, `false`, `true`

**Giải thích:**
- `speak` được định nghĩa trên prototype, không phải own property
- `name` được định nghĩa trong constructor, là own property
- `hasOwnProperty` chỉ check own properties, không check prototype chain

**Đánh đổi:**
Chuỗi prototype cho phép mọi thực thể dùng chung phương thức nên tiết kiệm bộ nhớ, nhưng mỗi lần truy cập một thuộc tính không có sẵn là một lần đi ngược chuỗi — càng sâu càng chậm. Và sửa prototype lúc đang chạy làm trình duyệt huỷ tối ưu hoá cho toàn bộ lớp đối tượng đó, nên đừng vá prototype của kiểu dựng sẵn.

**Tham khảo:** [MDN - Inheritance and prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---

### Câu 14: Đáp án A

**Giải thích:**
- **Debounce:** Chờ đến khi user ngừng action một khoảng thời gian mới execute (search input)
- **Throttle:** Giới hạn số lần execute trong khoảng thời gian (scroll event)

```javascript
// Debounce: Chỉ search khi user ngừng gõ 300ms
const debouncedSearch = debounce(search, 300);

// Throttle: Chỉ handle scroll tối đa 1 lần/100ms
const throttledScroll = throttle(handleScroll, 100);
```

**Đánh đổi:**
Debounce chờ ngừng hẳn mới chạy nên tiết kiệm nhất, nhưng người dùng phải đợi — sai cho thanh cuộn hoặc kéo thả, vốn cần phản hồi liên tục. Throttle chạy đều nên mượt nhưng tốn hơn. Ô tìm kiếm dùng debounce, theo dõi cuộn dùng throttle. Nhầm hai cái là chỗ hay bị vặn nhất trong nhóm câu hỏi này.

**Tham khảo:** [CSS-Tricks - Debouncing and Throttling](https://css-tricks.com/debouncing-throttling-explained-examples/)

---

### Câu 15: Đáp án C

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

**Đánh đổi:**
`Object.freeze` chỉ đóng băng một tầng — đối tượng lồng bên trong vẫn sửa được bình thường. Đóng băng sâu phải tự đệ quy và tốn theo kích thước dữ liệu. Nguy hiểm hơn: ở chế độ không nghiêm ngặt, ghi vào đối tượng đã đóng băng thất bại **im lặng** chứ không ném lỗi, nên lỗi rất khó phát hiện.

**Tham khảo:** [MDN - Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

---

### Câu 16: Đáp án C

**Giải thích:**
- WeakMap keys phải là objects
- Keys được held "weakly" - có thể bị garbage collected
- Không thể iterate, không có `.size` property
- Use case: Store private data, caching

**Đánh đổi:**
`WeakMap` cho phép gắn dữ liệu vào một đối tượng mà không giữ đối tượng đó sống, nên rất hợp để lưu metadata theo phần tử DOM. Cái mất là không duyệt được, không có `size`, không xoá hàng loạt được — đó là hệ quả bắt buộc chứ không phải thiếu sót, vì cho phép duyệt sẽ để lộ thời điểm bộ thu gom rác chạy.

**Tham khảo:** [MDN - WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

---

### Câu 17: Đáp án B - `1, 2, 3, undefined`

**Giải thích:**
- `yield` pause function và return value với `done: false`
- `return` kết thúc generator với `done: true`
- Sau khi generator done, các `next()` tiếp theo return `{ value: undefined, done: true }`

**Đánh đổi:**
Generator cho phép tạm dừng rồi tiếp tục, nên diễn đạt được luồng dữ liệu vô hạn hoặc tính lười mà không tốn bộ nhớ giữ toàn bộ. Nhưng nó chậm hơn vòng lặp thường đáng kể và khó debug vì ngăn xếp bị cắt khúc. Ngày nay phần lớn nhu cầu bất đồng bộ đã có `async/await`, nên generator chủ yếu còn dùng cho luồng dữ liệu.

**Tham khảo:** [MDN - function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

---

### Câu 18: Đáp án B - `1`, `Property not found`

**Giải thích:**
- Proxy intercept operations trên object
- `get` trap được gọi khi access property
- Handler trả về custom value cho non-existent properties

**Đánh đổi:**
Proxy chặn được mọi thao tác trên đối tượng, nên là nền của hệ thống phản ứng trong Vue 3 và MobX. Cái giá là mọi truy cập thuộc tính phải đi qua một lớp hàm, chậm hơn nhiều lần so với đối tượng thường và trình duyệt không tối ưu hoá được. Đừng dùng cho đối tượng bị đọc trong vòng lặp nóng.

**Tham khảo:** [MDN - Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

---

### Câu 19: Đáp án A - `24, 24, 24`

**Giải thích:**
- `call(thisArg, arg1, arg2)`: Gọi function với `this` và arguments riêng lẻ
- `apply(thisArg, [args])`: Gọi function với `this` và array of arguments
- `bind(thisArg, arg1)`: Trả về new function với `this` và partial arguments

Tất cả đều tính: `2 * 3 * 4 = 24`

**Đánh đổi:**
`bind` tạo một hàm mới mỗi lần gọi, nên bind ngay trong thân render là tạo hàm mới mỗi lần render — đúng cái làm `React.memo` mất tác dụng hoàn toàn. `call` và `apply` không tạo hàm mới nhưng phải truyền ngữ cảnh ở mỗi lần gọi. Trong code hiện đại, hàm mũi tên thường gọn hơn cả ba.

**Tham khảo:** [MDN - Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

---

### Câu 20: Đáp án A - Symbol được liệt kê trong Object.keys()

**Giải thích:**
- Symbol KHÔNG được liệt kê trong:
  - `Object.keys()`
  - `for...in` loop
  - `JSON.stringify()`
- Để get Symbol keys: `Object.getOwnPropertySymbols()`

**Đánh đổi:**
Symbol làm khoá không bao giờ đụng nhau và bị ẩn khỏi `Object.keys` cùng `JSON.stringify`, nên hợp để gắn metadata nội bộ vào đối tượng của người khác. Nhưng chính việc bị ẩn khiến dữ liệu dùng Symbol làm khoá không tuần tự hoá được — gửi qua mạng hay lưu xuống là mất. Và trường riêng tư thật sự thì nay đã có cú pháp `#` của class.

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

**Đánh đổi:**
Mọi cách chống rò rỉ đều là thêm code dọn dẹp, mà code dọn dẹp cũng là code có thể sai hoặc bị quên. Gom nhiều listener vào một `AbortController` rồi huỷ một lần ít lỗi hơn hẳn so với gỡ từng cái. Nhưng quan trọng hơn cả là biết cách **chứng minh** có rò rỉ bằng heap snapshot, thay vì đoán rồi rải `removeEventListener` khắp nơi cho yên tâm.

**Tham khảo:** [Chrome DevTools - Memory Leaks](https://developer.chrome.com/docs/devtools/memory-problems/)

---

### Câu 22: Đáp án C

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

**Đánh đổi:**
Uỷ quyền sự kiện giảm số listener và tự áp dụng cho cả phần tử thêm sau, nhưng mỗi sự kiện phải chạy qua bước kiểm tra target, và nó không dùng được với sự kiện không nổi bọt như `focus`. Với danh sách dưới vài chục phần tử tĩnh, gắn trực tiếp đơn giản hơn mà không chậm hơn đáng kể.

**Tham khảo:** [JavaScript.info - Event delegation](https://javascript.info/event-delegation)

---

### Câu 23: Đáp án A - `1, 2, 2, undefined`

**Giải thích:**
- Module Pattern sử dụng IIFE + closure để create private variables
- `privateVar` không thể access từ bên ngoài
- `Module.privateVar` là `undefined` vì không được expose

**Đánh đổi:**
IIFE tạo phạm vi riêng là cách duy nhất trước khi có module ES, nên vẫn gặp rất nhiều trong code cũ. Ngày nay module ES cho cùng mức riêng tư mà còn phân tích tĩnh được, nhờ đó tree shaking mới hoạt động — điều IIFE không cho phép, vì nội dung của nó chỉ xác định được lúc chạy.

**Tham khảo:** [JavaScript Module Pattern](https://www.patterns.dev/vanilla/module-pattern/)

---

### Câu 24: Đáp án A

**Giải thích:**
- Curry function check số arguments đã nhận
- Nếu đủ args (`args.length >= fn.length`), execute function
- Nếu chưa đủ, return function mới để nhận thêm args

**Đánh đổi:**
Currying cho phép tạo hàm chuyên biệt từ hàm tổng quát và ghép hàm gọn gàng, nhưng mỗi lần gọi từng phần là thêm một lớp closure — lồng nhiều tầng thì tốn bộ nhớ và ngăn xếp lỗi trở nên rất khó đọc. Trong JavaScript hằng ngày, tham số mặc định cộng hàm mũi tên thường đủ và rõ hơn.

**Tham khảo:** [JavaScript.info - Currying](https://javascript.info/currying-partials)

---

### Câu 25: Đáp án D - Web Workers có thể trực tiếp access DOM

**Giải thích:**
- Web Workers chạy trong separate thread
- **KHÔNG** có access đến DOM, window, document
- Communicate với main thread qua `postMessage()`
- Có thể import scripts với `importScripts()`

**Đánh đổi:**
Không chạm được DOM là giới hạn cốt lõi chứ không phải thiếu sót: nếu hai luồng cùng sửa DOM thì phải có khoá, và toàn bộ mô hình đơn luồng của trình duyệt sụp đổ. Cái giá phải trả là mọi kết quả tính toán vẫn phải quay về luồng chính để hiển thị, và chính bước truyền dữ liệu đó có khi tốn hơn phép tính.

**Tham khảo:** [MDN - Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

---

### Câu 26: Đáp án D - Tất cả các đáp án trên

**Giải thích:**
Service Workers capabilities:
- Cache assets (CacheStorage API)
- Intercept fetch requests
- Background sync
- Push notifications

**Đánh đổi:**
Service Worker chạy độc lập với trang nên có thể tiếp tục phục vụ nội dung cũ sau khi đã deploy bản mới — vòng đời cập nhật của nó là nguồn lỗi kinh điển. Dùng `skipWaiting` và `clients.claim` để cập nhật ngay, nhưng làm vậy lại có rủi ro trang đang mở nhận nửa tài nguyên cũ nửa mới.

**Tham khảo:** [MDN - Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

---

### Câu 27: Đáp án C - Creation Phase → Execution Phase

**Giải thích:**
1. **Creation Phase:**
   - Create Scope Chain
   - Create variables, functions, arguments
   - Determine value of `this`

2. **Execution Phase:**
   - Assign values
   - Execute code line by line

**Đánh đổi:**
Tách thành pha tạo và pha thực thi chính là cái cho phép hoisting, nhờ đó hàm gọi được trước khi khai báo và code dễ tổ chức hơn. Cái giá là biến `var` tồn tại với giá trị `undefined` trước dòng khai báo, tạo ra cả một lớp lỗi mà `let` và `const` sinh ra để chặn.

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

**Đánh đổi:**
Viết dạng đệ quy đuôi đọc đẹp và trên lý thuyết tránh được tràn ngăn xếp, nhưng **chỉ Safari thực sự cài tối ưu hoá này** — Chrome và Firefox thì không, và nhiều năm rồi vẫn vậy. Nên trong thực tế, đệ quy sâu vẫn tràn ngăn xếp và phải chuyển sang vòng lặp. Biết chi tiết này quan trọng hơn biết cú pháp.

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

**Đánh đổi:**
Bộ nhớ dùng chung giữa các luồng bỏ được chi phí sao chép, nhưng mở ra tranh chấp dữ liệu mà JavaScript vốn không có khái niệm — phải dùng `Atomics` để đồng bộ, tức là bước vào thế giới lập trình đa luồng thật sự. Và sau Spectre, nó đòi các header cô lập nguồn gốc, vốn có thể làm hỏng mọi thứ nhúng từ bên thứ ba trên trang.

**Tham khảo:** [MDN - SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)

---

### Câu 30: Đáp án D - `performance.now()`

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

**Đánh đổi:**
`performance.now()` cho độ phân giải cao và không bị lệch khi đồng hồ hệ thống thay đổi, nhưng trình duyệt đã cố tình làm thô độ chính xác để chống tấn công đo thời gian — nên đo một thao tác cực ngắn sẽ ra con số không tin được. Cách đúng là chạy nhiều lần rồi lấy trung vị, hoặc dùng `performance.mark` để thấy luôn trên dòng thời gian của DevTools.

**Tham khảo:** [MDN - performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

---

## 📚 TÀI LIỆU THAM KHẢO TỔNG HỢP

1. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [JavaScript.info](https://javascript.info/)
3. [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
4. [ECMAScript Specification](https://tc39.es/ecma262/)
5. [Google Web Fundamentals](https://developers.google.com/web/fundamentals)
