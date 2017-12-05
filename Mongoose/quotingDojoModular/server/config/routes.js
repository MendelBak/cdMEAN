// THIS IS THE ROUTES PAGE

// Require the controllers 
var quotes = require('../controllers/quotes.js');
module.exports = function(app) {
    

// ************* ROUTES *****************//

    app.get('/', function(req, res) {
        res.render("index");
      });

      app.post('/quotes', function(req,res){
        quotes.create(req, res);
      });

      app.get('/main', function (req, res) {
          quotes.show(req, res);
      });
};