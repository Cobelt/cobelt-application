'use strict';

const mongoose = require('mongoose');
const Error = require('../common/Error');

const Invention = mongoose.model('Invention');
const Group = mongoose.model('Group');

const GroupController = require('./GroupController');

class InventionController {


    static linkGroup (req, res, next) {
        if(req.invention) {
            if(req.group) {
                req.invention.group = req.group;
                req.invention.save((err, invention) => {
                    if (err)
                        res.status(400).send("ERR_NOTUPDATED");
                    else {
                        req.invention = invention;
                        return next();
                    }
                });
            }
            else
                res.status(404).send("ERR_GROUP_NOTFOUND");
        }
        else
            res.status(404).send("ERR_INVENTION_NOTFOUND");
    }

    static create (req, res, next) {
        // TODO creer groupe avant invention dans la route pour l'ajouter a l'innov directement + ajouter l'user au groupe
        let newInvention = new Invention();
        newInvention.save((err, invention) => {
            if (err) {
                res.status(400).send("ERRNOTADDED");
            }
            else {
                req.invention = invention;
                return next();
            }
        });
    }


    static get (req, res, next) {
        if(req.session.userId) {
            Invention.findOne({"_id": req.userId}, (err, user) => {
                req.user = user;
                next(err);
            });
        }
        else {
            next(Error.newError('USERNOTFOUND', 400));
        }
    }


    static send (req, res) {
        res.send(req.invention);
    }


    /*static getById (req, res, next) {
        if(req.inventionId) {
            req.invention = Invention.findOne({"_id": req.inventionId});
            delete req.inventionId;
        }
        return next();
    }*/

    /*static copyGroup (req, res, next) {
        if(req.invention) {
            if(req.group) {
                let newGroup = new Group ({
                    name: req.group.name
                });
                newGroup.save((err, group) => {
                    if (err)
                        res.status(400).send("ERRGROUPCOULDNTBECREATED");
                    else {
                        req.invention.group = group.id;

                        req.invention.save((err, invention) => {
                            if (err)
                                res.status(400).send("ERRNOTUPDATED");
                            else {
                                req.invention = invention;
                                return next();
                            }
                        });
                    }
                });
            }
            else
                res.status(404).send("ERRGROUPNOTFOUND");
        }
        else
            res.status(404).send("ERRINVENTIONNOTFOUND");
    }*/


    static getGroup (req, res, next) {
        if(req.body.invention.group) {
            req.group = req.invention.group;
            return next();
        }
        else {
            return next(Error.newError('NO_INVENTION_GIVEN', 400));
        }
    }





    static load (req, res, next, id) {
        Invention.findOne ({ '_id': id}).populate('group').exec((err, invention) => {
            if (err) {
                return next(err);
            }
            else {
                req.invention = invention;
                return next();
            }
        });
    }


    static loadAll (req, res, next) {
        Invention.find().exec((err, inventions) => {
            if (err) {
                return next(err);
            }
            else {
                req.invention = inventions;
                return next();
            }
        });
    }


    static show (req, res) {
        res.send("invention {  <br>_id: '"+req.invention.id+"',  <br>group: { "+req.invention.group+" }<br> }");
    }


    static showAll (req, res) {
        let flow = "Inventions: [<br>";
        for (let i = 0; i < req.invention.length; i++) {
            flow += "{  _id: '" + req.invention[i].id + "'}<br>";
        }
        flow += "]";
        res.send(flow);
    }

}

module.exports = InventionController;
