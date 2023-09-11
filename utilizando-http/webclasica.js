const http = require('http');
const process = require('process');
const url = require('url');


http.createServer((req, res) => {
  const path = url.parse(req.url).path;
  const imagen = '<img src="https://i.ibb.co/fQbT8Vd/f7bacdece66306b4470334213022a77f.jpg">';
  const who = '<h1>Who are we?</h1>';
  const where = 'Where are we?';
  const what = 'What do we do?';
  const contact = 'Contact us... ';
  
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  
  if(path === '/'|| path=== '/who') {
    res.end(who);
  } else if(path === '/where') {
    res.end(where);
  }else if(path === '/what') {
    res.end(what);
  } else if(path === '/contact') {
    res.end(contact);
  } else if (path === '/imagen') {
    res.end(imagen);
  } else {
    res.writeHead(301, {
      'Location': '/'
    });
  }
}).listen(3000);