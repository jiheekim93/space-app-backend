const mongoose = require('mongoose')

const planetSchema = new mongoose.Schema({
    name: String,
    image: String,
    date_found: String,
    description: String,
    ticket_price: String, 
    price_number: Number,
    activity: String,
    weather: String,
    day_length: String, 
    distance: String,
    img1: String,
    img2: String, 
    img3: String
})

const Planet = mongoose.model('Planet', planetSchema)

module.exports = Planet