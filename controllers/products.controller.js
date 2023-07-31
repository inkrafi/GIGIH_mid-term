const Product = require('../models/products.model.js')

async function getProducts(_, res) {
    try {
        const product = await Product.find()
        return res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function postProduct(req, res) {
    try {
        const product = await Product.create(req.body)
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;

        const product = await Product.updateOne({ _id: id }, { $set: updates });

        if (product.n === 0) {
        return res.status(404).json({ message: `Product with id ${id} not found.` });
    }
        res.status(200).json({ message: `Product with id ${id} updated successfully`, ...product });
    } catch (error) {
        res.status(500).json(error);
    }
}

async function deleteProduct(req, res) {
    try {
        const { id } = req.params
        const product = await Product.deleteMany({ _id:id })

        if (product.deletedCount === 0) {
            return res.status(404).json({ message: `Product with id ${id} not found.` });
        }

        res.status(200).json({message: `Product with id ${id} deleted succesfully`, ...product})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getProducts, postProduct, updateProduct, deleteProduct}