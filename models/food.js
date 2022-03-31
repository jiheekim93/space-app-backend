const mongoose = require('mongoose')
//?
const foodSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    cart: {type: mongoose.Schema.Types.ObjectId, ref:'Cart', required: true}
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food