const express = require('express');
const router = express.Router();
const Parks = require('../models/parks.js');

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

module.exports = router;
