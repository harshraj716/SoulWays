const { ContactUs } = require('../models');

const createContactUs = async (req, res) => {
  try {
    const { fullname, email, mobileNumber, message,userId } = req.body;
    const contactUs = await ContactUs.create({
      fullname,
      email,
      mobileNumber,
      message,
      userId
    });
    res.status(201).json(contactUs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createContactUs
};
