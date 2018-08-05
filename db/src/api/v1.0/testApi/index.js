const express = require('express');
const testApi = express.Router();

testApi.get('/', (req, res)=>{
    res.status(418).json({'teapot':'short, stout'});
});

module.exports = testApi;