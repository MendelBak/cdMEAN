var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    index: function (req, res) {
        res.render("index");
    },
    formSubmit: function (req, res) {
        var newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        console.log("Made it to controller.js form submit");
        newUser.save(function (errors, newUserInfo) {
            if (errors) {
                console.log(errors);
                console.log("There was an error inserting the new Mongoose into the DB.");
                res.redirect("/");
            } else {
                console.log("The new mongoose was inserted into the DB.");
                console.log(req.body);
                req.session.sessionID = newUserInfo._id;
                console.log("This is the req.session.sessionID ->", req.session.sessionID);
                res.redirect("/");
            }
        });
    }

};