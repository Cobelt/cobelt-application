'use strict';

const router = require('express').Router();

const Facade = require('./FacadeController');
const Invention = require('../controllers/InventionController');
//const mongoose = require('mongoose');


//router.all('/Facade*', Facade.model);

router.get('/new', Facade.create, Facade.show);
router.get('/new/name/:creationFacade_name', Facade.create, Facade.show);

router.get('/:facadeId', Facade.show);
router.get('/all', Facade.loadAll, Facade.showAll);

router.get('/:facadeId/invention/:inventionId/link', Facade.addInnovation, Facade.showInnovation);
router.get('/:facadeId/invention/:inventionId', Facade.showInnovation);

router.param('facadeId', Facade.load);
router.param('inventionId', Invention.load);

module.exports = router;