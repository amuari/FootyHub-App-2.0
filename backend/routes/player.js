const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const playerController = require('../controllers/players')
const {ensureAuth ,ensureGuest} =require('../middleware/auth')

router.get('/',ensureAuth, playerController.getPlayers)
router.get('/profiles',ensureAuth, playerController.getFeed)
router.get('/:playerID',ensureAuth, playerController.getPlayer)
router.post('/createplayer', upload.single("image"), playerController.createPlayer)
router.put('/editplayer/:playerID',playerController.likePlayer )
router.delete('/deleteplayer/:playerID', playerController.deletePlayer)

module.exports = router