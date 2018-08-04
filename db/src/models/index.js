const mongoose = require('mongoose');
const {
    MONGO_URI: mongoURI
} = process.env

const connect = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true });

    const db = mongoose.connection;
    
    db.on('error', () => console.log('connection failed!'));
    
    db.once('open', () => console.log(`connected to mongodb uri: ${mongoURI}`));
}

module.exports = {connect};