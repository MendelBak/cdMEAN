var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./client/static")));
app.use(session({secret: "Shh, its a secret!"}));

app.set('views', path.join( __dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/dbConnector.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(8000, function () {
    console.log(__dirname);
    console.log("Listening on port 8000");
});