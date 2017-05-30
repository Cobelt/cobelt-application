'use strict';

const router = require('express').Router();
const AuthenticationCtrl = require('../controllers/AuthenticationController');

router.post('/login', AuthenticationCtrl.login);
router.get('/logout', AuthenticationCtrl.logout);

module.exports = router;