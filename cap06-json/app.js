let http = require('http');
let url = require('url');
const Pessoa = require('./pessoa');

let callback = (request, response) => {
    let parts = url.parse(request.url);
    let path = parts.path;
    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    if(path == '/teste'){
        let pessoas = [];
        let p1 = new Pessoa('Alex', 'Breno');
        let p2 = new Pessoa('Ricardo', 'Lecheta');
        pessoas.push(p1)
        pessoas.push(p2)
        let json = JSON.stringify(pessoas);
        response.end(json);
    }else {
        response.end('Not found: ' + path);
    }
}

let server = http.createServer(callback);
server.listen(3000, () => console.log('Servidor iniciado em http://localhost:3000'))