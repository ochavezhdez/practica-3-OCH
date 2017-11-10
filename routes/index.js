var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var getBooks = require('../models/book');
var bookCtrl = require('../controllers/bookCtrl');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Biblioteca' });
});

router.route('/libros')
	.get(bookCtrl.getBooks)
	.post(upload.array(), bookCtrl.addBook);

router.route('/libros/:id')
	.get(bookCtrl.getBookById)						//	Obtener el libro identificado con ID. En caso de no
													//	encontrar el libro, retornar un objeto JSON con un
													//	código y descripción del error.

	.put(upload.array(), bookCtrl.updateBookById)	// 	Actualizar información del libro identificado con ID. El
													//	método debe de regresar el registro actualizado. En
													//	caso de no encontrar el libro, retornar un objeto JSON
													//	con un código y descripción del error.

	.delete(bookCtrl.deleteBookById);				// 	Eliminar el libro identificado con ID. El método debe de
													//	regresar el registro eliminado. En caso de no encontrar
													//	el libro, retornar un objeto JSON con un código y
													//	descripción del error.

module.exports = router;
