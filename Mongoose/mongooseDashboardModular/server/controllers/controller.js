var mongoose = require("mongoose");
var Mong = mongoose.model("Mong");


module.exports = {
    index: function (req, res) {
        Mong.find({}, function (errors, dbMongs) {
            if (errors) {
                console.log("Something has gone wrong.");
                res.render("index");
            }
            res.render("index", {
                mongsKey: dbMongs
            });
        });
    },

    submitNew: function (req, res) {
        var newMong = new Mong({
            name: req.body.name,
            age: req.body.age,
            hobby: req.body.hobby
        });
        newMong.save(function (errorsNewMong) {
            if (errorsNewMong) {
                console.log("There was an error inserting the new Mongoose into the DB.");
                res.redirect("/");
            } else {
                console.log(req.body);
                console.log("The new mongoose was inserted into the DB.");
                res.redirect("/");
            }
        });
    },

    profile: function (req, res) {
        Mong.findOne({
            _id: req.params.id
        }, function (errorsProfile, dbMong) {
            if (errorsProfile) {
                console.log("There was an error with the profile route.")
            } else {
                res.render("profile", {
                    thisMong: dbMong
                });
            }
        });
    },

    edit: function (req, res) {
        Mong.findOne({
            _id: req.params.id
        }, function (errorsEdit, dbMong) {
            if (errorsEdit) {
                console.log("There was an error with the profile route.")
            } else {
                res.render("edit", {
                    thisMong: dbMong
                });

            }
        });
    },

    updateMong: function (req, res) {
        Mong.update({
            _id: req.params.id
        }, {
            name: req.body.name,
            age: req.body.age,
            hobby: req.body.hobby
        }, function (errorsUpdateMong) {
            if (errorsUpdateMong) {
                console.log("There was a problem with your update operation.")
                res.redirect(`/edit/${req.params.id}`);
            } else {
                console.log("Successfully updated the Mongoose.")
                res.redirect("/");
            }
        });
    }


};