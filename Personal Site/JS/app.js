// creating server and listening

const http = require('http');

function requestHandler(request, response) {
    response.statusCode = 200;
    response.end('<h1>Hello World!</h1>');
}

const server = http.createServer(requestHandler);

server.listen(3000);