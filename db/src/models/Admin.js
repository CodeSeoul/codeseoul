const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const crypto = require('crypto');
const config = require('config');

function hash(password){
    return crypto.createHmac('sha256', config.HASH_SECRET_KEY).update(password).digest('hex');
}

const {
    Schema
} = mongoose;

const Admin = new Schema({
    username: String,
    email: String,
    password: String
})

Admin.plugin(passportLocalMongoose);

Admin.statics.findByUserName = function (username) {
    return this.findOne({
        username
    }).exec();
}

Admin.statics.drop = function () {
    return this.remove({}).exec();
};

module.exports = mongoose.models.Admin || mongoose.model('Admin', Admin);