const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    ticket_price: String,
    date: String,
    destination: String
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket