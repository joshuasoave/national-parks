const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const Park = require('../models/parks.js')

// create route
router.post('/', (req, res) => {
  Park.create(req.body, (error, createdPark) => {
    User.findByIdAndUpdate(req.session.user._id, { $push: {parks:createdPark}}, {new:true}, (error, updatedUser) => {
      res.json(updatedUser)
    })
  })
})

// get route
router.get('/', (req, res)=>{
  User.findById(req.session.user._id, (error, foundUser) => {
    res.json(foundUser)
  })
});

// delete route
router.delete('/:index', (req, res)=>{
  User.findById(req.session.user._id, (error, foundUser) => {
    foundUser.parks.splice(req.params.index, 1)
    foundUser.save((error, data) => {
      res.json(data)
    })
  })
});


// edit route
router.put('/:id/:index', (req, res) => {
  Park.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPark) => {
    User.findById(req.session.user._id, (error, foundUser) => {
      foundUser.parks.splice(req.params.index, 1, updatedPark)
      foundUser.save((error, data) => {
        res.json(data)
        })
      })
    })
  })




module.exports = router;
