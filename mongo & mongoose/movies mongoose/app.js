var mongoose = require('mongoose'),
    Movie = require('./models/movieModel.js')

//connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movieDB', {
    useMongoClient: true
});

var film = new Movie({
    title: "Gudfadern",
    year: 1972,
    actors: ["Marlon Brando", "Al pacino"],
    ratings: [1, 4, 5, 5]
})

film.save(function(err, result) {
    if(err)
        console.log(err)
    console.log("Filmen" + film.title + " sparades.")    
})