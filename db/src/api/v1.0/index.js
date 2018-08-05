const express = require('express');

const testApi = require('./testApi');

const api = express.Router();

api.use('/testApi', testApi);

module.exports = api;