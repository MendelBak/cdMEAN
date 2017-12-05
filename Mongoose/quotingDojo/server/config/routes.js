var mongoose = require("mongoose");

module.exports = function(app){
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
};