const mongoose = require('mongoose')
//?
const cartOGSchema = new mongoose.Schema({
    cartItems: 
        {
            ticket: {type: mongoose.Schema.Types.ObjectId, ref:'Ticket', required: true},
            food: {type: mongoose.Schema.Types.ObjectId, ref:'Food', required: true},
            gear: {type: mongoose.Schema.Types.ObjectId, ref:'Gear', required: true},
            // quantity: {type: Number, default: 1},
            price: {type: Number, required: true}
        }
    
})

const CartOG = mongoose.model('CartOG', cartOGSchema)

module.exports = CartOG