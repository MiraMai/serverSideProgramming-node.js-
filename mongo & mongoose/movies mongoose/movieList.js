var mongoose = require('mongoose'),
    Movie = require('./models/movieModel.js')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movieDB', {
    useMongoClient: true
});

Movie.find(err, )

movie.find({}, function(err,filmer){
  filmer.forEach(()=> {
    console.log(film.title +"- "+film.year+ "Average Rating:" + film.averageRating().toFixed(1))
  })

})  

