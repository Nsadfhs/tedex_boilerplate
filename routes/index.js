const express = require("express");
const router = express.Router();

const viewRouter = require("./view/index.js");
const apisRouter = require("./apis/index.js");

router.use("/", viewRouter);
router.use("/apis", apisRouter);

module.exports = router;