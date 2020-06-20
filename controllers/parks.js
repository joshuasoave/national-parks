const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const Park = require('../models/parks.js')


router.post('/', (req, res) => {
  Park.create(req.body, (error, createdPark) => {
    User.findByIdAndUpdate(req.session.user._id, { $push: {parks:req.body}}, {new:true}, (error, updatedUser) => {
      res.json(updatedUser)
    })
  })
})




module.exports = router
