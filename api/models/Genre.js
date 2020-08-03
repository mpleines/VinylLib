const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: String,
});

module.exports = mongoose.model('Genre', GenreSchema);
