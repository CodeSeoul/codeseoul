const express = require('express');
const versions = {
    '1.0': require('./v1.0')
};

const api = express.Router();

api.use('/v1.0', versions['1.0']);

module.exports = api;