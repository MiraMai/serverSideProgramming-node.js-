var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: {
        type: String,
        required: "Filmen måste ha en titel",
        unique: true
    },
    year: {
        type: Number,
        min: [1900],
        max: [2017]
    },
    actors: [{type: String}],
    ratings: [{type: Number}]
    },
    // om man inte anger collection då får kollektionen namnet av det vi har i line 20(titta på kommentar på line 19)            
    {collection: 'filmer'})

/*movieSchema.methods.averageRating = function() {
    let ratingSumma = 0;
    this.ratings.forEach(function(rating) {
        ratingSumma/this.ratings.length
    })
}*/


//om man ska ha functioner ska de ligga här

// 'Movie' omvandlas automatiskt till 'movies' som en collection 
module.exports = mongoose.model('Movie', movieSchema);