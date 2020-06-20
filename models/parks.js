const mongoose = require ('mongoose');

const parksSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    description: String,
    priority: {type: String, enum: ['low', 'medium', 'high']},
    visited: {type: Boolean, default: false},
    note: String
});

const Parks = mongoose.model('Park', parksSchema);

module.exports = Parks;
