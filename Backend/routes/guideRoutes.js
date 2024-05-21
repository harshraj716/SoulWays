const express = require('express');
const router = express.Router();
const guideController = require('../controllers/guideControllers');

// Route to fetch all guides
router.get('/guides', guideController.getAllGuides);

// Route to fetch guide by ID
router.get('/guides/:id', guideController.getGuideById);

module.exports = router;
