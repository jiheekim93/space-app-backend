const mongoose = require('mongoose')
//?
const gearSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: String,
    description: String,
})

const Gear = mongoose.model('Gear', gearSchema)

module.exports = Gear