const mongoose = require(mongoose);
const User = require('../models/user');
const Room = require('../models/room');
const { dbUri } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

const roomData = {
  location: 'Overbury Road',
  numOfResidents: 8,
  pets: 'Yes',
  typeOfPet: 'Cat',
  numOfToilets: 2,
  numOfShowers: 1,
  bath: 'No',
  tellAboutHouse: 'Cosy 8 person warehouse with high cealings and a little kitten running around,like to party on the weekends, quiet during the week',
  extraCosts: 15
};

const userData = {
  email: 'max@email.com',
  username: 'max',
  password: 'pass',
  profileImg: 'https://media.licdn.com/dms/image/C4D03AQFvQx1ZhFlX7Q/profile-displayphoto-shrink_100_100/0?e=1556150400&v=beta&t=GGk2k3-R20taHrlMhH7iAr-FNy7AXHysg5QTIc1-vyA',
  currentResident: 'Yes',
  whichArea: 'Overbury Road / Catwalk Place',
  ownPets: 'Yes',
  whatPet: 'Kitten',
  specialRequirements: 'None',
  budgetPerMonth: 700,
  moveBy: '22.07.2019'
};

Room.collection.drop();
User.collection.drop();
Room.create(roomData);
User.create(userData)
  .then(users => {
    roomData[0].user = users[0]._id;
    return Room.create(roomData);
  })
  .then(users => console.log(`${users.length} users created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
