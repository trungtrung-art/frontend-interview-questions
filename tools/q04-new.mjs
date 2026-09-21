/** 10 câu mới lấp các chủ đề quy mô tổ chức còn thiếu: i18n, monorepo,
 *  observability, micro-frontend, build tool, chi phí kỹ thuật. */
export const SECTION = 'PHẦN 5: QUY MÔ TỔ CHỨC';
export const ANSWER_SECTION = 'Phần 5: Quy mô tổ chức';
export const QUESTIONS = [
  {
    n: 36, title: 'i18n - Tổ chức chuỗi dịch',
    prompt: '**Tổ chức chuỗi dịch cho app nhiều ngôn ngữ thế nào để không lệch giữa các bản?**',
    opts: {
      A: 'Để chuỗi tiếng Anh thẳng trong code, dịch tự động lúc chạy bằng API dịch máy',
      B: 'Khoá dịch theo không gian tên gắn với tính năng, tiếng gốc là nguồn sự thật, thiếu khoá thì fallback về tiếng gốc và báo trong CI',
      C: 'Một file JSON phẳng cho mỗi ngôn ngữ, khoá đặt theo chính câu tiếng Việt',
      D: 'Lưu mọi chuỗi trong cơ sở dữ liệu và gọi API lấy về khi trang tải',
    },
    ans: 'B',
    expl: `Vấn đề thật của i18n không phải dịch mà là **giữ các bản không lệch nhau**. Khoá theo không gian tên gắn với tính năng cho phép xoá cả cụm khi tính năng bị gỡ, thay vì để lại chuỗi chết mãi mãi. Tiếng gốc làm nguồn sự thật thì mọi ngôn ngữ khác so vào đó được, và CI phát hiện được khoá thiếu trước khi lên production.

**Đánh đổi:** khoá có cấu trúc thì bền nhưng khó đọc trong code — nhìn \`checkout.payment.error.declined\` không biết nó hiện ra chữ gì, phải mở file dịch. Đặt khoá theo chính câu tiếng gốc (phương án C) đọc ngay được, nhưng sửa một dấu phẩy trong câu gốc là mất toàn bộ bản dịch của khoá đó.

A không dùng được vì dịch máy sai ngữ cảnh và không kiểm soát được thuật ngữ sản phẩm. D làm chuỗi phụ thuộc mạng, trang sẽ nhấp nháy chữ khi tải, và mất luôn khả năng render ở server.`,
  },
  {
    n: 37, title: 'i18n - Số nhiều và định dạng',
    prompt: '**Hiển thị "1 tin nhắn" / "5 tin nhắn" và ngày giờ theo từng ngôn ngữ. Cách đúng?**',
    opts: {
      A: 'Viết hàm tự kiểm tra `count === 1` rồi chọn một trong hai chuỗi',
      B: 'Nối chuỗi thủ công theo mẫu `${count} ${đơn vị}` cho mọi ngôn ngữ',
      C: 'Dùng thư viện định dạng ngày như dayjs và tự viết logic số nhiều',
      D: 'Dùng `Intl.PluralRules` cùng `Intl.NumberFormat` và `Intl.DateTimeFormat`, hoặc định dạng ICU MessageFormat',
    },
    ans: 'D',
    expl: `Quy tắc số nhiều không phải đâu cũng hai dạng. Tiếng Việt và tiếng Nhật chỉ có một dạng, tiếng Anh có hai, tiếng Nga có ba, tiếng Ả Rập có sáu. \`Intl.PluralRules\` mang sẵn bảng quy tắc của mọi ngôn ngữ, nên code không phải biết. Tương tự, thứ tự ngày tháng, dấu phân cách hàng nghìn và ký hiệu tiền tệ đều khác nhau theo vùng — \`Intl\` có sẵn trong trình duyệt và không tốn byte bundle nào.

**Đánh đổi:** \`Intl\` chạy lúc render nên có chi phí, và tạo mới đối tượng định dạng trong vòng lặp là lỗi hiệu năng hay gặp — nên tạo một lần rồi dùng lại. Ngoài ra kết quả khác nhau giữa các phiên bản trình duyệt và giữa Node với trình duyệt, nên đừng so khớp chuỗi đã định dạng trong test.

A đúng cho tiếng Anh và sai cho phần lớn ngôn ngữ còn lại. B tạo ra câu sai ngữ pháp ngay khi ngôn ngữ đích đặt số sau danh từ.`,
  },
  {
    n: 38, title: 'i18n - Giao diện phải sang trái',
    prompt: '**Hỗ trợ tiếng Ả Rập hoặc Do Thái (RTL). Chuẩn bị giao diện thế nào?**',
    opts: {
      A: 'Dùng thuộc tính logic của CSS (`margin-inline-start`, `padding-block`) và đặt `dir` trên thẻ gốc, thay vì left/right cố định',
      B: 'Viết một file CSS riêng cho RTL, lật toàn bộ left thành right',
      C: 'Dùng `transform: scaleX(-1)` cho toàn bộ trang khi ở chế độ RTL',
      D: 'Chỉ đổi hướng chữ bằng `direction: rtl`, phần bố cục giữ nguyên',
    },
    ans: 'A',
    expl: `Thuộc tính logic mô tả vị trí theo *hướng đọc* chứ không theo *hướng màn hình*, nên cùng một khai báo chạy đúng cho cả hai chiều. Đặt \`dir\` ở thẻ gốc là đủ để trình duyệt tự lật. Đây là cách duy nhất không phải duy trì hai bộ style.

**Đánh đổi:** thuộc tính logic đọc khó hơn với người quen left/right, và một số thứ **không được lật**: số điện thoại, biểu đồ có trục thời gian, nút play của trình phát nhạc, logo thương hiệu. Nên vẫn cần chỗ để ghi đè thủ công cho những ngoại lệ đó.

B tạo ra hai bộ style phải giữ đồng bộ, lệch nhau chỉ sau vài tháng. C lật cả chữ và ảnh thành gương, không dùng được. D để chữ chạy ngược chiều trong một bố cục vẫn xuôi, kết quả rối hơn là không làm gì.`,
  },
  {
    n: 39, title: 'Monorepo - CI chỉ chạy phần đã đổi',
    prompt: '**Monorepo 20 package, CI chạy 40 phút mỗi commit. Xử lý thế nào?**',
    opts: {
      A: 'Chỉ chạy CI trên nhánh chính, các nhánh khác bỏ qua',
      B: 'Tách repo ra để mỗi package có CI riêng',
      C: 'Dựng đồ thị phụ thuộc, chỉ build và test những package bị ảnh hưởng, kèm cache từ xa dùng chung cho cả đội',
      D: 'Giảm số test để CI chạy nhanh hơn',
    },
    ans: 'C',
    expl: `Công cụ như Turborepo hoặc Nx dựng đồ thị phụ thuộc rồi chỉ chạy lại phần bị ảnh hưởng bởi thay đổi. Cache từ xa là phần quan trọng hơn: kết quả build của người này dùng lại được cho người khác và cho CI, nên cùng một commit không bao giờ bị build hai lần. Đây là thứ làm monorepo lớn vẫn chạy nhanh.

**Đánh đổi:** cache chỉ đúng khi khai báo đầu vào chính xác — quên khai một biến môi trường là cache trả về kết quả sai, và loại lỗi này cực kỳ khó tìm vì nó chỉ xuất hiện trên máy có cache. Và hạ tầng cache từ xa là một thứ nữa phải vận hành và trả tiền.

A để lỗi lọt tới nhánh chính, đúng chỗ đắt nhất để sửa. B là quay về polyrepo và mang theo bài toán đồng bộ phiên bản. D đổi thời gian CI lấy rủi ro production.`,
  },
  {
    n: 40, title: 'Monorepo - Phiên bản package nội bộ',
    prompt: '**Trong monorepo, các package dùng lẫn nhau nên tham chiếu phiên bản thế nào?**',
    opts: {
      A: 'Ghim phiên bản cụ thể như với package ngoài, nâng thủ công khi cần',
      B: 'Dùng workspace protocol để luôn lấy mã nguồn trong repo, chỉ đánh phiên bản thật khi phát hành ra ngoài',
      C: 'Không đánh phiên bản gì cả, import thẳng theo đường dẫn tương đối',
      D: 'Mỗi package tự publish lên registry nội bộ sau mỗi commit',
    },
    ans: 'B',
    expl: `Workspace protocol (\`workspace:*\`) cho trình quản lý gói biết lấy mã nguồn ngay trong repo thay vì tải từ registry. Nhờ đó sửa một package là các package dùng nó thấy ngay, và commit nguyên tử xuyên package hoạt động đúng như mong đợi. Khi thật sự phát hành ra ngoài thì công cụ như Changesets thay ký hiệu đó bằng số phiên bản thật.

**Đánh đổi:** vì luôn dùng bản mới nhất trong repo nên không thể có hai phiên bản khác nhau của cùng một package cùng tồn tại — nếu một đội cần bản cũ thì buộc phải nâng cấp theo, tức là mọi thay đổi phá vỡ đều đụng tới tất cả cùng lúc. Đó là mặt trái của chính lợi ích lớn nhất của monorepo.

A làm mất lợi thế của monorepo. C bỏ qua ranh giới package nên mọi thứ dính vào nhau và tree shaking không hoạt động. D tạo ra rác trong registry và làm chậm mọi thứ.`,
  },
  {
    n: 41, title: 'Observability - Source map cho production',
    prompt: '**Bundle production đã minify, stack trace báo về là `a.js:1:28471`. Cách xử lý?**',
    opts: {
      A: 'Deploy kèm source map lên CDN để trình duyệt tự đọc được',
      B: 'Bỏ minify ở production để stack trace đọc được',
      C: 'Ghi log thủ công tên hàm ở mọi chỗ có thể lỗi',
      D: 'Sinh source map trong CI rồi đẩy riêng lên dịch vụ theo dõi lỗi, không phục vụ công khai, và gắn số hiệu bản build vào mỗi báo cáo',
    },
    ans: 'D',
    expl: `Source map là thứ biến stack trace vô nghĩa thành số dòng trong mã nguồn thật. Đẩy riêng lên dịch vụ theo dõi thì vừa đọc được stack trace vừa không lộ mã nguồn ra công chúng. Số hiệu bản build là mảnh ghép hay bị quên: không có nó thì không biết lỗi đến từ bản nào, và bản vá đã lên hay chưa.

**Đánh đổi:** source map làm bước build chậm hơn và tốn dung lượng lưu trữ theo từng bản phát hành. Và chúng có thời hạn hữu dụng — giữ source map của bản deploy sáu tháng trước thường vô ích, nên cần chính sách dọn.

A để lộ toàn bộ mã nguồn cho bất kỳ ai mở DevTools. B làm bundle lớn gấp nhiều lần, trả giá bằng trải nghiệm của mọi người dùng để tiện cho lập trình viên. C là công việc thủ công không bao giờ phủ hết.`,
  },
  {
    n: 42, title: 'Observability - Dữ liệu thật và đo tổng hợp',
    prompt: '**Lighthouse cho điểm 95 nhưng người dùng vẫn than chậm. Vì sao và đo thế nào?**',
    opts: {
      A: 'Lighthouse là đo tổng hợp trên một máy và một đường mạng cố định; cần thêm dữ liệu người dùng thật để thấy phân vị 75 trên thiết bị và mạng thực tế',
      B: 'Điểm Lighthouse sai, nên chạy lại nhiều lần rồi lấy điểm cao nhất',
      C: 'Người dùng cảm nhận sai, số liệu mới là thứ đáng tin',
      D: 'Chạy Lighthouse trên máy cấu hình yếu hơn là đủ để phản ánh thực tế',
    },
    ans: 'A',
    expl: `Đo tổng hợp chạy trong điều kiện cố định nên lặp lại được và hợp để chặn hồi quy trong CI, nhưng nó không biết gì về thiết bị thật, mạng thật và hành vi thật của người dùng. Dữ liệu người dùng thật cho phân vị 75 trên tập người dùng thực — chính là con số Google dùng để xếp hạng, và cũng là con số phản ánh điều anh nghe được từ người dùng.

**Đánh đổi:** dữ liệu thật đến chậm, cần đủ lưu lượng mới có ý nghĩa thống kê, và không chỉ ra nguyên nhân — nó nói trang chậm chứ không nói vì sao. Đo tổng hợp thì ngược lại: có ngay, tái lập được, chỉ ra được nguyên nhân cụ thể. Hai loại bổ sung nhau, dùng một loại là mù một nửa.

B là chọn số liệu đẹp rồi tự lừa mình. C bỏ qua đúng tín hiệu quan trọng nhất. D thu hẹp khoảng cách nhưng vẫn là một điểm đo duy nhất.`,
  },
  {
    n: 43, title: 'Micro-frontend - Chia sẻ thư viện dùng chung',
    prompt: '**Ba micro-frontend cùng dùng React. Xử lý phần dùng chung thế nào?**',
    opts: {
      A: 'Mỗi mảnh đóng gói React riêng cho độc lập hoàn toàn',
      B: 'Đặt React vào biến toàn cục rồi mọi mảnh cùng đọc',
      C: 'Khai làm shared singleton trong Module Federation với khoảng phiên bản tương thích, và có kiểm tra ở CI khi phiên bản lệch nhau',
      D: 'Gộp ba mảnh lại thành một ứng dụng để khỏi phải chia sẻ',
    },
    ans: 'C',
    expl: `React phải là singleton, nếu không hook sẽ hỏng ngay — hai bản React trong một trang nghĩa là hai bộ dispatcher và lỗi "invalid hook call". Module Federation cho khai báo phụ thuộc dùng chung kèm khoảng phiên bản chấp nhận được, và chọn bản phù hợp lúc chạy.

**Đánh đổi:** đây chính là điểm yếu cốt lõi của micro-frontend. Chia sẻ phụ thuộc thì tiết kiệm dung lượng nhưng buộc các đội phải nâng cấp đồng bộ — tức là mất đúng sự độc lập mà micro-frontend sinh ra để có. Không chia sẻ thì thật sự độc lập nhưng người dùng tải ba bản React, và với React thì còn hỏng chức năng chứ không chỉ nặng.

A hỏng hook. B là cách làm thủ công của chính C nhưng không có kiểm soát phiên bản. D có thể là câu trả lời đúng nếu ba đội không thật sự cần phát hành độc lập.`,
  },
  {
    n: 44, title: 'Build tool - Vite và Webpack',
    prompt: '**Vite khởi động dev server tức thì trong khi Webpack mất 40 giây. Vì sao?**',
    opts: {
      A: 'Vite viết bằng ngôn ngữ biên dịch nên nhanh hơn về bản chất',
      B: 'Ở chế độ phát triển, Vite phục vụ trực tiếp bằng module ES gốc của trình duyệt nên không cần đóng gói trước; Webpack dựng đồ thị và đóng gói toàn bộ trước khi phục vụ',
      C: 'Vite bỏ qua bước kiểm tra kiểu nên nhanh hơn',
      D: 'Vite lưu cache trên đĩa còn Webpack thì không',
    },
    ans: 'B',
    expl: `Khác biệt nằm ở kiến trúc chứ không phải tối ưu hoá. Vite để trình duyệt tự phân giải import, nên khởi động chỉ cần chuẩn bị các phụ thuộc trong \`node_modules\` bằng esbuild, còn mã nguồn của anh thì biên dịch theo yêu cầu từng file khi trình duyệt hỏi tới. Thời gian khởi động vì thế gần như không tăng theo kích thước dự án.

**Đánh đổi:** vì môi trường phát triển và môi trường production dùng hai cơ chế khác nhau — module ES gốc so với Rollup — nên có loại lỗi chỉ xuất hiện ở bản build. Đó là cái giá thật của mô hình này, và là lý do vẫn cần chạy bản production trong CI chứ không tin hoàn toàn vào dev server.

A sai nguyên nhân: esbuild viết bằng Go có góp phần nhưng không phải lý do chính. C không liên quan, cả hai đều không kiểm tra kiểu khi build. D thì Webpack cũng có cache trên đĩa.`,
  },
  {
    n: 45, title: 'Chi phí kỹ thuật - Thuyết phục bằng con số',
    prompt: '**Muốn xin hai tuần để nâng cấp hạ tầng build. Trình bày với quản lý thế nào?**',
    opts: {
      A: 'Giải thích rằng công cụ hiện tại đã cũ và cộng đồng đã chuyển sang cái mới',
      B: 'Nói rằng đội đang rất khó chịu và tinh thần làm việc đi xuống',
      C: 'Đề nghị làm âm thầm xen vào các sprint mà không báo',
      D: 'Quy ra con số: thời gian chờ build mỗi người mỗi ngày nhân số người nhân số ngày, cộng chi phí CI, so với hai tuần bỏ ra và thời điểm hoàn vốn',
    },
    ans: 'D',
    expl: `Quản lý không từ chối việc cải thiện hạ tầng, họ từ chối một khoản chi không có hình dạng. Build chậm 8 phút, chạy 15 lần một ngày, 6 người — là 12 giờ công mỗi ngày, tương đương một người rưỡi. Đặt cạnh hai tuần đầu tư thì phép tính tự nói. Thêm hoá đơn CI vào là có luôn con số tiền mặt.

**Đánh đổi:** cách này chỉ dùng được khi có số liệu, mà muốn có số liệu thì phải đo từ trước — bắt đầu đo lúc cần xin là đã muộn. Và quy mọi thứ ra tiền có mặt trái: những cải thiện khó đo như code dễ đọc hơn sẽ luôn thua trong cuộc so sánh này, dù chúng vẫn quan trọng.

A là lý lẽ kỹ thuật, không trả lời câu hỏi "đổi lại được gì". B mô tả triệu chứng chứ không mô tả chi phí. C làm mất niềm tin và khiến lần sau xin khó hơn.`,
  },
];
