let net = require('net');
let count = 1;
let server = net.createServer((socket) => {
    console.log('Cliente conectou do IP: ', socket.remoteAddress);
    socket.end('Hello Workd TCP: ' + (count++) + '\n');
});

server.listen(3000, 'localhost');

console.log('Servidor TCP iniciado...')