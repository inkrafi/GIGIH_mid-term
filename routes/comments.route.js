const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comments.controller.js')

router.get('/', commentController.getComments)
router.delete('/:id', commentController.getComments)

module.exports = router