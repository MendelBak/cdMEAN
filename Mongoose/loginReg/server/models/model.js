var mongoose = require("mongoose");
var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var bcrypt = require('bcrypt-nodejs');


// SCHEMA DEFINITION //
var UserSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: String,
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (value) {
                return emailRegex.test(value);
            },
            message: "Email failed validation, you must have at least 1 number, 1 uppercase and 1 special character."
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
            },
            message: "Password failed validation, you must have at least 1 number, 1 uppercase and 1 special character."
        }
    },
    birthday: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});
//  END SCHEMA DEFINITION

UserSchema.pre('save', function(done){
    console.log("Hello from the model file bcrypt function. ");
    var hashed_password = bcrypt.hashSync(this.password);
    this.password = hashed_password;
        done();
  });


mongoose.model("User", UserSchema);