//example async

// var fs = require('fs');

// console.log("Going to get a file");

// //ananymous function
// fs.readFile('readFileSync.js', function(error, file){
//     console.log("Got the file");
// });


// console.log("App continues...");


//example of named function
var fs = require('fs');

var onFileLoad = function(error, file) {
    console.log("Got the file");
};

console.log("Going to get a file");
fs.readFile('readFileSync.js', onFileLoad);


console.log("App continues...");