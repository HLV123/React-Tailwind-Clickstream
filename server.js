const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

const LOG_FILE = path.join(__dirname, 'clickstream-logs.json');

// Tạo file log nếu chưa tồn tại
if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, JSON.stringify({ logs: [] }, null, 2));
}

// API ghi log
app.post('/api/log-event', (req, res) => {
    try {
        const eventData = req.body;
        eventData.serverTimestamp = new Date().toISOString();
        
        const logData = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
        logData.logs.push(eventData);
        fs.writeFileSync(LOG_FILE, JSON.stringify(logData, null, 2));
        
        console.log(`[${eventData.timestamp}] ${eventData.eventType}: ${eventData.eventName || 'N/A'}`);
        res.json({ success: true, message: 'Event logged successfully' });
    } catch (error) {
        console.error('Error logging event:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// API đọc logs
app.get('/api/get-logs', (req, res) => {
    try {
        const logData = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
        res.json(logData);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// API xóa logs
app.delete('/api/clear-logs', (req, res) => {
    try {
        fs.writeFileSync(LOG_FILE, JSON.stringify({ logs: [] }, null, 2));
        res.json({ success: true, message: 'Logs cleared successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════╗
║     LeVanHung Solutions - Clickstream Server           ║
╠════════════════════════════════════════════════════════╣
║  Website:    http://localhost:${PORT}                     ║
║  Logs View:  http://localhost:${PORT}/logs-viewer.html    ║
║  Logs File:  clickstream-logs.json                     ║
╠════════════════════════════════════════════════════════╣
║  API Endpoints:                                        ║
║  - POST   /api/log-event  (ghi log)                    ║
║  - GET    /api/get-logs   (xem logs)                   ║
║  - DELETE /api/clear-logs (xóa logs)                   ║
╚════════════════════════════════════════════════════════╝
    `);
});
