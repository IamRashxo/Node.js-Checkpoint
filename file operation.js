// file-operations.js
const fs = require('fs');

const filename ='welcome.txt';
// Write to welcome.txt
if(!fs.existsSync(filename)) {
    fs.writeFileSync(filename, "Hello Node");
}

// Read from welcome.txt
const data = fs.readFileSync(filename, 'utf8');
console.log(data);