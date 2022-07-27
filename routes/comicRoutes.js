const express = require('express');
const router = express.Router();
const comicCtrl = require('../controllers/comicController');

router.get('/', comicCtrl.index);
router.get('/new', comicCtrl.comicNew);
router.get('/:id', comicCtrl.show);
router.post('/', comicCtrl.create);

module.exports = router;