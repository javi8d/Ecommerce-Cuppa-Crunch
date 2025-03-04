const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    userId: String,
    products: [{productId: String, quantity: Number}],
    totalAmount: Number,
    status: {type: String, default:"pending"},  
    createdAt: { type: Date, default: Date.now },
    fname: String,
    lname: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zipcode: Number,
    phone: Number,
    method: String
})

const OrdersModel = mongoose.model("order", OrdersSchema)
module.exports = OrdersModel