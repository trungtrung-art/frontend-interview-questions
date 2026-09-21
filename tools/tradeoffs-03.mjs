/** Đoạn "Đánh đổi" thêm vào giải thích của 30 câu trong 03-performance-optimization.md */
export const FILE = '03-performance-optimization.md';
export const TRADEOFFS = {
  1: `Bộ ba này là bản lịch sử: từ tháng 3 năm 2024, **INP đã thay FID** trong Core Web Vitals. Nói "FID" trong phỏng vấn hôm nay sẽ bị hỏi lại ngay. Và cả ba chỉ số đều lấy ở phân vị 75 của lưu lượng thật, nên điểm Lighthouse chạy trên máy anh không phải con số Google dùng để xếp hạng.`,

  2: `Ngưỡng 2,5 giây đo ở phân vị 75 của người dùng thật, không phải số trên máy dev. Tối ưu vừa chạm ngưỡng rồi dừng là rủi ro: nếu phần lớn người dùng ở mạng chậm, phân vị 75 thật sẽ khác hẳn số anh nhìn thấy. Và LCP chỉ đo đúng phần tử lớn nhất — trang có thể đạt LCP đẹp mà vẫn cảm giác chậm vì nội dung quan trọng khác đến muộn.`,

  3: `Đặt kích thước cố định cho ảnh và khung quảng cáo chữa được CLS nhưng tạo khoảng trống khi nội dung chưa về. Đó là đánh đổi có chủ ý: khoảng trống ổn định luôn tốt hơn nội dung nhảy dưới ngón tay người dùng. Dùng \`aspect-ratio\` thì giữ được chỗ mà vẫn co giãn. Riêng nội dung chèn ngay sau thao tác của người dùng không bị tính vào CLS, nên không cần né.`,

  4: `INP khó đạt hơn FID nhiều, vì nó đo mọi tương tác suốt phiên chứ không chỉ lần đầu — trang qua FID dễ dàng vẫn có thể trượt INP. Cải thiện INP thường phải cắt nhỏ tác vụ dài và hoãn việc không khẩn, tức là đụng vào kiến trúc chứ không phải chỉnh vài chỗ.`,

  5: `TTFB phần lớn nằm ở server và đường truyền nên frontend can thiệp được ít; CDN và cache ở biên là đòn bẩy chính. Nhưng TTFB tốt không đảm bảo LCP tốt: byte đầu về nhanh mà tài nguyên chặn render đến muộn thì người dùng vẫn nhìn trang trắng.`,

  6: `Worker chạy ở luồng riêng nên không chặn giao diện, nhưng giao tiếp qua \`postMessage\` phải sao chép dữ liệu — truyền mảng lớn qua lại có khi tốn hơn chính phép tính. Dùng \`Transferable\` hoặc \`SharedArrayBuffer\` thì tránh được sao chép nhưng phức tạp hơn nhiều. Và worker không chạm được DOM, nên mọi kết quả vẫn phải quay về luồng chính để hiển thị.`,

  7: `Closure là công cụ chính để đóng gói trạng thái riêng tư, nên "tránh closure" không phải lời khuyên đúng. Vấn đề chỉ xuất hiện khi closure sống lâu hơn dữ liệu nó giữ — handler gắn vào phần tử tồn tại suốt phiên, hoặc callback trong \`setInterval\` không bao giờ bị huỷ. Cách chữa là dọn dẹp đúng chỗ, không phải bỏ closure.`,

  8: `Uỷ quyền sự kiện giảm số listener và tự áp dụng cho cả phần tử thêm sau, nhưng mỗi sự kiện phải chạy qua bước kiểm tra \`event.target\` — với sự kiện bắn liên tục như \`mousemove\` thì chi phí đó đáng kể. Và nó không dùng được cho sự kiện không nổi bọt như \`focus\` hay \`blur\`, phải thay bằng \`focusin\` và \`focusout\`.`,

  9: `\`requestAnimationFrame\` đồng bộ với nhịp vẽ nên hoạt ảnh mượt và tự dừng khi tab bị ẩn, nhưng code bên trong vẫn chạy trên luồng chính — đặt việc nặng vào là mất khung hình. Với hoạt ảnh thuần chuyển động hoặc mờ dần, CSS transition còn tốt hơn vì trình duyệt đẩy được sang luồng compositor.`,

  10: `\`async\` tải xong là chạy ngay nên thứ tự giữa các script không đảm bảo — chỉ hợp với script độc lập như đo đạc. \`defer\` giữ đúng thứ tự và chạy sau khi phân tích HTML xong, hợp với script phụ thuộc nhau. Nhưng cả hai đều không cứu được gì nếu chính script đó là thứ dựng nên nội dung chính: lúc ấy nội dung vẫn đến muộn.`,

  11: `Re-render không phải lúc nào cũng là vấn đề. Một component nhẹ render lại 60 lần mỗi giây vẫn có thể nằm gọn trong ngân sách khung hình. Truy tìm và chặn mọi re-render tốn công và làm code khó đọc; chỉ đáng làm khi Profiler chỉ đích danh component đang ăn thời gian.`,

  12: `Số đo của Profiler lấy ở bản phát triển nên luôn chậm hơn production đáng kể — dùng để so sánh tương đối giữa các component thì tốt, dùng làm con số tuyệt đối thì sai. Bản thân việc bật Profiler cũng thêm chi phí, làm lệch kết quả với những component vốn render rất nhanh.`,

  13: `Ảo hoá làm thời gian render gần như không phụ thuộc số dòng, nhưng mất \`Ctrl+F\` của trình duyệt, gây khó cho trình đọc màn hình, và hỏng khi chiều cao mỗi dòng thay đổi — lúc đó phải đo động và thanh cuộn sẽ nhảy. Dưới khoảng 100 dòng đơn giản thì chi phí phức tạp không đáng.`,

  14: `Chia nhỏ cải thiện TTI và FCP nhưng không tự động cải thiện LCP — nếu phần tử lớn nhất là một tấm ảnh thì bundle nhỏ đi chẳng đổi gì. Và chia quá vụn làm tổng thời gian tệ hơn, vì mỗi chunk thêm một lượt đi mạng với độ trễ cộng dồn.`,

  15: `Selector và chuẩn hoá state giảm re-render nhưng làm code khó đọc hơn và thêm một lớp phải bảo trì. Với ứng dụng nhỏ, chi phí đó lớn hơn lợi ích. Chuẩn hoá chỉ thật sự đáng khi cùng một thực thể xuất hiện ở nhiều nơi và phải luôn đồng bộ với nhau.`,

  16: `\`preload\` giành quyền ưu tiên, nên dùng sai chỗ là cướp băng thông của thứ thật sự cần — preload quá nhiều còn tệ hơn không preload gì. \`prefetch\` thì tải thứ có thể không bao giờ được dùng, tốn dữ liệu của người dùng di động. Chỉ preload thứ chắc chắn cần ngay trên đường hiển thị nội dung chính.`,

  17: `Ba cách đúng còn lại cũng có giá. Định dạng mới như AVIF nén tốt hơn nhiều nhưng mã hoá chậm và trình duyệt cũ không đọc được, nên luôn phải có dự phòng. \`loading="lazy"\` tiết kiệm băng thông nhưng đặt nhầm vào ảnh đầu trang thì làm LCP tệ hẳn đi. Ảnh đáp ứng đúng cách đòi sinh nhiều kích thước và quản lý chúng.`,

  18: `HTTP/2 gộp nhiều request trên một kết nối, nên những thủ thuật cũ như gộp file và chia nhỏ domain trở thành phản tác dụng. Nhưng nó vẫn chịu head-of-line blocking ở tầng TCP: mất một gói là chặn mọi luồng. HTTP/3 chuyển sang QUIC để giải đúng chỗ đó, đổi lại một số mạng doanh nghiệp chặn UDP.`,

  19: `\`Cache-Control: immutable\` với thời hạn dài cho tài nguyên có hash trong tên gần như không mất gì. Nhưng với HTML thì ngược lại: cache lâu nghĩa là người dùng giữ bản cũ và tham chiếu tới chunk đã bị xoá, gây lỗi 404 sau mỗi lần deploy. \`stale-while-revalidate\` là điểm giữa — phục vụ bản cũ ngay rồi làm mới ở nền.`,

  20: `Tree shaking chỉ hiệu quả khi thư viện xuất theo ES module và không có tác dụng phụ, mà nhiều thư viện phổ biến không đạt — khai \`sideEffects: false\` sai sẽ xoá nhầm code cần thiết và lỗi chỉ lộ ra ở production. Phân tích bundle nên chạy trong CI kèm ngưỡng chặn, vì để thủ công thì sẽ không ai chạy.`,

  21: `Nội tuyến CSS quan trọng vào HTML loại bỏ được một lượt chặn render, nhưng làm HTML nặng hơn và phần CSS đó không cache lại được giữa các trang. Đáng làm với trang đích chỉ tải một lần; phản tác dụng với ứng dụng nhiều trang mà người dùng duyệt liên tục.`,

  22: `Đổi \`transform\` thay vì \`width\` để tránh reflow là đúng, nhưng không phải lúc nào cũng thay được — bố cục thật sự thay đổi thì buộc phải reflow. Cách giảm tổn thất là gom hết thao tác đọc rồi mới gom thao tác ghi, tránh xen kẽ gây layout thrashing, và đọc thuộc tính bố cục càng ít lần càng tốt.`,

  23: `\`contain\` cho trình duyệt biết có thể bỏ qua phần cây bên ngoài khi tính toán, tiết kiệm đáng kể với danh sách dài. Nhưng \`contain: size\` bắt phần tử tự khai kích thước và không cho co theo nội dung — đặt nhầm là phần tử sập xuống thành không. Bắt đầu bằng \`content\` an toàn hơn \`strict\`.`,

  24: `Ba cách dùng đúng còn lại cũng không miễn phí. \`will-change\` báo trước để trình duyệt tạo lớp riêng, mà mỗi lớp tốn bộ nhớ GPU — rải khắp nơi làm máy yếu hết bộ nhớ và chậm hơn hẳn lúc không dùng. Cách đúng là đặt ngay trước khi hoạt ảnh bắt đầu rồi gỡ ra khi xong; với hoạt ảnh ngắn thì thường không cần.`,

  25: `\`transform\` và \`opacity\` chạy trên luồng compositor nên mượt cả khi luồng chính đang bận, nhưng phần tử bị đẩy lên lớp riêng sẽ tốn bộ nhớ và có thể bị mờ chữ trên một số màn hình. Và không phải hiệu ứng nào cũng diễn đạt được bằng hai thuộc tính này — đổi màu nền hay bóng đổ thì không.`,

  26: `Cắt tác vụ dài thành nhiều mẩu ngắn cải thiện khả năng phản hồi nhưng làm tổng thời gian dài hơn, vì mỗi lần nhường luồng là một lần tốn chi phí lập lịch. Đây là đổi thông lượng lấy độ mượt — đúng khi người dùng đang chờ tương tác, sai khi đó là việc nền không ai nhìn.`,

  27: `Rẻ hơn hẳn so với nghe sự kiện cuộn vì nó chạy ngoài luồng chính, nhưng callback là bất đồng bộ nên không dùng được khi cần phản ứng đồng bộ theo vị trí cuộn. Và \`rootMargin\` đặt quá hẹp thì ảnh lazy chỉ bắt đầu tải đúng lúc người dùng nhìn tới, tức là vẫn thấy khoảng trống.`,

  28: `Cache First cho tốc độ tốt nhất nhưng người dùng có thể thấy nội dung cũ vô thời hạn nếu không có cơ chế làm mới — chỉ dùng cho tài nguyên có hash trong tên. Với dữ liệu thay đổi, Network First hoặc Stale While Revalidate đúng hơn. Chọn sai chiến lược cho sai loại tài nguyên là lỗi hay gặp nhất khi làm service worker.`,

  29: `\`font-display: swap\` tránh được khoảng chữ vô hình nhưng gây nhảy chữ khi font thật về — đó là đánh đổi trực tiếp giữa CLS và thời gian thấy nội dung. \`optional\` bỏ hẳn font nếu về chậm, ổn định nhất nhưng có người dùng không bao giờ thấy font thương hiệu. Preload font quan trọng và dùng \`size-adjust\` cho font dự phòng sẽ giảm được cú nhảy.`,

  30: `Ngân sách chỉ có tác dụng khi nó chặn được merge — đặt ngưỡng rồi chỉ cảnh báo thì sau vài tuần sẽ không ai để ý nữa. Nhưng đặt quá chặt làm CI đỏ liên tục và đội sẽ tìm cách vô hiệu hoá. Cách dùng được: lấy mức hiện tại cộng một khoảng nhỏ làm ngưỡng, rồi siết dần theo thời gian.`,
};
