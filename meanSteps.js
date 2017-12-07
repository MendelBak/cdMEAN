// ***************** EXPRESS STEPS *******************//
// Initial setup config
var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var mongoose = require("mongoose");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));

// This must match the db
mongoose.connect('mongodb://localhost/quotes');
mongoose.Promise = global.Promise;

// SCHEMA DEFINITION  (CHANGE THE NAME OF THE SCHEMA)//
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {timestamps: true});
mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("Quote");
// 

app.get('/', function (req, res) {
    res.render("index");
});

app.listen(8000, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});



// How to kill a server that won't stop running
netstat -a -o -n  (Lists services still running)
taskill /F /PID <# of PID> (kills the PID process)


// ************** MONGO DB STEPS ***********//
// To start a new Mongo Db server
cd c:/"Program Files"/MongoDB/Server/3.4/bin/
./mongod (mongod.exe if in cmd)
// In ANOTHER terminal tab/ window 
cd c:/"Program Files"/MongoDB/Server/3.4/bin/
./mongo (mongo.exe if in cmd)


// ************** SETTING UP MODULAR FILE STRUCTURE in Node/Mongoose********************//
// Total of 5 new files are created.
Client Folder{
    Static Folder
    Views Folder
} //End Client FOlder

Server Folder{
    Config Folder{
        dbConnector.js
        routes.js
    }
    Controllers Folder{
        controller.js
    }
    Models Folder{
        model.js
    }
} //End Server Folder
server.js
//***********************END MODULAR FILE STRUCTURE SETUP STEPS *************************************//