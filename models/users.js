const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = Schema({
  username: {type: String, unique: true, required: true},
  password: String
})

const Users = mongoose.model('Users', usersSchema)
module.exports = Users;