const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes.js");
const commentRoutes = require("./comment-routes");

router.use("/comments", commentRoutes);
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
