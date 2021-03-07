const express = require('express');
const controller = require('../controllers/opd_bills');

const router = express.Router();

router.get('/', (req, res) => controller.listOpdBills(req, res));

router.get('/view/:opdBillId', (req, res) => controller.getOpdBillById(req, res, true));

router.get('/create', (req, res) => controller.getCreatePage(req, res));

router.post('/create', (req, res) => controller.handleCreateRequest(req, res));

module.exports = router;
