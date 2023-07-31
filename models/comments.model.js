const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentsSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        videoId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Video'
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Comment', commentsSchema)