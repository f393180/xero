const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/login', (req, res) => res.render('login', { page_name: 'Login' }));

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login?err=invalid-credentials',
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/auth/login?err=logout');
});


module.exports = router;
