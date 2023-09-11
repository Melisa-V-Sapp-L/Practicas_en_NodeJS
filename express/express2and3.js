const express = require('express');
const app = express();

const port = process.env.PORT || 4567;
const ip = process.env.IP || '127.0.0.1';


app.get('/yo', function (req, res) {
    res.send('in the path /yo is this content')
})


app.listen(port, ip, function() {
  console.log(`It is showing in http://${ip}:${port}/`);
});