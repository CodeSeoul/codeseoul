const mongoose = require('mongoose');
const { Schema } = mongoose;

const Admin = new Schema({
    name: Schema.Types.String
})

Admin.statics.findByName = function (name){
    return this.findOne({name}).exec();
}

Admin.statics.register = function({name}){
    const admin = new this({
        name
    });

    return admin.save();
}

module.exports = mongoose.model('Admin', Admin);