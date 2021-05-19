let  http = require('http');

let callback = (request, response) => {
    response.writeHead(200, {'Content-type' : 'text/plain'});
    response.end('Hello World')
}

let server = http.createServer(callback);

server.listen(3000, () => console.log('Servidor iniciado em http:/localhost:3000/'))
