const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const Park = require('../models/parks.js')


router.post('/', (req, res) => {
  Park.create()
  User.create()
})




module.exports = router
