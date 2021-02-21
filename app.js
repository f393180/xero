const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const opdBillsRoutes = require('./src/routes/opd_bills_routes');
const usersRoutes = require('./src/routes/users_routes');

const app = express();
const port = process.env.PORT || 3000;
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/opd-bills', opdBillsRoutes);
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.render('index', {
    page_name: 'Home',
  });
});

app.get('/change-password', (req, res) => {
  res.render('users/change_password', {
    page_name: 'Change Password',
  });
});

app.listen(3000, () => {
  debug(`listening on ${chalk.green(port)}`);
});
