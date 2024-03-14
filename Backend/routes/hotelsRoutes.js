// routes.js
const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelsControllers');

router.post('/hotels', hotelController.createBulkHotels);
router.get('/hotels', hotelController.getAllHotels);
router.get('/hotels/:id', hotelController.getHotelById);

module.exports = router;
