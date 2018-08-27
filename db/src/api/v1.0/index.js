const express = require('express');

const user = require('./user');
const event = require('./event');
const testApi = require('./testApi');

const api = express.Router();

api.use('/user', user);
api.use('/event', event);
api.use('/testApi', testApi);

module.exports = api;