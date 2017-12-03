var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Order = new Schema({
  address: String,
  fullName: String,
  price: Number,
  isRealised: Boolean,
  login: String,
  products: [
    {
      number: Number,
      product: {
        _id: String,
        category: String,
        description: String,
        name: String,
        price: Number
      }
    }
  ]
});

module.exports = mongoose.model("Order", Order);
