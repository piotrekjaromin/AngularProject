var express = require('express');
var app = express();

var orderRouter = express.Router();

var Order = require('../models/order');

var User = require('../models/user');

/////////////////////////////////////////////////////////

orderRouter.get('/', function (req, res) {

  Order.find(function (err, orders) {
    if (err) throw err;
    res.status(200).send(orders).end();
  })
});


/////////////////////////////////////////////////////////

orderRouter.get('/fullnames', function (req, res) {
  Order.find().distinct('fullName', function (error, fullnames) {
    res.status(200).send(fullnames).end();
  });
});

//////////////////////////////////////////////////////////

orderRouter.get('/realized', function (req, res) {
  User.find({token: req.headers['token']}, function (err, user) {
      if (user.length !== 0 && user[0].role === 'Admin') {
        Order.find({isRealised: true}, function (error, fullnames) {
          res.status(200).send(fullnames).end();
        });
      } else {
        res.status(200).send()
      }
    }
  );
});


////////////////////////////////////////////////////////////

orderRouter.get('/notrealized', function (req, res) {
  User.find({token: req.headers['token']}, function (err, user) {
      console.log(user);
      if (user.length !== 0 && user[0].role === 'Admin') {
        Order.find({isRealised: false}, function (error, fullnames) {
          console.log(fullnames);
          res.status(200).send(fullnames).end();
        });
      } else {
        res.status(401).send().end();
      }
    }
  );
});

//////////////////////////////////////////////////////////

orderRouter.get('/realized/users/:login', function (req, res) {
  Order.find({isRealised: true, login: req.params.login}, function (error, fullnames) {
    res.status(200).send(fullnames).end();
  });
});


////////////////////////////////////////////////////////////

orderRouter.get('/notrealized/users/:login', function (req, res) {
  Order.find({isRealised: false, login: req.params.login}, function (error, fullnames) {
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

orderRouter.put('/approve', function (req, res) {
  console.log(req.body._id);
  User.find({token: req.headers['token']}, function (err, user) {
    if (user.length !== 0 && user[0].role === 'Admin') {
      Order.findById(req.body._id, function (err, ord) {
        console.log(ord);
        ord.isRealised = true;
        ord.save(function (err) {
          console.log('Updated order.');
        })
      })
      res.status(200).send('Added order.').end();
    } else {
      res.status(401).send().end();
    }
  });
});

module.exports = orderRouter;
