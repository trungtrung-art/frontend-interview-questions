/** Đoạn "Đánh đổi" thêm vào giải thích của 35 câu trong 07-html-css-advanced.md */
export const FILE = '07-html-css-advanced.md';
export const TRADEOFFS = {
  1: `Thẻ ngữ nghĩa cho accessibility và SEO gần như miễn phí, nhưng tập thẻ có sẵn không phủ hết mọi giao diện thật — tab, accordion, combobox đều không có thẻ riêng. Lúc đó phải dựng bằng \`div\` cộng ARIA, và đó mới là chỗ tốn công. Dùng sai thẻ ngữ nghĩa còn tệ hơn dùng \`div\`, vì trình đọc màn hình sẽ thông báo sai.`,

  2: `ARIA lấp chỗ HTML không diễn đạt được, nhưng mỗi thuộc tính là một lời hứa phải tự duy trì bằng JavaScript — \`aria-expanded\` không tự đổi theo trạng thái thật. ARIA sai gây hại nhiều hơn không có ARIA, vì nó ghi đè lên ngữ nghĩa mặc định vốn đang đúng.`,

  3: `Gắn nhãn đúng cách làm form dùng được với trình đọc màn hình và mở rộng vùng bấm — lợi cho cả người dùng chuột. Cái giá chỉ là kỷ luật: mỗi trường phải có \`id\` duy nhất, mà trong component dùng lại nhiều lần thì phải sinh id động, nếu không sẽ trùng và nhãn trỏ nhầm ô.`,

  4: `Thứ bậc tiêu đề liên tục là cách trình đọc màn hình dựng mục lục để nhảy nhanh. Nhưng nó thường xung đột với thiết kế: chỗ cần chữ nhỏ lại đúng vị trí \`h2\`. Cách giải là tách cấp độ tiêu đề khỏi kích thước chữ — dùng đúng thẻ rồi tạo kiểu bằng class, đừng chọn thẻ theo cỡ chữ.`,

  5: `\`alt=""\` nói với trình đọc màn hình rằng ảnh chỉ để trang trí và nên bỏ qua, đúng hơn hẳn việc mô tả một hình nền vô nghĩa. Nhưng bỏ hẳn thuộc tính \`alt\` thì ngược lại: trình đọc sẽ đọc tên file, thường là chuỗi ký tự vô nghĩa. Ranh giới khó nhất là ảnh vừa trang trí vừa mang thông tin, lúc đó phải tự quyết.`,

  6: `\`tabindex="0"\` đưa phần tử vào luồng tab tự nhiên, còn số dương thì phá vỡ thứ tự và gần như luôn sai. Nhưng làm một \`div\` nhận được focus mới chỉ là một phần — vẫn phải tự xử lý phím Enter và Space, thêm vai trò, và quản lý trạng thái. Dùng \`button\` thật thì có sẵn tất cả.`,

  7: `Tỉ lệ 4.5:1 là ngưỡng AA cho chữ thường; chữ lớn chỉ cần 3:1 và ngưỡng AAA là 7:1. Đạt tương phản cao giới hạn đáng kể bảng màu thương hiệu, nên đây là chỗ hay có tranh luận với thiết kế. Lưu ý là tỉ lệ này không đo được độ dễ đọc của chữ mỏng trên nền sáng, nên qua ngưỡng chưa chắc đã dễ đọc.`,

  8: `Skip link rất rẻ và giúp người dùng bàn phím bỏ qua hàng chục mục điều hướng mỗi trang. Cái vướng là nó phải ẩn cho tới khi nhận focus — ẩn bằng \`display: none\` thì bàn phím không tới được, phải đẩy ra ngoài màn hình rồi kéo về khi focus. Làm sai cách ẩn là mất hết tác dụng.`,

  9: `\`aria-live\` thông báo thay đổi mà không cướp focus. Nhưng \`assertive\` ngắt lời trình đọc đang nói nên chỉ dùng cho thứ khẩn cấp thật. Và vùng live phải tồn tại sẵn trong DOM từ đầu — chèn cả vùng cùng lúc với nội dung thì trình đọc thường không thông báo gì.`,

  10: `Phân biệt nút và liên kết không phải chuyện hình thức: liên kết mở được tab mới, sao chép được địa chỉ, và trình đọc màn hình liệt kê riêng. Nút thì kích hoạt bằng cả Enter lẫn Space, liên kết chỉ Enter. Dùng liên kết cho hành động là lấy đi những thứ người dùng mong đợi, dù nhìn giống hệt nhau.`,

  11: `Căn giữa bằng flexbox gọn nhưng làm phần tử con co lại theo nội dung, đôi khi không như ý. Và flexbox căn theo một trục, nên căn giữa cả hai chiều vẫn phải dùng đến hai thuộc tính. Với đúng bài toán căn giữa một phần tử, \`display: grid\` cộng \`place-items: center\` ngắn hơn.`,

  12: `Viết tắt \`flex\` đặt luôn cả ba giá trị, trong đó \`flex-basis\` mặc định thành \`0%\` — khác hẳn giá trị mặc định khi khai riêng lẻ. Đó là nguồn lỗi hay gặp: phần tử co lại bất ngờ vì \`basis\` bị đặt về 0 thay vì \`auto\`.`,

  13: `\`grid-template-areas\` cho sơ đồ bố cục đọc được ngay trong CSS, rất dễ bảo trì. Nhưng nó đòi đặt tên cho mọi vùng và không diễn đạt được bố cục có số cột thay đổi theo nội dung. Cách dùng dòng và cột theo số thì linh hoạt hơn nhưng khó đọc hơn nhiều.`,

  14: `Định vị theo tên vùng dễ đọc nhưng cứng; định vị theo số dòng linh hoạt nhưng đổi bố cục là phải tính lại mọi chỉ số. Dùng tên cho dòng lưới là điểm giữa — vừa đọc được vừa không phụ thuộc vị trí tuyệt đối.`,

  15: `Grid cho hai chiều và Flexbox cho một chiều là quy tắc tốt để bắt đầu, nhưng ranh giới không cứng. Một hàng thẻ tự xuống dòng thì Grid với \`auto-fit\` làm được mà không cần media query, trong khi Flexbox cần tính toán thủ công. Ngược lại, thanh công cụ có phần tử co giãn theo nội dung thì Flexbox tự nhiên hơn.`,

  16: `\`gap\` thay thế được mẹo dùng margin âm và \`:last-child\`, sạch hơn hẳn. Nhưng nó chỉ tạo khoảng cách *giữa* các phần tử, không tạo lề ngoài — vẫn cần padding cho khung chứa. Và nó không có hiệu lực với phần tử định vị tuyệt đối bên trong.`,

  17: `\`auto-fit\` gộp các cột trống nên phần tử giãn ra lấp đầy hàng, còn \`auto-fill\` giữ cột trống nên phần tử giữ nguyên kích thước. Với một phần tử duy nhất, \`auto-fit\` làm nó kéo dài hết chiều ngang — thường không phải ý muốn. Đó là khác biệt chỉ lộ ra khi số phần tử ít.`,

  18: `\`order\` đổi thứ tự hiển thị mà không đụng vào HTML, nhưng thứ tự tab và thứ tự trình đọc màn hình vẫn theo DOM — tạo ra sự lệch nhau giữa cái nhìn thấy và cái điều hướng được. Đây là một trong những lỗi accessibility hay gặp nhất khi làm bố cục đáp ứng.`,

  19: `\`align-self\` cho phép một phần tử phá quy tắc chung của khung chứa, rất tiện cho trường hợp ngoại lệ. Nhưng rải nhiều \`align-self\` là dấu hiệu quy tắc chung đặt sai — lúc đó sửa \`align-items\` ở cha sạch hơn là vá từng con.`,

  20: `Subgrid giải đúng bài toán căn thẳng hàng giữa các thẻ có nội dung dài ngắn khác nhau, thứ mà trước đây phải dùng chiều cao cố định. Cái vướng duy nhất là hỗ trợ trình duyệt đến muộn, nên vẫn cần đường lui cho thiết bị cũ nếu người dùng của anh có nhóm đó.`,

  21: `Độ ưu tiên cho phép ghi đè có kiểm soát, nhưng cuộc đua tăng độ ưu tiên dẫn thẳng tới \`!important\` và từ đó không còn đường lui. Các phương pháp như BEM và CSS Modules giữ mọi selector ở cùng một mức để tránh cuộc đua đó; \`@layer\` giải quyết ở tầng gốc bằng cách tách thứ tự tầng khỏi độ ưu tiên.`,

  22: `BEM làm tên class tự mô tả quan hệ và giữ độ ưu tiên phẳng, nên không bao giờ phải tăng cấp để ghi đè. Cái giá là tên rất dài và HTML nặng chữ. Với dự án đã dùng CSS Modules hoặc CSS-in-JS thì phần lớn lợi ích của BEM đã có sẵn, nên tuân thủ nghiêm ngặt là thừa.`,

  23: `CSS-in-JS cho phạm vi tự động và tạo kiểu theo props, rất hợp với tư duy component. Cái giá là chi phí lúc chạy: nhiều thư viện sinh và chèn CSS trong lúc render, làm chậm và gây khó cho SSR. Thế hệ sau như vanilla-extract trích xuất ra CSS tĩnh lúc build để bỏ chi phí đó, đổi lại mất khả năng tạo kiểu hoàn toàn động.`,

  24: `CSS Modules giải bài toán trùng tên class mà không tốn gì lúc chạy — đổi tên khi build là xong. Cái mất là không tạo kiểu theo giá trị động được, phải kết hợp với biến CSS. Với phần lớn dự án, đó là đánh đổi tốt hơn CSS-in-JS.`,

  25: `Nội tuyến CSS quan trọng bỏ được một lượt chặn render, nhưng làm HTML nặng thêm và phần CSS đó không cache lại giữa các trang. Xác định đúng phần "trên màn hình đầu" cũng khó, vì nó khác nhau theo kích thước màn hình. Đáng với trang đích, phản tác dụng với ứng dụng nhiều trang.`,

  26: `Biến CSS hoạt động lúc chạy nên đổi theme không cần build lại, và kế thừa theo cây DOM nên chỉ cần đặt lại ở một nút là cả nhánh đổi theo. Cái giá là trình duyệt không kiểm tra được giá trị: gõ sai tên biến thì thuộc tính im lặng không áp dụng, không có cảnh báo nào.`,

  27: `Container query giải đúng bài toán mà media query không giải được: component dùng lại trong nhiều khung chứa khác nhau. Nhưng khai \`container-type\` tạo một ngữ cảnh chứa mới, làm phần tử không còn co theo nội dung ở chiều đã khai — dùng \`inline-size\` thay vì \`size\` tránh được phần lớn bất ngờ.`,

  28: `\`:has()\` cho selector cha mà CSS thiếu suốt hai mươi năm, giải được nhiều trường hợp trước đây phải dùng JavaScript. Nhưng nó buộc trình duyệt đánh giá lại khi cây con thay đổi, nên dùng với selector quá rộng trên trang lớn có thể tốn. Và nó không dùng lồng trong chính nó.`,

  29: `\`@layer\` tách thứ tự ưu tiên khỏi độ ưu tiên của selector, nên style của thư viện luôn thua style của mình dù selector của họ mạnh hơn — đúng cái vẫn cần. Cái vướng là style không khai tầng nào sẽ thắng mọi tầng, nên phải áp dụng nhất quán cả dự án thì mới có tác dụng.`,

  30: `\`clamp()\` cho kích thước co giãn mượt mà không cần media query. Nhưng chữ co theo màn hình làm hỏng khả năng phóng to của trình duyệt nếu dùng đơn vị viewport thuần — người dùng cần chữ to sẽ không phóng được. Trộn thêm đơn vị \`rem\` vào phần giá trị ưu tiên giữ được khả năng đó.`,

  31: `Mobile-first cho CSS gọn hơn vì thiết bị nhỏ cần ít quy tắc ghi đè hơn, và hợp với thực tế phần lớn lưu lượng. Nhưng với sản phẩm nội bộ mà người dùng chỉ ngồi máy tính, viết desktop-first có khi tự nhiên hơn. Quy tắc quan trọng hơn là chọn một hướng rồi giữ nhất quán, đừng trộn hai chiều media query.`,

  32: `\`dvh\` giải đúng bài toán thanh địa chỉ trên di động co giãn, nhưng chính vì nó thay đổi liên tục nên dùng cho bố cục sẽ gây nhảy khi người dùng cuộn. \`svh\` ổn định hơn cho khung chứa, còn \`dvh\` hợp cho phần tử phủ toàn màn hình. Dùng nhầm là tạo ra hiệu ứng nhấp nháy khó chịu.`,

  33: `\`srcset\` để trình duyệt tự chọn ảnh theo màn hình và mật độ điểm ảnh, tiết kiệm đáng kể băng thông. Cái giá là phải sinh và lưu nhiều phiên bản mỗi ảnh, cộng với việc viết \`sizes\` đúng — viết sai thì trình duyệt chọn ảnh quá lớn và mọi công sức thành vô ích.`,

  34: `\`aspect-ratio\` giữ chỗ cho ảnh nên chặn được layout shift mà không cần biết kích thước thật. Nhưng nó chỉ có tác dụng khi một chiều được xác định; nếu cả hai chiều đều tự do thì nội dung bên trong vẫn quyết định. Và khi nội dung tràn, tỉ lệ bị phá — cần thêm \`min-height: 0\` hoặc \`overflow\`.`,

  35: `Tôn trọng \`prefers-reduced-motion\` là yêu cầu accessibility thật, vì hoạt ảnh gây chóng mặt với một số người. Nhưng tắt sạch mọi chuyển động cũng làm mất tín hiệu về trạng thái — người dùng không biết cái gì vừa thay đổi. Cách tốt hơn là thay chuyển động bằng hiệu ứng mờ dần rất ngắn, giữ được thông tin mà bỏ được phần gây khó chịu.`,
};
