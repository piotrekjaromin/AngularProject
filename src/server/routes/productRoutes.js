var express = require('express');
var app = express();

var productRouter = express.Router();

var Product = require('../models/product');
var User = require('../models/user');
/////////////////////////////////////////////////////////

productRouter.get('/', function (req, res) {
  Product.find(function (err, products) {
    res.status(200).send(products).end();
  })
});

/////////////////////////////////////////////////////////


////////////////////////////////////////////////////////

productRouter.get('/categories', function (req, res) {
  Product.find().distinct('category', function (error, categories) {
    res.status(200).send(categories).end();
  });
});

/////////////////////////////////////////////////////////

productRouter.get('/name/:productname/categories/:categories/page/:currentpage/pricefrom/:pricefrom/priceto/:priceto', function (req, res) {
  var currentPage = req.params.currentpage;
  var categories = req.params.categories;
  categories = (categories.length == 0 || categories === ' ') ? [] : JSON.parse('["' + categories.split(',').join('","') + '"]');
  var priceFrom = req.params.pricefrom;
  var priceTo = req.params.priceto;
  var name = req.params.productname;

  var query = categories.length != 0 ?
    Product.find({
      category: {$in: categories},
      price: {$gte: priceFrom, $lte: priceTo},
      name: {$regex: ".*" + name + ".*"}
    }) :
    Product.find({price: {$gte: priceFrom, $lte: priceTo}, name: {$regex: ".*" + name + ".*"}});

  query
    .skip(3 * currentPage - 3)
    .limit(3)
    .exec(function (err, products) {
      res.status(200).send(products).end();
    });
});

/////////////////////////////////////////////////////////

productRouter.get('/name/:productname/categories/:categories/pricefrom/:pricefrom/priceto/:priceto/quantity', function (req, res) {
  var categories = req.params.categories;
  categories = (categories.length == 0 || categories === ' ') ? [] : JSON.parse('["' + categories.split(',').join('","') + '"]');
  var priceFrom = req.params.pricefrom;
  var priceTo = req.params.priceto;
  var name = req.params.productname;
  var query = categories.length != 0 ?
    Product.find({
      category: {$in: categories},
      price: {$gte: priceFrom, $lte: priceTo},
      name: {$regex: ".*" + name + ".*"}
    }) :
    Product.find({price: {$gte: priceFrom, $lte: priceTo}, name: {$regex: ".*" + name + ".*"}});

  query
    .count({}, function (err, count) {
      count = Math.ceil(count / 3);
      if (count < 1) {
        count = 1;
      }

      res.status(200).send(JSON.stringify(count)).end();
    });
});

/////////////////////////////////////////////////////////

productRouter.post('/', function (req, res) {
  User.find({token: req.headers['token'], role: 'Admin'}, function (err, user) {
    if (user.length !== 0) {
      var product = new Product();
      product.name = req.body.name;
      product.price = req.body.price;
      product.description = req.body.description;
      product.category = req.body.category;
      product.promotionPrice = 0;
      product.save(function (err) {
          if (err) {
            res.status(500).send(err).end();
          } else {
            res.status(200).send('Added product.').end();
          }
        }
      );
    }
  });
});

/////////////////////////////////////////////////////////

productRouter.put('/', function (req, res) {
  User.find({token: req.headers['token'], role: 'Admin'}, function (err, user) {
      if (user.length !== 0) {
        Product.findById(req.body._id, function (err, product) {
          if (err) throw err;
          product.name = req.body.name;
          product.description = req.body.description;
          product.category = req.body.category;
          product.price = req.body.price;
          product.promotionPrice = req.body.promotionPrice;
          product.save(function (err) {
            if (err) {
              res.status(500).send(err).end();
            } else {
              res.status(200).send('updated product.').end();
            }
          })
        });
      }
    }
  );
});

productRouter.put('/promotion/add', function (req, res) {
  User.find({token: req.headers['token'], role: 'Admin'}, function (err, user) {
      if (user.length !== 0) {
        Product.findById(req.body._id, function (err, product) {
          if (err) throw err;
          product.promotionPrice = req.body.promotionPrice;
          product.save(function (err) {
            if (err) {
              res.status(500).send(err).end();
            } else {
              res.status(200).send('Added promotion.').end();
            }
          })
        });
      }
    }
  );
});

productRouter.put('/promotion/remove', function (req, res) {
  User.find({token: req.headers['token'], role: 'Admin'}, function (err, user) {
      if (user.length !== 0) {
        Product.findById(req.body._id, function (err, product) {
          if (err) throw err;
          product.promotionPrice = 0;
          product.save(function (err) {
            if (err) {
              res.status(500).send(err).end();
            } else {
              res.status(200).send('Added promotion.').end();
            }
          })
        });
      }
    }
  );
});

module.exports = productRouter;
