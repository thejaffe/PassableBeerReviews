"use strict";
exports.__esModule = true;
var sgMail = require("@sendgrid/mail");
var express_1 = require("express");
var sanitize = require("sanitize-html");
var router = express_1.Router();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// index route
router.get("/", function (_a, res) {
    return res.render("index.html");
});
// article routes
router.get("/:article", function (req, res) { return res.render(req.params.article); });
// beer review routes
router.get("/reviews/:beer", function (req, res) { return res.render(req.params.beer); });
// send email route
var message = function (req) {
    var first = sanitize(req.body.first);
    var fromAddress = sanitize(req.body.email);
    var last = sanitize(req.body.last);
    var suggestion = sanitize(req.body.suggestion);
    var toAddress = "passablebeers@gmail.com";
    var data = {
        from: fromAddress,
        subject: "Beer Suggestion from " + (first + " " + last),
        text: suggestion,
        to: toAddress
    };
    return data;
};
router.post("/contact", function (req, res) {
    var msg = message(req);
    sgMail.send(msg)
        .then(function () {
        res.render("success.html");
    })["catch"](function (error) {
        res.render("error.html", { message: error });
    });
});
exports.Routes = router;
