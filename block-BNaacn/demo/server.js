var express = require('express');
var mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/demo", (err) => {
    console.log(err ? err : 'connected true');
})

var app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(4000, () => {
    console.log('server is listening on port 4k');
})