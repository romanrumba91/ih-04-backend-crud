const express = require("express")
const router = express.Router()
const bookController = require("./../controllers/bookController")
//OBETENER LIBROS
router.get("/", bookController.getBooks)
//CREAR PAGINA PARA CREAR UN LIBRO EN BD
router.get("/create", bookController.createBooks)
// ENVIAR DATOS DE FORMULARIO PARA CREAR LIBRO EN BD post SOLO PARA FORMULARIOS
router.post("/create", bookController.createBooksForm)
// CREAR PAGINA INDIVIDUAL PARA CADA LIBRO RESPECTIVO
//
router.get("/:bookID", bookController.getSingleBook)
module.exports = router