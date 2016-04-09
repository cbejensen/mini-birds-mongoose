var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, lowercase: true },
  username: { type: String, lowercase: true },
  level: Number,
  location: String,
  member: Boolean
});


module.exports = mongoose.model('User', userSchema);