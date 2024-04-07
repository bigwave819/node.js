const path = require('path');
// checking the file separater
console.log(path.sep); 
// showing the path
const pathName = path.join('/content/', 'ssubfolder', 'text.txt');
console.log(pathName);
//returning the file
const base = path.basename(pathName);
console.log(base);
//returning the whole path
const absolute = path.resolve(__dirname, 'content', 'ssubfolder', 'text.txt');
console.log(absolute);