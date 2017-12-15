var controller = require('../controllers/controller.js');
module.exports = function (app) {

    // ROUTES//
    app.get('/', function (req, res) {
        controller.index(req, res);
    });
    app.post('/formSubmit', function(req, res) {
        controller.formSubmit(req, res);
        console.log("made it to formsubmit post route")
    });

};