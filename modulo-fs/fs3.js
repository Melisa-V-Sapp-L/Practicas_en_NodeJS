const fs = require('fs');

fs.readFile('file.txt', 'utf8', (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    throw error;
  }
});