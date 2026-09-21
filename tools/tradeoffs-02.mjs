/** Đoạn "Đánh đổi" thêm vào giải thích của 35 câu trong 02-reactjs-questions.md */
export const FILE = '02-reactjs-questions.md';
export const TRADEOFFS = {
  1: `Virtual DOM không nhanh hơn thao tác DOM trực tiếp — nó chậm hơn, vì phải dựng cây, so sánh, rồi mới chạm vào DOM thật. Thứ nó đổi lấy là anh viết code khai báo mà không phải tự tính ra tập thao tác tối thiểu. Svelte và Solid bỏ hẳn Virtual DOM và nhanh hơn ở nhiều phép đo, đổi lại mất tính linh hoạt lúc chạy.`,

  2: `Dùng \`&&\` gọn hơn toán tử ba ngôi nhưng rò rỉ những giá trị falsy không phải boolean — \`0\` và \`NaN\` bị render thẳng ra màn hình. Viết \`count > 0 && ...\` hoặc dùng ba ngôi thì dài hơn vài ký tự nhưng không bao giờ dính lỗi này. Đây là lỗi hay gặp nhất khi render danh sách rỗng.`,

  3: `Đưa dữ liệu thành props làm component dễ test và dễ dùng lại, nhưng đẩy trách nhiệm quản lý lên cha — qua nhiều tầng thì thành prop drilling. Giữ làm state thì component tự chủ nhưng khó dùng lại ở nơi cần điều khiển giá trị từ bên ngoài. Câu hỏi quyết định luôn là: ai là nguồn sự thật của dữ liệu này?`,

  4: `Gọi \`setCount(count + 1)\` đọc dễ và đủ dùng cho phần lớn trường hợp, nhưng sai khi có nhiều lần cập nhật trong cùng một lượt, hoặc khi setter nằm trong callback bất đồng bộ đã đóng gói giá trị cũ. Dạng hàm \`setCount(c => c + 1)\` luôn đúng nhưng không cho phép đọc giá trị hiện tại để dùng cho logic khác. Quy tắc: state mới phụ thuộc state cũ thì bắt buộc dùng dạng hàm.`,

  5: `Khai báo đủ mảng phụ thuộc là đúng về ngữ nghĩa nhưng dễ tạo vòng lặp vô hạn khi trong đó có object hoặc hàm được tạo mới mỗi lần render. Cách chữa không phải là bớt phụ thuộc đi mà là làm cho chúng ổn định — \`useCallback\`, \`useMemo\`, hoặc đưa giá trị ra ngoài component. Bớt phụ thuộc là mua yên ổn hôm nay bằng một lỗi stale closure sẽ nổ sau.`,

  6: `Dùng index làm key thì rẻ và luôn có sẵn, nhưng sai ngay khi danh sách bị chèn, xoá hoặc sắp xếp: React dùng lại nhầm state của phần tử khác, ô input giữ giá trị của dòng vừa bị xoá. Dùng id ổn định thì đúng nhưng đòi backend phải trả id, hoặc phải tự sinh và giữ. Index chỉ an toàn khi danh sách tĩnh và bên trong mỗi phần tử không có state.`,

  7: `Controlled cho phép validate theo từng phím gõ và đồng bộ với state khác, nhưng mỗi phím là một lần re-render — form 50 trường sẽ thấy giật trên máy yếu. Uncontrolled nhanh hơn hẳn và ít code hơn, đổi lại không kiểm soát được giá trị trong lúc đang gõ. React Hook Form chọn uncontrolled làm mặc định chính vì lý do này.`,

  8: `React gom sự kiện ở gốc cây thay vì gắn vào từng node, nên gắn handler cho 1000 dòng không tạo ra 1000 listener. Cái mất là \`e.stopPropagation()\` của React không chặn được listener gắn trực tiếp bằng \`addEventListener\`, và thứ tự chạy giữa hai hệ thống dễ gây bất ngờ khi tích hợp thư viện bên ngoài.`,

  9: `Với điều kiện ngắn thì \`&&\` gọn, nhưng khi vế trái là số hoặc chuỗi rỗng thì chính giá trị đó bị render. Toán tử ba ngôi với \`null\` ở nhánh sai luôn an toàn, đổi lại dài dòng hơn. Khi điều kiện lồng nhau, tách ra thành biến hoặc component con đọc dễ hơn cả hai cách.`,

  10: `Fragment tránh được div thừa vốn hay phá layout của flex và grid, nhưng cũng mất luôn chỗ để gắn class, ref hay thuộc tính. Dạng ngắn \`<>\` không nhận \`key\`, nên khi render danh sách vẫn phải viết đầy đủ \`<React.Fragment key={...}>\`.`,

  11: `\`useCallback\` không miễn phí: nó vẫn tạo hàm mới mỗi lần render rồi mới quyết định trả bản cũ hay bản mới, cộng thêm chi phí so sánh mảng phụ thuộc. Nó chỉ có lãi khi hàm đó được truyền xuống component đã bọc \`memo\`, hoặc nằm trong mảng phụ thuộc của một effect khác. Bọc mọi hàm là trả chi phí mà không nhận lại gì.`,

  12: `\`useMemo\` chỉ đáng khi phép tính thật sự đắt, hoặc khi kết quả được dùng làm phụ thuộc cho chỗ khác. Với phép tính rẻ, chi phí so sánh phụ thuộc cộng bộ nhớ giữ giá trị còn lớn hơn chính phép tính. Và React không cam kết giữ cache mãi — nó được phép bỏ để giải phóng bộ nhớ, nên đừng dùng \`useMemo\` như một chỗ lưu trữ.`,

  13: `Ref không kích hoạt render nên rất rẻ, nhưng chính vì thế mà giao diện không tự cập nhật theo nó. Đặt vào ref thứ mà giao diện cần hiển thị là lỗi khó tìm: giá trị đúng trong bộ nhớ mà màn hình vẫn hiện cái cũ. Ranh giới: cần hiển thị thì dùng state, cần nhớ giữa các lần render mà không hiển thị thì dùng ref.`,

  14: `Context giải được prop drilling mà không cần thư viện ngoài, nhưng mọi consumer re-render khi giá trị đổi, kể cả consumer chỉ đọc một trường. Giảm được bằng cách tách thành nhiều context theo nhịp thay đổi, và bọc \`useMemo\` cho value. Khi số consumer lớn và giá trị đổi liên tục, thư viện có selector như Zustand hay Redux rẻ hơn hẳn.`,

  15: `\`React.memo\` thêm một phép so sánh props trước mỗi lần render. Với component nhẹ, phép so sánh đó tốn hơn chính việc render lại. Nó chỉ có lãi khi component nặng và props thật sự ổn định — mà props chứa object hoặc hàm viết inline thì không bao giờ ổn định, nên \`memo\` vừa vô dụng vừa tốn thêm.`,

  16: `Quy tắc không gọi hook trong điều kiện cho phép React nhận diện hook bằng thứ tự gọi, nhờ đó không cần định danh và API gọn hơn hẳn — đổi lại người viết mất tự do. Khi cần logic có điều kiện, cách đúng là đưa điều kiện vào bên trong hook, hoặc tách thành component con để React quyết định có mount hay không.`,

  17: `\`useReducer\` gom mọi chuyển trạng thái vào một chỗ, dễ test và dễ lần lại vì sao state thành ra như vậy, nhưng tốn nhiều code hơn \`useState\` cho việc đơn giản. Ranh giới thực dụng: từ ba trường state trở lên mà chúng luôn thay đổi cùng nhau, hoặc trạng thái sau phụ thuộc trạng thái trước, thì reducer bắt đầu có lãi.`,

  18: `Error Boundary chỉ bắt lỗi trong lúc render, trong lifecycle và trong constructor — nó không bắt lỗi trong event handler, trong \`setTimeout\`, hay trong code bất đồng bộ. Đặt một boundary duy nhất ở gốc thì đơn giản nhưng một lỗi nhỏ làm trắng cả trang; đặt nhiều boundary nhỏ thì cô lập tốt hơn nhưng tốn code và dễ nuốt mất lỗi mà không ai biết.`,

  19: `Thuật toán so sánh của React chấp nhận không tối ưu tuyệt đối để đổi lấy độ phức tạp O(n) thay vì O(n³) của bài toán so sánh cây tổng quát. Cái giá là nó giả định hai phần tử khác loại thì cây con bên dưới cũng khác hẳn — đổi một thẻ \`<div>\` thành \`<span>\` là huỷ và dựng lại toàn bộ cây con, mất sạch state bên trong.`,

  20: `Nâng state lên cho phép chia sẻ, nhưng mỗi lần nâng là mở rộng vùng bị re-render — cha đổi state thì mọi con đều render lại. Nâng quá tay thành "state nằm ở gốc, cả cây render mỗi lần gõ phím". Nguyên tắc ngược lại là colocation: chỉ nâng đúng tới tổ tiên chung gần nhất thật sự cần dữ liệu đó.`,

  21: `Fiber cho phép cắt công việc render thành từng mẩu để nhường lại luồng chính, đổi lại mỗi mẩu phải lưu đủ trạng thái để tiếp tục được — tốn bộ nhớ hơn và làm tổng thời gian render dài hơn so với chạy một mạch. Đây là đánh đổi tổng thông lượng lấy độ mượt của phản hồi.`,

  22: `Render có thể bị ngắt nghĩa là một lần render có thể bị bỏ dở rồi chạy lại từ đầu, nên hàm render bắt buộc phải thuần và không có tác dụng phụ. Code cũ dựa vào giả định render chạy đúng một lần sẽ hỏng theo cách rất khó tìm. Đây chính là lý do Strict Mode gọi hai lần trong môi trường phát triển.`,

  23: `Suspense làm code lấy dữ liệu gọn hẳn vì không phải tự quản cờ \`isLoading\`, nhưng đặt ranh giới quá rộng thì cả một mảng lớn biến thành khung chờ mỗi lần một phần nhỏ tải lại — người dùng thấy giao diện nhảy. Đặt ranh giới hẹp thì mượt hơn nhưng nhiều khung chờ rời rạc cũng gây nhiễu thị giác.`,

  24: `Chia nhỏ bundle giảm được dung lượng tải lần đầu, nhưng mỗi chunk là một lượt đi về mạng — chia quá vụn thì tổng thời gian tệ hơn vì độ trễ cộng dồn, nhất là trên mạng di động. Và lazy nhầm thứ nằm trên đường hiển thị nội dung chính sẽ làm LCP xấu đi. Chia theo ranh giới route là điểm cân bằng an toàn để bắt đầu.`,

  25: `Server Component bỏ hẳn JavaScript của component ra khỏi bundle client, nhưng mọi tương tác đều phải đi qua ranh giới \`"use client"\` — đặt ranh giới sai chỗ thì kéo cả cây con thành client component và mất sạch lợi ích. Đổi lại, component chạy trên server không có state, không có effect và không gắn được trình xử lý sự kiện.`,

  26: `SSR cho nội dung hiện sớm, nhưng giữa lúc hiện ra và lúc hydrate xong thì trang nhìn thấy mà bấm không ăn — thao tác của người dùng trong khoảng đó rơi vào hư không. Trang càng nhiều JavaScript thì khoảng đó càng dài, và nó không hiện lên trong chỉ số LCP. Đây chính là bài toán mà RSC và hydration chọn lọc sinh ra để giải.`,

  27: `Portal đưa DOM ra ngoài cây cha nên thoát được \`overflow: hidden\` và bẫy \`z-index\`, nhưng sự kiện vẫn nổi bọt theo cây React chứ không theo cây DOM — chỗ này hay gây bất ngờ khi debug. Và phải tự lo quản lý focus cùng thuộc tính ARIA, vì trình đọc màn hình đi theo cây DOM chứ không theo cây React.`,

  28: `\`useLayoutEffect\` chạy trước khi trình duyệt vẽ nên tránh được nhấp nháy khi phải đo rồi chỉnh DOM ngay, nhưng nó chặn luồng vẽ — code nặng đặt trong đó làm trang đứng hình. Nó cũng không chạy khi render ở server nên gây cảnh báo trong SSR. Mặc định dùng \`useEffect\`, chỉ đổi khi thật sự nhìn thấy nhấp nháy.`,

  29: `Gọi hai lần giúp lộ ra tác dụng phụ và effect thiếu hàm dọn dẹp ngay từ lúc phát triển, đổi lại log hiện hai lần và mọi phép đo thời gian trong môi trường phát triển không còn tin được. Strict Mode chỉ chạy ở bản phát triển, nên đừng dùng số đo ở đó để kết luận bất cứ điều gì về hiệu năng production.`,

  30: `Ba cách còn lại cũng không hề miễn phí. Ảo hoá danh sách làm hỏng \`Ctrl+F\` của trình duyệt và gây khó cho trình đọc màn hình. \`React.memo\` tốn một phép so sánh props mỗi lần render. Chia nhỏ bundle thêm lượt đi mạng. Điểm chung của cả ba: tối ưu nào cũng có giá, nên phải đo rồi mới áp dụng đúng chỗ, chứ không rải đều cho yên tâm.`,

  31: `Đặt state gần nơi dùng thu hẹp vùng re-render và làm component tự chủ, nhưng khi xuất hiện nơi thứ hai cần cùng dữ liệu thì phải nâng lên — tức là sửa lại chỗ đã viết xong. Đó là chi phí chấp nhận được: nâng lên khi có nhu cầu thật dễ hơn nhiều so với gỡ một mẩu state ra khỏi store toàn cục sau khi nó đã có mười chỗ đọc.`,

  32: `Hook tránh được tầng bọc lồng nhau nhưng không chia sẻ được phần JSX — muốn tái dùng cả giao diện lẫn logic thì render prop vẫn hợp hơn. HOC còn giá trị khi cần bọc component lớp cũ, hoặc thêm hành vi từ bên ngoài mà không được sửa component gốc. Ba cách không thay thế hoàn toàn cho nhau.`,

  33: `Gom nhiều lần cập nhật thành một lần render giảm công việc thừa, nhưng nghĩa là đọc state ngay sau khi gọi setter sẽ thấy giá trị cũ. Từ React 18, việc gom áp dụng cả trong code bất đồng bộ, nên code cũ dựa vào việc render ngay sau \`setState\` trong \`setTimeout\` có thể đổi hành vi. Cần chạy ngoài cơ chế gom thì có \`flushSync\`, nhưng nó tiêu đúng phần vừa tiết kiệm được.`,

  34: `Đánh dấu cập nhật là không khẩn giữ cho ô nhập liệu phản hồi tức thì, nhưng phần nội dung nặng sẽ hiện chậm hơn và có thể giữ dữ liệu cũ một lúc — phải có chỉ báo đang tải, nếu không người dùng tưởng ứng dụng treo. Không dùng cho những cập nhật mà người dùng cần thấy ngay lập tức, ví dụ bật tắt một công tắc.`,

  35: `Khác \`useTransition\` ở chỗ nó hoãn một *giá trị* chứ không hoãn một *hành động*, nên dùng được khi giá trị đến từ nơi mình không kiểm soát, chẳng hạn props từ cha. Cái giá là có một khoảng thời gian hiển thị kết quả cũ. Và nó không làm phép tính nhanh lên chút nào, chỉ dời thời điểm chạy — phép tính thật sự nặng vẫn cần \`useMemo\` hoặc đẩy sang web worker.`,
};
