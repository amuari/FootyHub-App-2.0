const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
// const homeController = require("../controllers/home");
const playersController = require('../controllers/players')
const upload = require('../middleware/multer')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Main Routes - simplified for now
router.get('/', ensureGuest, playersController.getFeed)
router.get('/:playerID', ensureAuth, playersController.getPlayers)
router.post(
  '/createplayer',
  upload.single('image'),
  playersController.createPlayer
)
router.put('/editplayer/:playerID', playersController.likePlayer)
router.delete('/deleteplayer/:playerID', playersController.deletePlayer)
module.exports = router
