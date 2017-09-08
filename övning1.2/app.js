var http = require('http');

var server = http.createServer((req, res) => {
    res.write("Hello. You used " + req.method + " to see this");
    res.write("\nHow much do you know?");    
    res.end();
});
server.listen(3000);