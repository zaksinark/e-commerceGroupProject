const mongoose = require('mongoose');

//This Schema is used for the Track Order portion. 

const OrderSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'email is required.'],
            minlength: [7, 'email must not be empty and must be proper email format.'],
        },
        orderId: {
            type: String,
            required: [true, 'Order Id is required to locate your order.'],
            minlength: [3, 'order ID must meet the minmum order number.'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }

    },
    { timestamps: true }
);


module.exports = mongoose.model('Order', OrderSchema);

