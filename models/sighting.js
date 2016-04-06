var mongoose = require('mongoose');

var sightingSchema = mongoose.Schema({
  name: { type: String, lowercase: true },
  order: String,
  status: {
    type: String,
    lowercase: true,
    enum: [
      'extinct',
      'extinct in the wild',
      'critically endangered',
      'endangered',
      'vulnerable',
      'near threatened',
      'conservation dependent',
      'least concern'
    ]
  },
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 }
});


module.exports = mongoose.model('Sighting', sightingSchema);
// we need to pass our schema to a model
// a model is a fancy constructor
// the first argument will be the SINGULAR name of your collection
// mongoose will automatically look for the PLURAL name
// in this example, the collection name would Sightings