'use strict';

const mongoose = require('mongoose');
const Campaign = mongoose.model('Campaign');

class CampaignController {

    static create (req, res, next) {
        if (req.invention.id) {
            let newCampaign = new Campaign({
                inventionId: req.invention.id
            });
            newCampaign.save((err, campaign) => {
                if (err) {
                    res.status(400).send("ERRNOTADDED");
                }
                else {
                    req.campaign = campaign;
                    return next();
                }
            });
        }
        else {
            res.status(400).send("ERRNOINVENTIONKNOWN")
        }
    }


    static getById (req, res, next) {
        if(req.campaignId) {
            req.campaign = Campaign.findOne({"_id": req.campaignId});
            delete req.campaignId;
        }
        return next();
    }


    static load (req, res, next, id) {
        Campaign.findOne ({ '_id': id}).exec((err, campaign) => {
            if (err) {
                return next(err);
            }
            else {
                req.campaign = campaign;
                return next();
            }
        });
    }


    static loadAll (req, res, next) {
        Campaign.find().exec((err, campaigns) => {
            if (err) {
                return next(err);
            }
            else {
                req.campaign = campaigns;
                return next();
            }
        });
    }



    static show (req, res) {
        res.send("Campaign {  _id: '" + req.campaign.id + "',  inventionId: '" + req.campaign.inventionId + "'  }");
    }


    static showAll (req, res) {
        let flow = "Campaigns: [<br>";
        for (let i = 0; i < req.campaign.length; i++) {
            flow += "{  _id: '" + req.campaign[i].id + "',  inventionId: '" + req.campaign[i].inventionId + "'  }<br>";
        }
        flow += "]";
        res.send(flow);
    }


    static showInnovation (req, res) {
        res.send("invention {  _id: '"+req.invention.id+"'  }, powered on "+req.campaign.name);
    }

}

module.exports = CampaignController;
