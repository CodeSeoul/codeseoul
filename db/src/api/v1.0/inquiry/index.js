const express = require('express');
const inquiry = express.Router();
const inquiryCtrl = require('./inquiry.ctrl');

inquiry.post('/',inquiryCtrl.PostInquiries);

module.exports = inquiry;