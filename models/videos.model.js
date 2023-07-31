const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    videoUrl: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    videoTitle: {
        type: String,
        required: true,
    },
    productId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

module.exports = mongoose.model('Video', videoSchema)