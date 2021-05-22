let express = require('express');
const router = express.Router();
const CarroDB = require('../model/CarroDB');

// ----------------------

router.get('/', (req, res, next) => {
    CarroDB.getCarros((error, carros) => {
        if (error) {
            console.log(`Erro de SQL: ${error.message}`);
            return next(error);
        }

        res.json(carros)
    });
});

router.get('/:id(\\d+)', (req, res) => {
    let id = req.params.id;
    CarroDB.getCarroById(id, (carro) => {
        res.json(carro);
    });
});

router.delete('/:id(\\d+)', (req, res) => {
    let id = req.params.id;
    console.log(`deletar carro ${id}`);
    CarroDB.deleteById(id, (affectedRows) => {
        res.json({ msg: 'Carro deletado com sucesso.' });
    });
});

router.get('/:tipo', (req, res) => {
    let tipo = req.params.tipo;
    CarroDB.getCarrosByTipo(tipo, (carros) => {
        res.json(carros)
    });
});

router.post('/', (req, res) => {
    let carro = req.body;
    CarroDB.save(carro, (carro) => {
        res.json(carro);
    });
});

router.put('/', (req, res) => {
    let carro = req.body;
    CarroDB.update(carro, (carro) => {
        res.json({ msg: 'Carro atualizado com sucesso.' })
    });
});

// ----------------------



module.exports = router;