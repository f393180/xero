const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('opd-bills/list', {
    page_name: 'OPD Bills',
  });
});

router.get('/create', (req, res) => {
  res.render('opd-bills/create', {
    page_name: 'OPD Bills',
  });
});

module.exports = router;
