//using controllers to define functionality

//organizing code to create an API
//defining and exporting controller functions
//map controllers to routes
//get and return data

var express = require('express');
var app = express();
var path = require('path');

var routes = require('./api/routes');


app.set('port', 3000);


app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});


app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', routes);


var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
