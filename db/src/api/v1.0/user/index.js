const express = require('express');
const user = express.Router();
const userCtrl = require('./user.ctrl');
const needAuth = require('lib/middleware/needAuth');
const passport = require('passport');

user.get('/exists/name/:name', userCtrl.checkName);
user.post('/register/local', userCtrl.register);
user.post('/login', passport.authenticate('local'), userCtrl.login);
user.get('/logout', userCtrl.logout);
user.get('/me/info', needAuth, userCtrl.myInfo);

module.exports = user;