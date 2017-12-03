var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
  login: String,
  password: String,
  role: String,
  token: String,
  name: String,
  surname: String,
  address: String
});

module.exports = mongoose.model("User", User);
