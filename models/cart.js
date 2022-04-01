const mongoose = require('mongoose')
//?
const cartSchema = new mongoose.Schema({
    name: String, 
    image: String, 
    description: String, 
    price: Number,
    price_string: String,
    date: String,
    destination: String,

    
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart