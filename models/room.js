const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  location: { type: String, required: true }, // research on front end if can add application that will automatically find address & add to maps?
  numOfResidents: { type: String, required: true },
  pets: { type: String, enum: [
    'Yes',
    'No'
  ] },
  typeOfPet: { type: String },
  numOfToilets: { type: Number, required: true },
  numOfShowers: { type: Number, required: true },
  billsIncluded: { type: String, enum: [
    'Yes',
    'No'
  ]},
  bath: { type: String, required: true, enum: [
    'Yes',
    'No'
  ] },
  tellAboutHouse: { type: String, required: true },
  extraCosts: { type: Number }
});

module.exports = mongoose.model('Room', roomSchema);
