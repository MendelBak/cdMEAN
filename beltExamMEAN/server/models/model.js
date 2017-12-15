var mongoose = require("mongoose");
var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var bcrypt = require('bcrypt-nodejs');


var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, {timestamps: true});


mongoose.model("User", UserSchema);