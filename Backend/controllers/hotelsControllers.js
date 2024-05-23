const hotelsData = require('../data/hotelsData');
const { Hotel } = require('../models'); 


exports.createBulkHotels = async (req, res) => {
  try {
    const hotels = hotelsData;
    const createdHotels = await Hotel.bulkCreate(hotels);
    res.status(201).json(createdHotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    res.status(200).json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getHotelById = async (req, res) => {
  try {
    const hotelId = req.params.id;
    const hotel = await Hotel.findByPk(hotelId);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.status(200).json(hotel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

