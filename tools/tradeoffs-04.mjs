/** Đoạn "Đánh đổi" cho 21 câu gốc của 04-problem-solving-system-design.md.
 *  (14 câu còn lại đã có sẵn mục Đánh đổi khi được viết mới.) */
export const FILE = '04-problem-solving-system-design.md';
export const TRADEOFFS = {
  1: `Profiler chỉ ra component nào tốn thời gian, nhưng số đo lấy ở bản phát triển nên luôn chậm hơn production — dùng để so sánh tương đối thì tốt, làm con số tuyệt đối thì sai. Và nó chỉ thấy được phần React; nếu nút thắt nằm ở layout của trình duyệt hay ở mạng thì Profiler im lặng, phải đổi sang tab Performance.`,

  2: `Heap snapshot chứng minh được rò rỉ nhưng đọc rất tốn công, và bản thân việc chụp làm treo trang vài giây. So sánh hai snapshot cách nhau một thao tác lặp lại cho tín hiệu rõ hơn là nhìn một ảnh đơn lẻ. Lưu ý là bộ nhớ tăng không đồng nghĩa với rò rỉ — cache có chủ đích cũng làm tăng.`,

  3: `Huỷ request cũ bằng \`AbortController\` sạch hơn là bỏ qua kết quả đến muộn, vì nó tiết kiệm cả băng thông. Nhưng huỷ quá tay làm mất dữ liệu đã tải gần xong, và người dùng gõ chậm sẽ thấy nhiều request bị huỷ liên tục. Cách bỏ qua theo số thứ tự đơn giản hơn và không cần huỷ, đổi lại vẫn tốn mạng.`,

  4: `\`BroadcastChannel\` gọn và nhanh nhưng không lưu lại — tab mở sau không biết chuyện đã xảy ra. Sự kiện \`storage\` thì có trạng thái bền nhưng chỉ bắn ở các tab *khác*, không bắn ở tab vừa ghi, và chỉ truyền được chuỗi. Đồng bộ nhiều tab luôn phải chọn giữa tức thời và bền vững; muốn cả hai thì dùng cả hai.`,

  5: `Error Boundary giữ cho lỗi render không làm trắng cả trang, nhưng nó không bắt lỗi trong event handler, trong code bất đồng bộ hay trong chính nó. Bắt lỗi toàn cục thì phủ rộng nhưng dễ nuốt mất lỗi lập trình thật, làm chúng không bao giờ bị phát hiện. Bắt lỗi mà không gửi báo cáo còn tệ hơn để lỗi nổ.`,

  6: `Đăng ký theo từng trường làm form lớn mượt hẳn vì mỗi phím gõ chỉ render một ô. Cái giá là giá trị nằm trong ref chứ không trong state, nên logic phụ thuộc lẫn nhau giữa các trường khó viết hơn, và việc hiển thị lại theo giá trị cần đăng ký tường minh. Với form dưới mười trường, controlled đơn giản hơn nhiều.`,

  7: `Ảo hoá làm danh sách vô hạn chạy được, nhưng mất \`Ctrl+F\`, gây khó cho trình đọc màn hình, và hỏng khi chiều cao mỗi dòng khác nhau. Ngoài ra cuộn vô hạn tự nó đã đánh đổi: người dùng không tới được chân trang và không quay lại đúng vị trí cũ khi bấm back — phân trang không có hai vấn đề đó.`,

  8: `Làm mới token ngầm giữ người dùng không bị đăng xuất giữa chừng, nhưng hàng đợi request chờ token mới là chỗ dễ sai nhất: quên gom lại thì hai mươi request cùng gọi làm mới, và server thường chỉ chấp nhận một. Và nếu chính lần làm mới cũng hỏng thì phải có đường thoát, nếu không hàng đợi treo vĩnh viễn.`,

  9: `Thử lại với khoảng cách tăng dần chịu được lỗi mạng thoáng qua, nhưng thử lại một request không idempotent có thể tạo hai đơn hàng — chỉ thử lại \`GET\`, hoặc dùng khoá idempotency cho \`POST\`. Và thử lại đồng loạt sau khi server phục hồi sẽ đánh sập nó lần nữa, nên phải thêm nhiễu ngẫu nhiên vào khoảng chờ.`,

  10: `Chia nhỏ và tải trễ giảm dung lượng lần đầu nhưng mỗi chunk thêm một lượt đi mạng, và lazy nhầm thứ nằm trên đường hiển thị nội dung chính sẽ làm LCP tệ hơn. Gỡ thư viện không dùng cho lợi ích chắc chắn nhất mà không mất gì — nên bắt đầu từ đó trước khi động vào cấu trúc tải.`,

  11: `WebSocket cho thông báo tức thì nhưng phải tự lo kết nối lại, nhịp tim và xác thực; SSE nhẹ hơn nhiều và tự kết nối lại, đổi lại chỉ một chiều. Với thông báo thì một chiều thường là đủ. Và dù chọn cách nào, trạng thái đã đọc vẫn phải là nguồn sự thật ở server, vì người dùng mở nhiều thiết bị.`,

  12: `Nén ở phía client tiết kiệm băng thông và thời gian chờ, nhưng tốn CPU của máy người dùng và làm giảm chất lượng ảnh gốc — không dùng được cho ảnh cần giữ nguyên bản. Tải theo từng mẩu cho phép tiếp tục khi đứt mạng nhưng phức tạp hơn hẳn; chỉ đáng khi tệp lớn hoặc người dùng ở mạng yếu.`,

  13: `Debounce giảm số request nhưng thêm độ trễ cảm nhận; cache kết quả làm gõ lùi lại thấy ngay nhưng có thể trả về dữ liệu cũ. Và gợi ý hiển thị lịch sử tìm kiếm thì tiện nhưng là dữ liệu cá nhân, phải xoá được. Bài toán autocomplete là chuỗi đánh đổi giữa tức thời, chính xác và tiết kiệm.`,

  14: `Thiết kế ghép mảnh cho phép dùng lại từng phần và tuỳ biến sâu, nhưng người dùng phải viết nhiều hơn và dễ ghép sai. API một khối thì dùng nhanh nhưng mọi nhu cầu ngoài dự kiến đều phải thêm props, và bảng dữ liệu là nơi nhu cầu ngoài dự kiến nhiều nhất. Nhiều thư viện chọn đường giữa: lõi headless cộng một bản dựng sẵn.`,

  15: `Form theo lược đồ cho phép sinh giao diện từ cấu hình, rất mạnh khi người không lập trình cần tự tạo form. Cái giá là mọi thứ ngoài lược đồ đều khó — bố cục đặc biệt, phụ thuộc chéo phức tạp, thành phần tuỳ biến. Và lỗi chuyển từ lúc biên dịch sang lúc chạy, vì lược đồ chỉ được kiểm khi thực thi.`,

  21: `Micro-frontend cho các đội phát hành độc lập, đúng khi tổ chức lớn và các phần thật sự tách bạch. Nhưng nó nhân bản chi phí: mỗi mảnh mang theo runtime riêng nên tổng dung lượng tăng, chia sẻ state giữa các mảnh trở nên khó, và trải nghiệm dễ mất nhất quán. Với dưới ba đội thì chi phí này gần như luôn lớn hơn lợi ích.`,

  22: `Tiêu chí chọn đúng nhưng thứ tự quan trọng: mức độ quen thuộc của đội thường thắng mọi tiêu chí kỹ thuật khác, vì công cụ tốt mà không ai dùng đúng thì tệ hơn công cụ thường mà cả đội thạo. Và phần lớn ứng dụng không cần store toàn cục — tách server state ra cho React Query rồi mới xem phần còn lại có đáng một thư viện không.`,

  27: `SSR cho SEO và nội dung hiện sớm nhưng tốn máy chủ và thêm một hệ thống phải vận hành. SSG rẻ nhất và nhanh nhất nhưng mỗi lần đổi nội dung là dựng lại, không hợp với dữ liệu thay đổi liên tục. CSR đơn giản nhất về hạ tầng nhưng trả giá bằng trang trắng ban đầu. Thực tế hiếm khi chọn một: phần lớn ứng dụng trộn cả ba theo từng route.`,

  31: `Strangler fig cho phép chuyển dần mà vẫn giao hàng được, nhưng nghĩa là hai hệ thống cùng sống trong một thời gian dài — hai bộ công cụ, hai phong cách, và chỗ giáp ranh là nơi lỗi tập trung. Rủi ro lớn nhất không phải kỹ thuật mà là dừng giữa chừng: khi có việc gấp hơn, phần còn lại của di trú bị bỏ lại vĩnh viễn.`,

  32: `Nhìn giám sát trước khi đoán là đúng thứ tự, nhưng chỉ làm được nếu đã có giám sát từ trước — dựng nó trong lúc đang có sự cố là quá muộn. Và khi đã xác định do bản deploy gần nhất, rollback nhanh hơn là sửa, dù nghĩa là mất phần việc đã làm. Ưu tiên khôi phục cho người dùng trước, tìm nguyên nhân sau.`,

  35: `Thống nhất hợp đồng rồi dùng mock để chạy song song giúp hai đội không chặn nhau, nhưng mock sẽ lệch khỏi API thật nếu không có gì ràng buộc — nên hợp đồng phải là tài liệu máy đọc được như OpenAPI, và mock sinh ra từ đó, không viết tay. Và vẫn cần một buổi kiểm tra tích hợp thật trước khi phát hành.`,
};
