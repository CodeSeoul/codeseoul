const express = require('express');

const user = require('./user');
const event = require('./event');
const testApi = require('./testApi');
const inquiry = require('./inquiry');

const api = express.Router();

api.use('/user', user);
api.use('/event', event);
api.use('/testApi', testApi);
api.use('/inquiry', inquiry);

module.exports = api;