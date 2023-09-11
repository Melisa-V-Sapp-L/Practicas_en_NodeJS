const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";

http.createServer(function (req, res) {
  fs.readFile('vistas/about.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(port, ip);

console.log(`It is showing \'about.html\' in http://${ip}:${port}/`);