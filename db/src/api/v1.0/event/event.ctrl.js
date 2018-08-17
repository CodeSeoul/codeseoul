const axios = require('axios');

exports.MeetupEvents = async (req, res) => {
    const data = await axios.get('https://api.meetup.com/Learn-Teach-Code-Seoul/events?page=1').then(res=>res.data).then(res=>JSON.stringify(res));
    console.log(data);
    res.status(200).json({data});
}