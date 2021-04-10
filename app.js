const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const uuid = require('uuid');

const authRoutes = require('./src/routes/auth');
const opdBillsRoutes = require('./src/routes/opd_bills');
const usersRoutes = require('./src/routes/users');
const { port } = require('./src/services/config');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  genid: uuid.genid,
  secret: 'Samsung@2020',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: (1000 * 60 * 100),
  },
}));

require('./src/config/passport.js')(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});
app.use('/auth', authRoutes);

app.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/auth/login');
  }
});

app.use('/opd-bills', opdBillsRoutes);
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.render('index', {
    page_name: 'Home',
    user: req.user,
  });
});

app.get('/change-password', (req, res) => {
  res.render('users/change_password', {
    page_name: 'Change Password',
    user: req.user,
  });
});

app.listen(port, () => {
  debug(`listening on ${chalk.green(port)}`);
});
