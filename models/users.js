const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim:true},
  password: String,
})

const Users = mongoose.model('User', usersSchema)

module.exports = Users;
