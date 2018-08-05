const express = require('express');

const admin = require('./admin');
const testApi = require('./testApi');

const api = express.Router();

api.use('/admin', admin);
api.use('/testApi', testApi);

module.exports = api;