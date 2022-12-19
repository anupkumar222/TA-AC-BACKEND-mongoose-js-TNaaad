
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema ({
    title : String,
    description: String,
    tags: [String],
    likes: [String],
    author: Schema.types.ObjectId,
    Comments: Schema.types.ObjectId
}, {timesStamps: true});

module.exports = mongoose.model('Article', articleSchema)