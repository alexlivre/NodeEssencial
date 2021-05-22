let express = require('express');
let app = express();
// let CarroDB = require('./model/CarroDB');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas

app.use('/api/carros', require('./routes/carros'));

let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor iniciado em http://${host}:${port}`);
});