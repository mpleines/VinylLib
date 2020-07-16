const mongoose = require('mongoose')
var Schema = mongoose.Schema

const RecordSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  artist: String,
  album: String,
  yearOfRelease: String,
  genre: String,
  storageLocation: String,
  username: String
});

module.exports = mongoose.model('Record', RecordSchema);