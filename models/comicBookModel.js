const mongoose = require ('mongoose')

const comicBook = new mongoose.Schema({
    name: String,
    published: String,
    condition: String,
    date: Number,
})

const ComicBook = mongoos.model('ComicBook', comicBook)

module.exports = ComicBook