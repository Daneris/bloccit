const flairController = require("../controllers/flairController");
const express = require("express");
const router = express.Router();


router.get("/flairs", flairController.index);
router.get("/posts/:postId/flairs/new", flairController.new);
router.post("/posts/:postId/flairs/create", flairController.create);

router.get("/posts/:postId/flairs/:id", flairController.show);



router.post("/flairs/:id/destroy", flairController.destroy);
router.get("/flairs/:flairId/posts/:id/edit", flairController.edit);

module.exports = router;
