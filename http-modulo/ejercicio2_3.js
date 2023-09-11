const http = require('http');
const port = 5000;
const ip = '127.0.0.1';

const mensaje = 'Hello! This is my first server with node js. Enjoy!\n';

http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(mensaje);
}).listen(port, ip);
console.log(`Server is running on http://${ip}:${port}`);

