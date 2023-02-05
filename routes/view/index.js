const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index.html");
});
router.get("/", function (req, res, next) {
    res.render("home.html");
});
router.get("/", function (req, res, next) {
    res.render("main.html");
});
router.get("/", function (req, res, next) {
    res.render("landing.html");
});

const signViewRouter = require("./sign.js");
router.use("/sign", signViewRouter);

module.exports = router;