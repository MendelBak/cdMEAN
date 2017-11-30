// Initial setup config
var session = require("express-session");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));

app.get('/', function(req, res){
    
});

app.listen(8000, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});

// How to kill a server that won't stop running
netstat -a -o -n  (Lists services still running)
taskill /F /PID <# of PID> (kills the PID process)