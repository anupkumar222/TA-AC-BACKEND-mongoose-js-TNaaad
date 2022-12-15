var mongoose = require('mongoose');
var Schema = require('Schema');

var addressSchema = new Schema({
    village: String,
    city: {type: String, required: true},
    state: {type: String, required: true},
    pin: Number,
    
}, {timestamps: true})

module.exports = mongoose.model('Address', addressSchema);