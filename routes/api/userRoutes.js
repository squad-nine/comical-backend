const express = require('express');
const router = express.Router();
const userCtrl = require('../../controllers/userController');
const User = require('../../models/userProfileModels');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get("/", userCtrl.index)
router.get("/:id", userCtrl.showUser);

module.exports = router

