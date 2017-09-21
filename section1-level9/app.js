//serving static files from Express

//defining 'static' folders
//build basic html page
//deliver css, images and JavaScript

var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

//define static folder
//specify folder structure before express.static '/public'
//we dont want to use this for our app, it is a goo introduction to middleware
//app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//remove current homepage route
// app.get('/', function(req, res) {
//     console.log('GET the homepage');
//     res
//     .status(200)
//     .sendFile(path.join(__dirname, 'public', 'index.html'));
// });

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

