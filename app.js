const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Trang chính
app.get('/', (req, res) => {
  res.json({ message: 'Chào mừng bạn đến với Giao Lưu Làm Việc Từ Xa' });
});

module.exports = app;