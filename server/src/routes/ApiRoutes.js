'use strict';

const router = require('express').Router();
const AuthenticationController = require("../controllers/AuthenticationController");

router.use('/auth', require('./ApiAuthenticationRoutes'));
router.use('/campaign', require('../ToIntegrate/ApiCampaignRoutes'));
router.use('/invention', require('./ApiInventionRoutes'));
router.use('/user', require('./ApiUserRoutes'));

router.get('/session', AuthenticationController.getSessionInfos);

module.exports = router;