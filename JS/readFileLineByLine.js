var filename = "";

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: fs.createReadStream(filename),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(line);
});