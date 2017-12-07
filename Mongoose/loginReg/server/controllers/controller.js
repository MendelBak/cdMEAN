var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');


module.exports = {
    index: function (req, res) {
        res.render("index");
    },
    register: function (req, res) {
        var newUser = new User({
            firstName: req.body.firstName, 
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            birthday: req.body.birthday
        });
        if (req.body.password === req.body.confirmPassword) {
            newUser.save(function (errorsNewUser, newUserInfo) {
                if (errorsNewUser) {
                    console.log(errorsNewUser);
                    console.log("There was an error inserting the new Mongoose into the DB.");
                } else {
                    console.log("The new mongoose was inserted into the DB.");
                    console.log(req.body);
                    req.session.sessionID = newUserInfo._id;
                    console.log("This is the req.session.sessionID ->", req.session.sessionID);
                    res.redirect("/landingPage");
                }
            });
        } else {
            console.log("Error! Your passwords did not match. Please try again.");
        }
    },
    landingPage: function (req, res) {
        res.render("landingPage");
    },
    login: function (req, res) {
        User.findOne({
            email: req.body.email
        }, function (errorsFindUser, dbUser) {
            // console.log("This is the req.body.email -> ", req.body.email);
            // console.log("This is the dbuser.email response", dbUser);
            console.log("This is the login password form submit which will be hashed below", req.body.password);
            console.log("This is the hashed password from the login password submit form", bcrypt.hashSync(req.body.password));
            if (errorsFindUser) {
                console.log(errorsFindUser);
            }
            if (req.body.email === dbUser.email && bcrypt.compareSync(req.body.password, dbUser.password)) {
                res.redirect("/landingPage");
            } else {
                res.redirect("/");
                console.log("Sorry bro. Your email or password is incorrect. Try again, bro.");
            }
        });
    },
    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
        console.log("You've been logged out.");
    }
};