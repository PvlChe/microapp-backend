const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        name: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: [true, 'password is required']

        },
        email: {
            type: String,
            required: [true, 'E-Mail is required']
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('User', userSchema);
