const express = require("express")
const router = express.Router()
const bookController = require("./../controllers/bookController")
//OBETENER LIBROS
router.get("/", bookController.getBooks)
//CREAR PAGINA PARA CREAR UN LIBRO EN BD
router.get("/create", bookController.createBooks)


module.exports = router