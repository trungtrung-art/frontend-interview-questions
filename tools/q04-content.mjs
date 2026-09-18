/**
 * Nội dung cho 14 câu thiếu đáp án trong 04-problem-solving-system-design.md.
 * Mỗi câu: 4 lựa chọn viết lại cho hợp lý, chữ cái đáp án đúng, và giải thích
 * có nêu đánh đổi cùng lý do các phương án kia sai.
 */
export const QUESTIONS = {
  16: {
    opts: {
      A: 'Mỗi step giữ state riêng trong component của nó và submit lên server ngay khi step đó xong',
      B: 'Một form dài duy nhất, dùng CSS ẩn hiện từng phần, validate toàn bộ lúc submit',
      C: 'State tập trung ở cấp wizard, validate theo từng step trước khi cho đi tiếp, quay lại không mất dữ liệu, và lưu nháp để khôi phục khi tải lại trang',
      D: 'Đẩy toàn bộ state lên URL query string, mỗi step là một route riêng, không cần state chung',
    },
    ans: 'C',
    expl: `Wizard khác form dài ở chỗ người dùng được đi tới đi lui. Điều đó buộc state phải sống ở cấp wizard chứ không nằm trong từng step — step bị unmount mà dữ liệu vẫn còn. Validate theo từng step là thứ chặn người dùng mang lỗi sang bước sau. Lưu nháp vào \`sessionStorage\` hoặc server là để đóng nhầm tab không mất 10 phút vừa nhập.

**Đánh đổi:** state tập trung làm các step dính vào nhau — thêm một step là phải sửa hình dạng state dùng chung, và mọi step cùng re-render nếu không tách selector. Nếu các step thực sự độc lập và ngắn, phương án A đơn giản hơn hẳn.

Phương án D không sai về nguyên tắc: với wizard 2–3 bước, đưa state lên URL cho ngay nút back của trình duyệt và link chia sẻ được. Nhưng URL bị ghi vào log server, lịch sử duyệt web và Referer header — không đặt dữ liệu cá nhân ở đó, và URL có giới hạn độ dài.

A tạo bản ghi dở dang trên server mỗi lần người dùng bỏ ngang, phải có việc dọn dẹp. B thì mọi field vẫn được mount và validate cuối cùng, mất đúng cái lợi của wizard là chia nhỏ gánh nặng nhập liệu.`,
  },

  17: {
    opts: {
      A: 'Cache toàn bộ response API vào localStorage rồi đọc từ đó khi mất mạng',
      B: 'Service Worker cache phần vỏ ứng dụng, IndexedDB giữ dữ liệu, hàng đợi mutation gửi lại khi có mạng, kèm chiến lược giải quyết xung đột',
      C: 'Theo dõi `navigator.onLine` rồi khoá mọi thao tác ghi cho tới khi có mạng lại',
      D: 'Đặt `Cache-Control` thời hạn dài để trình duyệt tự phục vụ từ HTTP cache khi offline',
    },
    ans: 'B',
    expl: `Bốn mảnh ghép, mỗi mảnh giải một việc khác nhau. Service Worker chặn được tầng network nên mở app lúc offline vẫn ra giao diện. IndexedDB giữ dữ liệu có cấu trúc, bất đồng bộ và dung lượng lớn. Hàng đợi mutation là thứ biến app từ *đọc được khi offline* thành *offline-first* — người dùng ghi được, thao tác xếp hàng, có mạng thì gửi. Và ngay khi chấp nhận ghi lúc offline thì xung đột là chuyện chắc chắn xảy ra, phải chọn cách xử lý từ đầu.

**Đánh đổi:** phần đắt nhất là giải quyết xung đột. Lấy bản ghi sau cùng thì rẻ nhưng mất dữ liệu của người kia. Gộp theo từng trường hoặc dùng CRDT thì giữ được nhưng tốn rất nhiều công. Chọn theo câu hỏi: hai người có sửa cùng một bản ghi không? Nếu không, lấy bản sau cùng là đủ.

A sai vì \`localStorage\` là API đồng bộ nên chặn luồng chính, chỉ chứa chuỗi, và giới hạn khoảng 5MB. C là *chịu được offline* chứ không phải offline-first, và \`navigator.onLine\` nói dối — nối wifi ở quán cà phê chưa đăng nhập thì nó vẫn báo true. D không dùng được cho POST, mà cũng không xếp hàng được thao tác ghi.`,
  },

  18: {
    opts: {
      A: 'Khoá tài liệu cho một người sửa tại một thời điểm, người khác chỉ xem',
      B: 'Mỗi client gửi toàn bộ nội dung sau mỗi thay đổi, server giữ bản đến sau cùng',
      C: 'Gộp thay đổi bằng thuật toán diff ba chiều lúc lưu, giống cách Git merge',
      D: 'Operational Transform hoặc CRDT để hợp nhất thao tác đồng thời, kèm con trỏ của người khác, lịch sử phiên bản và quản lý vòng đời kết nối WebSocket',
    },
    ans: 'D',
    expl: `Vấn đề gốc là hai người gõ cùng lúc vào cùng một chỗ. OT và CRDT là hai lời giải cho đúng việc đó: biến thao tác của người này qua hệ quy chiếu đã đổi bởi người kia, sao cho mọi bản sao hội tụ về cùng một kết quả.

**Đánh đổi giữa hai cách:** OT cần một server đứng giữa để xếp thứ tự thao tác, dữ liệu gọn nhưng hàm transform rất khó viết đúng — Google Docs mất nhiều năm mới ổn định. CRDT hội tụ được mà không cần trọng tài, dễ suy luận hơn, nhưng mang theo metadata phình dần theo lịch sử sửa, tài liệu dùng lâu sẽ nặng.

Con trỏ người khác và lịch sử phiên bản không phải trang trí: thấy người khác đang ở đâu thì người dùng tự tránh nhau, còn lịch sử là đường lùi khi thuật toán hợp nhất ra kết quả không như mong đợi.

A đúng về mặt kỹ thuật nhưng hỏng trải nghiệm ngay khi có người thứ hai. B là lấy bản sau cùng, tức là xoá thẳng những gì người kia vừa gõ. C dùng được cho những lần commit rời rạc, không dùng được cho từng phím gõ.`,
  },

  19: {
    opts: {
      A: 'WebSocket cho tin đến, trạng thái gửi/nhận/đã đọc, optimistic update khi gửi, danh sách ảo hoá, và chỉ báo đang gõ',
      B: 'Gọi API mỗi 2 giây để lấy tin mới rồi render lại toàn bộ danh sách',
      C: 'Dùng Server-Sent Events cho cả chiều gửi lẫn chiều nhận',
      D: 'Tải toàn bộ lịch sử khi mở phòng và giữ hết trong state, không phân trang',
    },
    ans: 'A',
    expl: `WebSocket vì chat cần hai chiều và độ trễ thấp. Optimistic update là thứ làm nút gửi có cảm giác tức thì: hiện tin ngay với id tạm phía client, khi server trả về thì khớp lại bằng id đó. Ảo hoá danh sách là bắt buộc vì lịch sử chat không có giới hạn trên.

**Đánh đổi:** optimistic update bắt buộc phải có đường lùi. Gửi hỏng thì tin đó phải chuyển sang trạng thái lỗi cho gửi lại, chứ không được lặng lẽ biến mất. Và phải có id tạm ổn định, nếu không lúc server trả về sẽ thành hai tin trùng nhau. Bỏ qua hai chi tiết này là lỗi hay gặp nhất khi làm chat.

C không hẳn sai: SSE nhận tin rất tốt, nhẹ hơn WebSocket và tự kết nối lại. Nhưng SSE chỉ có một chiều server đến client, nên vẫn phải gửi tin bằng HTTP POST — thành kiến trúc lai. Chọn được khi phần lớn lưu lượng là chiều nhận.

B tốn request mà vẫn trễ tới 2 giây, lại render lại cả danh sách. D làm bộ nhớ phình theo lịch sử, phòng chat cũ là treo máy.`,
  },

  20: {
    opts: {
      A: 'Một lần gọi API lấy toàn bộ dữ liệu cho mọi widget rồi render một lượt',
      B: 'Mỗi widget là một route riêng, xem widget khác thì chuyển trang',
      C: 'Kiến trúc theo widget: mỗi widget tự lấy dữ liệu và tự quản trạng thái tải, lưới bố cục đáp ứng, nhịp làm mới riêng cho từng widget',
      D: 'Render sẵn toàn bộ dashboard ở server rồi trả về ảnh tĩnh, làm mới theo chu kỳ',
    },
    ans: 'C',
    expl: `Cái lợi chính là cách ly: một widget gọi API chậm hoặc lỗi thì phần còn lại vẫn hiện. Và nhịp làm mới khác nhau theo bản chất dữ liệu — ô "doanh thu hôm nay" cần 30 giây một lần, ô "tổng quan năm" một giờ một lần là thừa.

**Đánh đổi:** N widget là N request. Dashboard 20 ô sẽ tạo ra một đợt request đồng loạt, ăn hết giới hạn kết nối của trình duyệt và làm chậm chính nó. Cách dung hoà thường dùng là gom lại ở tầng BFF: client gọi một lần, server tự fan-out rồi trả về theo từng phần dưới dạng stream. Nên phương án A không sai về ý tưởng, nó chỉ sai khi áp dụng tuyệt đối — gom request tốt, nhưng đừng để một truy vấn chậm giữ toàn bộ dashboard trắng trang.

B phá đúng lý do dashboard tồn tại là nhìn nhiều chỉ số cùng lúc. D mất hết tương tác, không chọn được khoảng thời gian, không đọc được bằng trình đọc màn hình, và không cho phép sao chép số liệu.`,
  },

  23: {
    opts: {
      A: 'Gọi `fetch` thẳng trong component và xử lý lỗi ngay tại chỗ dùng',
      B: 'Bọc tất cả vào một hàm request duy nhất nhận URL và trả về JSON đã parse',
      C: 'Chuyển toàn bộ sang GraphQL để client tự chọn trường cần lấy',
      D: 'Tầng API tách riêng, xử lý lỗi tập trung, interceptor cho request và response, và kiểu dữ liệu ràng buộc theo hợp đồng API',
    },
    ans: 'D',
    expl: `Lý do tách tầng không phải cho gọn mà là để những việc lặp lại chỉ viết một lần: gắn token, làm mới token khi gặp 401, thử lại khi lỗi mạng, ghi log, huỷ request cũ. Kiểu dữ liệu ràng buộc bắt được lúc build khi backend đổi hợp đồng, thay vì để người dùng gặp \`undefined\` lúc chạy.

**Đánh đổi:** thêm một lớp là thêm một chặng khi debug, và lớp đó rất dễ phình. Dấu hiệu hỏng là component bắt đầu truyền đủ loại tuỳ chọn riêng xuống tầng API — lúc đó lớp trừu tượng đang rò rỉ. Giữ nó mỏng: chỉ lo chuyện vận chuyển, không nhét logic nghiệp vụ vào.

B là bản rút gọn của D và dùng tốt cho dự án nhỏ, nhưng thiếu chỗ móc cho interceptor nên việc làm mới token sẽ lại rải ra khắp nơi. C nhầm tầng: GraphQL là lựa chọn thiết kế API phía server, chọn nó rồi thì client vẫn cần một tầng lo cache, lỗi và xác thực. A gọn cho một hai chỗ, nhưng khi có 40 chỗ gọi API thì mỗi lần đổi cách xử lý lỗi là sửa 40 nơi.`,
  },

  24: {
    opts: {
      A: 'Dùng biến môi trường và build riêng cho từng cấu hình',
      B: 'Cấu hình từ xa, bật dần theo phần trăm người dùng, phân nhóm đối tượng, và công tắc tắt nhanh không cần deploy',
      C: 'Tạo nhánh Git riêng cho mỗi tính năng rồi merge khi sẵn sàng',
      D: 'Đọc cờ từ `localStorage` để mỗi người tự bật tính năng muốn thử',
    },
    ans: 'B',
    expl: `Giá trị cốt lõi của feature flag là đổi hành vi mà không cần deploy. Công tắc tắt nhanh là phần quan trọng nhất: tính năng mới gây sự cố lúc 2 giờ sáng thì tắt trong 10 giây, thay vì chờ một vòng build và deploy. Bật dần theo phần trăm và phân nhóm là thứ biến việc phát hành thành có kiểm soát.

**Đánh đổi lớn nhất là nợ tích luỹ.** Mỗi cờ nhân đôi số nhánh code phải kiểm thử, và cờ thì không tự chết. Một codebase có 80 cờ đang sống thì về lý thuyết có 2^80 tổ hợp trạng thái, thực tế nghĩa là không ai còn dám xoá nhánh nào. Cách chữa là quy định từ đầu: mỗi cờ có người chịu trách nhiệm và hạn xoá, quá hạn thì hoặc gỡ hoặc chuyển thành cấu hình chính thức.

A hỏng đúng chỗ cờ sinh ra để giải quyết: biến môi trường cố định lúc build nên đổi là phải build và deploy lại. C là vấn đề mà cờ giải, vì nhánh sống lâu thì merge càng ngày càng đau. D không có điều khiển tập trung nên không tắt được cho tất cả người dùng khi có sự cố.`,
  },

  25: {
    opts: {
      A: 'Design token, thư viện component, tài liệu sử dụng, chuẩn accessibility, hệ thống theme, và quy tắc đánh phiên bản',
      B: 'Một thư viện component React được publish lên npm cho các đội cùng dùng',
      C: 'Bộ file Figma có đủ màu, khoảng cách và kiểu chữ để designer dùng chung',
      D: 'Một file CSS chứa biến toàn cục mà mọi dự án import vào',
    },
    ans: 'A',
    expl: `Thư viện component chỉ là một tầng. Thiếu design token thì không đổi theme được vì màu nằm rải trong từng component. Thiếu tài liệu thì không ai dùng, đội product tự viết component riêng và hệ thống chết dần. Thiếu quy tắc phiên bản thì bên dùng không dám nâng cấp vì không biết bản mới phá cái gì. Thiếu chuẩn accessibility thì mỗi lần dùng lại phải tự lo, đúng cái mà hệ thống sinh ra để gánh hộ.

**Đánh đổi:** một design system đầy đủ cần người duy trì riêng. Với một sản phẩm và một đội, chi phí đó không hoàn lại được — một thư mục component dùng chung là đủ. Nó chỉ đáng khi có nhiều đội cần thống nhất giao diện và cần phát hành độc lập theo nhịp riêng.

B, C và D đều là một lớp của A. Riêng C là chỗ hay lẫn nhất: có token trong Figma mà không có đường đồng bộ sang code thì hai bên trôi khỏi nhau sau vài tháng.`,
  },

  26: {
    opts: {
      A: 'Luôn nên dùng monorepo, vì mọi thứ nằm một chỗ thì dễ tìm hơn',
      B: 'Chỉ khi cả công ty dùng chung một ngôn ngữ lập trình',
      C: 'Khi nhiều dự án dùng chung code, cần thống nhất công cụ, và cần đổi nhiều package trong cùng một commit rồi phát hành phối hợp',
      D: 'Chỉ khi đội dưới năm người, vì đông hơn thì CI sẽ quá chậm',
    },
    ans: 'C',
    expl: `Yếu tố quyết định là **thay đổi nguyên tử xuyên package**. Sửa một component dùng chung mà ba nơi đang dùng nó phải sửa theo: ở polyrepo là ba pull request, một vòng publish phiên bản, và một khoảng thời gian các repo không khớp nhau. Ở monorepo là một commit, CI kiểm cả ba nơi cùng lúc.

**Đánh đổi:** monorepo không làm chi phí biến mất mà dời nó sang công cụ. CI bắt buộc phải biết chỉ build lại phần đã đổi, nếu không mỗi commit là build toàn bộ. Phân quyền cũng thô hơn, khó giới hạn ai được sửa gì. Đổi lại, polyrepo giữ từng repo đơn giản nhưng làm việc nâng cấp code dùng chung chậm và dễ bỏ sót.

D nhầm nguyên nhân: chi phí CI đi theo khối lượng code và chất lượng cache, không theo số người. Với cache từ xa, monorepo hàng trăm người vẫn chạy nhanh. A và B đều là quy tắc cứng cho một quyết định vốn phụ thuộc mức độ phụ thuộc giữa các dự án.`,
  },

  28: {
    opts: {
      A: 'Chỉ viết E2E vì nó kiểm được luồng thật của người dùng',
      B: 'Chỉ viết unit test vì chạy nhanh và dễ giữ cho xanh',
      C: 'Chia đều ba tầng để tầng nào cũng có độ phủ như nhau',
      D: 'Nhiều unit test, ít hơn integration test, rất ít E2E; component test bằng React Testing Library nằm ở tầng integration',
    },
    ans: 'D',
    expl: `Hình tháp phản ánh hai thứ cùng tăng theo tầng: chi phí chạy và độ dao động. Một unit test hỏng chỉ rõ hàm nào sai; một E2E hỏng chỉ nói "luồng thanh toán lỗi" và mất nửa ngày để biết lỗi ở đâu. Càng lên cao càng chậm phản hồi và càng khó khoanh vùng.

**Đánh đổi:** với frontend, hình tháp nghiêm ngặt không phải lúc nào cũng đúng. Unit test cho component thuần hiển thị thường kiểm tra chi tiết cài đặt chứ không kiểm hành vi, nên sửa refactor là gãy test dù chức năng không đổi. Nhiều đội chuyển sang hình "chiếc cúp" — tầng integration dày hơn tầng unit — vì phần lớn lỗi frontend nằm ở chỗ các mảnh ghép lại với nhau, không nằm trong từng mảnh.

A cho tín hiệu chậm và hay đỏ giả, đội sẽ bắt đầu bỏ qua kết quả CI. B bỏ lọt đúng loại lỗi hay xảy ra nhất. C tốn nhất ở tầng đắt nhất mà không đổi lại được tương xứng.`,
  },

  29: {
    opts: {
      A: 'Đọc log server mỗi khi có người dùng báo lỗi',
      B: 'Dịch vụ theo dõi lỗi kèm source map để đọc được stack trace, ngữ cảnh người dùng và số hiệu bản build, cùng cảnh báo theo ngưỡng',
      C: 'Bọc toàn bộ ứng dụng trong một Error Boundary và hiện thông báo xin lỗi',
      D: 'Rải `console.log` ở những chỗ nghi ngờ rồi nhờ người dùng gửi ảnh chụp màn hình',
    },
    ans: 'B',
    expl: `Ba mảnh phải có đủ mới dùng được. Không có source map thì stack trace của bundle đã minify chỉ là \`a.js:1:28471\`, vô giá trị. Không có số hiệu bản build thì không biết bản vá đã lên hay chưa, và lỗi cũ vẫn chảy về làm nhiễu. Không có ngữ cảnh người dùng và trình duyệt thì không tái hiện được, mà phần lớn lỗi frontend chỉ xảy ra trên một loại thiết bị.

**Đánh đổi:** source map để lộ mã nguồn, nên đẩy riêng lên dịch vụ theo dõi chứ đừng phục vụ công khai từ CDN. Và lượng lỗi tăng theo lưu lượng, một vòng lặp lỗi có thể bắn hàng triệu sự kiện trong vài phút — phải lấy mẫu và đặt trần, nếu không là vỡ hoá đơn.

C mới làm nửa việc: Error Boundary bắt được lỗi và giữ cho trang không trắng, nhưng bản thân nó không báo cho ai. Nó là phần giao diện, cần gắn thêm phần gửi báo cáo. A và D đều phụ thuộc vào việc người dùng chịu khó báo, mà đa số họ chỉ lặng lẽ rời đi.`,
  },

  30: {
    opts: {
      A: 'Lint, kiểm tra kiểu, unit test, build, phân tích kích thước bundle, E2E, bản xem trước cho mỗi pull request, rồi deploy production',
      B: 'Chỉ build và deploy, còn test để người review tự chạy trên máy',
      C: 'Chạy toàn bộ test trên mọi commit của mọi nhánh để bắt lỗi sớm nhất',
      D: 'Deploy thẳng lên production mỗi khi merge, không cần môi trường trung gian',
    },
    ans: 'A',
    expl: `Thứ tự quan trọng ngang nội dung: xếp phép kiểm rẻ lên trước để một lỗi gõ sai bị chặn sau 30 giây thay vì sau 12 phút. Lint và kiểm tra kiểu chạy trong vài giây, E2E chạy cuối.

Hai bước hay bị bỏ mà đáng giá nhất: **phân tích kích thước bundle** là thứ chặn được tình huống một pull request làm bundle tăng 300KB mà không ai biết — đặt ngưỡng và cho CI đỏ khi vượt. **Bản xem trước cho mỗi pull request** đổi việc review từ đọc diff sang bấm thử, bắt được lỗi giao diện mà không test nào bắt được.

**Đánh đổi:** chạy đủ bộ E2E trên mọi pull request thì chậm và hay đỏ giả, đội sẽ bắt đầu bấm merge bỏ qua. Cách dung hoà phổ biến là chạy một tập E2E rút gọn cho luồng quan trọng ở pull request, còn bộ đầy đủ chạy hằng đêm hoặc trước khi phát hành.

B đẩy việc kiểm cho người, và người sẽ quên. C đốt phút CI cho rất ít tín hiệu thêm. D bỏ mất chỗ để phát hiện lỗi trước khi người dùng thật gặp.`,
  },

  33: {
    opts: {
      A: 'Ghi vào backlog và xử lý ở sprint sau cho đúng quy trình',
      B: 'Vá ngay chỗ được báo rồi đóng ticket',
      C: 'Đánh giá mức nghiêm trọng và phạm vi ảnh hưởng, vá ngay, rà soát những chỗ khác dùng cùng kiểu code, thêm test chặn tái diễn, rồi họp rút kinh nghiệm',
      D: 'Chờ xác nhận có ai khai thác thật chưa rồi mới quyết định mức ưu tiên',
    },
    ans: 'C',
    expl: `Chỗ được báo là triệu chứng, không phải bệnh. Nếu một nơi dùng \`dangerouslySetInnerHTML\` mà không làm sạch dữ liệu, gần như chắc chắn còn nơi khác làm y hệt — người viết chỗ đó không biết là sai thì đã viết nhiều lần. Bước rà soát cùng kiểu code là bước phân biệt xử lý sự cố với vá tạm. Test chặn tái diễn là thứ giữ cho lỗi không quay lại sau vài tháng khi người khác sửa vào đúng chỗ đó.

**Đánh đổi:** "đánh giá trước" và "vá ngay" mâu thuẫn nhau khi bản vá có rủi ro. Với XSS thì bản vá thường nhỏ mà phơi nhiễm đang diễn ra liên tục, nên vá nhanh là đúng. Nhưng với lỗ hổng nằm trong luồng xác thực, một bản vá vội có thể gây sự cố lớn hơn chính lỗ hổng — lúc đó đánh giá kỹ rồi vá có kiểm soát mới đúng.

B sửa được ca bệnh, bỏ qua cả lớp bệnh. D nhầm ở chỗ không thấy dấu vết khai thác không có nghĩa là chưa bị khai thác — XSS thường không để lại log phía server. A sai mức ưu tiên: lỗ hổng bảo mật đang mở không xếp hàng cùng tính năng mới.`,
  },

  34: {
    opts: {
      A: 'Làm thêm giờ cho tới khi bắt kịp tiến độ đã cam kết',
      B: 'Tuyển thêm người để tăng năng lực của đội',
      C: 'Dừng làm tính năng mới vài sprint để viết lại phần code cũ',
      D: 'Dành một phần cố định mỗi sprint cho việc dọn nợ, đo xem chỗ nào thực sự làm chậm, cải thiện công cụ, giảm số việc làm dở song song, và trả nợ dần theo mức ảnh hưởng',
    },
    ans: 'D',
    expl: `Điểm mấu chốt là **đo trước khi sửa**. Nợ kỹ thuật mà đội cảm thấy khó chịu nhất thường không phải nợ đang tốn tiền nhất. Thứ tốn thật hay nằm ở chỗ ít ai nhắc: build mất 8 phút, test hay đỏ giả nên phải chạy lại hai ba lần, môi trường staging dựng bằng tay. Cải thiện công cụ thường cho hiệu quả cao hơn viết lại code, mà rủi ro gần bằng không.

Giảm số việc làm dở song song là đòn bẩy nhanh nhất và không tốn gì: đội làm 8 việc cùng lúc thì thời gian chờ và chi phí chuyển ngữ cảnh ăn hết năng suất, dù mỗi người vẫn bận rộn.

**Đánh đổi:** tỉ lệ cố định, chẳng hạn 20% mỗi sprint, thì dễ lập kế hoạch và không phải thuyết phục lại mỗi lần, nhưng quá chậm khi có một nút thắt lớn chi phối tất cả. Một đợt tập trung dọn dẹp thì nhanh hơn nhưng dừng giao hàng và rất khó thuyết phục. Chọn theo hình dạng của vấn đề: chi phí rải đều thì dùng tỉ lệ cố định, chi phí dồn vào một chỗ thì dứt điểm chỗ đó.

A tiêu vào sức người và làm chất lượng tệ thêm, vòng lặp càng xấu. B là quan sát cũ của Brooks — thêm người vào dự án đang chậm làm nó chậm hơn, vì người cũ phải dừng lại để hướng dẫn. C là canh bạc: viết lại gần như luôn vượt thời gian dự tính, mà trong lúc đó sản phẩm đứng yên.`,
  },
};
