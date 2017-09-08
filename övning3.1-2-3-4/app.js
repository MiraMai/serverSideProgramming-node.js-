var express = require('express');
var app = express();
var users = require('./users.json');
console.log(users);

var findUser = function(userName, callback) {
    if(!users[userName])
        return callback(new Error(
            'No user matching' + userName
        )
    );
    return callback(null, users[userName]);
};

// för att kunna visa bilder och css styling
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// when we insert "http://localhost:3000/user/Mira" in the browser, we will ge the userID
app.get('/user/:userName', function(req, res) {
    var userName = req.params.userName;
    findUser(userName, function(error, user) {
        if (error)
            return res.end("Fel: " + error);
        return res.json(user); 
    });
});

app.get('/user', function(req, res) {
	var userName = req.query.userName;
    findUser(userName, function(error, user) {
        if (error)
            return res.end("Fel: " + error);
        return res.json(user); // .send
    });
});


app.listen(3000, () => {
    console.log("Port 3000");
});