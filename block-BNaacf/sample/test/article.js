var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title : String,
    count : Number,
    favorities: [String],
    marks: [Number],
    address: {
         village: String,
         city: String,
         state: String,
         pin: Number,
         user: Schema.Types.ObjectId

    }
})