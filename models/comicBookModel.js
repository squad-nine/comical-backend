const mongoose = require("mongoose");
const comicBook = new mongoose.Schema({
  image: String,
  issueNum: Number,
  name: String,
  published: String,
  condition: String,
  date: Number,
  siteUrl: String,
  owner:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile"
  }]
});
const ComicBook = mongoose.model("ComicBook", comicBook);
module.exports = ComicBook;
