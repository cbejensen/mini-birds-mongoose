var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

var sightingCtrl = require('./sightingCtrl.js');

app.post('/sightings', sightingCtrl.create)
app.get('/sightings', sightingCtrl.read)
app.put('/sightings/:id', sightingCtrl.update)
app.delete('/sightings/:id', sightingCtrl.delete)

// connection
var uri = 'mongodb://localhost/test';
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