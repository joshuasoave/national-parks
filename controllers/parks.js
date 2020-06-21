const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const Park = require('../models/parks.js')


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



module.exports = router
