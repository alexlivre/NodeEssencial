let http = require('http')
let url = require('url')
let callback = (request, response) => {
    response.writeHead(200, { 'Content-type': 'text/plain; charset=utf-8' });
    let parts = url.parse(request.url);

    if (parts.path == '/') {
        response.end('Site na raiz.');
    } else if (parts.path == '/carro') {
        response.end('Você digitou a rota /carro')
    } else {
        response.end('Rota inválida: ' + parts.path);
    }

}

let server = http.createServer(callback);

server.listen(3000, () => console.log('\nServidor iniciado em http://localhost:3000/'));