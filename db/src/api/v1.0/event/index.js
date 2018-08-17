const express = require('express');
const event = express.Router();
const eventCtrl = require('./event.ctrl');

event.get('/meetup/events', eventCtrl.MeetupEvents);
event.post('/meetup/events', eventCtrl.CreateMeetupEvents);

module.exports = event;