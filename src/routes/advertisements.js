const express = require("express");
const router = express.Router();

const advertisementController = require("../controllers/advertisementController");

router.get("/advertisements", advertisementController.index);
router.get("/advertisements/new", advertisementController.new);
router.post("/advertisements/create", advertisementController.create);
router.get("/advertisements/title", advertisementController.show);
router.post("/advertisements/title/destroy", advertisementController.destroy);

module.exports = router;
