var express = require('express');
var app = express();

var orderRouter = express.Router();

var Order = require('../models/order')

/////////////////////////////////////////////////////////

orderRouter.get('/', function (req, res) {
  if (err) throw err;
  Order.find(function (err, orders) {
    res.status(200).send(orders).end();
  })
});


/////////////////////////////////////////////////////////

orderRouter.get('/:id', function (req, res) {
  Order.findById(req.params.id, function (err, order) {
    if (err) throw err;
    res.status(200).send(order).end();
  });
});

orderRouter.post('/', function (req, res) {

  var order = new Order(req.body);
  order.save(function (err) {
    if (err) throw err;
    console.log('Added order.');
  });
  res.status(200).send('Added order.').end();
});

/////////////////////////////////////////////////////////


module.exports = orderRouter;
