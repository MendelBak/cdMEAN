var mongoose = require("mongoose");

// SCHEMA DEFINITION //
var MongSchema = new mongoose.Schema({
    name: String,
    age: Number,
    hobby: String
}, {
    timestamps: true
});
//  END SCHEMA DEFINITION

var Mong = mongoose.model("Mong", MongSchema);
