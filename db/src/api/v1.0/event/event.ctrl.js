const axios = require('axios');
const qs = require('qs');

exports.MeetupEvents = async (req, res) => {
    const search = qs.stringify(req.query);
    const data = await axios.get('https://api.meetup.com/Learn-Teach-Code-Seoul/events?' + search).then(res=>res.data).then(res=>JSON.stringify(res));
    
    res.status(200).json({data});
}

exports.CreateMeetupEvents = async (req, res) => {
    const search = qs.stringify(req.query);
    const data = await axios.post('https://api.meetup.com/Learn-Teach-Code-Seoul/events?' + search
        ,req.query).then(res=>JSON.stringify(res.data));
    if(data){
        res.status(201).json({data});
    }
}

exports.MyGroups = async (req, res) => {
    const search = qs.stringify(req.query);
    const data = await axios.get('https://api.meetup.com/self/groups?' + search).then(res=>res.data).then(res=>JSON.stringify(res));
    res.status(200).json({data});
}