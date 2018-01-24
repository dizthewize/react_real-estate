const mongoose = require('mongoose');
const { Schema } = mongoose;

const homeSchema = new Schema({
  address: {type: String},
  city: {type: String},
  state: {type: String},
  rooms: {type: String},
  price: {type: String},
  floorSpace: {type: String},
  img: {type: String},
  houseType: {type: String},
  extras: { type: [String]}
});

mongoose.model('homes', homeSchema);