const Comments = require('../models/comments.model.js')

async function getComments(_, res) {
    try {
        const comments = await Comments.find()
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function deleteComment(req, res) {
    try {
        const { id } = req.params
        const comment = await Comment.deleteOne({ _id:id })

        if (comment.deletedCount === 0) {
            return res.status(404).json({ message: `Comment with id ${id} not found.` });
        }

        res.status(200).json({message: `Comment with id ${id} deleted succesfully`, ...comment})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getComments, deleteComment}