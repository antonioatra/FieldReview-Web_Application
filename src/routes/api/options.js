const express = require('express');
const router = express.Router();
const Option = require('../../controllers/optionController');

router.post('/', Option.store);
router.get('/question/:id', Option.showByQuestionId);

module.exports = router;