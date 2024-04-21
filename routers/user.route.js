const express = require("express");
const router = new express.Router();
const UserController = require('../controllers/user. controller');

router.post("/createUser", UserController.createUser);
router.post("/login", UserController.createUserOrLogin)
router.post("/createComments", UserController.createComments)

module.exports = router;  