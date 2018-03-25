var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var retailers = require("./routes/retailers.js");
let config = require("config")

var app = express();

// don't show the log when it is test
if (config.util.getEnv('NODE_ENV') !== 'test') {
  app.use(morgan("combined"));
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/retailers', retailers);

app.use(function (request, response) {
    response.status(404);
    response.send("File not found!")
});

var server = app.listen(3000, function() {
  console.log("Goods running on port.", server.address().port);
});

module.exports = app;    // for testing
