const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  age: {
    type: String,
  },
  likes: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
  traits: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    required: true,
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
