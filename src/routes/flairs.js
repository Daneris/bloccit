const flairController = require("../controllers/flairController");
const express = require("express");
const router = express.Router();


router.get("/flairs", flairController.index);

module.exports = router;
