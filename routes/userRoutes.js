const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');
const User = require('../Models/userProfileModels');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


module.exports = router

