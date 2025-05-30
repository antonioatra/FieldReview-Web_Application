const express = require('express');
const router = express.Router();
const CertificateController = require('../../controllers/certificateController');

router.post('/', CertificateController.store);
router.get('/:userId', CertificateController.showByUserId);
router.patch('/:id', CertificateController.update);

module.exports = router;