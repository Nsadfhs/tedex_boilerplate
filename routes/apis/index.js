const express = require("express");
const router = express.Router();

const currentRouter = require("./v1/index.js");
router.use("/", currentRouter);

const v1Router = require("./v1/index.js");
router.use("/v1", v1Router);

const v2Router = require("./v2/index.js");
router.use("/v2", v2Router);

const testRouter = require("./test/index.js");
router.use("/test", testRouter);

module.exports = router;