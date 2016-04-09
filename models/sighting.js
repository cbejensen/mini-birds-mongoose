var mongoose = require('mongoose');
var birdSchema = require('./bird');
var Schema = mongoose.Schema;

var sightingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  bird: [birdSchema],
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 }
});


module.exports = mongoose.model('Sighting', sightingSchema);