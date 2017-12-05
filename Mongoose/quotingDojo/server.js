var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/quotes');

// SCHEMA DEFINITION //
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {timestamps: true});

var Quote = mongoose.model("Quote");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'codingdojorocks'
}));

// This must match the db
mongoose.Promise = global.Promise;




app.listen(8000, function () {
    console.log(__dirname);
    console.log("Listening on port 8000");
});