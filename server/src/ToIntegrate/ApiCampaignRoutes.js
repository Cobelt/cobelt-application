'use strict';

const router = require('express').Router();

const Campaign = require('./CampaignController');
const Invention = require('../controllers/InventionController');

const Auth = require('../common/Authentication');


/*router.get('/', Auth.isAuthenticated, Campaign.loadAll, Campaign.showAll);

router.get('/:campaignId', Campaign.show);

router.post('/', Auth.isAuthenticated, function (req, res) {
    res.send('Cette page n\'est accessible que lorsqu\'on est connecté.');
});


router.get('/new/:inventionId', Campaign.create, Campaign.show);

router.param('campaignId', Campaign.load);
router.param('inventionId', Invention.load);*/

module.exports = router;