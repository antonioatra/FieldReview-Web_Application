const express = require('express');
const router = express.Router();
const TrailController = require('../../controllers/trailController');

router.post('/', TrailController.store);
router.get('/', TrailController.showAll);
router.get('/:id', TrailController.showById);
router.patch('/:id', TrailController.update);
router.delete('/:id', TrailController.destroy);
router.post('/:id/user/:userId', TrailController.assignTrail);
router.get('/user/:userId', TrailController.showByUser);
router.get('/completed/:userId', TrailController.getCompletedTrails);
router.post('/module/:moduleId/complete/:userId', TrailController.markModuleComplete);

module.exports = router;
