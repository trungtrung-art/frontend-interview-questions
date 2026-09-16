/**
 * =============================================================================
 * BÀI TOÁN: Tìm các thẻ HTML thiếu thẻ đóng
 * =============================================================================
 *
 * Đầu vào: Một chuỗi HTML (string)
 * Đầu ra: Danh sách các thẻ thiếu thẻ đóng
 *
 * PHƯƠNG PHÁP: Sử dụng cấu trúc dữ liệu STACK (ngăn xếp)
 *
 * Tại sao dùng Stack?
 * - HTML có cấu trúc lồng nhau (nested structure)
 * - Thẻ mở sau cùng phải được đóng trước (LIFO - Last In First Out)
 * - Stack là cấu trúc dữ liệu hoàn hảo cho bài toán này
 *
 * Ví dụ: <div><span></span></div>
 *        - Gặp <div>  → push "div" vào stack  → stack: ["div"]
 *        - Gặp <span> → push "span" vào stack → stack: ["div", "span"]
 *        - Gặp </span> → pop "span" ra        → stack: ["div"]
 *        - Gặp </div>  → pop "div" ra         → stack: []
 *        - Kết thúc: stack rỗng → tất cả thẻ đã đóng đúng
 */

// Danh sách các thẻ tự đóng (self-closing tags / void elements)
// Các thẻ này không cần thẻ đóng theo chuẩn HTML5
const SELF_CLOSING_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

/**
 * Hàm chính: Tìm các thẻ HTML thiếu thẻ đóng
 * @param {string} htmlString - Chuỗi HTML cần kiểm tra
 * @returns {Array} - Mảng chứa thông tin các thẻ thiếu thẻ đóng
 */
function findUnclosedTags(htmlString) {
  // =========================================================================
  // BƯỚC 1: Định nghĩa Regular Expression để tìm tất cả các thẻ HTML
  // =========================================================================

  /**
   * Regex pattern giải thích:
   *
   * <                    - Bắt đầu bằng dấu <
   * (\/?)?               - Group 1: Có thể có dấu / (cho thẻ đóng) - optional
   * ([a-zA-Z][a-zA-Z0-9]*) - Group 2: Tên thẻ (bắt đầu bằng chữ cái, theo sau là chữ/số)
   * [^>]*                - Bất kỳ ký tự nào không phải > (attributes)
   * (\/)?                - Group 3: Có thể có dấu / trước > (self-closing như <br/>)
   * >                    - Kết thúc bằng dấu >
   *
   * Flag 'gi':
   *   g - global (tìm tất cả, không dừng ở kết quả đầu tiên)
   *   i - case insensitive (không phân biệt hoa thường)
   */
  const tagRegex = /<(\/?)?([a-zA-Z][a-zA-Z0-9]*)[^>]*(\/)?>/gi;

  // =========================================================================
  // BƯỚC 2: Khởi tạo Stack và biến lưu kết quả
  // =========================================================================

  /**
   * Stack sẽ lưu các object có cấu trúc:
   * {
   *   tagName: string,    - Tên thẻ (lowercase)
   *   position: number,   - Vị trí trong chuỗi gốc
   *   line: number,       - Số dòng (để debug dễ hơn)
   *   column: number      - Số cột
   * }
   */
  const stack = [];

  // Mảng lưu các thẻ thiếu thẻ đóng
  const unclosedTags = [];

  // Mảng lưu các thẻ đóng không có thẻ mở tương ứng
  const unmatchedClosingTags = [];

  // =========================================================================
  // BƯỚC 3: Hàm helper tính số dòng và cột từ vị trí
  // =========================================================================

  /**
   * Tính số dòng và cột từ index trong chuỗi
   * Hữu ích để báo lỗi chính xác vị trí
   */
  function getLineAndColumn(str, index) {
    const lines = str.substring(0, index).split('\n');
    return {
      line: lines.length,
      column: lines[lines.length - 1].length + 1
    };
  }

  // =========================================================================
  // BƯỚC 4: Duyệt qua tất cả các thẻ HTML tìm được
  // =========================================================================

  let match;

  /**
   * regex.exec() trả về:
   * - match[0]: Toàn bộ chuỗi khớp (ví dụ: "<div class='container'>")
   * - match[1]: Group 1 - "/" nếu là thẻ đóng, undefined nếu là thẻ mở
   * - match[2]: Group 2 - Tên thẻ (ví dụ: "div")
   * - match[3]: Group 3 - "/" nếu là self-closing (ví dụ: <br/>)
   * - match.index: Vị trí bắt đầu trong chuỗi gốc
   */
  while ((match = tagRegex.exec(htmlString)) !== null) {
    const isClosingTag = match[1] === '/';           // Có "/" ở đầu → thẻ đóng
    const tagName = match[2].toLowerCase();          // Chuẩn hóa về lowercase
    const isSelfClosing = match[3] === '/';          // Có "/" ở cuối → tự đóng
    const position = match.index;
    const { line, column } = getLineAndColumn(htmlString, position);

    // -----------------------------------------------------------------
    // TRƯỜNG HỢP 1: Thẻ tự đóng (self-closing)
    // -----------------------------------------------------------------
    // Bỏ qua các thẻ như <br>, <img>, <input>, <br/>, v.v.
    // Chúng không cần thẻ đóng
    if (SELF_CLOSING_TAGS.has(tagName) || isSelfClosing) {
      continue;
    }

    // -----------------------------------------------------------------
    // TRƯỜNG HỢP 2: Thẻ đóng (closing tag)
    // -----------------------------------------------------------------
    if (isClosingTag) {
      /**
       * Khi gặp thẻ đóng, ta cần tìm thẻ mở tương ứng trong stack
       *
       * Có 3 tình huống:
       * a) Thẻ đóng khớp với thẻ mở cuối cùng trong stack → OK, pop ra
       * b) Thẻ đóng khớp với thẻ mở ở giữa stack → Các thẻ phía trên bị thiếu đóng
       * c) Không tìm thấy thẻ mở tương ứng → Thẻ đóng thừa
       */

      // Tìm vị trí thẻ mở tương ứng trong stack (tìm từ cuối lên)
      let foundIndex = -1;
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].tagName === tagName) {
          foundIndex = i;
          break;
        }
      }

      if (foundIndex !== -1) {
        // Tìm thấy thẻ mở tương ứng

        // Tất cả các thẻ phía trên (sau foundIndex) đều thiếu thẻ đóng
        // Ví dụ: stack = [div, span, p], gặp </div>
        //        → span và p thiếu thẻ đóng
        for (let i = stack.length - 1; i > foundIndex; i--) {
          unclosedTags.push({
            ...stack[i],
            reason: `Thiếu thẻ đóng trước </${tagName}>`
          });
        }

        // Xóa thẻ đã khớp và các thẻ bên trên khỏi stack
        stack.splice(foundIndex);
      } else {
        // Không tìm thấy thẻ mở tương ứng → thẻ đóng thừa
        unmatchedClosingTags.push({
          tagName,
          position,
          line,
          column,
          reason: 'Thẻ đóng không có thẻ mở tương ứng'
        });
      }
    }
    // -----------------------------------------------------------------
    // TRƯỜNG HỢP 3: Thẻ mở (opening tag)
    // -----------------------------------------------------------------
    else {
      // Đẩy thẻ mở vào stack
      stack.push({
        tagName,
        position,
        line,
        column
      });
    }
  }

  // =========================================================================
  // BƯỚC 5: Xử lý các thẻ còn lại trong stack
  // =========================================================================

  /**
   * Sau khi duyệt hết chuỗi HTML, nếu stack còn phần tử
   * → Đó là các thẻ mở nhưng không có thẻ đóng tương ứng
   */
  while (stack.length > 0) {
    const tag = stack.pop();
    unclosedTags.push({
      ...tag,
      reason: 'Không tìm thấy thẻ đóng'
    });
  }

  // =========================================================================
  // BƯỚC 6: Trả về kết quả
  // =========================================================================

  return {
    unclosedTags,           // Các thẻ mở thiếu thẻ đóng
    unmatchedClosingTags,   // Các thẻ đóng thừa (không có thẻ mở)
    isValid: unclosedTags.length === 0 && unmatchedClosingTags.length === 0
  };
}

// =============================================================================
// PHẦN TEST VÀ VÍ DỤ
// =============================================================================

// Test case 1: HTML hợp lệ
const validHTML = `
<div>
  <span>Hello</span>
  <p>World</p>
</div>
`;

// Test case 2: Thiếu thẻ đóng </span>
const missingClosing1 = `
<div>
  <span>Hello
  <p>World</p>
</div>
`;

// Test case 3: Thiếu nhiều thẻ đóng
const missingClosing2 = `
<html>
  <body>
    <div>
      <ul>
        <li>Item 1
        <li>Item 2
      </ul>
    </div>
  </body>
`;

// Test case 4: Thẻ đóng thừa
const extraClosing = `
<div>
  <span>Hello</span>
  </p>
</div>
`;

// Test case 5: Có thẻ tự đóng
const withSelfClosing = `
<div>
  <img src="image.jpg">
  <br>
  <input type="text">
  <span>Text
</div>
`;

// =============================================================================
// HÀM HELPER: In kết quả đẹp
// =============================================================================

function printResult(testName, html, result) {
  console.log('\n' + '='.repeat(60));
  console.log(`TEST: ${testName}`);
  console.log('='.repeat(60));
  console.log('HTML Input:');
  console.log(html);
  console.log('-'.repeat(60));

  if (result.isValid) {
    console.log('✅ HTML hợp lệ - Tất cả thẻ đều đóng đúng');
  } else {
    if (result.unclosedTags.length > 0) {
      console.log('❌ Các thẻ thiếu thẻ đóng:');
      result.unclosedTags.forEach((tag, index) => {
        console.log(`   ${index + 1}. <${tag.tagName}> tại dòng ${tag.line}, cột ${tag.column}`);
        console.log(`      Lý do: ${tag.reason}`);
      });
    }

    if (result.unmatchedClosingTags.length > 0) {
      console.log('❌ Các thẻ đóng thừa:');
      result.unmatchedClosingTags.forEach((tag, index) => {
        console.log(`   ${index + 1}. </${tag.tagName}> tại dòng ${tag.line}, cột ${tag.column}`);
        console.log(`      Lý do: ${tag.reason}`);
      });
    }
  }
}

// Chạy các test
console.log('\n🔍 KIỂM TRA CÁC THẺ HTML THIẾU THẺ ĐÓNG\n');

printResult('HTML hợp lệ', validHTML, findUnclosedTags(validHTML));
printResult('Thiếu </span>', missingClosing1, findUnclosedTags(missingClosing1));
printResult('Thiếu nhiều thẻ', missingClosing2, findUnclosedTags(missingClosing2));
printResult('Thẻ đóng thừa', extraClosing, findUnclosedTags(extraClosing));
printResult('Có thẻ tự đóng', withSelfClosing, findUnclosedTags(withSelfClosing));

// Export để sử dụng ở nơi khác
module.exports = { findUnclosedTags, SELF_CLOSING_TAGS };
