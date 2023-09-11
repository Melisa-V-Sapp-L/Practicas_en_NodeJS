const fs = require('fs');
const http = require('http');

const data = '<!doctype><html><head><meta charset="utf-8"></head><body><h1>Miracle Lab</h1><p>This is a test.</p></body></html>';

http.createServer(function (req, res) {
    fs.writeFile('vistas/about.html', data, (error) => {
        if (!error) {
          console.log('The data has been saved in  \'about.html\'');
        } else {
          throw error;
        }
      });
      
  }).listen(3000);