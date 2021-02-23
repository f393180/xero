const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const opdBillsRoutes = require('./src/routes/opd_bills');
const usersRoutes = require('./src/routes/users');
const { port } = require('./src/services/config');

const app = express();

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

app.listen(port, () => {
  debug(`listening on ${chalk.green(port)}`);
});
