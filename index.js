require('dotenv').config() 
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products.route.js')
const videoRoutes = require('./routes/videos.route.js')
const PORT = 5000

const DB_URL = process.env.DATABASE_URL;
mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("error", (error) => {
    console.log(error);
})

db.once ("connected", () => {
    console.log("Database Connected")
})

const app = express()

app.use(express.json())
app.use('/products', productRoutes)
app.use('/videos', videoRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

