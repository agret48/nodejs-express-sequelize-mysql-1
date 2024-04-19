const express = require("express");
const router = new express.Router();
const AuthentificationController = require('../controllers/authentification.controller');

router.post("/createUserAuthentification", AuthentificationController.createUser);
router.post("/loginAuthentification", AuthentificationController.login)

module.exports = router;  