let http = require('http');
let url = require('url');
const CarroDB = require('./CarroDB');

let getCarros = (response, tipo) => {
    CarroDB.getCarrosByTipo(tipo, (carros) => {
        let json = JSON.stringify(carros);
        response.end(json);
    });
}

let salvarCarro = (response, carro) => {
    CarroDB.save(carro, (carro) => {
        console.log(`Carro salvo com sucesso: ${carro.id}`);
        let json = JSON.stringify(carro);
        response.end(json);
    });
}


let callback = (request, response) => {
    let parts = url.parse(request.url);
    let path = parts.path;

    response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

    if (request.method == 'GET') {

        if (path == '/carros/classicos') {
            getCarros(response, 'classicos');
        } else if (path == '/carros/esportivos') {
            getCarros(response, 'esportivos');
        } else if (path == '/carros/luxo') {
            getCarros(response, 'luxo');
        } else {
            response.end(`Not found: ${path}`)
        }

    } else if (request.method == 'POST') {
        let body = '';
        request.on('data', (data) => {
            body += data;
        });
        request.on('end', () => {
            let carro = JSON.parse(body);
            console.log(`Post Body: ${body}`);
            salvarCarro(response, carro)
        });

        return;
    }


}

let server = http.createServer(callback);
server.listen(3000, () => console.log('Servidor iniciado em http://localhost:3000'))
