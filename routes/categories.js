const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'category 1',
    },
    {
      name: 'category 2',
    },
  ]);
});

module.exports = router;
