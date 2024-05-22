const Players = require('../models/playerModel')
const cloudinary = require('../middleware/cloudinary')

module.exports = {
  getPlayers: async (req, res) => {
    try {
      const players = await Players.find()

      res.json(players)
    } catch (error) {
      res.status(500).send(error)
    }
  },
  getPlayer: async (req, res) => {
    const playerId = req.params.id
    // const playerId = await Players.findById({ _id: req.params.id })
    try {
      const player = await Players.findById(playerId)
      console.log(player)
      res.status(200).json(player)
      if (!player) {
        throw new Error('player not found')
      }
    } catch (error) {
      console.log(error)
    }
  },
  getFeed: async (req, res) => {
    try {
      const players = await Players.find().sort({ createdAt: 'desc' }).lean()
      res.status(200).json({ players: players })
    } catch (err) {
      console.log(err)
    }
  },
  createPlayer: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path)

      await Players.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        country: req.body.country,
        position: req.body.position,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        likes: 0,
        // user: req.user.id,
      })
      console.log('Player Profile Added!')
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  },
  likePlayer: async (req, res) => {
    try {
      await Players.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      )
      console.log('Likes +1')
      // res.redirect(`/profiles/${req.params.id}`)
    } catch (err) {
      console.log(err)
    }
  },
  deletePlayer: async (req, res) => {
    try {
      // Find post by id
      let player = await Players.findById({ _id: req.params.id })
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(player.cloudinaryId)
      // Delete post from db
      await Post.remove({ _id: req.params.id })
      if (!player) {
        return res.status(404).json({ error: 'Player not found' })
      }
      console.log('Deleted Post')
      res.redirect('/profiles')
    } catch (err) {
      res.status(500).send(err)
      res.redirect('/profiles')
    }
  },
}
