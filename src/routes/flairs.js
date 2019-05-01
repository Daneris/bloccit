const flairController = require("../controllers/flairController");
const express = require("express");
const router = express.Router();


router.get("/flairs", flairController.index);
router.get("/topics/:topicId/posts/:postId/flairs/new", flairController.new);
router.post("/topics/:topicId/posts/:postId/flairs/create", flairController.create);



router.get("/topics/:topicId/posts/:postId/flairs/:id", flairController.show);



router.post("/topics/:topicId/posts/:postId/flairs/:id/destroy", flairController.destroy);
router.get("/topics/:topicId/posts/:postId/flairs/:id/edit", flairController.edit);


module.exports = router;
