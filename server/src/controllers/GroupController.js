'use strict';

const mongoose = require('mongoose');
const Group = mongoose.model('Group');

class GroupController {

    static addUser (req, res, next) {
        let user = req.body.user;
        if (!GroupController.getUser (user)) { // On vérifie qu'il n'existe pas déjà
            req.group.users.push({
                userId: user.id,
                permissions: req.permission || 0
            });
            req.group.save((err, group) => {
                if (err) {
                    res.status(400).send("ERR_NOT_UPDATED");
                }
                else {
                    req.group = group;
                    return next();
                }
            });
        }
        else {
            return next(Error.newError('ERR_USER_ALREADYINGROUP', 400));
        }
    }

    static create (req, res, next) {
        let newGroup = new Group();

        newGroup.save((err, group) => {
            if (err) {
                res.status(400).send("ERR_NOTADDED");
            }
            else {
                req.group = group;
                return next();
            }
        });
    }

    static getUser (user) {
        if (user && req.group.users.length) {
            for (let i = 0; i < req.group.users.length; i++) {
                if (user.id == req.group.users[i].userId) {
                    return req.group.users[i];
                }
            }
        }
        return null;
    }

    static send (req, res) {
        res.send(req.group);
    }

    /*
    static findUserId (user, usersOfGroup) {
        if (user && usersOfGroup.length) {
            for (let i = 0; i < usersOfGroup.length; i++) {
                if (user.id == usersOfGroup[i].userId) {
                    return i;
                }
            }
        }
        return null;
    }


    static getBy (key, value, callback) {
        const t = {};
        t[key] = value;
        Group.findOne(t).exec((err, group) =>  {
            if (err)
                callback(err);
            else
                callback(null, group);
        });

    }


    static getUserPermissions (req, res, next) {
        let foundUser = GroupController.findUser (req.user, req.group.users);
        if (foundUser) {
            req.user.possessedPermissions = foundUser.permissions;
            return next();
        }

        res.status(404).send("ERRUSERNOTFOUND");
    }


    static load (req, res, next, id) {
        GroupController.getBy('_id', id, function (err, group) {
            if (err) {
                res.status(400).send("ERRGROUPNOTFOUND");
            }
            else {
                req.group = group;
                return next();
            }
        });
    }


    static loadAll (req, res, next) {
        Group.find().exec((err, groups) => {
            if (err) {
                return next(err);
            }
            else {
                req.group = groups;
                return next();
            }
        });
    }


    static loadFromName (req, res, next, id) {
        req.group = GroupController.getBy('name', id, function (err, group) {
            if (err) {
                res.status(400).send("ERRGROUPNOTFOUND");
            }
            else {
                req.group = group;
                return next();
            }
        });
        return next();
    }


    static setNameForCreation (req, res, next) {
        req.groupToCreateName = req.params.createGroup_name;
        return next();
    }


    static show (req, res) {
        let flow = "Group {  _id: '"+req.group.id+"',  name: '"+req.group.name+"',  users: [<br>";
        for (let i = 0; i < req.group.users.length; i++) {
            flow += "{  _id: " + req.group.users[i].userId + ",  permissions: " + req.group.users[i].permissions + " }<br>";
        }
        flow += "]}";
        res.send(flow);
    }


    static showAll (req, res) {
        let flow = "Group: [<br>";
        for (let i = 0; i < req.group.length; i++) {
            flow += "{  _id: '" + req.group[i].id + "'}<br>";
        }
        flow += "]";
        res.send(flow);
    }


    static updateUser (req, res, next) {
        let foundUser = GroupController.findUserId (req.user, req.group.users);
        if (foundUser != null) { // risque que l'id renvoyé soit 0 donc on précise != null
            req.group.users[foundUser].permissions = req.group.users[foundUser].permissions|req.permission || 0;
        }

        req.group.save ((err, group) => {
            if (err) {
                res.status(400).send("ERRNOTUPDATED");
            }
            else {
                return next();
            }
        });
    }*/
}

module.exports = GroupController;
