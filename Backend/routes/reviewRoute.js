const express = require('express');
const router = express.Router();
const userReviewController = require('../controllers/userReviewController');

router.post('/users/review', userReviewController.createUserReview);
router.get('/users/review', userReviewController.getAllReviews);
router.put('/users/review/:id', userReviewController.updateUserReview);
router.delete('/users/review:id', userReviewController.deleteUserReview);

module.exports = router;
