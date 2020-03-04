var express = require("express");
var userController = require("../controllers/users");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  userController.list_user(req, res, next);
});

module.exports = router;
