const bcrypt = require('bcrypt')
const express = require('express')
const mongoose = require('mongoose')
const users = express.Router()
const Users = require('../models/users.js')


users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  Users.create(req.body, (err, createdUser) => {
    console.log('user is created', createdUser);
    res.json(createdUser);
  })
})

module.exports = users;

