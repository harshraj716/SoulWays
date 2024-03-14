const placesData = require('../data/placesData');
const Destination = require('../models/places')

exports.createBulkPlaces = async (req, res) => {
  try {
    const places = placesData;
    const createdPlaces = await Destination.insertMany(places);
    
    res.status(201).json(createdPlaces);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Destination.find();
    res.status(200).json(places);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPlaceById = async (req, res) => {
    try {
      const placeId = req.params.id;
      const place = await Destination.findById(placeId);
      
      if (!place) {
        return res.status(404).json({ error: 'Place not found' });
      }
      
      res.status(200).json(place);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
