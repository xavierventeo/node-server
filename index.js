//Load the core modules needed from node.js 
const http = require('http');
const url = require('url');

//Define the variables for local hostname and port to attend http requests
const hostname = '127.0.0.1';
const port = 3000;

//Create the server object that it receives the http request and http response
//And for defines several defined requests to attend and its responses
const server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    if (pathName === '/') {
        console.log(pathName);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    } else if (pathName ==='/about') {
        console.log(pathName);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('About us\n');
    } else if (pathName ==='/contact') {
        console.log(pathName);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Name: Michael\nemail: michael@gmail.com\n');
    } else {
        console.log(pathName);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Error 404: Page doesn't exist`);        
    }
});


//Launch the node server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

