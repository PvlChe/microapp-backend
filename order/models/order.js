const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
        userID: {
            type: String,
            required: [true, 'userID is required']
        },
        itemID: {
            type: String,
            required: [true, 'itemID is required']

        },
        orderedAmount: {
            type: Number,
            required: [true, 'Amount is required']

        },
        itemModel: {
            type: String,
            required: [true, 'itemModel is required']

        },
        itemBrand: {
            type: String,
            required: [true, 'itemBrand is required']

        },
        itemColor: {
            type: String,
            required: [true, 'itemColor is required']

        },
        itemVolume: {
            type: String,
            required: [true, 'itemVolume is required']

        },
        email: {
            type: String,
            required: [true, 'E-Mail is required']
        },
        adresse: {
            type: String,
            required: [true, 'adresse is required']
        },
        plz: {
            type: String,
            required: [true, 'plz is required']
        },
        ort: {
            type: String,
            required: [true, 'ort is required']
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Order', orderSchema);
