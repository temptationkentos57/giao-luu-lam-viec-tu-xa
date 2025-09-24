const express = require('express');
const router = express.Router();

// Định nghĩa các route tại đây
router.get('/api', (req, res) => {
  res.send('API đang hoạt động!');
});

module.exports = router;