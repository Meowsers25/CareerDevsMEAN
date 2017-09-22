//Express middleware

//what is middleware
//create a logging function
//when and how to use middleware

var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

//this is a logging function, if used after the static path, it will not liste the file paths
//middleware for when a request is made
//before the function is passed in, you can define the path.....'/css'
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});
//.use signifies the use of middleware
app.use(express.static(path.join(__dirname, 'public')));



app.get('/json', function(req, res) {
    console.log('GET the json');
    res
    .status(200)
    .send({"jsonData" : true});
});

app.get('/file', function(req, res) {
    console.log('GET the file');
    res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('Magic happens on Port: ' + port);
});

