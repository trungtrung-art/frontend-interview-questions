/** Đoạn "Đánh đổi" thêm vào giải thích của 35 câu trong 06-typescript-questions.md */
export const FILE = '06-typescript-questions.md';
export const TRADEOFFS = {
  1: `\`interface\` gộp được nhiều khai báo cùng tên, rất tiện khi cần mở rộng kiểu của thư viện bên ngoài — nhưng chính tính chất đó khiến một file bất kỳ có thể âm thầm thêm trường vào kiểu của anh. \`type\` không gộp nên an toàn hơn, đổi lại không mở rộng được từ ngoài. Quy ước phổ biến: \`interface\` cho API công khai, \`type\` cho mọi thứ khác.`,

  2: `\`unknown\` buộc phải thu hẹp kiểu trước khi dùng nên an toàn, nhưng làm code dài ra và đôi khi phải viết type guard cho thứ mình đã chắc chắn. \`any\` gọn nhưng tắt kiểm tra kiểu theo kiểu lây lan — một \`any\` chảy qua mười hàm là mười chỗ mất an toàn mà không ai thấy. Dùng \`unknown\` ở ranh giới dữ liệu vào, \`any\` chỉ khi đang gỡ dần code cũ.`,

  3: `\`never\` giúp trình biên dịch bắt lỗi khi thêm nhánh mới vào union mà quên xử lý — kỹ thuật kiểm tra vét cạn rất đáng dùng trong \`switch\`. Đổi lại thông báo lỗi của nó khó đọc với người chưa quen, thường chỉ nói "không gán được cho never" mà không chỉ ra thiếu nhánh nào.`,

  4: `Type assertion nói với trình biên dịch "tin tôi đi" nên tắt luôn phần kiểm tra ở đúng chỗ đó — nếu anh sai thì lỗi chuyển sang lúc chạy. Nó cần thiết khi làm việc với API bên ngoài hoặc DOM, nhưng mỗi lần dùng là một chỗ trình biên dịch không còn bảo vệ được. Type guard tốn nhiều code hơn nhưng giữ được an toàn thật.`,

  5: `Literal type cho phép mô tả chính xác tập giá trị hợp lệ, thay thế enum trong phần lớn trường hợp mà không sinh code lúc chạy. Cái giá là khi tập giá trị lớn hoặc thay đổi thường xuyên, khai báo union dài trở nên khó bảo trì — lúc đó sinh kiểu từ một hằng số bằng \`as const\` kèm \`typeof\` gọn hơn.`,

  6: `Dấu \`?\` và kiểu \`| undefined\` khác nhau ở chỗ có bắt buộc khai báo trường hay không, và sự khác biệt đó chỉ lộ ra khi bật \`exactOptionalPropertyTypes\`. Bật cờ này bắt được cả lớp lỗi khi đặt giá trị \`undefined\` một cách vô tình, đổi lại làm gãy nhiều kiểu của thư viện bên ngoài vốn không viết chặt như vậy.`,

  7: `\`readonly\` chỉ là ràng buộc lúc biên dịch — không có gì chặn việc sửa lúc chạy, và nó biến mất hoàn toàn sau khi biên dịch. Và nó cũng chỉ nông một tầng: \`readonly\` cho một đối tượng không làm các đối tượng lồng bên trong bất biến. Cần bất biến thật thì vẫn phải dùng \`Object.freeze\` hoặc thư viện chuyên dụng.`,

  8: `Enum là một trong số ít cấu trúc của TypeScript sinh ra code lúc chạy, nên nó nằm trong bundle và không bị tree shaking loại bỏ. Union của literal cho gần như cùng lợi ích mà không tốn byte nào. Riêng \`const enum\` thì không sinh code nhưng lại không dùng được khi biên dịch từng file riêng lẻ, vốn là cách mọi bundler hiện đại làm việc.`,

  9: `Tuple mô tả được vị trí và kiểu của từng phần tử, nên hợp cho giá trị trả về nhiều thành phần như của \`useState\`. Nhưng đọc theo chỉ số làm code khó hiểu khi có hơn ba phần tử — từ đó trở đi, trả về một đối tượng có tên trường rõ ràng dễ bảo trì hơn nhiều, dù dài hơn khi dùng.`,

  10: `Dấu \`!\` gọn hơn hẳn việc kiểm tra null, nhưng nó tắt đúng cái biện pháp bảo vệ có giá trị nhất của TypeScript. Mỗi dấu \`!\` là một lời hứa mà trình biên dịch không kiểm được — và lời hứa đó sẽ sai sau vài lần refactor. Ưu tiên optional chaining hoặc kiểm tra tường minh; giữ \`!\` cho chỗ thật sự không diễn đạt được cách khác.`,

  11: `Intersection nghe như "gộp hai kiểu" nhưng với hai kiểu có cùng tên trường mà khác kiểu dữ liệu, kết quả là \`never\` chứ không phải lỗi biên dịch — rất khó tìm ra. Union thì ngược lại: an toàn nhưng phải thu hẹp trước khi truy cập trường riêng của từng nhánh, làm code dài hơn.`,

  12: `Discriminated union cho trình biên dịch tự thu hẹp kiểu chỉ bằng một phép so sánh, và kiểm tra vét cạn hoạt động — đây là công cụ mạnh nhất của TypeScript cho việc mô hình hoá trạng thái. Cái giá là phải thêm một trường phân biệt vào dữ liệu, nên khi kiểu đến từ API bên ngoài không có trường đó thì phải tự gắn ở ranh giới.`,

  13: `Type predicate dạng \`x is T\` cho trình biên dịch tin vào logic của anh — nghĩa là nếu logic đó sai thì kiểu sai mà không ai báo. Nó mạnh nhưng là một điểm mất an toàn tự nguyện. Với dữ liệu từ mạng, dùng thư viện kiểm tra lược đồ như Zod an toàn hơn, vì nó vừa kiểm lúc chạy vừa sinh ra kiểu.`,

  14: `Conditional type cho phép biểu đạt logic ở tầng kiểu, nhưng lồng nhiều tầng thì thông báo lỗi trở nên gần như không đọc nổi và thời gian biên dịch tăng rõ rệt trên dự án lớn. Quy tắc thực dụng: nếu phải mất hơn một phút để hiểu lại kiểu mình vừa viết, viết đơn giản hơn dù trùng lặp một chút.`,

  15: `\`infer\` rút được kiểu từ bên trong một cấu trúc, rất mạnh khi viết kiểu tiện ích. Nhưng nó chỉ dùng được trong conditional type, và khi có nhiều chỗ khớp thì quy tắc chọn không hiển nhiên — với kiểu hàm nạp chồng, \`infer\` chỉ lấy được chữ ký cuối cùng, chỗ này hay gây bất ngờ.`,

  16: `Mapped type tránh được việc viết tay từng trường, nên kiểu luôn đồng bộ khi nguồn thay đổi. Cái giá là khi có lỗi, trình biên dịch chỉ vào kiểu đã được sinh ra chứ không chỉ vào chỗ anh viết, nên việc lần ngược rất mất thời gian. Và chúng làm chậm việc gợi ý code trong editor trên dự án lớn.`,

  17: `Template literal type cho phép ràng buộc chuỗi theo mẫu, ví dụ mọi khoá phải bắt đầu bằng \`on\`. Rất mạnh cho API kiểu design system. Nhưng kết hợp với union lớn thì số tổ hợp bùng nổ — TypeScript có giới hạn khoảng 100.000 thành viên trong một union và sẽ từ chối biên dịch khi vượt.`,

  18: `Index signature cho phép nhận khoá bất kỳ, nhưng đổi lại mọi trường khai báo tường minh phải tương thích với kiểu giá trị chung — đó chính là lý do lỗi trong câu này. Và nó làm mất khả năng bắt lỗi gõ sai tên khoá. \`Record\` với union khoá cụ thể chặt hơn nhiều nếu tập khoá là hữu hạn và biết trước.`,

  19: `\`keyof\` giữ kiểu luôn đồng bộ với đối tượng nguồn, nên đổi tên một trường là mọi chỗ dùng đều báo lỗi ngay — đúng cái ta muốn. Nhưng với đối tượng có index signature, \`keyof\` trả về \`string | number\` chứ không phải danh sách khoá cụ thể, làm mất hết ích lợi mà không có cảnh báo nào.`,

  20: `\`typeof\` ở ngữ cảnh kiểu cho phép sinh kiểu từ một giá trị đã có, tránh khai báo hai lần và lệch nhau. Cái giá là kiểu trở nên phụ thuộc vào chi tiết cài đặt của giá trị đó — đổi giá trị là đổi kiểu công khai mà không chủ ý. Với API công khai, khai báo kiểu tường minh an toàn hơn.`,

  21: `Generic giữ được quan hệ giữa đầu vào và đầu ra nên tốt hơn hẳn \`any\`, nhưng lạm dụng làm chữ ký hàm khó đọc. Quy tắc: một tham số kiểu chỉ xuất hiện đúng một lần trong chữ ký thì nó không mang thông tin gì — thay bằng kiểu cụ thể hoặc \`unknown\` sẽ rõ hơn.`,

  22: `Ràng buộc bằng \`extends\` thu hẹp những gì generic nhận vào nên bắt được lỗi sớm, nhưng ràng buộc quá chặt làm hàm mất tính tái dùng, còn quá lỏng thì bên trong không làm được gì với giá trị. Ràng buộc đúng là ràng buộc nhỏ nhất đủ cho phần thân hàm hoạt động.`,

  23: `Nhiều tham số kiểu cho phép mô tả quan hệ phức tạp hơn, nhưng mỗi tham số thêm vào là một chỗ nữa trình biên dịch có thể suy luận sai và người gọi phải tự khai báo. Quá ba tham số thì thường nên gói vào một đối tượng kiểu, vừa đọc được vừa cho phép đặt tên.`,

  24: `Giá trị mặc định cho tham số kiểu làm người gọi đỡ phải viết, nhưng cũng che mất trường hợp suy luận thất bại — thay vì báo lỗi, TypeScript lặng lẽ dùng mặc định và lỗi chuyển sang chỗ khác. Đặt mặc định là \`never\` hoặc \`unknown\` sẽ làm lỗi nổ đúng chỗ.`,

  25: `Generic class giữ kiểu xuyên suốt vòng đời đối tượng, nhưng tham số kiểu không tồn tại lúc chạy nên không kiểm tra được bên trong constructor. Nhiều trường hợp một hàm generic trả về đối tượng còn gọn hơn class, và tránh được vấn đề \`this\` cùng kế thừa.`,

  26: `\`Partial\` rất tiện cho hàm cập nhật từng phần, nhưng nó bỏ đi mọi ràng buộc bắt buộc — dùng cho dữ liệu khởi tạo là mở đường cho đối tượng thiếu trường đi khắp hệ thống. Và cả \`Partial\` lẫn \`Required\` đều chỉ tác động một tầng, đối tượng lồng bên trong giữ nguyên.`,

  27: `\`Omit\` tiện nhưng không kiểm tra tên trường bị loại có thật hay không — gõ sai tên thì nó im lặng không loại gì cả. \`Pick\` thì báo lỗi ngay khi tên sai, nên với kiểu quan trọng, liệt kê những gì muốn giữ an toàn hơn liệt kê những gì muốn bỏ.`,

  28: `\`Record\` gọn cho ánh xạ khoá sang giá trị, nhưng khi khoá là \`string\` thì TypeScript coi mọi khoá đều tồn tại — truy cập khoá không có vẫn qua kiểm tra kiểu rồi trả \`undefined\` lúc chạy. Bật \`noUncheckedIndexedAccess\` chặn được điều đó, đổi lại phải kiểm tra null ở mọi lần truy cập.`,

  29: `\`Extract\` và \`Exclude\` gọn cho việc lọc union, nhưng chúng làm việc theo khả năng gán được chứ không theo sự bằng nhau — với union chứa \`any\` hoặc kiểu quá rộng, kết quả không như mong đợi. Và khi union nguồn đổi, kết quả lọc đổi theo một cách âm thầm.`,

  30: `\`NonNullable\` sạch hơn nhiều so với rải dấu \`!\`, vì nó xử lý ở tầng kiểu thay vì tắt kiểm tra tại từng điểm. Nhưng nó chỉ nói kiểu không còn null, không hề kiểm tra lúc chạy — nếu giá trị thật sự là null thì lỗi vẫn nổ, chỉ là muộn hơn và ở chỗ khác.`,

  31: `\`React.FC\` từng là mặc định nhưng nay không còn được khuyến nghị: nó ngầm thêm \`children\` ở React 17 trở về trước, và làm generic component khó viết. Khai báo props trực tiếp trên tham số hàm rõ ràng hơn, đổi lại phải tự khai kiểu trả về nếu muốn chặt chẽ.`,

  32: `Kiểu sự kiện của React chính xác nhưng dài, và gắn chặt component vào loại phần tử cụ thể — đổi từ \`input\` sang \`textarea\` là phải sửa kiểu. Dùng kiểu rộng hơn thì dễ đổi nhưng mất khả năng truy cập các trường riêng như \`checked\`. Với component dùng lại nhiều, nhận vào giá trị đã xử lý thay vì cả đối tượng sự kiện linh hoạt hơn.`,

  33: `Ba dạng \`useRef\` khác nhau ở chỗ ref có thể gán lại hay không, và chọn sai làm TypeScript báo lỗi ở chỗ tưởng như vô lý. Dùng \`useRef<T>(null!)\` để khỏi kiểm tra null là mua tiện lợi bằng một lỗi lúc chạy nếu ref chưa được gắn — nguy hiểm nhất khi component render có điều kiện.`,

  34: `Generic component giữ được quan hệ kiểu giữa dữ liệu vào và hàm render, rất đáng cho component danh sách hay bảng. Nhưng cú pháp trong file \`.tsx\` vướng vì dấu ngoặc nhọn bị hiểu thành JSX, phải viết \`<T,>\` — và thông báo lỗi khi suy luận thất bại rất khó đọc.`,

  35: `Trả về tuple cho phép người dùng tự đặt tên khi giải cấu trúc, giống \`useState\`. Nhưng phải khai kiểu tuple tường minh hoặc dùng \`as const\`, nếu không TypeScript suy ra mảng union và mọi thứ hỏng. Từ ba giá trị trả về trở lên, một đối tượng có tên trường rõ ràng đáng hơn.`,
};
