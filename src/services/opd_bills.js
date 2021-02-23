const db = require('./db');
const utils = require('../utils');
const config = require('./config');

const getOpdBills = async (page = 1) => {
  const offset = utils.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT '
    + 'opd_bill_id, '
    + '(patient_last_name || \', \' || patient_first_name) as patient_name, '
    + 'area, '
    + 'company_name, '
    + 'consulting_charge, '
    + 'medication_charge, '
    + 'dressing_charge, '
    + 'other_charge, '
    + '(consulting_charge + medication_charge + dressing_charge + other_charge) as total_charge, '
    + 'bill_status, '
    + 'bill_date '
    + 'FROM opd_bill  OFFSET $1 LIMIT $2',
    [offset, config.listPerPage],
  );
  return rows;
};

const getOpdBillById = async (id = 1, needHistory = false) => {
  let result = {
    opdBill: undefined,
    historyData: [],
  };
  const mainDataRows = await db.query(
    'SELECT * FROM opd_bill WHERE opd_bill_id = $1',
    [id],
  );

  result = { ...result, opdBill: utils.getFirstObj(mainDataRows) };
  if (needHistory && utils.getFirstObj(mainDataRows) !== {}) {
    const historyDataRows = await db.query(
      'SELECT * FROM opd_bill_history WHERE opd_bill_id = $1',
      [id],
    );
    result = { ...result, historyData: historyDataRows };
  }

  return result;
};

module.exports = {
  getOpdBills,
  getOpdBillById,
};