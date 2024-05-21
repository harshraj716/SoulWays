const { Restaurant, Dish } = require('../models');
const restaurantData = require('../data/restaurantData');

exports.createRestaurantAndDishes = async (req, res) => {
    const restaurants = restaurantData;
  
    try {
      await Promise.all(restaurants.map(async (restaurantData) => {
        const { name, address, country, cuisine, rating, reviews, img, phone, website, dishes } = restaurantData;
        
        const createdRestaurant = await Restaurant.create({
          name,
          address,
          country,
          cuisine,
          rating,
          reviews,
          img,
          phone,
          website
        });
  
        if (dishes && Array.isArray(dishes)) {
          await Promise.all(dishes.map(async (dishData) => {
            dishData.restaurantId = createdRestaurant.id;
            const createdDish = await Dish.create(dishData);
            await createdRestaurant.addDish(createdDish);
          }));
        }
      }));
  
      res.status(201).json({ message: 'Restaurants and dishes created successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getRestaurantWithDishes = async (req, res) => {
    const { id } = req.params;
  
    try {
      const restaurant = await Restaurant.findByPk(id, {
        include: {
          model: Dish,
          as: 'dishes'
        }
      });
  
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
  
      res.status(200).json(restaurant);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  