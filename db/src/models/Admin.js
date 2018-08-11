const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

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

module.exports = mongoose.model('Admin', Admin);