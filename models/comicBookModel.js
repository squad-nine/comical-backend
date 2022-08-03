const mongoose = require("mongoose");
const comicBook = new mongoose.Schema({
  image: String,
  issueNum: Number,
  name: String,
  published: String,
  condition: String,
  date: Number,
  siteUrl: String,
});
const ComicBook = mongoose.model("ComicBook", comicBook);
module.exports = ComicBook;
