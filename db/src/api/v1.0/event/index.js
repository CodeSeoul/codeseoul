const express = require('express');
const event = express.Router();
const eventCtrl = require('./event.ctrl');
const needAuth = require('lib/middleware/needAuth');

event.get('/meetup/events', eventCtrl.MeetupEvents);
event.post('/meetup/events', eventCtrl.CreateMeetupEvents);
event.get('/meetup/me/groups', needAuth, eventCtrl.MyGroups);

module.exports = event;