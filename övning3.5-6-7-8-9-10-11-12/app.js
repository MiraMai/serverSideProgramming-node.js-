var express = require('express');
var app = express();
const pug = require('pug');
var routes = require('./routes.js');
/*
// laboration 3.11 that I moved to routes.js to be able to write the content of var= data in my index.pug
var https = require('https');
var http = require('http');

let data= "";

https.get(' https://yhjust16.herokuapp.com/nobel', (res) => {
    res.on('data', (d) => {
        data += d;
    console.log(data);    
    });
});
// end of 3.11
*/

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
// this is necessary otherwise picture and styling.css will not show
app.use(express.static(__dirname + '/public'));

app.use('/', routes);


// if you're not using routes.js
/*app.get('/', (req, res) => {
    res.render('index', {
        title: 'Greetings',
        paragraph: "What's up?",
        object: {
            name: 'Athanasia',
            age: 34
        }
    });
});

app.get('/layout', (req, res) => {
    res.render('layout', {
        title: 'Greetings',
        paragraph: "What's up?",
        object: {
            name: 'Athanasia',
            age: 34
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Greetings',
        paragraph: "What's up?",
        object: {
            name: 'Athanasia',
            age: 34
        }
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Greetings',
        paragraph: "What's up?",
        object: {
            name: 'Athanasia',
            age: 34
        }
    });
});*/


app.listen(3000, () => {
     console.log("Port 3000");
});