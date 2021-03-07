const debug = require('debug')('app:service-db');
const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config.db);

const emptyOrRows = (rows) => ((!rows) ? [] : rows);

const query = async (sqlQuery, params) => {
  debug(`SQL: ${sqlQuery}`);
  debug(`PARAMS: ${params}`);
  const { rows } = await pool.query(sqlQuery, params);
  return emptyOrRows(rows);
};

module.exports = {
  query,
};
