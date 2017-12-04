var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var mongoose = require("mongoose");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'codingdojorocks'
}));

// This must match the db
mongoose.connect('mongodb://localhost/mongooseDash');
mongoose.Promise = global.Promise;

// SCHEMA DEFINITION //
var MongSchema = new mongoose.Schema({
    name: String,
    age: Number,
    hobby: String
}, {
    timestamps: true
});
mongoose.model("Mong", MongSchema);
var Mong = mongoose.model("Mong");


// ROUTES//

app.get('/', function (req, res) {
    Mong.find({}, function (errors, dbMongs) {
        if (errors) {
            console.log("Something has gone wrong.");
            res.render("index");
        }
        res.render("index", {
            mongsKey: dbMongs
        });
    });
});

app.get("/new", function (req, res) {
    res.render("new");
});

app.post("/submitNew", function (req, res) {
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
});


app.get("/profile/:id", function (req, res) {
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
});

app.get("/edit/:id", function (req, res) {
    Mong.findOne({
        _id: req.params.id
    }, function (errorsEdit, dbMong) {
        if (errorsEdit) {
            console.log("There was an error with the profile route.")
        } else {
            res.render("edit", {thisMong: dbMong});

        }
    });
});

app.post("/updateMong/:id", function(req, res){
    Mong.update({_id: req.params.id}, {name: req.body.name}, function(errorsUpdateMong){
        if(errorsUpdateMong) {
            console.log("There was a problem with your update operation.")
            res.redirect(`/edit/${req.params.id}`);
        }
        else {
            console.log("Successfully updated the Mongoose.")
            res.redirect("/"); 
        }
    });
});


app.listen(8000, function () {
    console.log(__dirname);
    console.log("Listening on port 8000");
});