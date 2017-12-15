var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    index: function (req, res) {
        console.log("This is coming from inside the controller.js index function! -Expresss side");
        return res.json();
    },
    formSubmit: function (req, res) {
        console.log("Made it to controller.js form submit");
        var newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        newUser.save(function (saveUserErrors, newUserInfo) {
            if (saveUserErrors) {
                console.log(saveUserErrors);
                console.log("There was an error inserting the new user into the DB.");
                return res.json(saveUserErrors);
            } else {
                console.log("The new user was inserted into the DB.");
                // console.log(req.body);
                // req.session.sessionID = newUserInfo._id;
                // console.log("This is the req.session.sessionID ->", req.session.sessionID);
                return res.json({
                    'id': newUser._id,
                    'username': newUser.username,
                    'email': newUser.email,
                    'password': newUser.password
                });
            }
        });
    },
    getAllUsers: function (req, res) {
        console.log('Reached the getAllUsers function inside controller.js');
        User.find({}, function (errors, dbUser) {
            if (errors) {
                console.log('There was an error getting the data from the database. controller.js');
                return res.json(errors);
            } else {
                return res.json({
                        userKey: dbUser
                    
                });

                }
            });
        }



};