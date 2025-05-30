const express = require("express");
const router = express.Router();
const HelpController = require("../../controllers/helpController");

router.post("/", HelpController.store);
router.get("/", HelpController.show);
router.get("/:id", HelpController.showById);
router.patch("/:id", HelpController.update);
router.delete("/:id", HelpController.destroy);

module.exports = router;
