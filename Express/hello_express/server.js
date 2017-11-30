var session = require("express-session");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.set('views', __dirname + '/views'); //This tells express where to find the templating engine (ejs)
app.set('view engine', 'ejs'); //Tells express that we are using ejs

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));


app.get('/', function(req, res) { 
    res.render('main', {title: "my Express project"});
});


app.get("/users", function(request, response){
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
});


// route to process new user form data:
app.post('/users_form', function (req, res){
    req.session.name = req.body.name;
    console.log("session.name is ->", req.body.name);
    console.log("POST DATA ", req.body);
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/');
});

app.get("/users/:id", function(req, res){
    console.log("The user is requested is: ", req.params.id);
    res.send("You requested the use with id of: " + req.params.id);
});



app.listen(8000, function () {
    console.log(__dirname);
    console.log("Listening on port 8000");
});