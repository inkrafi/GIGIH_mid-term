require('dotenv').config() 
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const productRoutes = require('./routes/products.route.js')
const videoRoutes = require('./routes/videos.route.js')
const commentRoutes = require('./routes/comments.route.js')
const PORT = process.env.PORT
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

app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use(express.json())
app.use('/products', productRoutes)
app.use('/videos', videoRoutes)
app.use('/comments', commentRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

