// routes.js
const express = require('express');
const router = express.Router();
const placesController = require('../controllers/placesControllers');

router.post('/places', placesController.createBulkPlaces);
router.get('/places', placesController.getAllPlaces);
router.get('/places/:id', placesController.getPlaceById);

module.exports = router;
