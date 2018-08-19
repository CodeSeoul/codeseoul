const axios = require('axios');
const qs = require('qs');

const isAuthError = (e, res, targetSite) => {
    if (e.response.status == 401) {
        console.log(`User is not authorized to do that action on ${targetSite} api.`);
        res.status(401).send('Unauthorized error');
        return true;
    }
    return false;
}

exports.MeetupEvents = async (req, res) => {
    const search = qs.stringify(req.query);
    const data = await axios.get('https://api.meetup.com/Learn-Teach-Code-Seoul/events?' + search).then(res => res.data).then(res => JSON.stringify(res));

    res.status(200).json({
        data
    });
}

exports.CreateMeetupEvents = async (req, res) => {
    try {
        const search = qs.stringify(req.query);
        const data = await axios.post('https://api.meetup.com/Learn-Teach-Code-Seoul/events?' + search, req.query)
            .then(res => JSON.stringify(res.data));
        if (data) {
            res.status(201).json({
                data
            });
        }
    } catch (e) {
        if (!isAuthError(e, res, 'Meetup')) {
            res.status(500).json({
                error: e
            });
        }
    }
}

exports.MyGroups = async (req, res, next) => {
    try {
        const search = qs.stringify(req.query);
        const data = await axios.get('https://api.meetup.com/self/groups?' + search)
            .then(res => res.data)
            .then(res => JSON.stringify(res));
        res.status(200).json({
            data
        });
    } catch (e) {
        if (!isAuthError(e, res, 'Meetup')) {
            res.status(500).json({
                error: e
            });
        }
    }
}