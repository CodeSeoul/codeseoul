const Inquiry = require('../../../models/Inquiry');

exports.PostInquiries = (req, res) => {
  const { body } = req;
  const { firstName, lastName, email, message } = body;

  let newInquiry= new Inquiry({        
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message});
  
  newInquiry.save().then(inquiry => res.json(inquiry))

};
