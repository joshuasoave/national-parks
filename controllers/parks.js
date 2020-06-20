const express = require('express');
const router = express.Router();
const Park = require('../models/parks.js');



router.put('/:id', (req, res) => {
  Park.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPark) => {
    res.json(updatedPark);
  });
});





module.exports = router;
