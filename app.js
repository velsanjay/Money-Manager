var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const SignUpRouter = require('./Components/User/newUser')
const SignInRouter = require('./Components/User/SignIn')
const ForgetRouter = require('./Components/User/forget')
const IncomeRouter = require('./Components/Income/newIncome')
const GetIncomeRouter = require('./Components/Income/getIncomeDetail')
const NewExpenditure = require('./Components/Expenditure/NewExpenditure')
const GetExtenditureRouter = require('./Components/Expenditure/getExpenditure')
const IncomeMonthRouter = require('./Components/Income/GetByMonth')
const IncomeDateRouter = require('./Components/Income/GetByDate')
const IncomeYearRouter = require('./Components/Income/GetByYear')
const ExpenceMonthRouter = require('./Components/Expenditure/GetByMonth')
const ExpenceDateRouter = require('./Components/Expenditure/GetByDate')
const ExpenceYearRouter = require('./Components/Expenditure/GetByYear')
const ExpenceCatogieRouter = require('./Components/Expenditure/GetByCatogorie')
const EditIncomRoute = require('./Components/Income/EditIncomeDetail')
const EditExpenceRouter = require('./Components/Expenditure/EditExperienceDetail')
const cors = require('cors')
const GetUser = require('./Components/User/GetUser')


var app = express();
require("./Common/dbconfig")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); 

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/',SignUpRouter)
app.use('/',SignInRouter)
app.use('/',ForgetRouter)
app.use('/income',IncomeRouter)
app.use('/income',GetIncomeRouter)
app.use('/income',IncomeMonthRouter)
app.use('/income',IncomeDateRouter)
app.use('/income',IncomeYearRouter)
app.use('/income',EditIncomRoute) 
app.use('/expence',NewExpenditure)
app.use('/expence',GetExtenditureRouter) 
app.use('/expence',ExpenceMonthRouter)
app.use('/expence',ExpenceDateRouter)
app.use('/expence',ExpenceYearRouter)
app.use('/expence',ExpenceCatogieRouter)
app.use('/expence',EditExpenceRouter)
app.use('/',GetUser)


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
