var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

// mongo
var db = mongojs('mini-birds');
var Sighting = db.collection('sightings');

// express
var app = express();

// middleware
app.use(bodyParser());
app.use(cors());

// ENDPOINTS - CRUD
// create
app.post('/api/sighting', function(req, res, next) {
  console.log(req.body);
  Sighting.insert(req.body, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

// read
app.get('/api/sighting', function(req, res, next) {
  if (req.query.real) { //change from string to boolean
    if (req.query.real === 'true') {
      req.query.real = true;
    } else {
      req.query.real = false;
    }
  }
  console.log(req.query);
  Sighting.find(req.query, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

// update
app.put('/api/sighting/:id', function(req, res, next) {
  console.log(req.body);
  Sighting.findAndModify({ //modifies only one doc
    query: {_id: mongojs.ObjectId(req.params.id)}, // which doc to update
    update: { $set: req.body }, // what we want to update
    new: true //returns modified document instead of original
  }, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

// delete
app.delete('/api/sighting/:id', function(req, res, next) {
  console.log(req.query);
  Sighting.remove({_id: mongojs.ObjectId(req.params.id)},
                  true, // delete only one document
                  function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})


// connection
var port = 8000;
app.listen(port, function() {
  console.log('Listening on ' + port)
})


var obj = {
  "title": "Spaghetti: Forced to Eat It",
  "author": "Garfield",
  "year": 190
}