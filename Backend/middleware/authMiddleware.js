// authMiddleware.js
const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    const token =  req.cookies?.token;
    if (!token) {
      return res.status(401).json({ error: 'Token not provided' });
    }
   jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }
      req.userId = decodedToken.userId; 
      next();
    });
};
