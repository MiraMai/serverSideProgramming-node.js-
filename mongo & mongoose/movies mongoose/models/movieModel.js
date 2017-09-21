var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: {
        type: String,
        required: "Filmen måste ha en titel",
        unique: true
    },
    year: Number, 
    actors: [{type: String}],
    ratings: [{type: Number}]
    },
    // om man inte anger collection då får kollektionen namnet av det vi har i line 20(titta på kommentar på line 19)            
    {collection: 'filmer'})

//om man ska ha functioner ska de ligga här

// 'Movie' omvandlas automatiskt till 'movies' som en collection 
module.exports = mongoose.model('Movie', movieSchema);