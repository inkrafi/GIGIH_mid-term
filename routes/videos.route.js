const express = require('express')
const router = express.Router()
const videoController = require('../controllers/videos.controller.js')

// videos
router.get('/', videoController.getVideos)
router.post('/', videoController.postVideo)

// products
router.get('/products', videoController.getProducts)
router.get('/product/:id', videoController.getProductsFromVideo)

// comments
router.get('/comments', videoController.getComments)
router.post('/comment', videoController.postComment)

module.exports = router