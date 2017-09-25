//Setting up Express to listen
//adding Express to the app
//defining a port to listen on
//using application variables
//validating that Express is listening
//Express is the web application framework in the MEAN stack

var express = require('express');
var app = express();

app.set('port', 3000);

//.listen is asynchronous
var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('Magic happens on Port: ' + port);
});

//this prints first to prove that .listen is asynchronous
//console.log('Me first!!');
