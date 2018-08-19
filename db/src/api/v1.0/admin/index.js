const express = require('express');
const admin = express.Router();
const adminCtrl = require('./admin.ctrl');
const needAuth = require('lib/middleware/needAuth');
const passport = require('passport');

admin.get('/exists/name/:name', adminCtrl.checkName);
admin.post('/register/local', adminCtrl.register);
admin.post('/login', passport.authenticate('local'), adminCtrl.login);
admin.get('/logout', adminCtrl.logout);
admin.get('/me/info', needAuth, adminCtrl.myInfo);

module.exports = admin;