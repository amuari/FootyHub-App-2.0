const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const playerController = require('../controllers/players')
const authController = require('../controllers/auth')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/feed', ensureAuth, playerController.getPlayers)

router.get('/:playerId', ensureAuth, playerController.getPlayer)
router.post(
  '/createplayer',
  upload.single('image'),
  playerController.createPlayer
)
router.put('/editplayer/:playerID', playerController.likePlayer)
router.delete('/deleteplayer/:playerID', playerController.deletePlayer)

module.exports = router
