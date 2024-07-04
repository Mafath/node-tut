const { readFileSync, writeFileSync } = require('fs');


const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first,second);

writeFileSync('./content/result-sync.txt',`Here is the result : \n${first}\n${second}`);


//uda 1,3,4,6 lines mehema normal meccr wela krpu widiht dannth plwn.
// const fileSystem = require('fs');

// const first = fileSystem.readFileSync('./content/first.txt', 'utf8');
// const second = fileSystem.readFileSync('./content/second.txt', 'utf8');

// console.log(first,second);
