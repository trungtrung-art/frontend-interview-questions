# 49 Algorithms Reference
## For Frontend Interviews

---

## Overview

A quick reference for 49 algorithms and data structures across 10 categories. Each row gives the complexity, a real frontend use case, and a link to a step-by-step visualization.

Visualization source: [alg0.dev](https://www.alg0.dev/) — Algorithm Visualizer by midudev, with interactive Play/Step controls and code in JavaScript, Python, Java, C++, and Rust.

### How to use:
- Built for a quick check before an interview, not for learning from scratch
- The **When to use** column is written from a frontend angle, not as general theory
- Click the play link to watch the algorithm run step by step on alg0.dev
- See [Study these first](#study-these-first) if you are short on time

### Notation:
- `n` — number of input elements
- `V`, `E` — vertices and edges of a graph
- `k` — the range of the data values
- **Avg** — average case · **Worst** — worst case

---

## Category List

| # | Category | Count |
|---|----------|-------|
| 01 | [Concepts](#1-concepts) | 7 |
| 02 | [Data Structures](#2-data-structures) | 8 |
| 03 | [Sorting](#3-sorting) | 10 |
| 04 | [Searching](#4-searching) | 4 |
| 05 | [Graphs](#5-graphs) | 5 |
| 06 | [Dynamic Programming](#6-dynamic-programming) | 3 |
| 07 | [Backtracking](#7-backtracking) | 3 |
| 08 | [Divide and Conquer](#8-divide-and-conquer) | 1 |
| 09 | [Math](#9-math) | 2 |
| 10 | [Compression](#10-compression) | 6 |

**Total: 49 algorithms**

---

## 1. Concepts

This category has no complexity column because these are concepts and techniques rather than specific algorithms.

| Concept | Core idea | When to use in FE | Demo |
|---|---|---|---|
| Big O Notation | Describes how cost grows with input size, ignoring constants | Estimating cost before coding; answering "why is this slow on large data" | [▶](https://www.alg0.dev/big-o-notation) |
| Recursion | A function calls itself, shrinking the problem until it hits a base case | Walking the DOM tree, nested menus, comment trees, JSON traversal | [▶](https://www.alg0.dev/recursion) |
| Two Pointers | Two pointers move through a sorted array, cutting O(n²) down to O(n) | Finding a pair summing to a target, reversing arrays, in-place dedupe | [▶](https://www.alg0.dev/two-pointers) |
| Sliding Window | A moving window holds the state of a contiguous range instead of recomputing | Rate limiting, moving averages for charts, longest substring problems | [▶](https://www.alg0.dev/sliding-window) |
| Space Complexity | The extra memory an algorithm uses beyond its input | Choosing in-place versus allocating a new array; matters on large lists | [▶](https://www.alg0.dev/space-complexity) |
| Memoization | Cache results by argument so the work is never repeated | Exactly the mechanism behind `useMemo`, `useCallback`, and `React.memo` | [▶](https://www.alg0.dev/memoization) |
| Greedy vs DP | Greedy takes the local optimum each step; DP evaluates every subproblem | Recognizing when greedy suffices and when you need dynamic programming | [▶](https://www.alg0.dev/greedy-vs-dp) |

---

## 2. Data Structures

| Structure | Complexity of main operations | When to use in FE | Demo |
|---|---|---|---|
| Stack | push O(1) · pop O(1) · search O(n) | Undo/redo, router history, matching HTML open/close tags, the call stack | [▶](https://www.alg0.dev/stack) |
| Queue | enqueue O(1) · dequeue O(1) · search O(n) | Request queues, task schedulers, the backbone of BFS | [▶](https://www.alg0.dev/queue) |
| Linked List | insert/delete O(1) given the node · access O(n) | Frequent inserts and deletes in the middle; pairs with a hash map for LRU | [▶](https://www.alg0.dev/linked-list) |
| Hash Table | get/set/delete O(1) avg · O(n) worst under heavy collisions | `Object` and `Map` in JS, deduplication, frequency counting, index lookups | [▶](https://www.alg0.dev/hash-table) |
| Binary Search Tree | search/insert/delete O(log n) avg · O(n) worst when degenerate | Data that needs both ordering and fast lookup; in practice use a balanced variant (AVL, Red-Black) | [▶](https://www.alg0.dev/binary-search-tree) |
| Heap | peek O(1) · insert/extract O(log n) · search O(n) | Priority queues, top-K selection, prioritized tasks, used inside Dijkstra | [▶](https://www.alg0.dev/heap) |
| Trie | search/insert/delete O(L) where L is the key length | Autocomplete in a search box, keyword suggestions, prefix checks | [▶](https://www.alg0.dev/trie) |
| LRU Cache | get O(1) · put O(1) · evict O(1) | Caching API responses, caching images, bounding client-side memory | [▶](https://www.alg0.dev/lru-cache) |

> **Note:** an LRU Cache reaches O(1) by combining a Hash Table (fast lookup) with a Doubly Linked List (fast reordering). This is a common design question.

---

## 3. Sorting

| Algorithm | Time (avg) | Time (worst) | Space | Stable | When to use | Demo |
|---|---|---|---|---|---|---|
| Bubble Sort | O(n²) | O(n²) | O(1) | Yes | Teaching only, never in production code | [▶](https://www.alg0.dev/bubble-sort) |
| Selection Sort | O(n²) | O(n²) | O(1) | No | When writes must be minimized — exactly n−1 swaps | [▶](https://www.alg0.dev/selection-sort) |
| Insertion Sort | O(n²) | O(n²) | O(1) | Yes | Small or nearly sorted arrays — O(n) when already sorted | [▶](https://www.alg0.dev/insertion-sort) |
| Quick Sort | O(n log n) | O(n²) | O(log n) | No | The default for large arrays: in-place and cache-friendly | [▶](https://www.alg0.dev/quick-sort) |
| Merge Sort | O(n log n) | O(n log n) | O(n) | Yes | When you need stability or a guaranteed O(n log n) | [▶](https://www.alg0.dev/merge-sort) |
| Heap Sort | O(n log n) | O(n log n) | O(1) | No | Guaranteed O(n log n) with only O(1) auxiliary memory | [▶](https://www.alg0.dev/heap-sort) |
| Counting Sort | O(n+k) | O(n+k) | O(k) | Yes | Integers with a small value range k — e.g. sorting by a 1–5 rating | [▶](https://www.alg0.dev/counting-sort) |
| Radix Sort | O(d·(n+k)) | O(d·(n+k)) | O(n+k) | Yes | Integers or fixed-length strings — IDs, postal codes | [▶](https://www.alg0.dev/radix-sort) |
| Shell Sort | ~O(n^1.25)–O(n^1.5) depending on gaps | O(n²) with Shell's original gaps · ~O(n^4/3) with Sedgewick's | O(1) | No | An improved Insertion Sort for mid-size arrays with no extra memory | [▶](https://www.alg0.dev/shell-sort) |
| Bucket Sort | O(n+k) | O(n²) | O(n+k) | Yes if the per-bucket sort is stable | Floats spread fairly evenly across a range | [▶](https://www.alg0.dev/bucket-sort) |

> **Stable** means two equal elements keep their relative order after sorting. It matters when sorting a table by several columns in sequence.

> **In practice:** `Array.prototype.sort()` in V8 uses **TimSort** — a hybrid of Merge Sort and Insertion Sort that is stable, O(n log n) in the worst case, and O(n) when the array is nearly sorted. Interviewers often follow up with this after you answer about Quick Sort.

---

## 4. Searching

| Algorithm | Time (avg) | Time (worst) | Space | Requirement | Demo |
|---|---|---|---|---|---|
| Linear Search | O(n) | O(n) | O(1) | None — fine for small or unsorted arrays | [▶](https://www.alg0.dev/linear-search) |
| Binary Search | O(log n) | O(log n) | O(1) | The array must be sorted | [▶](https://www.alg0.dev/binary-search) |
| Jump Search | O(√n) | O(√n) | O(1) | Sorted array; jumps in √n steps then scans backward | [▶](https://www.alg0.dev/jump-search) |
| Interpolation Search | O(log log n) on uniformly distributed data | O(n) | O(1) | Sorted **and** uniformly distributed | [▶](https://www.alg0.dev/interpolation-search) |

---

## 5. Graphs

| Algorithm | Time | Space | When to use in FE | Demo |
|---|---|---|---|---|
| Breadth-First Search (BFS) | O(V+E) | O(V) | Shortest path on an unweighted graph; walking the DOM level by level | [▶](https://www.alg0.dev/bfs) |
| Depth-First Search (DFS) | O(V+E) | O(V) | Cycle detection, deep traversal of nested structures, flood fill | [▶](https://www.alg0.dev/dfs) |
| Dijkstra's Algorithm | O((V+E) log V) with a binary heap | O(V) | Shortest path with positive edge weights — routing, cost calculation | [▶](https://www.alg0.dev/dijkstra) |
| Prim's Algorithm | O((V+E) log V) with a binary heap | O(V) | Minimum spanning tree — connecting all points at the lowest total cost | [▶](https://www.alg0.dev/prim) |
| Topological Sort | O(V+E) | O(V) | Dependency ordering: bundler module order, task runners, dependency resolution | [▶](https://www.alg0.dev/topological-sort) |

> **On Dijkstra and Prim:** the O((V+E) log V) figure is the binary-heap implementation, which is the one you normally write. A Fibonacci heap brings it to O(E + V log V), but it is rarely implemented because of its large constant factor.

---

## 6. Dynamic Programming

| Algorithm | Time | Space | Idea | Demo |
|---|---|---|---|---|
| Fibonacci DP | O(n) | O(n), reducible to O(1) | Memoization or a bottom-up table replacing the naive O(2ⁿ) recursion | [▶](https://www.alg0.dev/fibonacci-dp) |
| Knapsack 0/1 | O(n·W) | O(n·W), reducible to O(W) | A state table indexed by (items considered, remaining capacity) | [▶](https://www.alg0.dev/knapsack) |
| Longest Common Subsequence | O(m·n) | O(m·n), reducible to O(min(m,n)) | The basis of diff algorithms — `git diff`, version comparison | [▶](https://www.alg0.dev/lcs) |

---

## 7. Backtracking

| Problem | Time (worst) | Space | Idea | Demo |
|---|---|---|---|---|
| N-Queens | O(N!) | O(N) | Place queens one at a time; on a conflict, back up and try elsewhere | [▶](https://www.alg0.dev/n-queens) |
| Sudoku Solver | O(9^m) where m is the number of empty cells | O(m) | Try 1–9 in each cell and backtrack whenever a rule breaks | [▶](https://www.alg0.dev/sudoku-solver) |
| Maze Pathfinding | O(4^(R·C)) in theory; O(R·C) in practice when marking visited cells | O(R·C) | Try all four directions, mark visited, back up at dead ends | [▶](https://www.alg0.dev/maze-pathfinding) |

---

## 8. Divide and Conquer

| Problem | Time | Space | Idea | Demo |
|---|---|---|---|---|
| Tower of Hanoi | O(2ⁿ) | O(n) — recursion depth | Move n−1 disks to the spare peg, move the largest, then move n−1 back | [▶](https://www.alg0.dev/tower-of-hanoi) |

---

## 9. Math

| Algorithm | Time | Space | Idea and use | Demo |
|---|---|---|---|---|
| Euclidean Algorithm | O(log min(a,b)) | O(1) | GCD by repeated remainder — reducing fractions, computing aspect ratios | [▶](https://www.alg0.dev/euclidean) |
| Sieve of Eratosthenes | O(n log log n) | O(n) | Mark the multiples of each prime to filter out every prime ≤ n | [▶](https://www.alg0.dev/sieve-of-eratosthenes) |

---

## 10. Compression

This category uses different columns from the ones above. LZ77, LZW, DEFLATE, and Brotli do not have clean textbook complexities — DEFLATE and Brotli are **compression formats** that combine several techniques, and their cost shifts with the compression level and window size. Writing a Big O for them would be a made-up number.

| Algorithm | Mechanism | Compression | Where it shows up in FE | Demo |
|---|---|---|---|---|
| Run-Length Encoding | Replaces runs of a repeated character with a (character, count) pair | Excellent on highly repetitive data; **expands** random data | Monochrome bitmaps, masks, simple sprites | [▶](https://www.alg0.dev/run-length-encoding) |
| LZ77 | Replaces repeated spans with a back-reference (distance, length) inside a sliding window | The core of gzip and Brotli | Not used directly — it is the foundation of DEFLATE | [▶](https://www.alg0.dev/lz77) |
| LZW | Builds a dictionary on the fly while scanning, so no dictionary is transmitted | ~40–60% on text | The GIF, TIFF, and PDF formats | [▶](https://www.alg0.dev/lzw) |
| Huffman Coding | Variable-length codes: frequent characters get shorter codes. Building the tree costs O(n log n) | ~20–30% on text | The entropy-coding layer inside DEFLATE, JPEG, and MP3 | [▶](https://www.alg0.dev/huffman-coding) |
| DEFLATE | LZ77 + Huffman | ~60–70% on text, JS, and CSS | `Content-Encoding: gzip`, bundle compression, the PNG and ZIP formats | [▶](https://www.alg0.dev/deflate) |
| Brotli | LZ77 + Huffman + a ~120KB static dictionary of common web strings, 11 quality levels | About 15–20% smaller than gzip on text | `Content-Encoding: br`, static asset compression, the default on modern CDNs | [▶](https://www.alg0.dev/brotli) |

---

## Study These First

If time is short, these 11 entries are the ones that actually come up in frontend interviews.

| Priority | Topic | Why it comes up |
|---|---|---|
| 1 | [Big O Notation](#1-concepts) | The basis for every "where is this slow and how do you fix it" question |
| 2 | [Hash Table](#2-data-structures) | `Object` and `Map`, deduplication, frequency counting — the most common of all |
| 3 | [Memoization](#1-concepts) | Leads directly into `useMemo`, `useCallback`, and `React.memo` |
| 4 | [Binary Search](#4-searching) | Shows up in nearly every live-coding round |
| 5 | [Two Pointers](#1-concepts) | A common live-coding shape and an easy way to score points |
| 6 | [Sliding Window](#1-concepts) | Longest-substring problems, rate limiting, moving averages |
| 7 | [Stack](#2-data-structures) | Undo/redo, matching open and close tags — see [find-unclosed-tags.js](../find-unclosed-tags.js) |
| 8 | [BFS and DFS](#5-graphs) | Walking the DOM and every other nested structure |
| 9 | [Quick Sort vs Merge Sort](#3-sorting) | Leads to "how is `Array.sort()` implemented" → TimSort |
| 10 | [LRU Cache](#2-data-structures) | A frequent design question in the system design round |
| 11 | [DEFLATE and Brotli](#10-compression) | The performance round: "how would you reduce bundle size" |

---

## References

- [alg0.dev](https://www.alg0.dev/) — interactive visualizations for all 49 algorithms above
- [MDN — Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [V8 blog — Getting things sorted in V8](https://v8.dev/blog/array-sort) — why V8 chose TimSort
- [web.dev — Brotli](https://web.dev/articles/codelab-text-compression-brotli)
- "Introduction to Algorithms" (CLRS) — the standard complexity reference

---

## Related In This Repo

- [04-problem-solving-system-design.md](./04-problem-solving-system-design.md) — problem solving and system design questions
- [03-performance-optimization.md](./03-performance-optimization.md) — Web Vitals and optimization, related to the Compression category
- [find-unclosed-tags.js](../find-unclosed-tags.js) — a Stack problem with a fully worked solution

---

*Last updated: September 2026*
