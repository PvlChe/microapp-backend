const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
        brand: {
            type: String,
            required: [true, 'Brand is required'],
        },
        model: {
            type: String,
            required: [true, 'Model is required'],
        },
        volume: {
            type: String,
            required: [true, 'Volume is required'],
        },
        color: {
            type: String,
            required: [true, 'Color is required']
        },
        description: {
            type: String,
            required: false,
        },
        imageURL: {
            type: String,
            required: [true, 'Imagesource required!']
        },
        screen: {
            type: String,
            required: [true, 'Screen required!']
        },
        amount: {
            type: Number,
            required: [true, 'Amount required!']
        },
        price: {
            type: Number,
            required: [true, 'Price required!']
        },
        camera: {
            type: String,
            required: [true, 'Camera required!']
        },
        processor: {
            type: String,
            required: [true, 'Processor required!']
        },
        ram: {
            type: String,
            required: [true, 'ram required!']
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Item', itemSchema);
