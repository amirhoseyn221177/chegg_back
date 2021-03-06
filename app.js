var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser=require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var verifyToken= require('./routes/verifyToken')
var Question= require('./routes/Question');
var SignIn= require('./routes/SignIn')
var cors = require('cors');

var app = express();
app.use(express.static(path.join(__dirname, 'build')));
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyparser.json())
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/question',Question);
app.use('/api/signin',SignIn)
app.use('/api/verifyToken',verifyToken)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
