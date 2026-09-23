# Bộ câu hỏi chế độ hỏng — thiết kế

Ngày: 2026-09-23 · Trạng thái: đã duyệt cách tổ chức và khuôn câu hỏi

## Vấn đề

Repo hiện có 133 câu lý thuyết và 245 câu trắc nghiệm. Sau khi phân tích:

- 71% câu giáo án là khái niệm và so sánh — "X là gì", "A khác B thế nào"
- Chỉ **14 câu** thuộc dạng tình huống hỏng có bối cảnh cụ thể
- Phần trắc nghiệm bị giới hạn bởi định dạng: đo khả năng nhận ra, không đo khả năng làm

14 câu đó là phần giá trị nhất của repo, vì chúng không học thuộc được — muốn trả lời phải có
mô hình nhân quả đúng. Tài liệu tiếng Anh đã có (`lydiahallie/javascript-questions`,
`front-end-interview-handbook`, GreatFrontEnd, BFE.dev) đều dừng ở "X là gì" và "đoán output".

## Mục tiêu

Đưa số câu chế độ hỏng từ 14 lên **58–72** (tổng của bảng đợt bên dưới), ở độ sâu 4.000–6.000 ký tự mỗi câu, tổ chức theo
mảng kỹ thuật. Điểm khác biệt không nằm ở số lượng câu mà ở **cách tổ chức**: sắp theo chế độ
hỏng trong production, không sắp theo chủ đề.

### Thế nào là xong (cho một câu)

Một câu đạt yêu cầu khi thoả **tất cả** các điều sau:

1. Tình huống có con số cụ thể, không dùng từ mơ hồ như "chậm" hay "nhiều"
2. Phần truy vết cơ chế đi tới mức nội bộ trình duyệt hoặc React, không dừng ở mô tả API
3. Phần chứng minh nêu đúng tên panel, đúng thao tác, và nói rõ **thấy con số nào thì kết luận được gì**
4. Có mục "vì sao cách sửa hiển nhiên lại sai" với nội dung thật, không phải lời khuyên chung
5. Có ít nhất 2 câu đào sâu kèm mô tả chỗ ứng viên hay gãy
6. Mọi tên API, ngưỡng số liệu, tên panel DevTools đều đúng với thực tế hiện tại
7. Không trùng nội dung với câu đã có trong giáo án hoặc trong cùng mảng

## Phạm vi

**Trong phạm vi:** phần A — câu hỏi chế độ hỏng.

**Ngoài phạm vi, để sau, mỗi phần một spec riêng:**

| | Phần | Ghi chú |
|---|---|---|
| B | Chuỗi nhân quả — "đường đi của một lỗi" | Cần A làm nguyên liệu |
| C | Bài live coding có lời giải từng bước | Repo mới có 1 bài |
| D | Bài review code cài sẵn lỗi | Định dạng hoàn toàn mới |
| E | Giải thích cơ chế ở mức truy vết | Sâu nhất, chậm nhất |
| F | Bản tiếng Anh | Sau cùng |

## Cấu trúc file

```
che-do-hong/
  README.md                    mục lục, cách dùng, quy ước viết
  01-react-render.md           React render và cập nhật
  02-bo-nho.md                 Bộ nhớ
  03-mang-bat-dong-bo.md       Mạng và bất đồng bộ
  04-tai-trang-bundle.md       Tải trang và bundle
  05-pipeline-dung-hinh.md     Pipeline dựng hình
  06-realtime-nhieu-tab.md     Realtime và nhiều tab
  07-build-deploy.md           Build và deploy
```

Mỗi file 8–12 câu, khoảng 50–60KB. Không gộp vào `ly-thuyet/01-giao-an...` vì file đó đã 405KB.

**Định danh câu:** `CDH-<số file>-<số thứ tự trong file>`, cả hai đều hai chữ số. Ví dụ câu thứ
ba trong `01-react-render.md` là `CDH-01-03`. Không dùng lại dãy "Câu N" của giáo án để tránh
nhầm lẫn khi trích dẫn chéo.

## Khuôn một câu

Chín mục, theo đúng thứ tự này. Tiêu đề mục viết nguyên văn như dưới để script quét được.

```markdown
## CDH-01-03: <tên ngắn gọn mô tả triệu chứng>

### Tình huống
<bối cảnh có con số cụ thể>

### Câu hỏi
<dạng "đáng lẽ phải chạy mà lại hỏng">

### Thực sự đang xảy ra gì
<truy vết cơ chế từng bước, vào tới nội bộ trình duyệt hoặc React>

### Cách chứng minh
<mở panel nào, thao tác gì, nhìn con số nào, thấy gì thì kết luận được gì>

### Cách sửa
<code thật>

### Vì sao cách sửa hiển nhiên lại sai
<cái bẫy — phần phân biệt với mọi tài liệu khác>

### Đánh đổi
<sửa xong thì mất gì>

### Câu đào sâu
<2–3 câu người phỏng vấn sẽ hỏi tiếp, kèm chỗ ứng viên hay gãy>

### Nối với
<link sang câu và mảng liên quan>
```

### Ví dụ rút gọn để thống nhất giọng văn và độ sâu

> **### Tình huống**
> Bảng 100.000 dòng đã dùng `react-window`. Cuộn vẫn giật, Performance panel cho thấy tác vụ dài
> 180ms lặp lại mỗi lần cuộn, trong khi chỉ 20 dòng đang hiển thị.
>
> **### Câu hỏi**
> Ảo hoá đã làm đúng việc của nó là chỉ render 20 dòng. Vậy 180ms kia đến từ đâu?
>
> **### Thực sự đang xảy ra gì**
> Mỗi dòng có chiều cao động, nên `react-window` phải gọi hàm đo chiều cao cho mỗi dòng mới vào
> khung nhìn. Hàm đo đọc `offsetHeight`, mà đọc thuộc tính bố cục ngay sau khi đã ghi vào DOM
> buộc trình duyệt phải chạy layout đồng bộ. Hai mươi dòng là hai mươi lần buộc layout trong một
> khung hình…
>
> **### Vì sao cách sửa hiển nhiên lại sai**
> Cách hiển nhiên là nhớ lại chiều cao đã đo. Nhưng nếu nội dung dòng đổi theo chiều rộng cửa sổ
> thì bộ nhớ đệm đó sai ngay khi người dùng đổi kích thước, và thanh cuộn nhảy — triệu chứng khó
> chịu hơn cả lag ban đầu…

## Tích hợp vào trang ôn luyện

Làm **ngay sau đợt 1**, không chờ hết 7 đợt, để phần đã viết dùng được luôn và để lộ sớm những
vấn đề về khuôn câu hỏi.

1. `build.mjs` quét `che-do-hong/*.md` thay vì liệt kê từng file, và phân tách theo `## CDH-`
2. Trang ôn luyện thêm chế độ **Chế độ hỏng**, điều hướng theo 7 mảng
3. Mỗi câu dùng lại cơ chế tự chấm ba mức và ô ghi chú như phần giáo án
4. Mục "Nối với" render thành link bấm được sang câu tương ứng

## Thứ tự làm

| Đợt | Mảng | Số câu | Vì sao thứ tự này |
|---|---|---|---|
| 1 | React render và cập nhật | 10–12 | Bị đào sâu nhất ở vòng Senior, repo có sẵn nhiều nguyên liệu |
| 2 | Bộ nhớ | 8–10 | Chỗ thứ hai hay bị đào, và ít tài liệu tiếng Việt nhất |
| 3 | Mạng và bất đồng bộ | 10–12 | Nhiều chế độ hỏng nhất, và hay gặp ở sản phẩm thật |
| 4 | Tải trang và bundle | 8–10 | Nối được với phần Web Vitals đã có |
| 5 | Pipeline dựng hình | 8–10 | Cần nền từ đợt 4 |
| 6 | Realtime và nhiều tab | 8–10 | Chuyên sâu, ít người hỏi nhưng hỏi thì đào rất sâu |
| 7 | Build và deploy | 6–8 | Ít câu nhất vì phạm vi hẹp hơn |

Mỗi phiên làm 4–5 câu. Ước tính 13–16 phiên cho toàn bộ phần A.

14 câu chế độ hỏng đã có trong giáo án **giữ nguyên tại chỗ**, không di chuyển. Câu mới trong
`che-do-hong/` trích dẫn sang chúng qua mục "Nối với". Lý do: di chuyển sẽ phá cấu trúc giáo án
và làm hỏng mọi link đang trỏ tới, mà lợi ích chỉ là gọn về hình thức.

## Kiểm tra

Thêm `tools/check-che-do-hong.mjs` chạy được không cần cài gì, kiểm:

1. Mỗi câu có đủ 9 mục, đúng tên và đúng thứ tự
2. Định danh không trùng, và phần `<số file>` khớp với tên file chứa nó
3. Mọi link trong mục "Nối với" trỏ tới định danh có thật
4. Không câu nào dưới 2.500 ký tự — dấu hiệu viết hụt
5. Mỗi câu có ít nhất hai câu đào sâu

Chạy cùng với `tools/e2e.mjs` và `tools/check-script-safety.mjs` sau mỗi đợt.

## Những gì không làm

- Không viết lại 133 câu giáo án hiện có
- Không đụng vào 245 câu trắc nghiệm
- Không làm bản tiếng Anh cho phần này cho tới khi phần A xong
- Không thêm câu chỉ để đủ số lượng: thà 60 câu đạt tiêu chí còn hơn 80 câu có câu viết hụt
