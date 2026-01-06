# JavaScript Interview Questions
## From Junior to Senior/Lead

---

## TABLE OF CONTENTS
- [Part 1: Junior Level](#part-1-junior-level)
- [Part 2: Middle Level](#part-2-middle-level)
- [Part 3: Senior Level](#part-3-senior-level)
- [Detailed Answers](#detailed-answers)

---

# PART 1: JUNIOR LEVEL

## Question 1: Closures
**What is the output of the following code?**

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

## Question 2: Hoisting
**What is the output of the following code?**

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

## Question 3: == vs ===
**What are the results of the following expressions?**

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

## Question 4: Array Methods
**What is the output of the following code?**

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

## Question 5: typeof operator
**What is the output of the following expressions?**

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

## Question 6: this keyword
**What is the output of the following code?**

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

## Question 7: Spread Operator
**What is the output of the following code?**

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

## Question 8: Object Reference
**What is the output of the following code?**

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

## Question 9: Truthy/Falsy
**Which of the following values are falsy in JavaScript?**

- A) `0, '', null, undefined, NaN, false`
- B) `0, '', null, undefined, NaN, false, []`
- C) `0, '', null, undefined, NaN, false, {}`
- D) `0, '', null, undefined, false`

---

## Question 10: String Methods
**What is the output of the following code?**

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

# PART 2: MIDDLE LEVEL

## Question 11: Promise
**What is the output of the following code?**

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

## Question 12: Event Loop
**What is the output of the following code?**

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

## Question 13: Prototype
**What is the output of the following code?**

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

## Question 14: Debounce vs Throttle
**What is the main difference between Debounce and Throttle?**

- A) Debounce executes the function immediately, Throttle delays the function
- B) Debounce waits until no more events occur, Throttle limits execution frequency within a time period
- C) No difference
- D) Throttle waits until no more events occur, Debounce limits execution frequency

---

## Question 15: Object.freeze vs Object.seal
**What is the difference between Object.freeze() and Object.seal()?**

- A) No difference
- B) `freeze` prevents adding/deleting/modifying properties, `seal` only prevents adding/deleting
- C) `seal` prevents adding/deleting/modifying properties, `freeze` only prevents adding/deleting
- D) Both only prevent deleting properties

---

## Question 16: WeakMap vs Map
**Which of the following is true about WeakMap?**

- A) Keys can be primitive values
- B) Can iterate through WeakMap
- C) Keys must be objects and are garbage collected when no more references exist
- D) WeakMap has a `.size` property

---

## Question 17: Generator Function
**What is the output of the following code?**

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

## Question 18: Proxy
**What is the output of the following code?**

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

## Question 19: call, apply, bind
**What is the output of the following code?**

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

## Question 20: Symbol
**Which of the following is FALSE about Symbol?**

- A) Symbol is always unique
- B) Symbol can be used as object key
- C) Symbol.for('key') creates a global symbol that can be reused
- D) Symbol is enumerated in Object.keys()

---

# PART 3: SENIOR LEVEL

## Question 21: Memory Leak
**Which of the following cases can cause Memory Leak in JavaScript?**

- A) Improper use of closures
- B) Not removing event listeners
- C) Circular references with closures
- D) All of the above

---

## Question 22: Event Delegation
**What is the main advantage of Event Delegation?**

- A) Reduces memory usage and handles dynamic elements
- B) Increases event processing speed
- C) Must be used with React
- D) Only works with click events

---

## Question 23: Module Pattern
**What is the output of the following code?**

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

## Question 24: Currying
**Implement a curry function such that:**

```javascript
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
curriedAdd(1)(2)(3) // returns 6
curriedAdd(1, 2)(3) // returns 6
curriedAdd(1)(2, 3) // returns 6
```

**Which implementation is correct?**

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

## Question 25: Web Workers
**Which statement is FALSE about Web Workers?**

- A) Web Workers run in a background thread
- B) Web Workers can directly access the DOM
- C) Communication with the main thread is via postMessage
- D) Web Workers can import scripts

---

## Question 26: Service Workers
**What can Service Workers do?**

- A) Cache assets for offline access
- B) Intercept network requests
- C) Handle push notifications
- D) All of the above

---

## Question 27: Execution Context
**What is the correct order of phases in Execution Context?**

- A) Execution Phase -> Creation Phase
- B) Creation Phase -> Execution Phase
- C) Hoisting Phase -> Creation Phase -> Execution Phase
- D) Memory Phase -> Execution Phase -> Cleanup Phase

---

## Question 28: Tail Call Optimization
**Which code can be optimized with Tail Call Optimization?**

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

- C) Both A and B
- D) Neither

---

## Question 29: SharedArrayBuffer
**Which statement is true about SharedArrayBuffer?**

- A) Allows sharing memory between main thread and workers
- B) Requires cross-origin isolation headers
- C) Requires Atomics API to avoid race conditions
- D) All of the above

---

## Question 30: Performance
**What is the best way to measure function performance?**

- A) `console.time()` and `console.timeEnd()`
- B) `Date.now()` before and after function
- C) `performance.now()` before and after function
- D) `setTimeout()` with delay 0

---

---

# DETAILED ANSWERS

## Junior Level

### Question 1: Answer B - `3, 3, 3`

**Explanation:**
- `var` has function scope, not block scope
- When setTimeout callbacks execute, the loop has ended and `i = 3`
- All 3 callbacks reference the same variable `i`

**Fix:**
```javascript
// Method 1: Use let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Method 2: Use IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
```

**Reference:** [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

### Question 2: Answer C - `undefined`, `ReferenceError`

**Explanation:**
- `var` is hoisted and initialized with `undefined`
- `let` is hoisted but not initialized -> Temporal Dead Zone (TDZ)
- Accessing a variable in TDZ throws ReferenceError

**Reference:** [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

---

### Question 3: Answer B - `true, false, true, false`

**Explanation:**
- `==` (loose equality) performs type coercion
- `===` (strict equality) does not coerce types
- `null == undefined` is `true` per spec
- `null === undefined` is `false` because different types

**Reference:** [MDN - Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---

### Question 4: Answer A - `[6, 8, 10]`

**Explanation:**
- `filter(x => x > 2)` returns `[3, 4, 5]`
- `map(x => x * 2)` multiplies each element by 2 -> `[6, 8, 10]`

**Reference:** [MDN - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

### Question 5: Answer B - `object, undefined, number, object`

**Explanation:**
- `typeof null` is `object` (historical bug in JS)
- `typeof undefined` is `undefined`
- `typeof NaN` is `number` (NaN is "Not a Number" but its type is still number)
- `typeof []` is `object` (arrays are objects in JS)

**Reference:** [MDN - typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

---

### Question 6: Answer B - `John`, `undefined`

**Explanation:**
- Regular function: `this` is bound based on how the function is called
- Arrow function: `this` is inherited from the enclosing scope (lexical this)
- `greetArrow` is an arrow function, `this` is global/window, no `name` property

**Reference:** [MDN - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

### Question 7: Answer B - `[1,2,3]`, `[1,2,3,4]`

**Explanation:**
- Spread operator creates a shallow copy
- `arr2` is a new array, independent of `arr1`
- Pushing to `arr2` does not affect `arr1`

**Reference:** [MDN - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

### Question 8: Answer C - `1`, `20`

**Explanation:**
- Spread operator only creates a **shallow copy**
- `obj2.a = 10` changes a primitive -> does not affect `obj1`
- `obj2.b.c = 20` changes a nested object -> `obj1.b` and `obj2.b` reference the same object

**Deep copy solution:**
```javascript
const obj2 = JSON.parse(JSON.stringify(obj1));
// or
const obj2 = structuredClone(obj1);
```

**Reference:** [MDN - Shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)

---

### Question 9: Answer A - `0, '', null, undefined, NaN, false`

**Explanation:**
- There are exactly 6 falsy values in JavaScript
- `[]` and `{}` are truthy (empty array and empty object)

**Reference:** [MDN - Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

---

### Question 10: Answer B - `World`, `Hello World`

**Explanation:**
- `slice(-5)` takes the last 5 characters -> `World`
- `substring(-5)` treats negative numbers as 0 -> `Hello World`

**Reference:** [MDN - String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

---

## Middle Level

### Question 11: Answer C - `1, 4, 3, 2`

**Explanation:**
- Event Loop priority: Call Stack -> Microtask Queue -> Macrotask Queue
- Synchronous code (`1`, `4`) runs first
- Promise callbacks (microtask) run before setTimeout (macrotask)

**Reference:** [JavaScript Event Loop](https://javascript.info/event-loop)

---

### Question 12: Answer B - `script start, async1 start, async2, script end, async1 end`

**Explanation:**
- `async/await` is syntactic sugar for Promises
- Code before `await` runs synchronously
- Code after `await` is wrapped in a Promise and pushed to the microtask queue

**Reference:** [MDN - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

---

### Question 13: Answer B - `Dog makes a sound`, `false`, `true`

**Explanation:**
- `speak` is defined on the prototype, not an own property
- `name` is defined in the constructor, is an own property
- `hasOwnProperty` only checks own properties, not the prototype chain

**Reference:** [MDN - Inheritance and prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---

### Question 14: Answer B

**Explanation:**
- **Debounce:** Waits until the user stops an action for a period of time before executing (search input)
- **Throttle:** Limits the number of executions within a time period (scroll event)

```javascript
// Debounce: Only search when user stops typing for 300ms
const debouncedSearch = debounce(search, 300);

// Throttle: Handle scroll at most once per 100ms
const throttledScroll = throttle(handleScroll, 100);
```

**Reference:** [CSS-Tricks - Debouncing and Throttling](https://css-tricks.com/debouncing-throttling-explained-examples/)

---

### Question 15: Answer B

**Explanation:**
- `Object.freeze()`: Cannot add, delete, or modify properties
- `Object.seal()`: Cannot add or delete, but can modify existing properties

```javascript
const frozen = Object.freeze({ a: 1 });
frozen.a = 2; // No effect
frozen.b = 3; // No effect

const sealed = Object.seal({ a: 1 });
sealed.a = 2; // Works! a = 2
sealed.b = 3; // No effect
```

**Reference:** [MDN - Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

---

### Question 16: Answer C

**Explanation:**
- WeakMap keys must be objects
- Keys are held "weakly" - can be garbage collected
- Cannot iterate, no `.size` property
- Use case: Store private data, caching

**Reference:** [MDN - WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

---

### Question 17: Answer A - `1, 2, 3, undefined`

**Explanation:**
- `yield` pauses the function and returns value with `done: false`
- `return` ends the generator with `done: true`
- After the generator is done, subsequent `next()` calls return `{ value: undefined, done: true }`

**Reference:** [MDN - function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

---

### Question 18: Answer B - `1`, `Property not found`

**Explanation:**
- Proxy intercepts operations on an object
- `get` trap is called when accessing a property
- Handler returns a custom value for non-existent properties

**Reference:** [MDN - Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

---

### Question 19: Answer A - `24, 24, 24`

**Explanation:**
- `call(thisArg, arg1, arg2)`: Calls function with `this` and separate arguments
- `apply(thisArg, [args])`: Calls function with `this` and array of arguments
- `bind(thisArg, arg1)`: Returns a new function with `this` and partial arguments

All calculate: `2 * 3 * 4 = 24`

**Reference:** [MDN - Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

---

### Question 20: Answer D - Symbol is enumerated in Object.keys()

**Explanation:**
- Symbol is NOT enumerated in:
  - `Object.keys()`
  - `for...in` loop
  - `JSON.stringify()`
- To get Symbol keys: `Object.getOwnPropertySymbols()`

**Reference:** [MDN - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

---

## Senior Level

### Question 21: Answer D - All of the above

**Explanation:**
Common causes of memory leaks:
1. **Closures holding references:** Variables in closure are not released
2. **Event listeners not removed:** DOM elements are removed but listeners remain
3. **Circular references:** Objects reference each other with closures

**Prevention:**
```javascript
// Always remove event listeners
element.addEventListener('click', handler);
// Later:
element.removeEventListener('click', handler);

// Use WeakMap/WeakSet for caching
const cache = new WeakMap();
```

**Reference:** [Chrome DevTools - Memory Leaks](https://developer.chrome.com/docs/devtools/memory-problems/)

---

### Question 22: Answer A

**Explanation:**
Event Delegation benefits:
1. **Less memory:** One listener instead of many
2. **Dynamic elements:** Automatically handles elements added later
3. **Better performance:** Fewer listeners = less memory

```javascript
// Instead of adding listener to each button
document.querySelector('.container').addEventListener('click', (e) => {
  if (e.target.matches('.button')) {
    // Handle button click
  }
});
```

**Reference:** [JavaScript.info - Event delegation](https://javascript.info/event-delegation)

---

### Question 23: Answer B - `1, 2, 2, undefined`

**Explanation:**
- Module Pattern uses IIFE + closure to create private variables
- `privateVar` cannot be accessed from outside
- `Module.privateVar` is `undefined` because it's not exposed

**Reference:** [JavaScript Module Pattern](https://www.patterns.dev/vanilla/module-pattern/)

---

### Question 24: Answer A

**Explanation:**
- Curry function checks the number of received arguments
- If enough args (`args.length >= fn.length`), execute function
- If not enough, return a new function to receive more args

**Reference:** [JavaScript.info - Currying](https://javascript.info/currying-partials)

---

### Question 25: Answer B - Web Workers can directly access the DOM

**Explanation:**
- Web Workers run in a separate thread
- They do **NOT** have access to DOM, window, document
- Communicate with the main thread via `postMessage()`
- Can import scripts with `importScripts()`

**Reference:** [MDN - Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

---

### Question 26: Answer D - All of the above

**Explanation:**
Service Workers capabilities:
- Cache assets (CacheStorage API)
- Intercept fetch requests
- Background sync
- Push notifications

**Reference:** [MDN - Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

---

### Question 27: Answer B - Creation Phase -> Execution Phase

**Explanation:**
1. **Creation Phase:**
   - Create Scope Chain
   - Create variables, functions, arguments
   - Determine value of `this`

2. **Execution Phase:**
   - Assign values
   - Execute code line by line

**Reference:** [JavaScript Execution Context](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)

---

### Question 28: Answer B

**Explanation:**
Tail Call Optimization (TCO) requires:
- Return statement is a function call
- No operations after the recursive call

```javascript
// ❌ Not TCO: multiplication after recursive call
return n * factorial(n - 1);

// ✅ TCO: direct return of recursive call
return factorial(n - 1, n * acc);
```

**Note:** TCO is only implemented in Safari, not Chrome/Firefox

**Reference:** [ES6 Tail Call Optimization](https://2ality.com/2015/06/tail-call-optimization.html)

---

### Question 29: Answer D - All of the above

**Explanation:**
SharedArrayBuffer:
- Shares memory between main thread and workers
- Requires COOP/COEP headers (cross-origin isolation)
- Needs Atomics API to synchronize and avoid race conditions

```javascript
// Required headers
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

**Reference:** [MDN - SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)

---

### Question 30: Answer C - `performance.now()`

**Explanation:**
- `performance.now()` has the highest precision (microseconds)
- `Date.now()` only has millisecond precision
- `console.time()` is convenient but not programmatic
- `performance.now()` is not affected by system clock changes

```javascript
const start = performance.now();
// ... code to measure
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
```

**Reference:** [MDN - performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

---

## REFERENCES

1. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [JavaScript.info](https://javascript.info/)
3. [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
4. [ECMAScript Specification](https://tc39.es/ecma262/)
5. [Google Web Fundamentals](https://developers.google.com/web/fundamentals)
