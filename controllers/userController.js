const User = require('../models/user');

// function userFollower(req, res, next) {
//   User.findById(req.params.id)
//     .then(user => {
//       console.log(user);
//       user.followers.push(req.currentUser.id);
//       return user.save();
//     })
//     .then(user => {
//       User
//         .findById(req.currentUser.id)
//         .then( user => {
//           user.following.push(req.params.id);
//           return user.save();
//         });
//       return user;
//     })
//     .then(user => res.json(user))
//     .catch(next);
// }


function userIndex(req, res, next) {
  User.find()
    .then(users => res.json(users))
    .catch(next);
}

function userShow(req, res, next) {
  console.log(req.params.id);
  User.findById(req.params.id)
    .populate('following')
    .then(user => res.json(user))
    .catch(next);
}

function userUpdate(req, res, next) {
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}


module.exports = {
  index: userIndex,
  show: userShow,
  update: userUpdate
};
