const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const appRouters = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/assets")));

app.use('/', appRouters);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//render HTML file
app.engine('html', require('ejs').renderFile);

//catch 404 and forward to error handler
app.use((req, res, next) => {
	next(new createError.NotFound())
});

app.use((err, req, res, next) => {
	// render error page
	res.status(err.status || 500);
	res.render('error.html', { err })
});

var server = app.listen(port, () => {
	const currentPort = server.address().port;
	console.log(`Express is working on port ${currentPort}`);
});

module.exports = app;
