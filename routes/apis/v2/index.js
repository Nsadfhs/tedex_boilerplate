const express = require("express");
const router = express.Router();

const signRouter = require('./sign/sign.route.js');
router.use("/sign", signRouter);

module.exports = router;