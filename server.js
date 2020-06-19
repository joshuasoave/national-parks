//~~~~~~~~Configuration~~~~~~~~~//

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
require('dotenv').config()
const MONGODB_URI  = process.env.MONGODB_URI
const PROJECT3_DB = process.env.MONGODB_URI

//~~~~~~~~DB Config~~~~~~~~~~//

mongoose.connect(MONGODB_URI,  { useNewUrlParser: true});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

//~~~~~~~~~Middleware~~~~~~~~~//

app.use(express.json())
app.use(express.static('public'))


//~~~~~~~~~Controllers~~~~~~~~~//

//controllers

app.get('/', (req, res) => {
  res.send('hi')
})

//~~~~~~~~~Listener~~~~~~~~~//

app.listen(3000, () => {
  console.log('listening to ariana grande...');
})
