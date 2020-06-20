const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');
const bcrypt = require('bcrypt');

// create router

router.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (error, createdUser) => {
    res.json(createdUser);
  })
});


module.exports = router;
