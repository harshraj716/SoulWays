const { UserReview,Hotel,User} = require('../models');

const createUserReview = async (req, res) => {
  try {
    const {reviews,hotelId,userId } = req.body;
    const userReview = await UserReview.create({
        reviews,
        hotelId,
        userId
    });
    res.status(201).json(userReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllReviews = async (req, res) => {
    try {
      const reviews = await UserReview.findAll({
        include: [
          { model: Hotel, as: 'hotelReviews' }, 
          { model: User, as: 'usersReviews' }   
      ]
      });
      res.json(reviews);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  const updateUserReview = async (req, res) => {
    try {
      const { id } = req.params;
      const userReview = await UserReview.findByPk(id);
      if (!userReview) {
        res.status(404).json({ message: 'User review not found' });
      } else {
        const userId = req.cookies.userId; 
        if (userReview.userId !== userId) {
          res.status(403).json({ message: 'Unauthorized' });
        } else {
          await userReview.update(req.body);
          res.json(userReview);
        }
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

const deleteUserReview = async (req, res) => {
  try {
    const { id } = req.params;
    const userReview = await UserReview.findByPk(id);
    if (!userReview) {
      res.status(404).json({ message: 'User review not found' });
    } else {
      await userReview.destroy();
      res.status(204).end();
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createUserReview,
  getAllReviews,
  updateUserReview,
  deleteUserReview,
};
