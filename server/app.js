const express = require('express');
const morgan = require('morgan');
const RetailerController = require ('./controllers/RetailerController');
const config = require('config');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');


// don't show the log when it is test
if (config.util.getEnv('NODE_ENV') !== 'test') {
  app.use(morgan('combined'));
}

// parse application/json and look for raw text;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
app.use('/retailers', RetailerController);

//
app.use(function (req, res) {
    res.status(404).send({message: 'File not found!' });
});

module.exports = app;
