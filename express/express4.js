const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const url = "google.com.ar"; 

function theUrl(req, res, next) {   
      res.send(`The url is ${url}`);  
      next();
  }
   
  app.use(express.json());
  
  app.use(theUrl);
  
  app.listen(port, function() {
    console.log(`Server listeting on port ${port}`)
  });
