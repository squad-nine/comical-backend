
const ComicBook = require('../models/comicBookModel')

const index = (req, res) => {
    ComicBook.find({}, (err, comics) =>{
            if(err){
                res.status(400).json(err)
                return
            }
            res.json(comics)
    })
}

const comicNew = async (req, res) => {
    console.log(req.body);
    let newComic = await ComicBook.create(req.body)
    res.json(newComic)
}

const deleteComic = (req, res) =>{
    let { id } = req.params 
    console.log(id)

    ComicBook.findByIdAndDelete(req.params.id, (err, deletedComic) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedComic)
    })
}

const showComic = (req,res) => {
    ComicBook.findById(req.params.id, (err,comic) => {
        if(err){
            res.status(400).json(err)
            return
        } else {
            res.json(comic)
        }
    })
}

let update = (req,res) => {
    ComicBook.findByIdAndUpdate(req.params.id,req.body,{new: true}, (err,comic) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(comic)
    })
}


module.exports = {
    index,
    comicNew,
    deleteComic,
    showComic,
    update
}
