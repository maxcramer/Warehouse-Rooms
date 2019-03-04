const Room = require('../models/room');

function roomsIndex(req, res, next) {
  Room.find()
    .then(rooms => res.json(rooms))
    .catch(next);
}

function roomsUpdate(req, res, next) {
  Room.findById(req.params.id)
    .then(room => room.set(req.body))
    .then(room => room.save())
    .then(room => res.json(room))
    .catch(next);
}

function roomsShow(req, res, next) {
  Room.findById(req.params.id)
    .then(room => res.json(room))
    .catch(next);
}

function roomsCreate(req, res, next) {
  Room.create(req.body)
    .then(room => res.json(room))
    .catch(next);
}

function roomsDelete(req, res, next) {
  Room.findById(req.params.id)
    .then(room => room.remove())
    .then(() => res.sendStatus(204))
    .catch(next);

}

module.exports = {
  index: roomsIndex,
  show: roomsShow,
  create: roomsCreate,
  update: roomsUpdate,
  delete: roomsDelete
};
