const express = require('express');
const app = express();
const pug = require('pug');
const routes = require('./routes.js');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/javascript'));
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

io.on('connection', (socket) => {
    console.log("A user connected");
    socket.on('disconnect',() => {
        console.log("Now disconnected.");
    });
    socket.on('vote', (msg) => {
        io.emit('vote', msg);
    });
});

http.listen(3001, () => {
    console.log ("Up and running at 3001");
});