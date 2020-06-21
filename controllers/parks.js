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
    Parks.find({}, (err, foundParks)=>{
        res.json(foundParks);
    });
});

// delete route
router.delete('/:id', (req, res)=>{
    Parks.findByIdAndRemove(req.params.id, (err, deletedPark)=>{
        res.json(deletedPark);
    });
});


// edit route
router.put('/:id', (req, res) => {
  Park.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPark) => {
    res.json(updatedPark);
  });
});




module.exports = router;
