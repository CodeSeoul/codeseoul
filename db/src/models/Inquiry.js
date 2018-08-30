const mongoose = require('mongoose');
const { Schema } = mongoose;

const InquirySchema = new Schema({
    firstName : String,
    lastName : String,
    email: String,
    message : String 
});

module.exports = Inquiry = mongoose.model('Inquiry', InquirySchema);