

const res = require("express/lib/response")
const Book = require("../models/Book")


exports.getBooks = async (req, res) => {

    try {
        const foundBooks = await Book.find({})
        console.log(foundBooks)
    
        res.render("books/list",{
            data: foundBooks

        })

    }catch(error){

        console.log(error)

    }

    
}