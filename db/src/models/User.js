const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const crypto = require('crypto');
const config = require('config');

function hash(password) {
    return crypto.createHmac('sha256', config.HASH_SECRET_KEY).update(password).digest('hex');
}
 
const {
    Schema
} = mongoose;

const User = new Schema({
    username: {
        type:String,
        minlength:[3, 'Too short username'],
        required: [true, 'Username required']
    },
    email: String,
    password: String,
    role: String
})

User.plugin(passportLocalMongoose);

User.statics.findByUserName = function (username) {
    return this.findOne({
        username
    }).exec();
}

User.statics.drop = function () {
    return this.remove({}).exec();
};

module.exports = mongoose.models.User || mongoose.model('User', User);