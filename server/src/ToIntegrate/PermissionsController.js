'use strict';

const mongoose = require('mongoose');

class PermissionsController {

    static prepareAllowPermission (req, res, next) {
        req.permissionsToGive = req.permissionsToGive|PermissionsController.getPermissionFromString(req.permission);
        return next();
    }

    static getPermissionFromString (type) {
        let permission = 0;
        if (type) {
            switch (type) {
                case 'read':
                    permission = 1;
                    break;
                case 'write':
                    permission = 2;
                    break;
                case 'read':
                    permission = 4;
                    break;
                case 'write':
                    permission = 8;
                    break;
            }
        }
        return permission;
    }

    static havePermissions (req, res, next) { // check is user have permission
        // Si on obtient les permissions requises via la porte logique &, c'est que l'user à les bonnes permissions
        return ((req.permissionRequired&req.user.possessedPermissions) == req.permissionRequired) ? next() : res.sendStatus(401);
    }

    static load (req, res, next, id) {
        req.permission = PermissionsController.getPermissionFromString(id);
        return next();
    }

    static require (req, res, next) {
        req.permissionRequired = req.permission;
        return next();
    }
}

module.exports = PermissionsController;
