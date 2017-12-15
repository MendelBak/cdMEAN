var session = require("express-session");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));



app.get("/", function(req, res){
    res.render("index"); 
});

app.post('/form_submit', function(req, res){
    console.log(req.body);
    req.session.formData = req.body;
    res.redirect("/form_results");
});

app.get("/form_results", function(req, res){
    res.render("form_results", req.session.formData);
});

app.get("/goBack", function(req, res){
    res.redirect("/");
});

app.listen(8001, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});