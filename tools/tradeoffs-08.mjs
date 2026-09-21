/** Đoạn "Đánh đổi" thêm vào giải thích của 35 câu trong 08-testing-best-practices.md */
export const FILE = '08-testing-best-practices.md';
export const TRADEOFFS = {
  1: `Hình tháp đúng cho backend nhưng với frontend thì nhiều đội chuyển sang hình "chiếc cúp" — tầng integration dày hơn tầng unit. Lý do: phần lớn lỗi frontend nằm ở chỗ các mảnh ghép lại với nhau, còn unit test cho component thuần hiển thị chủ yếu kiểm tra chi tiết cài đặt, nên refactor là gãy dù chức năng không đổi.`,

  2: `Unit test khoanh vùng lỗi chính xác và chạy trong mili giây, nhưng mỗi lần tách nhỏ là một lần phải giả lập phần xung quanh — mà giả lập sai thì test xanh trong khi production hỏng. Integration test bắt được đúng loại lỗi đó nhưng chậm hơn và khi đỏ thì phải đào lâu hơn mới biết hỏng ở đâu.`,

  3: `Độ phủ đo được dòng nào đã chạy, không đo được có kiểm tra đúng hay không — một test không có \`expect\` nào vẫn cho 100% độ phủ. Đặt ngưỡng độ phủ trong CI chặn được việc code mới không có test, nhưng ngưỡng quá cao đẩy đội đi viết test cho getter và setter để lấy số, tốn công mà không tăng an toàn.`,

  4: `Mock làm test nhanh và ổn định, nhưng mỗi mock là một giả định về cách thứ bên ngoài hoạt động — giả định đó lệch dần theo thời gian mà không ai báo. Test xanh với API đã đổi hợp đồng là tình huống kinh điển. Mock ở tầng mạng như MSW an toàn hơn mock ở tầng module, vì nó vẫn đi qua code thật của mình.`,

  5: `Arrange–Act–Assert làm test dễ đọc và dễ soi, nhưng áp cứng thì thành rườm rà với test chỉ có một dòng. Và nó không ngăn được lỗi phổ biến nhất: nhiều Act trong một test. Một test nên có đúng một hành động, nếu không thì khi đỏ không biết hành động nào gây ra.`,

  6: `Phân biệt mock, stub, spy, fake giúp diễn đạt ý định rõ hơn, nhưng trong thực tế các thư viện gộp hết vào một API nên ranh giới mờ. Điều đáng nhớ hơn là: kiểm tra một hàm *đã được gọi* là kiểm tra cài đặt, dễ gãy khi refactor; kiểm tra *kết quả* bền hơn nhiều.`,

  7: `Snapshot bắt được thay đổi ngoài ý muốn gần như miễn phí, nhưng khi nó đỏ thì rất dễ bấm cập nhật cho xanh mà không đọc kỹ — lúc đó nó không còn bảo vệ gì. Snapshot lớn thì không ai review nổi. Dùng cho khối nhỏ và ổn định, đừng chụp cả cây component.`,

  8: `Test cô lập chạy song song được và không tạo lỗi dây chuyền, nhưng cái giá là mỗi test phải tự dựng lại trạng thái — với dữ liệu phức tạp thì phần chuẩn bị dài hơn phần kiểm tra. Dùng chung trạng thái thì nhanh hơn nhiều nhưng thứ tự chạy trở thành phụ thuộc ngầm, và lỗi chỉ xuất hiện khi chạy song song.`,

  9: `Test dao động tệ hơn không có test, vì nó dạy cả đội bỏ qua màu đỏ của CI. Chạy lại tự động che được triệu chứng nhưng giữ nguyên bệnh, và che luôn cả những lỗi cạnh tranh thật trong sản phẩm. Cách đúng tốn công hơn: cô lập test đó, tìm nguồn bất định, thường là chờ theo thời gian cố định thay vì chờ theo điều kiện.`,

  10: `TDD buộc phải nghĩ về giao diện trước khi cài đặt, và cho bộ test tự nhiên bám vào hành vi thay vì cấu trúc. Nhưng nó chậm hơn rõ rệt khi chưa biết mình muốn gì — lúc đang dò đường thì viết thử rồi bỏ nhanh hơn. Nhiều đội dùng TDD cho logic nghiệp vụ và bỏ qua nó ở tầng giao diện đang còn thay đổi liên tục.`,

  11: `Test theo cách người dùng tương tác làm test bền trước refactor và bắt được lỗi thật. Nhưng có những thứ người dùng không thấy mà vẫn cần đảm bảo, ví dụ một hàm tính toán phức tạp — ép mọi thứ qua giao diện làm test chậm và khó chỉ ra lỗi. Tầng đó nên test trực tiếp.`,

  12: `Ưu tiên \`getByRole\` ép code phải có ngữ nghĩa và thuộc tính accessibility đúng, nên test tốt cũng là kiểm tra accessibility. Cái giá là truy vấn theo vai trò chậm hơn và khó viết hơn với giao diện phức tạp, và thông báo lỗi khi không tìm thấy thì rất dài.`,

  13: `\`findBy\` và \`waitFor\` chờ theo điều kiện nên ổn định hơn hẳn chờ theo thời gian cố định. Nhưng chúng che mất việc giao diện thật sự chậm: test vẫn xanh trong khi người dùng phải đợi ba giây. Và thời gian chờ mặc định quá dài làm một test hỏng mất cả phút mới báo đỏ.`,

  14: `\`userEvent\` mô phỏng chuỗi sự kiện thật nên bắt được lỗi mà \`fireEvent\` bỏ sót — ví dụ nút bị \`pointer-events: none\` vẫn nhận được \`fireEvent.click\`. Đổi lại nó chậm hơn nhiều lần và phải \`await\`, nên bộ test lớn sẽ thấy rõ chênh lệch thời gian.`,

  15: `\`renderHook\` test hook trực tiếp nên nhanh và tập trung, nhưng test một hook tách khỏi component là test cài đặt — hook chỉ có ý nghĩa khi gắn vào vòng đời thật. Với hook đơn giản thì cách đó ổn; với hook có effect và dọn dẹp, test qua một component nhỏ cho tín hiệu thật hơn.`,

  16: `Bọc Provider trong test cho môi trường gần thật, nhưng nếu mỗi test phải tự bọc thì sẽ có chỗ quên và chỗ bọc khác nhau. Gói vào một hàm render dùng chung là cách chữa, đổi lại nó âm thầm kéo theo mọi provider vào mọi test, làm test chậm và giấu mất phụ thuộc thật của component.`,

  17: `Test theo luồng người dùng bắt được lỗi tích hợp mà test từng phần bỏ sót, nhưng khi đỏ thì phải đào qua cả luồng mới biết hỏng ở đâu. Và luồng càng dài thì càng dễ dao động. Cân bằng: một test cho luồng thành công đầy đủ, còn các trường hợp lỗi thì test riêng ở mức nhỏ hơn.`,

  18: `\`rerender\` giữ nguyên thực thể component nên test được hành vi khi props đổi — thứ mà render mới không kiểm được. Nhưng nó cũng giữ lại state cũ, nên dùng nhầm sẽ tạo ra trạng thái mà người dùng thật không bao giờ gặp.`,

  19: `Test Error Boundary đòi cố tình ném lỗi, và React sẽ in cảnh báo đỏ ra console làm nhiễu kết quả — phần lớn đội phải tắt tạm console trong test đó, mà làm vậy thì cũng che luôn lỗi thật. Và Error Boundary không bắt lỗi trong event handler, nên test sai chỗ sẽ cho cảm giác an toàn giả.`,

  20: `MSW chặn ở tầng mạng nên code gọi API vẫn chạy thật, bắt được lỗi trong phần xử lý response mà mock module bỏ qua. Cái giá là thêm một lớp phải cấu hình và chạy chậm hơn, cộng với việc handler dễ lệch khỏi API thật — trừ khi sinh chúng từ lược đồ OpenAPI.`,

  21: `Giới hạn E2E ở những luồng quan trọng giữ cho bộ test chạy nhanh và ít dao động, nhưng nghĩa là chấp nhận có lỗi lọt ở những đường ít đi. Đó là đánh đổi có chủ ý: chi phí một E2E gấp hàng chục lần một integration test, cả về thời gian chạy lẫn công bảo trì.`,

  22: `Playwright chạy đa trình duyệt thật và nhanh hơn, còn Cypress có trải nghiệm gỡ lỗi trực quan hơn khiến đội mới tiếp cận dễ hơn. Chọn công cụ ít quan trọng bằng việc có chạy nó trong CI hay không — bộ E2E đẹp mà chỉ chạy trên máy một người thì không bảo vệ được gì.`,

  23: `\`data-testid\` bền trước thay đổi giao diện nên test ít gãy, nhưng nó là thứ chỉ tồn tại cho test — không kiểm tra được rằng người dùng thật tìm thấy phần tử đó. Ưu tiên truy vấn theo vai trò và nhãn; dùng \`data-testid\` khi không còn cách nào khác, ví dụ một vùng trang trí không có ngữ nghĩa.`,

  24: `Page Object gom chi tiết chọn phần tử vào một chỗ nên đổi giao diện chỉ phải sửa một nơi. Nhưng nó thêm một lớp trừu tượng, và khi lớp đó phình ra thì đọc một test phải nhảy qua ba file mới hiểu chuyện gì xảy ra. Với bộ test nhỏ, viết thẳng dễ đọc hơn.`,

  25: `Kiểm thử hồi quy hình ảnh bắt được lỗi mà không test nào khác bắt nổi, nhưng nó dao động theo phiên bản trình duyệt, theo font hệ thống và theo cả cách kết xuất của máy chạy CI. Phải chạy trong container cố định và đặt ngưỡng sai khác, nếu không mỗi lần nâng phiên bản là hàng trăm ảnh đỏ.`,

  26: `Factory cho dữ liệu test giảm trùng lặp và làm rõ điều gì quan trọng trong từng test — chỉ khai những trường liên quan, còn lại lấy mặc định. Cái giá là mặc định trở thành phụ thuộc ngầm: đổi giá trị mặc định có thể làm đỏ một test ở file khác mà không rõ lý do.`,

  27: `Quên \`await\` là nguồn test xanh giả kinh điển — assertion chạy trước khi thao tác xong nên không kiểm gì cả. Quy tắc lint bắt được phần lớn trường hợp. Nhưng thêm \`await\` ở mọi chỗ cũng làm test tuần tự hoá không cần thiết, nên nơi nào chạy song song được thì gom bằng \`Promise.all\`.`,

  28: `Kiểm tra cả thông điệp lỗi chặt hơn là chỉ kiểm tra có ném lỗi, nhưng làm test gắn với đúng câu chữ — sửa lại thông điệp cho dễ hiểu hơn là gãy test. Cân bằng: kiểm tra loại lỗi hoặc mã lỗi thay vì toàn bộ câu chữ, trừ khi chính thông điệp đó là thứ người dùng nhìn thấy.`,

  29: `\`test.each\` gọn và phủ được nhiều trường hợp biên mà không lặp code. Nhưng khi một hàng đỏ thì thông báo lỗi khó lần ra hàng nào, trừ khi đặt tên có tham số. Và nó dễ bị lạm dụng thành bảng ba mươi hàng mà không ai còn biết từng hàng đang kiểm điều gì.`,

  30: `\`beforeAll\` nhanh hơn vì chỉ chạy một lần, nhưng tạo trạng thái dùng chung giữa các test — test nào đó sửa vào đấy là gây lỗi dây chuyền rất khó tìm. \`beforeEach\` chậm hơn nhưng giữ được cô lập. Mặc định dùng \`beforeEach\`, chỉ đổi khi phần chuẩn bị thật sự đắt và chắc chắn không bị sửa.`,

  31: `Danh sách tiêu chí review đầy đủ nghe hợp lý nhưng review quá rộng thì chậm và mệt, người review sẽ bắt đầu duyệt qua loa. Phần lớn tiêu chí nên đẩy cho máy: lint, kiểm tra kiểu, test, phân tích bundle. Người chỉ nên xem những thứ máy không xem được — thiết kế, đặt tên, và liệu vấn đề có đáng giải theo cách này không.`,

  32: `Git Flow phù hợp với sản phẩm phát hành theo đợt và phải hỗ trợ nhiều phiên bản cùng lúc, nhưng với web deploy liên tục thì nó tạo ra nhánh sống lâu và merge đau. Trunk-based cộng feature flag hợp hơn, đổi lại đòi bộ test đủ tin cậy để merge thẳng vào nhánh chính.`,

  33: `Semantic versioning chỉ có tác dụng khi người phát hành thật sự tuân thủ — mà việc xác định đâu là thay đổi phá vỡ thường không rõ ràng, nhất là khi kiểu TypeScript đổi. Người dùng thư viện vẫn phải đọc changelog. Trong monorepo nội bộ, đánh phiên bản ngặt nghèo có khi tốn công hơn lợi ích.`,

  34: `Tài liệu là thứ lệch khỏi code nhanh nhất trong mọi loại tài sản. Tài liệu sai còn tệ hơn không có, vì người đọc tin vào nó. Cách bền hơn: để kiểu dữ liệu và tên hàm tự nói, còn tài liệu thì dành cho câu hỏi "vì sao" mà code không trả lời được, và đặt ví dụ trong file test để nó luôn đúng.`,

  35: `Theo dõi và trả nợ dần là cách bền, nhưng danh sách nợ kỹ thuật thường phình ra rồi không ai đọc. Nó chỉ có tác dụng khi mỗi khoản nợ ghi rõ nó đang tốn gì — bao nhiêu thời gian mỗi tuần, bao nhiêu lỗi mỗi tháng. Không có con số thì mọi khoản nợ đều thua tính năng mới khi xếp ưu tiên.`,
};
