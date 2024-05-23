const express = require('express');
const router = express.Router();
const userReviewController = require('../controllers/userReviewController');
const userContactController = require('../controllers/contactController');

//review
router.post('/users/review', userReviewController.createUserReview);
router.get('/users/review', userReviewController.getAllReviews);
router.put('/users/review/:id', userReviewController.updateUserReview);
router.delete('/users/review:id', userReviewController.deleteUserReview);


//conact
router.post('/user/contact',userContactController.createContactUs );

module.exports = router;
