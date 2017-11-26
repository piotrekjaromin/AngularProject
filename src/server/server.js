var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()); // parse application/


mongoose.connect('mongodb://localhost/sportShop');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'błąd połączenia...'));
db.once('open', function () {
  console.log('Connection to db ok');
});


// ... schemat i model
var Schema = mongoose.Schema;
var Products = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number
});

mongoose.model("Product", Products);


// ... obsługa API
app.get('/', function (req, res) {
  res.end("Witam Was serdecznie na mojej stronie :)");
});

app.get('/products', function (req, res) {
  var Product = mongoose.model('Product');
  var currentPage = req.body.currentPage;
  var skip = 3 * currentPage - 3;
  var limit = 3;
  Product
    .find()
    .skip(skip)
    .limit(limit)
    .exec(function (err, products) {
    res.status(200).send(products).end();
  });
});


app.get('/allProducts', function (req, res) {
  var Product = mongoose.model('Product');
  Product
    .find()
    .exec(function (err, products) {
      res.status(200).send(products).end();
    });
});

app.post('/addProduct', function (req, res) {

  var Product = mongoose.model('Product');
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
  var Product = mongoose.model('Product');
  Product.find().distinct('category', function(error, categories) {
    res.status(200).send(categories).end();
  });
});

app.post('/modifyProduct', function (req, res) {

  var Product = mongoose.model('Product');
  var product = new Product;
  product.name = req.body.name;
  product.description = req.body.description;
  product.category = req.body.category;
  product.price= req.body.price;

  Product.findByIdAndUpdate(req.body.id, product, {new: true}, function(err, model) {
      console.log("updated");
    });

  res.send("Ok", 200);
  res.end();
});

app.listen(5000);
