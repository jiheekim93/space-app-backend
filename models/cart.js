const mongoose = require('mongoose')
//?
const cartSchema = new mongoose.Schema({
    food: {
        name: String,
        image: String,
        price: String,
        description: String,
    },
    gear: {
        name: String,
        image: String,
        price: String,
        description: String,
    },
    ticket: {
        ticket_price: String,
        date: String,
        destination: String
    }
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart