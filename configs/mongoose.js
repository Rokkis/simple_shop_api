const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.uri);

module.exports = mongoose;