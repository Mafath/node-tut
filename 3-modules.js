
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');

console.log(data);

require('./7-mind-grenade');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

//Now, wouldn't it make sense if the names would be separate as well as this function and future functions that we are
//gonna create would be in a separate file and then we can access them all through out the application. That way we
//would of course have smaller file and more structure to our application. That is exactly what modules allow us to do.

//Every file in node is a module.(by default)