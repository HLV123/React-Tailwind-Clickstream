# LeVanHung Clickstream

### 1️⃣ Cài đặt dependencies
```bash
npm install
```
### 2️⃣ Chạy Development (React + Server cùng lúc)
```bash
npm run dev
```
### 3️⃣ Hoặc chạy riêng:
```bash
# Terminal 1: React app (port 3000)
npm start
# Terminal 2: Server logging (port 8080)
npm run server
```
### 4️⃣ Mở trình duyệt:
```
http://localhost:3000         → Website chính
http://localhost:8080/logs-viewer.html  → Dashboard xem logs
```
## 📁 Cấu trúc Project:

```
levanhung-clickstream/
├── public/
│   ├── images/              ← Ảnh local
│   └── index.html
├── src/
│   ├── components/          ← React components
│   ├── hooks/               ← Custom hooks
│   ├── styles/              ← CSS + Tailwind
│   └── utils/
│       ├── constants.js     ← Data
│       └── ClickstreamLogger.js  ← Logger
├── server.js                ← Node.js server
├── logs-viewer.html         ← Dashboard xem logs
├── clickstream-logs.json    ← File lưu logs
└── package.json
```
---
## 🔥 Clickstream Logger ghi lại:
| Event Type | Mô tả |
|------------|-------|
| `page_load` | Khi trang được load |
| `page_exit` | Khi rời trang |
| `click` | Click vào buttons, links, cards |
| `scroll` | Cuộn trang (throttled) |
| `hover` | Di chuột qua elements |
| `section_view` | Scroll đến section mới |
| `form` | Tương tác form |
---
## 📊 API Endpoints:
```bash
POST   /api/log-event   → Ghi log
GET    /api/get-logs    → Đọc logs
DELETE /api/clear-logs  → Xóa logs
```
