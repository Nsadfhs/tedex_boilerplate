const express = require('express');
const router = express.Router();

const controller = require('./sign.controller.js');

router.post("/up", controller.signup);

module.exports = router;