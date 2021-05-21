let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(500);
    res.type('json');
    res.json({ nome: 'Alex', sobrenome: 'Santos' });
});

app.get('/pessoa', (req, res) => {
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    res.status(200).type('text');
    res.send(`${nome} ${sobrenome}`);
});

app.get('/pessoa/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Buscar pessoa: ${id}`)
});

app.get('/pessoa/:nome/sobrenome/:sobrenome', (req, res) => {
    let nome = req.params.nome;
    let sobrenome = req.params.sobrenome;
    res.send(`${nome} ${sobrenome}`)
})

app.post('/pessoa', (req, res) => {
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    if (req.is('json')) {
        res.json({ nome: nome, sobrenome: sobrenome });
    }else {
        res.type('text').send(`Texto: ${nome} ${sobrenome}`);
    }
});

let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor iniciado em http://${host}:${port}`);
})