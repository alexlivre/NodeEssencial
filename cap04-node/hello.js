let http = require('http')
let url = require('url')
let fs = require('fs')
let readFile = (response, file) => {
    fs.readFile(file, (err, data) => {
        response.end(data);
    });
}

let callback = (request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    let parts = url.parse(request.url);
    let path = parts.path;
    if (path == '/carros/classicos'){
        readFile(response, 'carros_classicos.json');
    }else if (path == '/carros/espotivos'){
        readFile(response, 'carros_esportivos.json');
    } else if (path == '/carros/luxo'){
        readFile(response, 'carros_luxo.json')
    } else {
        response.end('Path não mapeado: ' + path);
    }
}

let server = http.createServer(callback);

server.listen(3000, ()=>console.log('Servidor iniciado em http://localhost:3000'));