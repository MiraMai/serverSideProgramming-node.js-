var http = require('http');
var fs = require('fs');
let fsReader = fs.createReadStream('text.txt');

let data = '';

fsReader.on('data', (chunk) => {
    data += chunk; 
});

fsReader.on('end', () => {
    console.log("Antal tecken:" + fsReader.bytesRead);
    console.log(data.length);
    console.log(data);
});

let arr = data.split('s');
console.log(arr);

http.createServer((req, res) => {
        arr.forEach(function(word) {
            res.write(word);
            res.end();
        });
}).listen(3000);
console.log("Server is definitely active at 3000");