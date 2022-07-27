
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

    ComicBook.findById(req.params.id, (err, comic) =>{
        if(err){
            res.status(400).json(err)
            return
        }
    })
}




module.exports = {
    index,
    comicNew,
    deleteComic
}