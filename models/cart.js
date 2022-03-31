const mongoose = require('mongoose')
//?
const cartSchema = new mongoose.Schema({
    name: String, 
    image: String, 
    description: String, 
    price: String
    
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart