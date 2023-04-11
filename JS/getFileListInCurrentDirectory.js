const directory = '.';
const fs = require('fs');

fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});