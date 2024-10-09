var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let db = require('./models/index');
var indexRouter = require('./routes/index');
var studentRouter = require('./routes/student.router');
var markRouter = require('./routes/marks.router');
require('dotenv').config();
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// db.sequelize.sync({force: true});
db.sequelize.sync();
app.use('/', indexRouter);
app.use('/student', studentRouter);
app.use('/marks',markRouter);

module.exports = app;
