const Product = require('../models/products.model');

module.exports = {

    getAll: (req, res) => {
    Product.find()
    .then((allProducts) => {
        res.json({ products: allProducts });
    })
    .catch(err => res.status(400).json(err))
},

//---------------------------Get ONE -------------------------------------------

    getOne: (req, res) => {
        Product.findOne({ _id: req.params.id })
        .then((oneProduct) => {
            res.json({ product: oneProduct });
        })
        .catch(err => res.status(400).json(err))
},

//---------------------------Create One  -------------------------------------------

    create: (req, res) => {
        Product.create(req.body)
        .then((newlyCreatedProduct) => {
            res.json({ product: newlyCreatedProduct });
        })
        .catch(err => res.status(400).json(err));
},

//---------------------------Update One  -------------------------------------------

    update: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updateProduct) => {
            res.json({ product: updateProduct });
        })
        .catch(err => res.status(400).json(err));
},


//---------------------------Delete One  -------------------------------------------

    delete: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result });
        })
        .catch(err => res.status(400).json(err))
},

};