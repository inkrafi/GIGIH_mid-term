const express = require('express')
const router = express.Router()
const videoController = require('../controllers/videos.controller.js')

// videos
router.get('/', videoController.getVideos)
router.get('/:id', videoController.getVideo)
router.post('/', videoController.postVideo)
router.patch("/:id", videoController.patchVideo);
router.delete("/:id", videoController.deleteVideo);

// products
router.get('/product/:id', videoController.getProductsFromVideo)

// comments
router.get("/:videoId/comments", videoController.getCommentsByVideoId);
router.post('/comment', videoController.postComment)

module.exports = router