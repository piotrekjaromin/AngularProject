var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Product = new Schema({
  _id: String,
  name: String,
  description: String,
  category: String,
  price: Number
});

module.exports = mongoose.model("Product", Product);
