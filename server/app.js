var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var retailers = require('./routes/retailers.js');
let config = require('config');
let mongoose = require('mongoose');
var app = express();

//db options
let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
};

//db connection
mongoose.connect(config.DBHost, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection'));


// don't show the log when it is test
if (config.util.getEnv('NODE_ENV') !== 'test') {
  app.use(morgan("combined"));
}

// parse application/json and look for raw text;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }))

//
app.use('/retailers', retailers);

//
app.use(function (request, response) {
    response.status(404);
    response.send("File not found!")
});

var server = app.listen(3000, function() {
  console.log("Goods running on port.", server.address().port);
});

module.exports = app;    // for testing
