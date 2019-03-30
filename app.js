'use strict';

var express = require('express');
var app = express();
var jsonParser = require('body-parser').json

app.use(jsonParser());

app.use(function(req,res, next){
  next();
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Express server is listening on port', port)
});
