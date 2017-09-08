var http = require('http');
var port = 3000;

var server = http.createServer((req, res) => {
	res.write("Hello.");    
	res.end("Hej.");  // Glöm denna och servern snurrar utan att skriva ut.
});
console.log ("Server now listening at port " + port);
server.listen(port);