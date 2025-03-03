const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String,
    bestseller: Boolean
})

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel