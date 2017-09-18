//Create child process in node to make non-blocking

var child_process = require('child_process');

console.log(1);

var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
    //child process doesnt share same console log
    stdio : 'inherit'
});



console.log(2);

//function doesnt impact flow 
//doesnt block main process