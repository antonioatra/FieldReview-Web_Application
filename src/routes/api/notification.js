const express = require('express');
const router = express.Router();
const NotificationController = require('../../controllers/notificationController');

router.post('/', NotificationController.store);
router.get('/', NotificationController.show);
router.get('/:id', NotificationController.showById);
router.patch('/:id', NotificationController.update);
router.delete('/:id', NotificationController.destroy);

module.exports = router; 
