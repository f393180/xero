const debug = require('debug')('app:service-users');
const db = require('./db');
const utils = require('../utils');

const getUserbyUsernamePassword = async (username, password) => {
  const mainDataRows = await db.query(
    'SELECT * FROM opd_user WHERE username = $1 AND password = $2',
    [username, password],
  );
  const user = utils.getFirstObj(mainDataRows);
  debug('User from DB:');
  debug(user);
  return user;
};

module.exports = {
  getUserbyUsernamePassword,
};
