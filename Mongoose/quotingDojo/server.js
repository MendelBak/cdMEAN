var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var mongoose = require("mongoose");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'codingdojorocks'
}));

// This must match the db
mongoose.connect('mongodb://localhost/quotes');
mongoose.Promise = global.Promise;

// SCHEMA DEFINITION //
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {timestamps: true});
mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("Quote");
// 

app.get('/', function (req, res) {
    res.render("index");
});

app.post("/send_quote", function (req, res) {
    console.log("Here is the post data that was submitted", req.body);
    var newQuote = new Quote({
        name: req.body.name,
        quote: req.body.quote
    });
    newQuote.save(function (errorsQuote) {
        if (errorsQuote) {
            console.log("There was an error inserting the quote into the DB.");
            res.redirect("/");
        } else {
            console.log("The quote was inserted into the DB.");
            res.redirect("/quotes");
        }
    });
});
 
app.get('/quotes', function (req, res) {
    Quote.find({}, function (errors, dbQuotes) {
        if (errors) {
            console.log("Something has gone wrong.");
            res.render("quotes");
        }
        console.log("quotes key/value pair from DB.", dbQuotes);
        res.render("quotes", {quotesKey:dbQuotes});
    });
});

app.post("/skipToQuote", function (req, res) {
    res.redirect("/quotes");
});

app.listen(8000, function () {
    console.log(__dirname);
    console.log("Listening on port 8000");
});