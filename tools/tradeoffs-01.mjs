/** Đoạn "Đánh đổi" thêm vào giải thích của 30 câu trong 01-javascript-questions.md */
export const FILE = '01-javascript-questions.md';
export const TRADEOFFS = {
  1: `\`let\` trong vòng lặp tạo một ràng buộc mới mỗi vòng nên chạy đúng, nhưng đó là cơ chế ngầm mà người đọc phải biết trước mới hiểu vì sao. Cách cũ dùng IIFE thì lộ rõ ý định hơn nhưng dài và tốn một lớp hàm mỗi vòng. Với vòng lặp hàng chục nghìn phần tử, chi phí tạo phạm vi mỗi vòng là có thật, dù hiếm khi đáng kể.`,

  2: `Vùng chết tạm thời của \`let\` và \`const\` biến một lỗi im lặng thành lỗi nổ ngay tại dòng gây ra, dễ tìm hơn hẳn \`var\` trả về \`undefined\`. Cái giá là không dùng được biến trước dòng khai báo, kể cả trong trường hợp hợp lệ như hai hàm gọi lẫn nhau — lúc đó phải dùng khai báo hàm, vốn vẫn được hoisting đầy đủ.`,

  3: `Dùng \`===\` luôn là lời khuyên an toàn, nhưng có đúng một chỗ \`==\` gọn hơn mà vẫn đúng: \`x == null\` bắt cả \`null\` lẫn \`undefined\` trong một phép so sánh. Viết \`x === null || x === undefined\` thì rõ hơn nhưng dài. Nhiều bộ quy tắc lint cho phép ngoại lệ đúng ở chỗ này.`,

  4: `Chuỗi \`map\`, \`filter\`, \`reduce\` đọc dễ nhưng mỗi bước tạo một mảng trung gian — với mảng hàng trăm nghìn phần tử thì vừa tốn bộ nhớ vừa chậm vì duyệt nhiều lượt. Một vòng \`for\` duy nhất nhanh hơn nhưng khó đọc hơn. Ranh giới thực dụng: dưới vài nghìn phần tử thì ưu tiên dễ đọc, đừng tối ưu sớm.`,

  5: `\`typeof\` an toàn với cả biến chưa khai báo, nên là cách duy nhất kiểm tra sự tồn tại mà không ném lỗi. Nhưng nó trả \`"object"\` cho \`null\` và cho mọi mảng — lỗi lịch sử không sửa được vì sẽ phá vỡ web đang chạy. Kiểm tra mảng phải dùng \`Array.isArray\`, kiểm tra null phải so sánh trực tiếp.`,

  6: `Hàm mũi tên giữ \`this\` từ nơi khai báo nên tránh được lỗi mất ngữ cảnh trong callback, nhưng chính vì thế mà không dùng được làm phương thức khi cần \`this\` trỏ vào chính đối tượng, và không dùng được làm hàm khởi tạo. Quy tắc gọn: callback thì mũi tên, phương thức của đối tượng thì hàm thường.`,

  7: `Spread chỉ sao chép nông, nên sửa đối tượng lồng bên trong vẫn ảnh hưởng bản gốc — nguồn lỗi hay gặp nhất khi cập nhật state trong React. Sao chép sâu bằng \`structuredClone\` thì đúng nhưng tốn hơn nhiều và không sao chép được hàm. Với mảng lớn, mỗi lần spread là một lần cấp phát mới.`,

  8: `Truyền tham chiếu rẻ vì không sao chép, nhưng nghĩa là hàm nhận vào có thể sửa dữ liệu của người gọi mà người gọi không biết. Làm bất biến thì an toàn và dễ suy luận, đổi lại tốn bộ nhớ và thời gian cấp phát. Immer chọn đường giữa: cho viết như sửa tại chỗ rồi sinh ra bản bất biến, để có cả hai.`,

  9: `Kiểm tra \`if (x)\` gọn nhưng gộp chung \`0\`, chuỗi rỗng và \`false\` vào nhóm "không có giá trị" — sai ngay khi \`0\` là giá trị hợp lệ, ví dụ số lượng hàng tồn. Toán tử \`??\` chỉ bắt \`null\` và \`undefined\` nên đúng hơn cho giá trị mặc định, nhưng người quen \`||\` rất dễ nhầm hai cái.`,

  10: `Chuỗi trong JavaScript là bất biến nên mọi thao tác đều tạo chuỗi mới — nối chuỗi trong vòng lặp lớn là cách chậm kinh điển, gom vào mảng rồi \`join\` nhanh hơn nhiều. Và các phương thức làm việc theo đơn vị mã UTF-16, nên emoji và ký tự ngoài mặt phẳng cơ bản bị cắt sai; muốn đúng phải duyệt bằng \`for...of\` hoặc \`Intl.Segmenter\`.`,

  11: `Microtask chạy cho hết trước khi trình duyệt được vẽ, nên một chuỗi promise dài làm trễ khung hình mà không hiện ra dưới dạng tác vụ dài nào cả. Đó là lý do vòng lặp promise vô tận làm treo trang dù không có \`while\` nào. Cần nhường luồng thì phải dùng macrotask như \`setTimeout\`, hoặc \`scheduler.yield\` ở trình duyệt mới.`,

  12: `\`async/await\` đọc như code đồng bộ nên dễ hiểu hơn chuỗi \`.then\`, nhưng che mất chỗ nào thật sự dừng lại — người viết rất dễ vô tình tuần tự hoá những việc đáng lẽ chạy song song. Hai lệnh \`await\` liên tiếp là chờ lần lượt; muốn song song phải gom bằng \`Promise.all\`. Đây là lỗi hiệu năng hay gặp nhất trong code bất đồng bộ.`,

  13: `Chuỗi prototype cho phép mọi thực thể dùng chung phương thức nên tiết kiệm bộ nhớ, nhưng mỗi lần truy cập một thuộc tính không có sẵn là một lần đi ngược chuỗi — càng sâu càng chậm. Và sửa prototype lúc đang chạy làm trình duyệt huỷ tối ưu hoá cho toàn bộ lớp đối tượng đó, nên đừng vá prototype của kiểu dựng sẵn.`,

  14: `Debounce chờ ngừng hẳn mới chạy nên tiết kiệm nhất, nhưng người dùng phải đợi — sai cho thanh cuộn hoặc kéo thả, vốn cần phản hồi liên tục. Throttle chạy đều nên mượt nhưng tốn hơn. Ô tìm kiếm dùng debounce, theo dõi cuộn dùng throttle. Nhầm hai cái là chỗ hay bị vặn nhất trong nhóm câu hỏi này.`,

  15: `\`Object.freeze\` chỉ đóng băng một tầng — đối tượng lồng bên trong vẫn sửa được bình thường. Đóng băng sâu phải tự đệ quy và tốn theo kích thước dữ liệu. Nguy hiểm hơn: ở chế độ không nghiêm ngặt, ghi vào đối tượng đã đóng băng thất bại **im lặng** chứ không ném lỗi, nên lỗi rất khó phát hiện.`,

  16: `\`WeakMap\` cho phép gắn dữ liệu vào một đối tượng mà không giữ đối tượng đó sống, nên rất hợp để lưu metadata theo phần tử DOM. Cái mất là không duyệt được, không có \`size\`, không xoá hàng loạt được — đó là hệ quả bắt buộc chứ không phải thiếu sót, vì cho phép duyệt sẽ để lộ thời điểm bộ thu gom rác chạy.`,

  17: `Generator cho phép tạm dừng rồi tiếp tục, nên diễn đạt được luồng dữ liệu vô hạn hoặc tính lười mà không tốn bộ nhớ giữ toàn bộ. Nhưng nó chậm hơn vòng lặp thường đáng kể và khó debug vì ngăn xếp bị cắt khúc. Ngày nay phần lớn nhu cầu bất đồng bộ đã có \`async/await\`, nên generator chủ yếu còn dùng cho luồng dữ liệu.`,

  18: `Proxy chặn được mọi thao tác trên đối tượng, nên là nền của hệ thống phản ứng trong Vue 3 và MobX. Cái giá là mọi truy cập thuộc tính phải đi qua một lớp hàm, chậm hơn nhiều lần so với đối tượng thường và trình duyệt không tối ưu hoá được. Đừng dùng cho đối tượng bị đọc trong vòng lặp nóng.`,

  19: `\`bind\` tạo một hàm mới mỗi lần gọi, nên bind ngay trong thân render là tạo hàm mới mỗi lần render — đúng cái làm \`React.memo\` mất tác dụng hoàn toàn. \`call\` và \`apply\` không tạo hàm mới nhưng phải truyền ngữ cảnh ở mỗi lần gọi. Trong code hiện đại, hàm mũi tên thường gọn hơn cả ba.`,

  20: `Symbol làm khoá không bao giờ đụng nhau và bị ẩn khỏi \`Object.keys\` cùng \`JSON.stringify\`, nên hợp để gắn metadata nội bộ vào đối tượng của người khác. Nhưng chính việc bị ẩn khiến dữ liệu dùng Symbol làm khoá không tuần tự hoá được — gửi qua mạng hay lưu xuống là mất. Và trường riêng tư thật sự thì nay đã có cú pháp \`#\` của class.`,

  21: `Mọi cách chống rò rỉ đều là thêm code dọn dẹp, mà code dọn dẹp cũng là code có thể sai hoặc bị quên. Gom nhiều listener vào một \`AbortController\` rồi huỷ một lần ít lỗi hơn hẳn so với gỡ từng cái. Nhưng quan trọng hơn cả là biết cách **chứng minh** có rò rỉ bằng heap snapshot, thay vì đoán rồi rải \`removeEventListener\` khắp nơi cho yên tâm.`,

  22: `Uỷ quyền sự kiện giảm số listener và tự áp dụng cho cả phần tử thêm sau, nhưng mỗi sự kiện phải chạy qua bước kiểm tra target, và nó không dùng được với sự kiện không nổi bọt như \`focus\`. Với danh sách dưới vài chục phần tử tĩnh, gắn trực tiếp đơn giản hơn mà không chậm hơn đáng kể.`,

  23: `IIFE tạo phạm vi riêng là cách duy nhất trước khi có module ES, nên vẫn gặp rất nhiều trong code cũ. Ngày nay module ES cho cùng mức riêng tư mà còn phân tích tĩnh được, nhờ đó tree shaking mới hoạt động — điều IIFE không cho phép, vì nội dung của nó chỉ xác định được lúc chạy.`,

  24: `Currying cho phép tạo hàm chuyên biệt từ hàm tổng quát và ghép hàm gọn gàng, nhưng mỗi lần gọi từng phần là thêm một lớp closure — lồng nhiều tầng thì tốn bộ nhớ và ngăn xếp lỗi trở nên rất khó đọc. Trong JavaScript hằng ngày, tham số mặc định cộng hàm mũi tên thường đủ và rõ hơn.`,

  25: `Không chạm được DOM là giới hạn cốt lõi chứ không phải thiếu sót: nếu hai luồng cùng sửa DOM thì phải có khoá, và toàn bộ mô hình đơn luồng của trình duyệt sụp đổ. Cái giá phải trả là mọi kết quả tính toán vẫn phải quay về luồng chính để hiển thị, và chính bước truyền dữ liệu đó có khi tốn hơn phép tính.`,

  26: `Service Worker chạy độc lập với trang nên có thể tiếp tục phục vụ nội dung cũ sau khi đã deploy bản mới — vòng đời cập nhật của nó là nguồn lỗi kinh điển. Dùng \`skipWaiting\` và \`clients.claim\` để cập nhật ngay, nhưng làm vậy lại có rủi ro trang đang mở nhận nửa tài nguyên cũ nửa mới.`,

  27: `Tách thành pha tạo và pha thực thi chính là cái cho phép hoisting, nhờ đó hàm gọi được trước khi khai báo và code dễ tổ chức hơn. Cái giá là biến \`var\` tồn tại với giá trị \`undefined\` trước dòng khai báo, tạo ra cả một lớp lỗi mà \`let\` và \`const\` sinh ra để chặn.`,

  28: `Viết dạng đệ quy đuôi đọc đẹp và trên lý thuyết tránh được tràn ngăn xếp, nhưng **chỉ Safari thực sự cài tối ưu hoá này** — Chrome và Firefox thì không, và nhiều năm rồi vẫn vậy. Nên trong thực tế, đệ quy sâu vẫn tràn ngăn xếp và phải chuyển sang vòng lặp. Biết chi tiết này quan trọng hơn biết cú pháp.`,

  29: `Bộ nhớ dùng chung giữa các luồng bỏ được chi phí sao chép, nhưng mở ra tranh chấp dữ liệu mà JavaScript vốn không có khái niệm — phải dùng \`Atomics\` để đồng bộ, tức là bước vào thế giới lập trình đa luồng thật sự. Và sau Spectre, nó đòi các header cô lập nguồn gốc, vốn có thể làm hỏng mọi thứ nhúng từ bên thứ ba trên trang.`,

  30: `\`performance.now()\` cho độ phân giải cao và không bị lệch khi đồng hồ hệ thống thay đổi, nhưng trình duyệt đã cố tình làm thô độ chính xác để chống tấn công đo thời gian — nên đo một thao tác cực ngắn sẽ ra con số không tin được. Cách đúng là chạy nhiều lần rồi lấy trung vị, hoặc dùng \`performance.mark\` để thấy luôn trên dòng thời gian của DevTools.`,
};
