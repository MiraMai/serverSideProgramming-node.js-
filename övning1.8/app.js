// Nobel laureates
const https = require('https');
var data = "";
https.get('https://yhjust16.herokuapp.com/nobel', (res) => {
    res.on('data', (d) => {
        data += (d);
    });
    res.on('end', () => {
        let parsed = JSON.parse(data);
        for (let person of parsed) {
            if (person.prizes[0].category == 'literature') // Visa enbart litt-pristagarna.
                console.log(person.prizes[0].year + "... " + person.firstname + " " + person.surname);
        }
    });
}).on('error', (e) => {
   console.error(e); 
});