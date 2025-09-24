const express = require('express');
const router = express.Router();

// Define routes here
router.get('/api', (req, res) => {
  res.send('API is running!');
});

module.exports = router;