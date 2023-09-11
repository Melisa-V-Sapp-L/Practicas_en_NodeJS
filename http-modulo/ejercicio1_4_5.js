const http = require("http");
const url = "google.com.ar";
const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";

http
  .get({ host: url }, (resOrigen) => {
    http
      .createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`La respuesta de ${url} es ${resOrigen.statusCode}`);
        console.log(`La respuesta de ${url} es ${resOrigen.statusCode}`);
      })
      .listen(port, ip);
    console.log(`Servidor disponible en http://${ip}:${port}/`);
  })
  
