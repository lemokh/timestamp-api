"use strict";
var express = require('express');
var app = express();
var api = require('./app/index.js');
var solution = require('./app/solution.js');


app.use("/public", express.static(process.cwd()+"/public"));

api(app);
solution(app);



var port = process.env.PORT || 8080;
app.listen(port, function(){console.log('success, port running on '+ port)});