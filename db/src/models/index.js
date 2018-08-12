const mongoose = require('mongoose');
const config = require('config');
const { MONGO_URI } = config;
const mongoURI = MONGO_URI ? MONGO_URI : 27017;

const connect = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true });

    const db = mongoose.connection;
    
    db.on('error', () => console.log('connection failed!'));
    
    db.once('open', () => console.log(`connected to mongodb uri: ${mongoURI}`));
}

module.exports = {connect};