const { Place, Tourist, Guide } = require('../models'); 
const placeData = require('../data/placesData');

exports.createPlaceAndTourist = async (req, res) => {
  const places = placeData;

  try {
    await Promise.all(places.map(async (placeData) => {
      const { name, capital, about, climate, history, time, food, img, tourist, guides } = placeData;
      
      const createdPlace = await Place.create({
        name,
        capital,
        about,
        climate,
        history,
        time,
        food,
        img
      });

      if (tourist && Array.isArray(tourist)) {
        await Promise.all(tourist.map(async (touristData) => {
          const createdTourist = await Tourist.create(touristData);
          await createdPlace.addTourist(createdTourist);
        }));
      }

      if (guides && Array.isArray(guides)) {
        await Promise.all(guides.map(async (guideData) => {
          const createdGuide = await Guide.create(guideData);
          await createdPlace.addGuide(createdGuide);
        }));
      }
    }));

    res.status(201).json({ message: 'Places, tourists, and guides created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.findAll({ include: 'tourists' }); 
    res.status(200).json(places);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPlaceById = async (req, res) => {
  try {
    const placeId = req.params.id;
    const place = await Place.findByPk(placeId, {
      include: [
        { model: Tourist, as: 'tourists' }, 
        { model: Guide, as: 'guides' }   
    ]
     }); 
    
    if (!place) {
      return res.status(404).json({ error: 'Place not found' });
    }
    
    res.status(200).json(place);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTouristPlaceById = async (req, res) => {
  try {
    const touristId = req.params.id;
    const touristPlace = await Tourist.findByPk(touristId); 
    
    if (!touristPlace) {
      return res.status(404).json({ error: 'Tourist Place not found' });
    }
    
    res.status(200).json(touristPlace);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

