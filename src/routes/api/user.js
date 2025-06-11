const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/userController');
const authMiddleware = require('../../middleware/authMiddleware');

router.post('/', authMiddleware('consultor'), UserController.store);
router.get('/', authMiddleware('consultor'), UserController.show);
router.get('/me', authMiddleware(), UserController.getCurrentUser);
router.get('/:id', authMiddleware(), UserController.showById);
router.patch('/:id', authMiddleware(), UserController.update);
router.delete('/:id', authMiddleware('consultor'), UserController.destroy);

module.exports = router;
