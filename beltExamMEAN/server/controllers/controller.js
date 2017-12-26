var mongoose = require("mongoose");
var User = mongoose.model("User");
var Question = mongoose.model("Question");
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
                console.log('returning with the db data');
                return res.json({
                    userKey: dbUser
                });

            }
        });
    },
    submitNewQuestion: function (req, res) {
        console.log('Reached the submitNewQuestion function inside controller.js');
        var newQuestion = new Question({
            questionText: req.body.questionText,
            commentText: req.body.commentText
        });
        newQuestion.save(function (saveQuestionErrors, newQuestionInfo) {
            if (saveQuestionErrors) {
                console.log(saveQuestionErrors);
                console.log("There was an error inserting the new question into the DB.");
                return res.json(saveQuestionErrors);
            } else {
                console.log("The new question was inserted into the DB.");
                return res.json({
                    'id': newQuestion._id,
                    questionText: req.body.questionText,
                    commentText: req.body.commentText
                });
            }
        });
    },
    getQuestions: function (req, res) {
        console.log('Reached the getAllUsers function inside controller.js');
        Question.find({}, function (errors, dbQuestion) {
            if (errors) {
                console.log('There was an error getting the questions data from the database. controller.js');
                return res.json(errors);
            } else {
                console.log('returning with the db data');
                return res.json({
                    questionKey: dbQuestion
                });
            }
        });
    },
    getOneQuestion: function (req, res) {
        console.log('Reached the getOneQuestion function inside controller.js');
        Question.find({}, function (errors, dbQuestion) {
            if (errors) {
                console.log('There was an error getting the questions data from the database. controller.js');
                return res.json(errors);
            } else {
                console.log('returning with the db data');
                return res.json({
                    questionKey: dbQuestion
                });
            }
        });
    },



};