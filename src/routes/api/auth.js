const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/authController');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
});

module.exports = router;
