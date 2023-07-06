const User = require('../models/users.model');

module.exports = {

    getAll: (req, res) => {
    User.find()
    .then((allUsers) => {
        res.json({ users: allUsers });
    })
    .catch(err => res.status(400).json(err))
},

//---------------------------Get ONE -------------------------------------------

    getOne: (req, res) => {
        User.findOne({ _id: req.params.id })
        .then((oneUser) => {
            res.json({ user: oneUser });
        })
        .catch(err => res.status(400).json(err))
},

//---------------------------Create One  -------------------------------------------

    create: (req, res) => {
        User.create(req.body)
        .then((newlyCreatedUser) => {
            res.json({ user: newlyCreatedUser });
        })
        .catch(err => res.status(400).json(err));
},

//---------------------------Update One  -------------------------------------------

    update: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updateUser) => {
            res.json({ user: updateUser });
        })
        .catch(err => res.status(400).json(err));
},


//---------------------------Delete One  -------------------------------------------

    delete: (req, res) => {
        User.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result });
        })
        .catch(err => res.status(400).json(err))
},

};

