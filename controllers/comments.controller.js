const Comments = require('../models/comments.model.js')

async function getComments(_, res) {
    try {
        const comments = await Comments.find()
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getComments}