const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/comment", require("./comment.routes"));
router.use("/framework", require("./frameworks.routes"));
router.use("/quality", require("./qualities.routes"));
router.use("/user", require("./users.routes"));

module.exports = router;
