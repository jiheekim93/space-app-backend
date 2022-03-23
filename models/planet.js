const mongoose = require('mongoose')

const planetSchema = new mongoose.Schema({
    name: String,
    image: String,
    date_found: String,
    description: String,
    ticket_price: String,
    activity: String
})

const Planet = mongoose.model('Planet', planetSchema)

module.exports = Planet