const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/user.js')

const userRoutes = express.Router();
userRoutes.post("", (req, res) => {
  res.send(req.body);
});


module.exports = router
