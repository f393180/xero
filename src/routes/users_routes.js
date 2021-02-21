const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('users/list', {
    page_name: 'Users',
  });
});

module.exports = router;
