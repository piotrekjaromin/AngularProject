var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

var http       = require('http');
var path       = require('path');
var socket     = require('socket.io');
var server     = http.createServer(app);
var io         = socket(server);

app.use(express.static(path.join(__dirname, 'dist')));

io.on('connection', function(socket) {

  socket.on('editProduct', (message) => {
    console.log(message);
  io.emit('editProduct', {data: message});
});


  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); // parse application/
app.use(cors());

var productRouter = require('./routes/productRoutes')
app.use('/products', productRouter);

var ordertRouter = require('./routes/orderRoutes')
app.use('/orders', ordertRouter);

var userRouter = require('./routes/userRoutes')
app.use('/users', userRouter);

mongoose.connect('mongodb://piotrekjaromin:password@ds042677.mlab.com:42677/mean_project')
  .then(console.log('Start'))
  .catch(err => { // if error we will be here
  console.error('App starting error:', err.stack);
process.exit(1);
});

server.listen(5000, function () {
  console.log('Server is running on Port: ', 5000);
});
