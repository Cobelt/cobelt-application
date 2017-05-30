'use strict';

const router = require('express').Router();

const Invention = require('../controllers/InventionController');
const User = require('../controllers/UserController');
const Group = require('../controllers/GroupController');
const Permissions = require('./PermissionsController');
//const mongoose = require('mongoose');

//router.all('/user*', User.model);

router.get('/new', User.create, User.show);

router.get('/:userId', User.show);
router.get('/all', User.loadAll, User.showAll);

router.get('/:userId/group/:groupId/add', Group.addUser, Group.show);
router.get('/:userId/group/:groupId/permission/:permissionType/add', Group.addUser, Group.show);

router.get('/:userId/group/:groupId/permission/:permissionType/combinePermissions', Group.updateUser, Group.show);


router.get('/:userId/:permissionType/:inventionId',
    Invention.getGroup, Group.getUserPermissions, Permissions.require, Permissions.havePermissions, // vérification des droits
    Invention.show); // affichage


router.param('inventionId', Invention.load);
router.param('userId', User.load);
router.param('groupId', Group.load);
router.param('permissionType', Permissions.load);

module.exports = router;