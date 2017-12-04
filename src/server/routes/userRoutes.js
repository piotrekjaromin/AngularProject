var express = require('express');
var app = express();

var userRouter = express.Router();

var User = require('../models/user');

var randtoken = require('rand-token');

/////////////////////////////////////////////////////////

userRouter.get('/', function (req, res) {
  if (err) throw err;
  Order.find(function (err, orders) {
    res.status(200).send(orders).end();
  })
});


/////////////////////////////////////////////////////////

userRouter.get('/:token', function (req, res) {
  User.find({token: req.params.token}, function (err, user) {
    if (err) throw err;
    res.status(200).send(user).end();
  });
});

userRouter.post('/', function (req, res) {
  var user = new User(req.body);
  user.role = 'User'
  user.token = '';
  User.find({login: user.login}, function (err, us) {
    if (us.length !== 0) {
      console.log('User exists');
      res.status(203).send('User exists').end();
      return;
    } else {
      user.save(function (err) {
        if (err) throw err;
        console.log('Added user.');
      });
      res.status(200).send('Added user.').end();
    }
  });
});

userRouter.post('/login', function (req, res) {

  User.find({login: req.body.login, password: req.body.password}, function (err, user) {
    token = randtoken.generate(16);
    if (err) throw err;
    if (user.length === 0) {
      res.status(401).send('User not found.').end();
    } else {
      user[0].token = token;
      user[0].save(function (err) {
        if (err) throw err;
      })

      res.status(200).send(token).end();
    }
  });
});

userRouter.post('/login/admin', function (req, res) {

  User.find({login: req.body.login, password: req.body.password, role: 'Admin'}, function (err, user) {
    token = randtoken.generate(16);
    if (err) throw err;
    if (user.length === 0) {
      res.status(401).send('Unauthorized.').end();
    } else {
      user[0].token = token;
      user[0].save(function (err) {
        if (err) throw err;
      })

      res.status(200).send(token).end();
    }
  });
});

userRouter.post('/logout', function (req, res) {

  User.find({token: req.headers['token']}, function (err, user) {

    if (user.length === 0) {
      res.status(401).send('User not found.').end();
    } else {
      user[0].token = '';
      user[0].save(function (err) {
        if (err) throw err;
      })

      res.status(200).send('removed').end();
    }
  });
});

/////////////////////////////////////////////////////////


module.exports = userRouter;
