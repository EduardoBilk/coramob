const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res) =>
	res.sendFile(path.join(__dirname, '../dist/index.html'))
);

app.set('port', 8888);
const server = app.listen(app.get('port'), () => {
	console.log(`listening on PORT ${server.address().port}`);
});

module.exports = app;
