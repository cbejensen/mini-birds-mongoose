var User = require('../models/user');

module.exports = {
  
  create: function(req, res) {
    var newUser = new User(req.body);
    // alt method to replace lines above and below
    // User.create(req.body, function(err, result) {
    newUser.save(function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    })
  },

  read: function(req, res) {
    console.log(req.query);
    User.find(req.query).exec(function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    })
  },
  
  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    })
  },
  
  delete: function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },
}