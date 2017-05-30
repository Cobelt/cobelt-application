'use strict';

const mongoose = require('mongoose');
const Facade = mongoose.model('Facade');

class FacadeController {

    static addInnovation (req, res, next) {
        console.log(req.facade.inventionsIds);
        if (!FacadeController.findInnovation (req.invention, req.facade.inventionsIds)) {
            req.facade.inventionsIds.push(req.invention.id);
            req.facade.save((err, facade) => {
                if (err) {
                    res.status(400).send("ERRNOTUPDATED");
                }
                else {
                    //req.innovationAddedInFacade = req.facade.inventionIds[req.facade.innovations.length-1];
                    return next();
                }
            });
        }
        else {
            // already added
            return next();
        }
    }


    static create (req, res, next) {
        let newFacade = new Facade({
            name: req.params.creationFacade_name || 'Undefined Corp'
        });
        newFacade.save((err, facade) => {
            if (err) {
                res.status(400).send("ERRNOTADDED");
            }
            else {
                req.facade = facade;
                return next();
            }
        });
    }


    static findInnovation (innovation, innovationsOfFacade) {
        if (innovation && innovationsOfFacade.length) {
            for (let i = 0; i < innovationsOfFacade.length; i++) {
                if (innovation.id == innovationsOfFacade[i].innovationId) {
                    return innovationsOfFacade[i];
                }
            }
        }
        return null;
    }


    static findInnovationId (innovation, innovationsOfFacade) {
        if (innovation && innovationsOfFacade.length) {
            for (let i = 0; i < innovationsOfFacade.length; i++) {
                if (innovation.id == innovationsOfFacade[i].innovationId) {
                    return i;
                }
            }
        }
        return null;
    }


    static getById (req, res, next) {
        if(req.facadeId) {
            req.facade = Facade.findOne({"_id": req.facadeId});
            delete req.facadeId;
        }
        return next();
    }


    static load (req, res, next, id) {
        Facade.findOne ({ '_id': id}).exec((err, facade) => {
            if (err) {
                return next(err);
            }
            else {
                req.facade = facade;
                return next();
            }
        });
    }


    static loadAll (req, res, next) {
        Facade.find().exec((err, facades) => {
            if (err) {
                return next(err);
            }
            else {
                req.facade = facades;
                return next();
            }
        });
    }



    static show (req, res) {
        res.send("Facade {  _id: '" + req.facade.id + "',  name: '" + req.facade.name + "'  }");
    }


    static showAll (req, res) {
        let flow = "Facades: [<br>";
        for (let i = 0; i < req.facade.length; i++) {
            flow += "{  _id: '" + req.facade[i].id + "',  name: '" + req.facade[i].name + "'  }<br>";
        }
        flow += "]";
        res.send(flow);
    }


    static showInnovation (req, res) {
        res.send("invention {  _id: '"+req.invention.id+"'  }, powered on "+req.facade.name);
    }

}

module.exports = FacadeController;
