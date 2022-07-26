const ComicBook = require("../models/comicBookModel");
const axios = require("axios");

const index = (req, res) => {
  ComicBook.find({owner:req.user._id}, (err, comics) => {

    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(comics);
  });
};

const comicNew = async (req, res) => {
  console.log(req.body);
  const { name, issueNum } = req.body;

try{const {data} = await axios
    .get("https://comicvine.gamespot.com/api/issues/", {
      params: new URLSearchParams({
        api_key: process.env.COMICVINE_API_KEY,
        field_list: "image,site_detail_url",
        format: "json",
        filter: `name:${name}`,
        issue_number: issueNum,
      }),
    })
    
    const { image, site_detail_url } = data.results[0];
    const { small_url } = image;
    let newComic = await ComicBook.create({owner:req.user._id,image: small_url, siteUrl: site_detail_url, ...req.body});
    res.json(newComic);
  
  }catch(error){
    console.log(error)
    res.status(400).json(error)
  }
};

const deleteComic = (req, res) => {
  let { id } = req.params;
  console.log(id);

  ComicBook.findByIdAndDelete(req.params.id, (err, deletedComic) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(deletedComic);
  });
};

const showComic = (req, res) => {
  ComicBook.findById(req.params.id, (err, comic) => {
    if (err) {
      res.status(400).json(err);
      return;
    } else {
      res.json(comic);
    }
  });
};

let update = (req, res) => {
  ComicBook.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (err, comic) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.json(comic);
    }
  );
};

module.exports = {
  index,
  comicNew,
  deleteComic,
  showComic,
  update,
};
