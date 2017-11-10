angular.module('controllers.library', ['services.library'])
	.controller('bookCtrl', BookCtrl);


function BookCtrl($scope, $http, book) {
	$scope.books = book.books;
	$scope.modify = false;

	$scope.getBooks = function() {
		book.getBooks();
		$scope.books = book.books;
		$scope.modify = false;
	};

	$scope.saveBook = function() {
		if ($scope.modify) {
			book.modifyBook($scope.book);
		} else {
			book.addBook($scope.book);
		}
		$scope.book = {};
		$scope.modify = false;
		$scope.getBooks();
	};

	$scope.searchBookById = function(id) {
		book.searchBookById(id);
		$scope.id = "";
		$scope.modify = false;
	};

	$scope.modifyBook = function(mBook) {
		$scope.book = mBook;
		$scope.modify = true;
	}

	$scope.deleteBook = function(id) {
		book.deleteBookById(id);
		$scope.modify = false;
	}

};