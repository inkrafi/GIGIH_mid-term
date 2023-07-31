const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
    linkProduct: {
        type: String,
        required: true,
    },
    titleProduct: {
        type: String,
        required: true,
    },
    priceProduct: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Product', productsSchema)