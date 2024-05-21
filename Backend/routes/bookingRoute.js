const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middleware/authMiddleware')
const bookingController = require('../controllers/bookingController');

// Route to fetch all guides
router.post('/booking', bookingController.createHotelBooking);
router.post('/booking/tour', bookingController.createTourBooking);

router.get('/user/hotelbooking/:id', bookingController.getBookings);
router.get('/user/Tourbooking/:id', bookingController.getTourBookings);

module.exports = router;
