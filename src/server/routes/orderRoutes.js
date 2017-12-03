var express = require('express');
var app = express();

var orderRouter = express.Router();

var Order = require('../models/order')

/////////////////////////////////////////////////////////

orderRouter.get('/', function (req, res) {

  Order.find(function (err, orders) {
    if (err) throw err;
    res.status(200).send(orders).end();
  })
});


/////////////////////////////////////////////////////////

orderRouter.get('/fullnames', function (req, res) {
  Order.find().distinct('fullName', function(error, fullnames) {
    res.status(200).send(fullnames).end();
  });
});

//////////////////////////////////////////////////////////

orderRouter.get('/realized', function (req, res) {
  Order.find({isRealised: true}, function(error, fullnames) {
    res.status(200).send(fullnames).end();
  });
});


////////////////////////////////////////////////////////////

orderRouter.get('/notrealized', function (req, res) {
  Order.find({isRealised: false}, function(error, fullnames) {
    res.status(200).send(fullnames).end();
  });
});

//////////////////////////////////////////////////////////

orderRouter.get('/realized/users/:login', function (req, res) {
  Order.find({isRealised: true, login: req.params.login}, function(error, fullnames) {
    res.status(200).send(fullnames).end();
  });
});


////////////////////////////////////////////////////////////

orderRouter.get('/notrealized/users/:login', function (req, res) {
  Order.find({isRealised: false, login: req.params.login}, function(error, fullnames) {
    res.status(200).send(fullnames).end();
  });
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
