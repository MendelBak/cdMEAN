var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
  secret: '35ec2f58c6d1ff5eb891deba326feb17'
}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// This must match the db
mongoose.connect('mongodb://localhost/cars');
// Promise not neccessary
mongoose.Promise = global.Promise;

// SCHEMA DEFINITIONS //
var CarsSchema = new mongoose.Schema({
  brand: String,
  model: String,
  color: String,
});
mongoose.model('Car', CarsSchema);

var Car = mongoose.model('Car');
// SCHEMA INSTANSIATION //


//  ROUTES //
app.get('/', function (req, res) {
  Car.find({}, function (errors, dbCars) {
    console.log("DATA FROM CAR DB ->")
    console.log(dbCars);
    // Always render from callback
    res.render("index", {
      cars: dbCars
    });
  });
});


app.post('/submit', function (req, res) {
  console.log("POST DATA ->", req.body);
  var car = new Car({
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color
  });
  car.save(function (error) {
    if (error) {
      console.log("Something has gone wrong w/ the db insertion operation.");
    } else {
      console.log("Succesfully added a new entry to the DB.");
      res.redirect("/");
    }
  });
});


app.listen(8000, function () {
  console.log("listening on port 8000");
});