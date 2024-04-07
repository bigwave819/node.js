const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('hello this is the homepage');
    } else if (req.url === '/about') {
        res.end('hello this is the about page');
    } else {
        res.end(`
            <h1>OOPs!!!!!</h1>
            <p>sorry we didn't have the page you are looing for</p>
            <a href="/">home page</a>
        `);
    }
});

server.listen(5000);
