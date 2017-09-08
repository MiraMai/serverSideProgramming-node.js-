const https = require('https');

let url = "https://yhjust16.herokuapp.com/lorem";

https.get(url, (response) => {
    let data = "";
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        console.log(data);
    });
});