var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bookSchema = new schema({
	title: {type: String},
	author: {type: String},
	year: {type: Number},
	genere: {type: String}
});

module.exports = mongoose.model('Book', bookSchema);