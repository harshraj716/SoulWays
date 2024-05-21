const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restroController');

router.post('/restaurants', restaurantController.createRestaurantAndDishes);
router.get('/restaurants', restaurantController.getAllRestaurants);
router.get('/restaurants/:id', restaurantController.getRestaurantWithDishes);

module.exports = router;
