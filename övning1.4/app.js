var fs = require('fs');

let fsReader = fs.createReadStream('loremIpsum.txt', {highWaterMark: 800});

let data = [];

fsReader.on('data', (chunk) => {
   data.push(chunk); 
    console.log(fsReader.bytesRead);
});

fsReader.on('end', () => {
    console.log("Antal tecken:" + fsReader.bytesRead);
    console.log(data.length);
});