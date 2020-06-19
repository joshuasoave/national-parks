//~~~~~~~~Configuration~~~~~~~~~//

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
require('dotenv').config()
const MONGODB_URI  = process.env.MONGODB_URI
const PORT = process.env.PORT

console.log(process.env);
//~~~~~~~~DB Config~~~~~~~~~~//

mongoose.connect(MONGODB_URI,  { useNewUrlParser: true});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//~~~~~~~~~Middleware~~~~~~~~~//

app.use(express.json())
app.use(express.static('public'))


//~~~~~~~~~Controllers~~~~~~~~~//

//controllers

//~~~~~~~~~Listener~~~~~~~~~//

app.listen(PORT, () => {
  console.log('listening to ariana grande...');
})
