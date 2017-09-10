var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {
        title: 'Kyrkoval'
    });
});

router.get('/viewresults', (req, res) => {
    res.render('viewresults', {
        p: 'results'
    });
});

module.exports = router;