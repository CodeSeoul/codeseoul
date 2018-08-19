const express = require('express');
const admin = express.Router();
const adminCtrl = require('./admin.ctrl');
const needAuth = require('lib/middleware/needAuth');

admin.get('/exists/name/:name', adminCtrl.checkName);
admin.post('/register/local', adminCtrl.register);
admin.post('/login', adminCtrl.login);
admin.get('/me/info', needAuth, adminCtrl.myInfo);

module.exports = admin;