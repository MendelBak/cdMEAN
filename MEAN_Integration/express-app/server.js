var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require("mongoose");

var app = express();

app.use(express.static(path.join(__dirname, "./client/static")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));

app.set('views', path.join( __dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/dbConnector.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);


app.listen(8000, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});
