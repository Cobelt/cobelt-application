'use strict';

const router = require('express').Router();

const Invention = require('../controllers/InventionController');
const Group = require('../controllers/GroupController');

/**
 * Sign in
 * Crée un utilisateur sans mot de passe.
 */
router.post('/', Invention.create, Group.create, Invention.linkGroup, Group.addUser, Invention.send);
router.get('/', Invention.get, Invention.send);

router.post('/addUser', Invention.getGroup, Group.addUser, Invention.send);

module.exports = router;