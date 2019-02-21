const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  username: { type: String, required: true, uniquie: true},
  password: { type: String, required: true},
  // confirmPassword: { type: String, required: true, match: 'password'}, DO I NEED THIS LINE? THINK THIS IS MATCHING
  //                                                                      PASSWORD SO DONT THINK WOULD WORK ANYWAY
  profileImg: { type: String }, // allow user to upload image? Sort in front end, Look into file stack
  currentResident: { type: String, required: true, enum: [
    'Yes',
    'No'
  ]},
  whichArea: { type: String, enum: [
    'Overbury Road / Catwalk Place',
    'Arena Design Center',
    'Fountaine Road'
  ]},
  ownPets: { type: String, required: true, enum: [
    'Yes',
    'No'
  ]},
  whatPet: {type: String },
  specialRequirements: { type: String },
  budgetPerMonth: { type: Number, required: true },
  moveBy: {type: Date} // Use https://www.cssscript.com/create-simple-event-calendar-javascript-caleandar-js/ in FRONT-END
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// Throw a validation error when duplicate emails are Created
userSchema.plugin(require('mongoose-unique-validator'));

userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function(next) {
  console.log('pre-validate hook has happened');
  if(this._passwordConfirmation !== this.password) {
    console.log('passwords did not match');
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next(); // We're finshed thanks! Mongoose can do the next thing in the lifecycle.
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 8);
  }
  next();
});


module.exports = mongoose.model('User', userSchema);
