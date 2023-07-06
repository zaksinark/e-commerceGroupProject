const mongoose = require('mongoose');


const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'User name is required.'],
            minlength: [4, 'User name must be at least 4 characters long.'],
        },
        email: {
            type: String,
            required: [true, 'email is required.'],
            minlength: [7, 'email must not be empty and must meet propper email format.'],
        },
        password: {
            type: String,
            required: [true, 'Password is required.'],
            minlength: [5, 'Password must be at least 5 characters.'],
        },
        

    },
    { timestamps: true }
);


module.exports = mongoose.model('User', UserSchema);

