const axios = require('axios');

exports.MeetupEvents = async (req, res) => {
    // req._parsedUrl.search delegates all querystring params to meetup api
    const data = await axios.get('https://api.meetup.com/Learn-Teach-Code-Seoul/events' + req._parsedUrl.search).then(res=>res.data).then(res=>JSON.stringify(res));
    res.status(200).json({data});
}