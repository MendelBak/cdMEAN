// ***************** EXPRESS STEPS *******************//
// Initial setup config
// create a project directory and a server.js file
// run this command to create a package.json file
npm init -yes

// ****** package.json **********//
"dependencies": {
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "^1.13.1",
    "ejs": "1.0.0",
    "express": "~4.10.0",
    "express-session": "^1.15.6",
    "mongoose": "^4.13.7"
  }
// ****** //
// run npm install --save

// ************** SETTING UP MODULAR FILE STRUCTURE in Node/Mongoose********************//
// Total of 5 new files are created.
// Client folder is not created when express is connected with Angular
// client Folder{
//     static Folder
//     views Folder
//         index.ejs // WILL TAKE THIS OUT WHEN CONNECTING ANGULAR //
} //End Client FOlder

server Folder{
    config Folder{
        dbConnector.js // MUST HAVE AN UPPERCASE 'C' IN dbConnector! //
        routes.js
    }
    controllers Folder{
        controller.js
    }
    models Folder{
        model.js
    }
} //End Server Folder
server.js
//***********************END MODULAR FILE STRUCTURE SETUP STEPS *************************************//


//  boilerplate for server.js
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var session = require('express-session');

app.set('views', path.join( __dirname, './client/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "./client/static")));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/angularBeltApp/dist'));
app.use(session({secret: 'codingdojorocks'}));


require('./server/config/dbConnector.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);


app.listen(8000, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});



// **********Boilerplate for dbConnector.js (!!CHANGE THE NAME OF THE DB!!!) ************//

var mongoose = require("mongoose");
var fs = require('fs');
var path = require('path');

// This connects to the DB
mongoose.connect('mongodb://localhost/integrationPractice');

// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');

// read all of the files in the models_path and require each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
      // require the file (this runs the model file which registers the schema)
      require(models_path + '/' + file);
    }
  });

//***************   END dbConnector.js ******************//


//***************   BEGIN controller.js (!! CHANGE THE MODEL NAME TO MATCH THE SCHEMA!!!) ******************//
var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    index: function (req, res) {
        res.render("index");
    },
    formSubmit: function (req, res) {
        var newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        console.log("Made it to controller.js form submit");
        newUser.save(function (errors, newUserInfo) {
            if (errors) {
                console.log(errors);
                console.log("There was an error inserting the new Mongoose into the DB.");
                res.redirect("/");
            } else {
                console.log("The new mongoose was inserted into the DB.");
                console.log(req.body);
                req.session.sessionID = newUserInfo._id;
                console.log("This is the req.session.sessionID ->", req.session.sessionID);
                res.redirect("/");
            }
        });
    }

};
//***************   END controller.js ******************//


// *********************Boilerplate for model.js ********************//
// SCHEMA DEFINITION  (!!CHANGE THE NAME OF THE SCHEMA!!)//
var mongoose = require("mongoose");
var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var bcrypt = require('bcrypt-nodejs');


var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, {timestamps: true});


mongoose.model("User", UserSchema);
// *********** END models.js ******************//



// *********************Boilerplate for routes.js ****************//
var controller = require('../controllers/controller.js');
module.exports = function (app) {

    // ROUTES//

    app.get('/', function (req, res) {
        controller.index(req, res);
    });
    app.post('/formSubmit', function(req, res) {
        controller.formSubmit(req, res);
        console.log("made it to formsubmit post route")
    });

};
//**************** END routes.js ****************** *//

//****************** index.ejs form template  ***********//
//  Insert this form into your index.ejs
<h1>This is the root route</h1>

    <form action="/formSubmit" method="post">
        <input type="text" placeholder="username" name="username">
        <input type="text" placeholder="email" name="email">
        <input type="text" placeholder="password" name="password">
        <input type="submit" value="Submit Form">
    </form>

//******************END index.ejs form template ****** */



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



//  ANGULAR //


// Import these modules for forms (and other things) to work in Angular. Place in app.module.ts file.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],

// Creating a new Service
ng generate service <name of service>

// import service in module.ts 
import { DataService } from './data.service';
providers: [ DataService ],

// Inject the service into all the components that will use it (capitalized)
import { DataService } from '../data.service';
constructor(private _dataService: DataService) { }


//  Creating a new routing page  //
//  When creating project for the first time add --routing to command //
ng new <project name> --routing

// Inject components into app-routing0modules.ts file  //
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
providers: [ DataService ],

// Inject modules into your components
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { }

// Place this in your constructor
this._route.paramMap.subscribe( params => {
    console.log(params.get('id'));
});
//

{/* Place this in your app.component/html */}
<router-outlet></router-outlet>
//

{/* TO RUN SERVER */}
nodemon server.js 
ng build --watch
