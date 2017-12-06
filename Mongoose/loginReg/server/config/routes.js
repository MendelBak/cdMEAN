var controller = require('../controllers/controller.js');
module.exports = function (app) {


    // ROUTES//

    app.get('/', function (req, res) {
        controller.index(req, res);
    });
    
    app.post('/register', function (req, res) {
        controller.register(req, res);
    });

    app.post('/login', function (req, res) {
        controller.login(req, res);
    });

    app.get('/landingPage', function (req, res) {
        controller.landingPage(req, res);
    });

    app.post('/logout', function(req, res){
        controller.logout(req, res);
    });
};