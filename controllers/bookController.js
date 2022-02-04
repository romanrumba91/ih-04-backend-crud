// ./controllers/bookController.js

const async = require("hbs/lib/async")
const Book		= require("./../models/Book")

exports.getBooks = async (req, res) => {

	try {
	
		const foundBooks = await Book.find({})

		res.render("books/list", {
			data: foundBooks
		})

	} catch (error) {
		
		console.log(error)

	}	

}

exports.createBooks = async (req, res) => {

	return res.render("books/create")

}


exports.createBooksForm = async (req, res) => {

	// 1. VERIFICAR QUE LOS DATOS DEL FORMULARIO LLEGUEN AL SERVIDOR
	const { title, description, author, rating } = req.body
	// const title = req.body.title
	
	// 2. CREAR EL DOCUMENTO EN BASE DE DATOS
	try {
        //await Book.create({ title, description, author, rating })
        await Book.create({ title, description, author, rating })
        return res.redirect("/books")

    }catch(error){
        console.log(error)
    }

}

exports.getSingleBook = async(req, res) => {
    //SABER CUAL LIBRO QUIERES LEER, OBTENER EL IDENTIFICADOR
    const {bookID} =req.params
    //REALIZAR BUSQUEDA DEL LIBRO INDIVIDUAL A TRAVEZ DE SU ID
    const getTheBook = await Book.findById(bookID)

    res.render("books/single",{
        book: getTheBook
    })
}