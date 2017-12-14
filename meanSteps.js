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


// Import these modules for forms (and other things) to work in Angular. Place in app.module.ts file.

import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],

// Creating a new Service
ng generate service <name of service>
// import service in module.ts 
import { DataService } from './data.service';
providers: [ DataService ],
// Inject the service into all the components that will use it (capitalized)
import { DataService } from '../data.service';
constructor(private _dataService: DataService) { }


//  Creating a new routing page
//  When creating project for the first time add --routing to command
ng new <project name> --routing
// Inject components into routing file
import { LandingComponent } from './landing/landing.component';
// Add routing to routing file
const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: LandingComponent,
      children: []
    }
  ];
// Inject the Activated Route module into your components
import { Router } from '@angular/router';
constructor( private _route: Router ) { }
// Place this in your constructor
this._route.paramMap.subscribe( params => {
    console.log(params.get('id'));
});