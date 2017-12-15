var mongoose = require('mongoose');
var express = require('express');
var controller = require('../controllers/controller.js');
var path = require('path');

module.exports = function (app) {

    // ROUTES//
    app.get('/api/', function (req, res) {
        controller.index(req, res);
    });
    // app.post('/api/formSubmit', function(req, res) {
    //     controller.formSubmit(req, res);
    //     console.log("made it to formsubmit post route");
    // });
    app.post('/api/register', function(req, res){
        console.log("reached register in server routes");
        controller.formSubmit(req, res);
    });
    app.get('/api/getAllUsers', function (req, res) {
        console.log('Reached the getAllUsers route in routes.js');
        controller.getAllUsers(req, res);
    });

    app.all("*", (req, res) => { res.sendFile(path.resolve("./public/dist/index.html")); });
    
};
