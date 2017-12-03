var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var Product = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number
});

module.exports = mongoose.model("Product", Product);
