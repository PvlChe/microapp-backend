const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        userID: {
            type: String,
            required: [true, 'user is required']
        },
        itemID: {
            type: String,
            required: [true, 'item is required']

        },
        email: {
            type: String,
            required: [true, 'E-Mail is required']
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Order', userSchema);
