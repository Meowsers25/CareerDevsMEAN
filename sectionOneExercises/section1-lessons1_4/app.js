//Node.js: require and module.exports

//splitting Node applications into multiple files
//using require to load in files
//exposing functionality using module.exports

require('./instanthello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello("Luna");

var answer = question.ask("What is the meaning of life");
console.log(answer);

goodbye();