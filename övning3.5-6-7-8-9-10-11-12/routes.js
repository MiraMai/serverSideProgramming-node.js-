var express = require('express');
var router = express.Router();
var https = require('https');

let data= "";
// laboration 3.11 and 3.12. For 3.12 I moved all the router.get into https.get, otherwise index page was not working
https.get(' https://yhjust16.herokuapp.com/nobel', (res) => {
    res.on('data', (d) => {
        data += (d);
//    console.log(data);    
    });
    res.on('end', () => {
        let parsed = JSON.parse(data);
//        console.log(parsed);
        
        router.get('/', (req, res) => {
            res.render('index', {
                h1: "Hello everybody!",
                paragraph: "What's up?",                
                lista: parsed
            })
        });
        
        
        router.get('/layout', (req, res) => {
            res.render('layout', {
            paragraph: "Paragraph for layout"
            });
        });

        router.get('/about', (req, res) => {
            res.render('about', {
            paragraph: "Little bit about us"
            });
        });

        router.get('/contact', (req, res) => {
            res.render('contact', {
            paragraph: "Contact us on the number: 01-45 47 87"
            });
        });
        // write in the browser: /userInfo?age=37&name=rut. 37 & rut is changable
        router.get('/userInfo', (req, res) => {
            var age = req.query.age;
            var name = req.query.name;
            console.log(age);
            res.render('userInfo', {
                name2: name,
                age2: age
            });
        });

        // write in the browser: /userInfo/35. 35 is chanable
        router.get('/userInfo/:age', (req, res) => {
            var age = req.params.age;
            res.render('userInfo', {
                age2: age
            });
        });

        router.get('*', (req, res) => {
            res.status(404).render('error', {
                title: '404- not found'
            });
        });      
        
        
        
    });
})
// end of 3.11


module.exports = router;