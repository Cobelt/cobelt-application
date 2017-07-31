'use strict';

const router = require('express').Router();

const Group = require('../controllers/GroupController');
const Permissions = require('./PermissionsController');
const User = require('../controllers/UserController');
//const mongoose = require('mongoose');


//router.all('/Group*', Group.model);

router.get('/new/:createGroup_name', Group.setNameForCreation, Group.create, Group.show);

router.get('/id/:groupId', Group.show);
router.get('/name/:groupName', Group.show);

router.get('/all', Group.loadAll, Group.showAll);

router.get('/:groupId/addUser/:userId', Group.addUser, Group.show);
router.get('/:groupId/user/:userId/addPermission/:permissionType', Group.updateUser, Group.show);


router.param('groupId', Group.load);
router.param('groupName', Group.loadFromName);
router.param('permissionType', Permissions.load);
router.param('userId', User.load);

module.exports = router;