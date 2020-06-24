const mongoose = require('mongoose')
var Schema = mongoose.Schema

const UserSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  username: String,
  // TODO: hash password
  password: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);