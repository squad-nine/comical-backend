const express = require("express");
const router = express.Router();
const comicCtrl = require("../../controllers/comicController");

router.get("/", comicCtrl.index);
router.get("/new", comicCtrl.comicNew);
router.get("/:id", comicCtrl.showComic);
router.post("/", comicCtrl.deleteComic);

router.use(require("../../database/auth"));
router.post("/", checkAuth, comicCtrl.comicNew);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "You are not an authorized user!" });
}

module.exports = router;
