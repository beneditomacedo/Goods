const config = require('config');
const mongoose = require('mongoose');

//db connection

mongoose.connect(config.DBHost);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection'));
