var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

var sightingCtrl = require('./controllers/sightingCtrl.js');

app.post('/sightings', sightingCtrl.create)
app.get('/sightings', sightingCtrl.read)
app.put('/sightings/:id', sightingCtrl.update)
app.delete('/sightings/:id', sightingCtrl.delete)

var userCtrl = require('./controllers/userCtrl.js');

app.post('/users', userCtrl.create)
app.get('/users', userCtrl.read)
app.put('/users/:id', userCtrl.update)
app.delete('/users/:id', userCtrl.delete)

// connection
var uri = 'mongodb://localhost/mini-birds-mongoose';
mongoose.connect(uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected to Mongoose!');
})

var port = 8000;
app.listen(port, function() {
  console.log('Listening on ' + port)
})