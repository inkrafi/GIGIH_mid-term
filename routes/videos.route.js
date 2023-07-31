const express = require('express')
const router = express.Router()
const videoController = require('../controllers/videos.controller.js')

// video
router.get('/', videoController.getVideos)
router.post('/', videoController.postVideo)
router.get('/product/:id', videoController.getProductsFromVideo)

// comment
router.get('/comments', videoController.getComments)
router.post('/comment', videoController.postComment)

module.exports = router