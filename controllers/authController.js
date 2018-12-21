const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(402).json({ message: 'You are unauthorized, please try again' });
      }
      createAndSendToken(user, res, `Welcome back ${user.username}, lets find you a new room today`);
    })
    .catch(next);
}

function register(req, res, next) {
  User.create(req.body)
    .then(user => createAndSendToken(user, res, `Created user ${user.email}`))
    .catch(next);
}

function createAndSendToken(user, res, message) {
  const token = jwt.sign({ sub: user._id, username: user.username }, secret, { expiresIn: '10h' });
  res.json({ message, token });
}

module.exports = {
  login, register
};
