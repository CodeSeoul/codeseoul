const axios = require('axios');
const qs = require('qs');

exports.MeetupEvents = async (req, res) => {
    const search = qs.stringify(req.query);
    const data = await axios.get('https://api.meetup.com/Learn-Teach-Code-Seoul/events?' + search).then(res=>res.data).then(res=>JSON.stringify(res));
    
    res.status(200).json({data});
}

exports.CreateMeetupEvents = async (req, res) => {
    res.status(501).json({});
}