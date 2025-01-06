//Modules - encapsulated code (only share minimum)
//CommonJS is used = everything is by default
//execute one file but require from different modules after setting up exports 

const names = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alt-exports.js');
console.log(names);
console.log(data );

/*
sayHi('susan')
sayHi(names.john);
sayHi(names.peter);
*/

require('./7-mind-grenade.js'); //runs entire file even without assigning to variable

