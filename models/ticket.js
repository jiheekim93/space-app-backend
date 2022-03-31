const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
            price: Number,
            date: String,
            destination: String,
            cart: {type: mongoose.Schema.Types.ObjectId, ref:'Cart', required: true}
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket