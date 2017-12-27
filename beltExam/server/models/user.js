var mongoose = require("mongoose");
var bcrypt = require('bcrypt');


var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username must be entered,"],
        unique: true,
        minlength: [2, "Usernma must be at least 2 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email must be entered"],
        unique: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
            }
        },
        message: "Email must be a valid email address."
    },
    password: {
        type: String,
        required: [true, "Password must be entered"],
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
}, {
    timestamps: true
});



mongoose.model("User", UserSchema);
