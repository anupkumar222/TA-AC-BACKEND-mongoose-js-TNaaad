var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.listen(4000, () => {
    console.log('server is listening on port 4k');
})