const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        year: {
            type: Number,
            required: [true, 'Enter Year .'],
            minlength: [1, 'Year is required.'],
        },
        make: {
            type: String,
            required: [true, 'Please Specify your vehicle make.'],
        },
        model: {
            type: String,
            required: [true, 'Please Specify your vehicle model.'],
        },
        subModel: {
            type: String,
            required: [true, 'Please Specify your vehicle sub-model.'],
        },
        part: {
            type: String,
            required: [true, 'Please Specify your requested part.'],
        },


    },
    { timestamps: true }
);


module.exports = mongoose.model('Product', ProductSchema);