const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },

  age: {
    type: Number,
  },
  likes: {
    type: Number,
  },
  image: {
    type: String,
  },
  position: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },

  country: {
    type: String,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

//MongoDB Collection named here - will give lowercase plural of name
module.exports = mongoose.model('Player', PlayerSchema)
