angular.module('services.library', [])
	.factory('book', Book);


function Book($http){
	var modelBook = {
		books: []
	};

	modelBook.getBooks = function() {
		return $http.get('/libros')
			.then(function(res) {
				angular.copy(res.data, modelBook.books);
			}, function(res) {
				console.log("Error: " + res.statusText);
			});
	};

	modelBook.addBook = function(newBook) {
		return $http.post('/libros', newBook)
			.then(function(res) {
				modelBook.books.push(res.data);
			}, function(res) {
				console.log("Error: " + res.statusText);
			});
	};

	modelBook.searchBookById = function(id) {
		return $http.get('/libros/' + id)
			.then(function(res) {
				angular.copy(res.data, modelBook.books);
			}, function(res) {
				console.log("Error: " + res.statusText);
			});
	};

	modelBook.modifyBook = function(oldBook) {
		return $http.put('/libros/' + oldBook._id, oldBook)
			.then(function(res) {				
				modelBook.books[oldBook] = res.data;
			}, function(res) {
				console.log("Error: " + res.statusText);
			});
	};

	modelBook.deleteBookById = function(id) {
		return $http.delete('/libros/' + id)
			.then(function(res) {
				modelBook.getBooks();
			}, function(res) {
				console.log("Error: " + res.statusText);
			});
	};

	return modelBook;	
};