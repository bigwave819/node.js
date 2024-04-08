const { readFile, writeFile } = require('fs').promises;
// const { reject } = require('lodash');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async () => {
try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    console.log(first, second);
    await writeFile('./content/third.txt',
     `THIS IS AWESOME : ${first} ${second}`,
    { flag: 'a'})
} catch (error) {
    console.log(error); 
}
}

start();

// const newItem = (items) => {
//     return new Promise((resolve, reject) => {
//         readFile(items, 'utf8', (err, data) => {
//     if(err){
//         reject(err);
//     }
//     else{
//         resolve(data);
//     }
// })
//     })
// }

// newItem('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err));