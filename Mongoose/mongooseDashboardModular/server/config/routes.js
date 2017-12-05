var controller = require('../controllers/controller.js');
module.exports = function (app) {


    // ROUTES//

    app.get('/', function (req, res) {
        controller.index(req, res);
    });

    app.get("/new", function (req, res) {
        res.render("new");
    });

    app.post("/submitNew", function (req, res) {
        controller.submitNew(req, res);
    });

    app.get("/profile/:id", function (req, res) {
        controller.profile(req, res);
    });

    app.get("/edit/:id", function (req, res) {
        controller.edit(req, res);
    });

    app.post("/updateMong/:id", function (req, res) {
        controller.updateMong(req, res);
    });

};