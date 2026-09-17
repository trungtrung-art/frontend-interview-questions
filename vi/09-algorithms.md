# Bảng Tra Cứu 49 Thuật Toán
## Dành cho phỏng vấn Frontend

---

## 📋 Tổng Quan

Bảng tra cứu nhanh 49 thuật toán và cấu trúc dữ liệu, chia theo 10 nhóm. Mỗi dòng gồm độ phức tạp, tình huống dùng thực tế trong frontend, và link tới mô phỏng từng bước.

Nguồn mô phỏng: [alg0.dev](https://www.alg0.dev/) — Algorithm Visualizer của midudev, có mô phỏng tương tác Play/Step và code bằng JavaScript, Python, Java, C++, Rust.

### Cách dùng:
- ✅ Tra nhanh trước buổi phỏng vấn — không phải tài liệu học từ đầu
- ✅ Cột **Khi nào dùng** viết theo góc nhìn frontend, không phải lý thuyết chung
- ✅ Bấm ▶ để xem mô phỏng chạy từng bước trên alg0.dev
- ✅ Xem mục [Ưu tiên ôn trước](#-ưu-tiên-ôn-trước) nếu ít thời gian

### Ký hiệu:
- `n` — số phần tử đầu vào
- `V`, `E` — số đỉnh và số cạnh của đồ thị
- `k` — khoảng giá trị (range) của dữ liệu
- **TB** — trung bình · **Xấu nhất** — worst case

---

## 📚 Danh Sách Nhóm

| # | Nhóm | Số lượng |
|---|------|----------|
| 01 | [Concepts — Khái niệm nền](#1-concepts--khái-niệm-nền) | 7 |
| 02 | [Data Structures — Cấu trúc dữ liệu](#2-data-structures--cấu-trúc-dữ-liệu) | 8 |
| 03 | [Sorting — Sắp xếp](#3-sorting--sắp-xếp) | 10 |
| 04 | [Searching — Tìm kiếm](#4-searching--tìm-kiếm) | 4 |
| 05 | [Graphs — Đồ thị](#5-graphs--đồ-thị) | 5 |
| 06 | [Dynamic Programming — Quy hoạch động](#6-dynamic-programming--quy-hoạch-động) | 3 |
| 07 | [Backtracking — Quay lui](#7-backtracking--quay-lui) | 3 |
| 08 | [Divide and Conquer — Chia để trị](#8-divide-and-conquer--chia-để-trị) | 1 |
| 09 | [Math — Toán học](#9-math--toán-học) | 2 |
| 10 | [Compression — Nén dữ liệu](#10-compression--nén-dữ-liệu) | 6 |

**Tổng cộng: 49 thuật toán**

---

## 1. Concepts — Khái niệm nền

Nhóm này không có độ phức tạp riêng vì chúng là khái niệm và kỹ thuật, không phải thuật toán cụ thể.

| Khái niệm | Ý tưởng chính | Khi nào dùng trong FE | Demo |
|---|---|---|---|
| Big O Notation | Mô tả tốc độ tăng của chi phí theo kích thước input, bỏ qua hằng số | Ước lượng trước khi code; trả lời "sao nó chậm khi data lớn" | [▶](https://www.alg0.dev/big-o-notation) |
| Recursion | Hàm gọi lại chính nó, thu nhỏ bài toán cho tới base case | Duyệt cây DOM, menu lồng nhau, comment tree, traverse JSON | [▶](https://www.alg0.dev/recursion) |
| Two Pointers | Hai con trỏ chạy trên mảng đã sắp xếp, hạ O(n²) xuống O(n) | Tìm cặp có tổng bằng target, đảo mảng, khử trùng lặp tại chỗ | [▶](https://www.alg0.dev/two-pointers) |
| Sliding Window | Cửa sổ trượt giữ trạng thái của đoạn liên tiếp, không tính lại từ đầu | Rate limit, moving average cho chart, chuỗi con dài nhất | [▶](https://www.alg0.dev/sliding-window) |
| Space Complexity | Bộ nhớ phụ thuật toán dùng thêm ngoài input | Chọn in-place hay tạo mảng mới; quan trọng khi xử lý list lớn | [▶](https://www.alg0.dev/space-complexity) |
| Memoization | Cache kết quả theo tham số để lần sau không tính lại | Chính là cơ chế đằng sau `useMemo`, `useCallback`, `React.memo` | [▶](https://www.alg0.dev/memoization) |
| Greedy vs DP | Greedy chọn tối ưu cục bộ từng bước; DP xét mọi trạng thái con | Nhận ra khi nào tham lam là đủ, khi nào buộc phải quy hoạch động | [▶](https://www.alg0.dev/greedy-vs-dp) |

---

## 2. Data Structures — Cấu trúc dữ liệu

| Cấu trúc | Độ phức tạp thao tác chính | Khi nào dùng trong FE | Demo |
|---|---|---|---|
| Stack | push O(1) · pop O(1) · tìm O(n) | Undo/redo, history của router, kiểm tra thẻ HTML đóng/mở, call stack | [▶](https://www.alg0.dev/stack) |
| Queue | enqueue O(1) · dequeue O(1) · tìm O(n) | Hàng đợi request, task scheduler, nền của BFS | [▶](https://www.alg0.dev/queue) |
| Linked List | thêm/xoá O(1) khi đã có con trỏ · truy cập O(n) | Chèn/xoá nhiều ở giữa; ghép với hash table để làm LRU cache | [▶](https://www.alg0.dev/linked-list) |
| Hash Table | get/set/delete O(1) TB · O(n) xấu nhất khi đụng độ nhiều | `Object` và `Map` trong JS, khử trùng lặp, đếm tần suất, index lookup | [▶](https://www.alg0.dev/hash-table) |
| Binary Search Tree | tìm/thêm/xoá O(log n) TB · O(n) xấu nhất khi cây suy biến | Dữ liệu cần vừa giữ thứ tự vừa tìm nhanh; thực tế dùng bản cân bằng (AVL, Red-Black) | [▶](https://www.alg0.dev/binary-search-tree) |
| Heap | xem đỉnh O(1) · thêm/xoá O(log n) · tìm O(n) | Priority queue, lấy top-K, task theo độ ưu tiên, dùng trong Dijkstra | [▶](https://www.alg0.dev/heap) |
| Trie | tìm/thêm/xoá O(L) với L là độ dài khoá | Autocomplete cho search box, gợi ý từ khoá, kiểm tra prefix | [▶](https://www.alg0.dev/trie) |
| LRU Cache | get O(1) · put O(1) · evict O(1) | Cache response API, cache ảnh, giới hạn bộ nhớ phía client | [▶](https://www.alg0.dev/lru-cache) |

> **Lưu ý:** LRU Cache O(1) đạt được bằng cách ghép Hash Table (tìm nhanh) với Doubly Linked List (đổi thứ tự nhanh). Đây là câu hỏi thiết kế hay gặp.

---

## 3. Sorting — Sắp xếp

| Thuật toán | Time (TB) | Time (xấu nhất) | Space | Ổn định | Khi nào dùng | Demo |
|---|---|---|---|---|---|---|
| Bubble Sort | O(n²) | O(n²) | O(1) | Có | Chỉ để dạy học, không dùng trong code thật | [▶](https://www.alg0.dev/bubble-sort) |
| Selection Sort | O(n²) | O(n²) | O(1) | Không | Khi số lần ghi phải ít nhất — đúng n−1 lần swap | [▶](https://www.alg0.dev/selection-sort) |
| Insertion Sort | O(n²) | O(n²) | O(1) | Có | Mảng nhỏ hoặc gần như đã sắp xếp — chỉ O(n) khi đã sắp | [▶](https://www.alg0.dev/insertion-sort) |
| Quick Sort | O(n log n) | O(n²) | O(log n) | Không | Mặc định cho mảng lớn: in-place và thân thiện cache | [▶](https://www.alg0.dev/quick-sort) |
| Merge Sort | O(n log n) | O(n log n) | O(n) | Có | Khi cần ổn định hoặc cần đảm bảo O(n log n) trong mọi trường hợp | [▶](https://www.alg0.dev/merge-sort) |
| Heap Sort | O(n log n) | O(n log n) | O(1) | Không | Cần O(n log n) đảm bảo mà chỉ được dùng O(1) bộ nhớ phụ | [▶](https://www.alg0.dev/heap-sort) |
| Counting Sort | O(n+k) | O(n+k) | O(k) | Có | Số nguyên với khoảng giá trị k nhỏ — ví dụ sort theo rating 1–5 | [▶](https://www.alg0.dev/counting-sort) |
| Radix Sort | O(d·(n+k)) | O(d·(n+k)) | O(n+k) | Có | Số nguyên hoặc chuỗi cùng độ dài — sort ID, mã bưu chính | [▶](https://www.alg0.dev/radix-sort) |
| Shell Sort | ~O(n^1.25)–O(n^1.5) tuỳ gap | O(n²) bản gốc Shell · ~O(n^4/3) với Sedgewick | O(1) | Không | Bản cải tiến của Insertion cho mảng vừa, không tốn bộ nhớ phụ | [▶](https://www.alg0.dev/shell-sort) |
| Bucket Sort | O(n+k) | O(n²) | O(n+k) | Có nếu sort trong bucket ổn định | Số thực phân bố tương đối đều trong một khoảng | [▶](https://www.alg0.dev/bucket-sort) |

> **Ổn định (stable)** nghĩa là hai phần tử bằng nhau giữ nguyên thứ tự tương đối sau khi sắp xếp. Quan trọng khi sort bảng nhiều cột liên tiếp.

> **Liên hệ thực tế:** `Array.prototype.sort()` trong V8 dùng **TimSort** — lai giữa Merge Sort và Insertion Sort, ổn định, O(n log n) xấu nhất và O(n) khi mảng gần như đã sắp. Đây là câu hỏi hay bị vặn thêm sau khi anh trả lời về Quick Sort.

---

## 4. Searching — Tìm kiếm

| Thuật toán | Time (TB) | Time (xấu nhất) | Space | Điều kiện bắt buộc | Demo |
|---|---|---|---|---|---|
| Linear Search | O(n) | O(n) | O(1) | Không cần gì — dùng khi mảng nhỏ hoặc chưa sắp xếp | [▶](https://www.alg0.dev/linear-search) |
| Binary Search | O(log n) | O(log n) | O(1) | Mảng phải đã sắp xếp | [▶](https://www.alg0.dev/binary-search) |
| Jump Search | O(√n) | O(√n) | O(1) | Mảng đã sắp xếp; nhảy từng bước √n rồi quét lùi | [▶](https://www.alg0.dev/jump-search) |
| Interpolation Search | O(log log n) khi dữ liệu phân bố đều | O(n) | O(1) | Mảng đã sắp xếp **và** phân bố đều | [▶](https://www.alg0.dev/interpolation-search) |

---

## 5. Graphs — Đồ thị

| Thuật toán | Time | Space | Khi nào dùng trong FE | Demo |
|---|---|---|---|---|
| Breadth-First Search (BFS) | O(V+E) | O(V) | Đường ngắn nhất trên đồ thị không trọng số; duyệt cây DOM theo tầng | [▶](https://www.alg0.dev/bfs) |
| Depth-First Search (DFS) | O(V+E) | O(V) | Phát hiện chu trình, duyệt sâu cấu trúc lồng nhau, tô màu vùng liên thông | [▶](https://www.alg0.dev/dfs) |
| Dijkstra's Algorithm | O((V+E) log V) với binary heap | O(V) | Đường ngắn nhất khi cạnh có trọng số dương — routing, tính chi phí | [▶](https://www.alg0.dev/dijkstra) |
| Prim's Algorithm | O((V+E) log V) với binary heap | O(V) | Cây khung nhỏ nhất — nối tất cả điểm với tổng chi phí thấp nhất | [▶](https://www.alg0.dev/prim) |
| Topological Sort | O(V+E) | O(V) | Thứ tự phụ thuộc: bundler xếp module, task runner, resolve dependency | [▶](https://www.alg0.dev/topological-sort) |

> **Lưu ý về Dijkstra và Prim:** con số O((V+E) log V) là bản cài bằng binary heap — bản thường gặp nhất. Dùng Fibonacci heap thì còn O(E + V log V), nhưng hiếm khi cài trong thực tế vì hằng số lớn.

---

## 6. Dynamic Programming — Quy hoạch động

| Thuật toán | Time | Space | Ý tưởng | Demo |
|---|---|---|---|---|
| Fibonacci DP | O(n) | O(n), tối ưu còn O(1) | Memoization hoặc bottom-up thay cho đệ quy trần O(2ⁿ) | [▶](https://www.alg0.dev/fibonacci-dp) |
| Knapsack 0/1 | O(n·W) | O(n·W), tối ưu còn O(W) | Bảng trạng thái theo (số món đã xét, sức chứa còn lại) | [▶](https://www.alg0.dev/knapsack) |
| Longest Common Subsequence | O(m·n) | O(m·n), tối ưu còn O(min(m,n)) | Nền của thuật toán diff — `git diff`, so sánh version | [▶](https://www.alg0.dev/lcs) |

---

## 7. Backtracking — Quay lui

| Bài toán | Time (xấu nhất) | Space | Ý tưởng | Demo |
|---|---|---|---|---|
| N-Queens | O(N!) | O(N) | Đặt từng quân hậu, gặp xung đột thì lùi lại thử vị trí khác | [▶](https://www.alg0.dev/n-queens) |
| Sudoku Solver | O(9^m) với m là số ô trống | O(m) | Thử 1–9 cho mỗi ô, vi phạm luật thì quay lui | [▶](https://www.alg0.dev/sudoku-solver) |
| Maze Pathfinding | O(4^(R·C)) lý thuyết; thực tế O(R·C) khi đánh dấu ô đã thăm | O(R·C) | Thử 4 hướng, đánh dấu đã đi, gặp ngõ cụt thì lùi | [▶](https://www.alg0.dev/maze-pathfinding) |

---

## 8. Divide and Conquer — Chia để trị

| Bài toán | Time | Space | Ý tưởng | Demo |
|---|---|---|---|---|
| Tower of Hanoi | O(2ⁿ) | O(n) — độ sâu đệ quy | Chuyển n−1 đĩa sang cọc phụ, chuyển đĩa lớn nhất, rồi chuyển n−1 đĩa về | [▶](https://www.alg0.dev/tower-of-hanoi) |

---

## 9. Math — Toán học

| Thuật toán | Time | Space | Ý tưởng và ứng dụng | Demo |
|---|---|---|---|---|
| Euclidean Algorithm | O(log min(a,b)) | O(1) | Tìm ƯCLN bằng phép chia dư liên tiếp — rút gọn phân số, tính tỉ lệ khung hình | [▶](https://www.alg0.dev/euclidean) |
| Sieve of Eratosthenes | O(n log log n) | O(n) | Đánh dấu bội của từng số nguyên tố để lọc mọi số nguyên tố ≤ n | [▶](https://www.alg0.dev/sieve-of-eratosthenes) |

---

## 10. Compression — Nén dữ liệu

Nhóm này dùng cột khác với các nhóm trên. Lý do: LZ77, LZW, DEFLATE và Brotli không phải thuật toán có độ phức tạp sách giáo khoa gọn gàng — DEFLATE và Brotli là **định dạng nén** ghép nhiều kỹ thuật, chi phí thay đổi theo mức nén và kích thước cửa sổ. Ghi Big O cho chúng sẽ là con số giả.

| Thuật toán | Cơ chế | Hiệu quả nén | Dùng ở đâu trong FE | Demo |
|---|---|---|---|---|
| Run-Length Encoding | Thay chuỗi ký tự lặp liên tiếp bằng cặp (ký tự, số lần) | Rất tốt với dữ liệu lặp nhiều; **phình to** với dữ liệu ngẫu nhiên | Ảnh bitmap đơn sắc, mask, sprite đơn giản | [▶](https://www.alg0.dev/run-length-encoding) |
| LZ77 | Thay đoạn lặp bằng con trỏ lùi (khoảng cách, độ dài) trong cửa sổ trượt | Là lõi của gzip và Brotli | Không dùng trực tiếp — nền của DEFLATE | [▶](https://www.alg0.dev/lz77) |
| LZW | Xây từ điển động ngay khi quét, không cần gửi kèm từ điển | ~40–60% với văn bản | Định dạng GIF, TIFF, PDF | [▶](https://www.alg0.dev/lzw) |
| Huffman Coding | Mã độ dài thay đổi: ký tự hay gặp thì mã ngắn hơn. Dựng cây mất O(n log n) | ~20–30% với văn bản | Lớp mã hoá entropy bên trong DEFLATE, JPEG, MP3 | [▶](https://www.alg0.dev/huffman-coding) |
| DEFLATE | LZ77 + Huffman | ~60–70% với text, JS, CSS | `Content-Encoding: gzip`, nén bundle, định dạng PNG và ZIP | [▶](https://www.alg0.dev/deflate) |
| Brotli | LZ77 + Huffman + từ điển tĩnh ~120KB các chuỗi web hay gặp, 11 mức nén | Nhỏ hơn gzip khoảng 15–20% với văn bản | `Content-Encoding: br`, nén static asset, mặc định trên CDN hiện đại | [▶](https://www.alg0.dev/brotli) |

---

## 🎯 Ưu Tiên Ôn Trước

Nếu chỉ còn ít thời gian, 11 mục dưới đây là những thứ thực sự hay bị hỏi trong phỏng vấn frontend.

| Ưu tiên | Mục | Vì sao hay bị hỏi |
|---|---|---|
| 1 | [Big O Notation](#1-concepts--khái-niệm-nền) | Nền cho mọi câu "chỗ này chậm ở đâu, sửa thế nào" |
| 2 | [Hash Table](#2-data-structures--cấu-trúc-dữ-liệu) | `Object` và `Map`, khử trùng lặp, đếm tần suất — gặp nhiều nhất |
| 3 | [Memoization](#1-concepts--khái-niệm-nền) | Nối thẳng sang `useMemo`, `useCallback`, `React.memo` |
| 4 | [Binary Search](#4-searching--tìm-kiếm) | Gần như luôn xuất hiện ở vòng live-coding |
| 5 | [Two Pointers](#1-concepts--khái-niệm-nền) | Dạng bài live-coding phổ biến, dễ ghi điểm |
| 6 | [Sliding Window](#1-concepts--khái-niệm-nền) | Chuỗi con dài nhất, rate limit, moving average |
| 7 | [Stack](#2-data-structures--cấu-trúc-dữ-liệu) | Undo/redo, kiểm tra thẻ đóng/mở — xem [find-unclosed-tags.js](../find-unclosed-tags.js) |
| 8 | [BFS và DFS](#5-graphs--đồ-thị) | Duyệt cây DOM và mọi cấu trúc lồng nhau |
| 9 | [Quick Sort vs Merge Sort](#3-sorting--sắp-xếp) | Dẫn tới câu "`Array.sort()` cài bằng gì" → TimSort |
| 10 | [LRU Cache](#2-data-structures--cấu-trúc-dữ-liệu) | Bài thiết kế hay gặp ở vòng system design |
| 11 | [DEFLATE và Brotli](#10-compression--nén-dữ-liệu) | Vòng performance: "giảm bundle size bằng cách nào" |

---

## 📖 Tài Liệu Tham Khảo

- [alg0.dev](https://www.alg0.dev/) — mô phỏng tương tác cho cả 49 thuật toán trên
- [MDN — Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [V8 blog — Getting things sorted in V8](https://v8.dev/blog/array-sort) — vì sao V8 chọn TimSort
- [web.dev — Brotli](https://web.dev/articles/codelab-text-compression-brotli)
- "Introduction to Algorithms" (CLRS) — sách tra cứu chuẩn về độ phức tạp

---

## 🔗 Liên Quan Trong Repo

- [04-problem-solving-system-design.md](./04-problem-solving-system-design.md) — câu hỏi problem solving và system design
- [03-performance-optimization.md](./03-performance-optimization.md) — Web Vitals và tối ưu, liên quan nhóm Compression
- [find-unclosed-tags.js](../find-unclosed-tags.js) — bài toán dùng Stack, có lời giải chi tiết

---

*Cập nhật lần cuối: September 2026*
