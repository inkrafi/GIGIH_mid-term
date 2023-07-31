const express = require('express')
const router = express.Router()
const productController = require('../controllers/products.controller.js')

router.get('/', productController.getProducts)
router.post('/', productController.postProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router