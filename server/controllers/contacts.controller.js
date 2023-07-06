const Contact = require('../models/contacts.model');

module.exports = {

    getAll: (req, res) => {
    Contact.find()
    .then((allContacts) => {
        res.json({ contacts: allContacts });
    })
    .catch(err => res.status(400).json(err))
},

//---------------------------Get ONE -------------------------------------------

    getOne: (req, res) => {
        Contact.findOne({ _id: req.params.id })
        .then((oneContact) => {
            res.json({ contact: oneContact });
        })
        .catch(err => res.status(400).json(err))
},

//---------------------------Create One  -------------------------------------------

    create: (req, res) => {
        Contact.create(req.body)
        .then((newlyCreatedContact) => {
            res.json({ contact: newlyCreatedContact });
        })
        .catch(err => res.status(400).json(err));
},

//---------------------------Update One  -------------------------------------------

    update: (req, res) => {
        Contact.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updateContact) => {
            res.json({ contact: updateContact });
        })
        .catch(err => res.status(400).json(err));
},


//---------------------------Delete One  -------------------------------------------

    delete: (req, res) => {
        Contact.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result });
        })
        .catch(err => res.status(400).json(err))
},

};

