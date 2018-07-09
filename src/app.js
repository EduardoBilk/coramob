require('dotenv').config({ path: `${__dirname}/../variables.env` });
require('./models/User.js');
require('./utils/passport');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const path = require('path');
const expressValidator = require('express-validator');
const routes = require('./routes/routes');

mongoose.connect(
	process.env.DATABASE,
	{ useNewUrlParser: true }
);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', err => {
	console.error(`🙅 🚫  → ${err.message}`);
});

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// app.use('/', (req, res) =>
// 	res.sendFile(path.join(__dirname, '../dist/index.html'))
// );
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

app.set('port', 8888);
const server = app.listen(app.get('port'), () => {
	console.log(`listening on PORT ${server.address().port}`);
});

module.exports = app;
