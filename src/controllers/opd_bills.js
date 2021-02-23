const opdBillService = require('../services/opd_bills');

const pageName = 'OPD Bills';

const listOpdBills = async (req, res) => {
  const data = await opdBillService.getOpdBills();
  res.render('opd-bills/list', {
    page_name: pageName,
    list: data,
  });
};

const getOpdBillById = async (req, res, needHistory = false) => {
  const { opdBillId } = req.params;
  const { opdBill, historyData } = await opdBillService.getOpdBillById(opdBillId, needHistory);
  res.render('opd-bills/view', {
    page_name: pageName,
    opdBill,
    historyData,
  });
};

const getCreatePage = (req, res) => res.render('opd-bills/create', { page_name: pageName });

module.exports = {
  listOpdBills,
  getOpdBillById,
  getCreatePage,
};
