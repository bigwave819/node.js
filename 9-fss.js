const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/another.txt', `here is the new result : ${first}, ${second}`, 'utf-8', (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Write operation complete.', result);
        });
    });
});
