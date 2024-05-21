// routes.js
const express = require('express');
const router = express.Router();
const placesController = require('../controllers/placesControllers');

router.post('/places', placesController.createPlaceAndTourist);
router.get('/places', placesController.getAllPlaces);
router.get('/places/:id', placesController.getPlaceById);
router.get('/tourist-places/:id', placesController.getTouristPlaceById);

module.exports = router;
