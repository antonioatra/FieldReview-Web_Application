const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/userController');

router.post('/', UserController.store);
router.get('/', UserController.show);
router.get('/:id', UserController.showById);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router;
