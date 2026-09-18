# Ghi chú cá nhân

Thư mục này giữ ghi chú và tiến độ ôn luyện của riêng anh, tách khỏi phần tài liệu chung.

| File | Là gì |
|---|---|
| `ghi-chu.json` | Trang ôn luyện ghi thẳng vào đây. Đừng sửa tay. |
| `GHI-CHU.md` | Bản đọc được trên GitHub, sinh từ file trên. |

## Cách nối lần đầu

1. Mở `docs/index.html`
2. Bấm nút hình mắt xích ở góc phải trên
3. Chọn đúng file `notes/ghi-chu.json` trong repo này

Từ đó mỗi lần gõ ghi chú là file tự được cập nhật. Cần Brave, Chrome hoặc Edge —
Firefox và Safari chưa hỗ trợ ghi thẳng vào file, ở đó dùng nút xuất rồi chép tay.

Mở lại trang ở lần sau, trình duyệt sẽ hỏi cấp quyền ghi lại — bấm nút mắt xích một lần là xong.

## Trước khi commit

```bash
node tools/notes-to-md.mjs
git add notes/ && git commit -m "cập nhật ghi chú"
```
