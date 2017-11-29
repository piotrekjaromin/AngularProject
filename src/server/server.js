var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); // parse application/
app.use(cors());

var productRouter = require('./routes/productRoutes')
app.use('/products', productRouter);

mongoose.connect('mongodb://piotrekjaromin:password@ds042677.mlab.com:42677/mean_project')
  .then(console.log('Start'))
  .catch(err => { // if error we will be here
  console.error('App starting error:', err.stack);
process.exit(1);
});

app.listen(5000, function () {
  console.log('Server is running on Port: ', 5000);
});
