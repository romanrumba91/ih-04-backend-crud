// IMPORTACION
const mongoose = require("mongoose")

//SCHEMA
const bookSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    author: {
        type:String,
        required: true
    },
    rating: {
        type:Number,
        required: true
    },
})

//MODELO
const Book = mongoose.model("Book", bookSchema)

//EXPORTACION
module.exports = Book