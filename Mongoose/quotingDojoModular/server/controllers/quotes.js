// THIS IS THE CONTROLLER PAGE

var mongoose = require('mongoose');
var Quote= mongoose.model('Quote');

// Export these functions so that the routing page can read them.
module.exports = {
    // First function; named "show".
    show: function(req, res) {
        Quote.find({}, function(error1, quotes){
            res.render('main', {quotes: quotes});
        });
    },
// Second function; named "create".
    create: function(req, res){
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(error2){
            if(error2) {
                console.log("Something went wrong. Error2");
            }
            else {
                res.redirect('/main');
            }
        });
    }
};