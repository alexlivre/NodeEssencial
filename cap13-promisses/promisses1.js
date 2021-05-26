const CarroDB = require('./model/CarroDB');

function teste() {
    // callback
    CarroDB.getCarros((error, carros) =>{
        console.log(JSON.stringify(carros));
    })
}



teste()