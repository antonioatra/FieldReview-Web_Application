const express = require('express');
const router = express.Router();
const QuestionController = require('../../controllers/questionController');

router.post('/', QuestionController.store);
router.get('/:id', QuestionController.showById);
router.get('/module/:id', QuestionController.showByModuleId);
router.put('/:id', QuestionController.update);
router.delete('/:id', QuestionController.destroy);

module.exports = router;