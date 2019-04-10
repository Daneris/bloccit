const flairController = require("../controllers/flairController");
const express = require("express");
const router = express.Router();


router.get("/flairs", flairController.index);
router.get("/posts/:postId/flairs/new", flairController.new);
router.post("/flairs/create", flairController.create);
router.get("/flairs/:id", flairController.show);
router.post("/flairs/:id/destroy", flairController.destroy);
router.get("/flairs/:flairId/posts/:id/edit", flairController.edit);

module.exports = router;
