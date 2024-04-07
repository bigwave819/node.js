const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// console.log(first, second);
//syncing the file

writeFileSync(
    './content/another.txt',
    `here is the new result : ${first}, ${second}`,
    { flag : 'a' }
);