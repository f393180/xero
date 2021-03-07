const debug = require('debug')('app:opdBillController');
const opdBillService = require('../services/opd_bills');

const pageName = 'OPD Bills';

const listOpdBills = async (req, res) => {
  const data = await opdBillService.getOpdBills();
  res.render('opd-bills/list', {
    page_name: pageName,
    user: req.user,
    list: data,
  });
};

const getOpdBillById = async (req, res, needHistory = false) => {
  const { opdBillId } = req.params;
  const { opdBill, historyData } = await opdBillService.getOpdBillById(opdBillId, needHistory);
  res.render('opd-bills/view', {
    page_name: pageName,
    user: req.user,
    disabled: true,
    opdBill,
    historyData,
  });
};

const getCreatePage = (req, res) => res.render('opd-bills/create', {
  page_name: pageName,
  user: req.user,
  disabled: false,
  opdBill: {},
});

const handleCreateRequest = (req, res) => {
  debug('Handling create request...');
  debug(req.body);
  res.render('opd-bills/create', {
    page_name: pageName,
    user: req.user,
    disabled: false,
    opdBill: {},
  });
};

module.exports = {
  listOpdBills,
  getOpdBillById,
  getCreatePage,
  handleCreateRequest,
};
