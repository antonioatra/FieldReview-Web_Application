const express = require('express');
const router = express.Router();
const ModuleController = require('../../controllers/moduleController');

router.post('/', ModuleController.store);
router.get('/:id', ModuleController.showById);
router.get('/trail/:id', ModuleController.showByTrailId);
router.get('/:id/user/:userId', ModuleController.showByUserId);
router.patch('/:id', ModuleController.update);
router.delete('/:id', ModuleController.destroy);

module.exports = router;
