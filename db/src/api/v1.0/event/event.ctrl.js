const axios = require('axios');
const parseUrl = require('parseUrl');

exports.MeetupEvents = async (req, res) => {
    // req._parsedUrl.search delegates all querystring params to meetup api
    const search = parseUrl(req).search;
    const data = await axios.get('https://api.meetup.com/Learn-Teach-Code-Seoul/events' + search).then(res=>res.data).then(res=>JSON.stringify(res));
    
    res.status(200).json({data});
}

exports.CreateMeetupEvents = async (req, res) => {
    res.status(501).json({});
}