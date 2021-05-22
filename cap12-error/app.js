let express = require('express');
let app = express();
// let CarroDB = require('./model/CarroDB');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas

app.use('/api/carros', require('./routes/carros'));

// Teste de erro
app.get('/teste_erro', (req, res) => {
    throw Error('Erro Ninja');
});

//  Rota não encontrada 404
app.use((req, res, next) => {
    res.status(404);
    res.json({ err: 'Não encontrado' });
});

// Rota genérica de erro 500
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500);
    res.json({ erro: 'Erro na transação' })
});

// Inicia o servidor
let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor iniciado em http://${host}:${port}`);
});