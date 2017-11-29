var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()); // parse application/


app.use(cors());

mongoose.connect('mongodb://piotrekjaromin:password@ds042677.mlab.com:42677/mean_project');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'błąd połączenia...'));
db.once('open', function () {
  console.log('Connection to db ok');
});

var Product = require('./models/product')

// ... obsługa API
app.get('/', function (req, res) {
  res.end("Witam Was serdecznie na mojej stronie :)");
});

app.get('/products', function (req, res) {

  var currentPage = req.query.currentPage;
  var categories = req.query.categories;
  categories = (categories.length == 0) ? [] : JSON.parse('["' + categories.replace(",", "\",\"") + '"]');
  var priceFrom = req.query.priceFrom;
  var priceTo = req.query.priceTo;
  var name = req.query.productName;

  var query = categories.length != 0 ?
    Product.find({category: {$in: categories}, price: {$gte: priceFrom, $lte: priceTo}, name: {$regex: ".*" + name + ".*"}}) :
    Product.find({price: {$gte: priceFrom, $lte: priceTo}, name: {$regex: ".*" + name + ".*"}});

  query
    .skip(3 * currentPage - 3)
    .limit(3)
    .exec(function (err, products) {
      res.status(200).send(products).end();
    });

});


app.get('/productsNumber', function (req, res) {
  var categories = req.query.categories;
  categories = (categories.length == 0) ? [] : JSON.parse('["' + categories.replace(",", "\",\"") + '"]');

  var priceFrom = req.query.priceFrom;
  var priceTo = req.query.priceTo;
  var name = req.query.productName;

  var query = categories.length != 0 ?
    Product.find({category: {$in: categories}, price: {$gte: priceFrom, $lte: priceTo}, name: {$regex: ".*" + name + ".*"}}) :
    Product.find({price: {$gte: priceFrom, $lte: priceTo}, name: {$regex: ".*" + name + ".*"}});


  query.count({}, function (err, count) {
    res.status(200).send(JSON.stringify(count)).end();
  });

});

app.get('/getProduct', function (req, res) {
  var Product = mongoose.model('Product');
  Product.findById(req.query.id, function (err, product) {
    res.status(200).send(product).end();
  } );

})

app.post('/product', function (req, res) {
  var product = new Product();
  product.name = req.body.name;
  product.description = req.body.description;
  product.category = req.body.category;
  product.price = req.body.price;

  product.save(function (err) {
    if (err) throw err;
    console.log('Added product.');
  })
  res.send("Ok", 200);
  res.end();
});

app.get('/categories', function (req, res) {
  Product.find().distinct('category', function(error, categories) {
    res.status(200).send(categories).end();
  });
});

app.put('/product', function (req, res) {

  Product.findById(req.body.id, function (err, product) {
    if (err) throw err;
    product.name = req.body.name;
    product.description = req.body.description;
    product.category = req.body.category;
    product.price = req.body.price;


    product.save(function (err) {
      if (err) throw err;
      console.log('updated product.');
    })
  });


  res.send("Ok", 200);
  res.end();
});

app.listen(5000);
