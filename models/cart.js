const mongoose = require('mongoose')
//?
const cartSchema = new mongoose.Schema({
    cartItems: [
        {
            ticket: {type: mongoose.Schema.Types.ObjectId, ref:'Ticket', required: true},
            food: {type: mongoose.Schema.Types.ObjectId, ref:'Food', required: true},
            gear: {type: mongoose.Schema.Types.ObjectId, ref:'Gear', required: true},
            // quantity: {type: Number, default: 1},
            price: {type: Number, required: true}
        }
    ]
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart