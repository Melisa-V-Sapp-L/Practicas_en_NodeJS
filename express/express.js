const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';


app.get('/', function(req, res) {
  res.send('Hello little test!');
});

app.listen(port, ip, function() {
  console.log(`It is showing in http://${ip}:${port}/`);
});