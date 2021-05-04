var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ListSchema = new Schema({
	text: String,
}, {timestamps: true});

module.exports = mongoose.model("List", ListSchema);