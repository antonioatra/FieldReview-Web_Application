const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/userController');
const authMiddleware = require('../../middleware/authMiddleware');

router.post('/', UserController.store);
router.get('/', UserController.show);
router.get('/me', UserController.getCurrentUser);
router.get('/:id', UserController.showById);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);
router.get('/find/stats', UserController.getUserStats);

module.exports = router;
