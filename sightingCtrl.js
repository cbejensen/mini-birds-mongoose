var Sighting = require('./models/sighting');

module.exports = {
  
  create: function(req, res) {
    var newSighting = new Sighting(req.body);
    //alt method to skip above line and replace below line:
    // Sighting.create(req.body, function(err, result) {
    newSighting.save(function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    })
  },

  read: function(req, res) {
    console.log(req.query);
    Sighting.find(req.query).exec(function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    })
  },
  
  update: function(req, res) {
    Sighting.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    })
  },
  
  delete: function(req, res) {
    Sighting.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },
}