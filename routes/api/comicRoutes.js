const express = require("express");
const router = express.Router();
const axios = require("axios");
const comicCtrl = require("../../controllers/comicController");
router.use(require("../../database/auth"));
router.use(checkAuth)
router.get("/", comicCtrl.index);
router.get("/new", comicCtrl.comicNew);
router.get("/:id", comicCtrl.showComic);
router.patch('/:id', comicCtrl.update)
router.delete("/:id", comicCtrl.deleteComic);
router.post("/", comicCtrl.comicNew);


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "You are not an authorized user!" });
}

module.exports = router;
