'use strict';

const router = require('express').Router();

const Group = require('../controllers/GroupController');
const Invention = require('../controllers/InventionController');
const Permissions = require('./PermissionsController');
//const mongoose = require('mongoose');


//router.all('/invention*', invention.model);

router.get('/new', Invention.create, Group.create, Invention.linkGroup, Invention.show);
router.get('/new/groupname/:groupName', Invention.create, Group.create, Invention.linkGroup, Invention.show);
router.get('/:inventionId', Invention.show);
router.get('/all', Invention.loadAll, Invention.showAll);

router.get('/:inventionId/allowUser/:userId/:permissionType',
    // On récupère le groupe de l'invention, on prépare les permissions qu'on va donner à l'user, on update le groupe avec les nouvelles permission de cet user
    Invention.getGroup, Permissions.prepareAllowPermission, Group.updateUser, Group.show);


router.param('inventionId', Invention.load);

module.exports = router;