const mongoose = require ('mongoose')

const comicBook = new mongoose.Schema({
    name: String,
    published: String,
    condition: String,
    date: Number,
})


module.exports = comicBook