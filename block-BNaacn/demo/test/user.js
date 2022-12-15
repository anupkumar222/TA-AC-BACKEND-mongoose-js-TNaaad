var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type: Number, default: 0},
    password: {type: true, minlength: 5},
    favourites: [String],
    createAt: {type: Date, default: new Date()}
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);