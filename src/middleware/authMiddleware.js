const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (requiredRole = null) => {
  return (req, res, next) => {
    let token;

    // Check Authorization header first
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    } else {
      // Check cookie
      token = req.cookies.token;
      console.log('Token from cookie:', token);
    }

    if (!token) {
      // Check if request is for an API route
      if (req.originalUrl.startsWith('/api/')) {
        return res.status(401).json({ error: 'No token provided' });
      }
      // Redirect to login for non-API routes
      return res.redirect('/login');
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // Check if user has required role
      if (requiredRole && decoded.role !== requiredRole) {
        return res.status(403).json({ error: 'Insufficient permissions' });
      }

      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
};

module.exports = authMiddleware;
