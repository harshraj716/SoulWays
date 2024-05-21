const express = require('express');
const router = express.Router();
const { signup, login, googleLogin ,getUsers, logout} = require('../controllers/userControllers'); 
const { authenticateToken } = require('../middleware/authMiddleware');


// Signup Route
router.post('/signup', signup);

// Login Route
router.post('/login', login);

// Google Login Route
router.post('/googlelogin', googleLogin);
router.get('/logout', logout);




module.exports = router;
