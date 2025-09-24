const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với Giao Lưu Làm Việc Từ Xa!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});