const Order = require('../models/orders.model');

module.exports = {

    getAll: (req, res) => {
    Order.find()
    .then((allOrders) => {
        res.json({ orders: allOrders });
    })
    .catch(err => res.status(400).json(err))
},

//---------------------------Get ONE -------------------------------------------

    getOne: (req, res) => {
        Order.findOne({ _id: req.params.id })
        .then((oneOrder) => {
            res.json({ order: oneOrder });
        })
        .catch(err => res.status(400).json(err))
},

//---------------------------Create One  -------------------------------------------

    create: (req, res) => {
        Order.create(req.body)
        .then((newlyCreatedOrder) => {
            res.json({ order: newlyCreatedOrder });
        })
        .catch(err => res.status(400).json(err));
},

//---------------------------Update One  -------------------------------------------

    update: (req, res) => {
        Order.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updateOrder) => {
            res.json({ order: updateOrder });
        })
        .catch(err => res.status(400).json(err));
},


//---------------------------Delete One  -------------------------------------------

    delete: (req, res) => {
        Order.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result });
        })
        .catch(err => res.status(400).json(err))
},

//--------------------------------Confirm order ------------------------------------
    //Would like to create a function to confirm orders
    //when clicking an order to be submitted 
    // create an instance of the order
    // uppon clicking to submit the order and take us to an order route
    // make sure the order would have the user data 
    

    confirmOrder: (req, res) => {
        Order.ConfrimOne()
    },


};
