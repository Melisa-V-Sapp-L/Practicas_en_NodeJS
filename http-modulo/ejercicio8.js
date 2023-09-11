const http = require('http');
const url = require('url');

const port = 3000;
const ip = '127.0.0.1';

http.createServer(function (req, res) {
  const path = url.parse(req.url).path;

  if (path === '/miraclelab') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('miraclelab!');
  } else if (path === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end('about!');
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('404 Archivo no encontrado.');
  }
}).listen(port, ip);