const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      username
    });

    const token = generateToken(newUser.id); 
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); 
    res.cookie('userId', newUser.id, { maxAge: 3600000 }); 
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error in user signup:', error);
    res.status(500).json({ error: 'Failed to signup user' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user.id); 
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); 
    res.cookie('userId', user.id, { maxAge: 3600000 }); 
    res.status(200).json({ message: 'User login successful', user });
  } catch (error) {
    console.error('Error in user login:', error);
    res.status(500).json({ error: 'Failed to login user' });
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie('token');
    res.clearCookie('userId'); 
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'Failed to logout' });
  }
};

exports.googleLogin = async (req, res) => {
  try {
    const { uid, email, username, photoURL } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      const token = generateToken(existingUser.id); 
      res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); 
      res.cookie('userId', existingUser.id, { maxAge: 3600000 }); 
      return res.status(200).json({ message: 'User login with Google successful', user: existingUser });
    }

    const newUser = await User.create({
      uid,
      email,
      username,
      photoURL
    });

    const token = generateToken(newUser.id); 
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); 
    res.cookie('userId', newUser.id, { maxAge: 3600000 }); 
    return res.status(201).json({ message: 'User login with Google successful', user: newUser });
  } catch (error) {
    console.error('Error in Google login:', error);
    res.status(500).json({ error: 'Failed to login with Google' });
  }
};
