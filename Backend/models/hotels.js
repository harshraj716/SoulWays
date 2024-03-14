const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  Hotel_name: { type: String, required: true },
  Location: { type: String, required: true },
  Price: { type: Number, required: true },
  Discount: { type: String, required: true },
  Rating: { type: Number, required: true },
  imgurl: [{ type: String }],
  tags: [{ type: String }]
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
