const mongoose = require('mongoose');
const config = require('../config');
const mongoDB = config.getDbConnectionString();

mongoose.set('debug', true);
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

module.exports.Todo = require('./todo');