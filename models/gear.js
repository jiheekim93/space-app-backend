const mongoose = require('mongoose')
//?
const gearSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
})

const Gear = mongoose.model('Gear', gearSchema)

module.exports = Gear