var mongoose = require('mongoose');
var bookModel = mongoose.model('Book');

exports.getBooks = function(req, res, next) {
	bookModel.find(function(err, books) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(books);
	});
};

exports.addBook = function(req, res, next) {
	var book = new bookModel({
		title: req.body.title,
		author: req.body.author,
		year: req.body.year,
		genere: req.body.genere
	});

	book.save(function(err, book) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(book);		
	});
};

exports.getBookById = function(req, res, next) {
	bookModel.find({_id: req.params.id}, function(err, book) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(book);
	});
};

exports.updateBookById = function(req, res, next) {
	bookModel.update({_id: req.params.id}, 
		{
			title: req.body.title,
			author: req.body.author,
			year: req.body.year,
			genere: req.body.genere
		}, { multi: true }, function (err, numAffected) {
			if (err) {
				return res.status(500, err.message);
			}
		}
	);
	bookModel.find({_id: req.params.id}, function(err, book) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(book);
	});
};

exports.deleteBookById = function(req, res, next) {
	bookModel.find({_id: req.params.id}, function(err, book) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(book);
		bookModel.remove({_id: req.params.id}, function(err) {
			if (err) {
				return res.status(500, err.message);
			}
		});
	});
};
