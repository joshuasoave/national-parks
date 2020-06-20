//~~~~~~~~Configuration~~~~~~~~~//

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
require('dotenv').config()
const PROJECT3_DB  = process.env.PROJECT3_DB
const PORT = process.env.PORT

//~~~~~~~~DB Config~~~~~~~~~~//

mongoose.connect(PROJECT3_DB,  { useNewUrlParser: true});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

//~~~~~~~~~Middleware~~~~~~~~~//

app.use(express.json())
app.use(express.static('public'))


//~~~~~~~~~Controllers~~~~~~~~~//

//controllers
const usersController = require('.controllers/users.js');
  app.use('/users', usersController);


//~~~~~~~~~Listener~~~~~~~~~//

app.listen(PORT, () => {
  console.log('listening to ariana grande...');
})
