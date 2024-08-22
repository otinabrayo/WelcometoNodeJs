// FILES
// const files = require('fs');

// // console.log(files.readdirSync('./'));

// console.log(files.readdir('./', (err, result) => {
//     if (err) console.log('Error', err);
//     else console.log('Result', result)
// }))

// HTTP
// const { Socket } = require('dgram');
const http = require('http');
const server = http.createServer( (req, res) => {
    if (req.url === '/'){
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
});

// server.on('connection', (socket) => console.log('new connection') )

server.listen(3000)
console.log('listening on the port 3000...');
