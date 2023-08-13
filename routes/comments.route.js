const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comments.controller.js')

router.get('/', commentController.getComments)

module.exports = router