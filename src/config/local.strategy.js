const debug = require('debug')('app:config-local.strategy');
const passport = require('passport');
const { Strategy } = require('passport-local');
const { getUserbyUsernamePassword } = require('../services/users');
const { isObjectEmpty } = require('../utils');

module.exports = function localStrategy() {
  passport.use(new Strategy({
    usernameField: 'username',
    passwordField: 'password',
  }, async (username, password, done) => {
    const user = await getUserbyUsernamePassword(username, password);
    if (isObjectEmpty(user)) {
      debug('User not found');
      done(null, false, { message: 'Invalid username or password.' });
    } else {
      debug('User found');
      done(null, user);
    }
  }));
};
