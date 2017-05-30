'use strict';

const router = require('express').Router();

const User = require('../controllers/UserController');

/**
 * Sign in
 * Crée un utilisateur sans mot de passe.
 */
router.post('/', User.create);
router.get('/', User.get, User.send);

module.exports = router;