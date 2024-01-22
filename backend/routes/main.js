const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
// const homeController = require("../controllers/home");
const playersController = require("../controllers/players");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
// router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, playersController.getPlayers);
router.get("/dashboard", ensureAuth,playersController.createPlayer);
router.get("/profile/:id", ensureAuth, playersController.getPlayer);
router.get("/feed", ensureAuth, playersController.getFeed);
router.get("/logout", authController.logout);


module.exports = router;