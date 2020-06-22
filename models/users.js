const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true, minlength: 6 },
    name: String,
    parks: Array
});

const User = mongoose.model('ParkUser', userSchema);

module.exports = User;
