var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var arcticleSchema = new Schema ({
    title : String,
    count : Number,
    favorities: [String],
    marks: [Number],
    passwrd: {type: String, minlength: 5, maxlength: 15},
    createdAt: {type: Date, default: new Date()}
}, {timestamps: true})