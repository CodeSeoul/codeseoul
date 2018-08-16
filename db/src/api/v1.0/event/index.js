const express = require('express');
const event = express.Router();
const eventCtrl = require('./event.ctrl');

event.get('/meetup/events', eventCtrl.MeetupEvents);

module.exports = event;