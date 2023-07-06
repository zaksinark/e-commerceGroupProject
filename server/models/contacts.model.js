const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please Provide your first name.'],
            minlength: [1, 'First name must be at least 1 character long.'],
        },
        lastName: {
            type: String,
            required: [true, 'Please Provide your Last name.'],
            minlength: [1, 'Last name must be at least 1 character.'],
        },
        email: {
            type: String,
            required: [true, 'Please Provide your E-mail .'],
            minlength: [7, 'E-mail must meet proper email format.'],
        },
        phoneNumber: {
            type: Number,
            required: [true, 'Please Provide your phone number.'],
            minlength: [10, 'phone number must be at least 10 digits.'],
        },

    },
    { timestamps: true }
);


module.exports = mongoose.model('Contact', ContactSchema);