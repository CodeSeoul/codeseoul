const express = require('express');

const admin = require('./admin');
const event = require('./event');
const testApi = require('./testApi');

const api = express.Router();

api.use('/admin', admin);
api.use('/event', event);
api.use('/testApi', testApi);

module.exports = api;