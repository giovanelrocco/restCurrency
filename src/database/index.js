const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restcurrency', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;