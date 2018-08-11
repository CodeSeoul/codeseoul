const express = require('express');
const admin = express.Router();
const adminCtrl = require('./admin.ctrl');

admin.get('/exists/name/:name', adminCtrl.checkName);
admin.post('/register/local', adminCtrl.register);
admin.post('/login', adminCtrl.login);

module.exports = admin;