//sync = blocking

const {readFileSync, writeFileSync} = require('fs');
//this is equal to:
//const fs = require('fs');
//fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second)

//overwrites
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    //this flag heps append
    { flag: 'a'}
)

//js reads line by line, and if program is time consuming with many users, then task will take very long time for all users, so it is inefficient and time consuming 