const mongoose = require('mongoose');
const { Schema } = mongoose;

const InquirySchema = new Schema({
    firstName : {type : String, required : true},
    lastName : {type : String, required : true},
    email: {type : String, required : true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    message : {type : String, required : true}
});

module.exports = Inquiry = mongoose.model('Inquiry', InquirySchema);