const express = require('express')
const passport = require('passport')
const router = express.Router()

//@desc Auth with Google
//@Route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//@desc Google auth callback
//@Route GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('http://localhost:5173/profiles') // Adjust this to your desired redirect route
  }
)

//@desc Auth with Twitter
//@Route GET /auth/twitter
router.get('/twitter', passport.authenticate('twitter'))

//@desc Twitter auth callback
//@Route GET /auth/twitter/callback
router.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
    failureRedirect: '/login',
    failureMessage: true,
  }),
  (req, res) => {
    res.redirect('http://localhost:5173/profiles') // Adjust this to your desired redirect route
  }
)

//@desc Logout User
//@Route GET /auth/logout
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  })
})

module.exports = router
