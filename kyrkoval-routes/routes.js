var express = require('express');
var router = express.Router();

//det ska ligga en array här med alla namn
var list = [
    {
    vallokal: 'Vasakyrkan',
    vote: 0
    },
    {
    vallokal: 'Masthuggkyrkan',
    vote: 0
    },
    {
    vallokal: 'Gårdstenskyrkan',
    vote: 0
    },
    {
    vallokal: 'Kortedala kyrka',
    vote: 0
    }    
];
console.log(list[0].vallokal);
list.forEach(function(element) {
    console.log('forEach ' + element.vallokal);
});

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Kyrkoval',
        valjlokal: 'Välj vallokal',
        vasa: 'Vasakyrkan',
        masthug: 'Masthuggkyrkan',
        gardsten: 'Gårdstenskyrkan',
        kortedala: 'Kortedala kyrka'
    });
});

router.get('/viewresults', (req, res) => {
    res.render('viewresults', {
        vasa: 'Vasakyrkan',
        masthug: 'Masthuggkyrkan',
        gardsten: 'Gårdstenskyrkan',
        kortedala: 'Kortedala kyrka'
    });
});

module.exports = router;