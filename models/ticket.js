const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
            price: Number,
            price_string: String,
            date: String,
            destination: String,
           
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket