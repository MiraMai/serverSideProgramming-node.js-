var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.createConnection('mongodb://localhost/Tododb'); 
mongoose.connect('mongodb://localhost/Tododb', {
    useMongoClient: true
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);