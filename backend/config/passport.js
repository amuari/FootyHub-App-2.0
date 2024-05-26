const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const TwitterStrategy = require('passport-twitter').Strategy
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/userModel')

module.exports = function (passport) {
  // Local strategy
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email: email.toLowerCase() })
          if (!user) {
            return done(null, false, { msg: `Email ${email} not found.` })
          }
          if (!user.password) {
            return done(null, false, {
              msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.',
            })
          }
          const isMatch = await user.comparePassword(password)
          if (isMatch) {
            return done(null, user)
          } else {
            return done(null, false, { msg: 'Invalid email or password.' })
          }
        } catch (err) {
          return done(err)
        }
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id)
      done(null, user)
    } catch (err) {
      done(err, null)
    }
  })

  // Google strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ googleId: profile.id })
          if (user) {
            return done(null, user)
          } else {
            const newUser = {
              googleId: profile.id,
              displayName: profile.displayName,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              // image: profile.photos[0].value
            }
            user = await User.create(newUser)
            return done(null, user)
          }
        } catch (err) {
          return done(err, null)
        }
      }
    )
  )

  // Twitter strategy
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.TWITTER_KEY,
        consumerSecret: process.env.TWITTER_SECRET,
        callbackURL: '/auth/twitter/callback',
        passReqToCallback: true,
      },
      async (req, accessToken, tokenSecret, profile, done) => {
        try {
          if (req.user) {
            const existingUser = await User.findOne({ twitter: profile.id })
            if (existingUser) {
              req.flash('errors', {
                msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.',
              })
              return done(null, existingUser)
            }
            const user = await User.findById(req.user.id)
            user.twitter = profile.id
            user.tokens.push({ kind: 'twitter', accessToken, tokenSecret })
            user.profile.name = user.profile.name || profile.displayName
            user.profile.location =
              user.profile.location || profile._json.location
            user.profile.picture =
              user.profile.picture || profile._json.profile_image_url_https
            await user.save()
            req.flash('info', { msg: 'Twitter account has been linked.' })
            return done(null, user)
          } else {
            const existingUser = await User.findOne({ twitter: profile.id })
            if (existingUser) {
              return done(null, existingUser)
            }
            const user = new User()
            user.email = `${profile.username}@twitter.com` // Twitter does not provide email
            user.twitter = profile.id

            user.profile.name = profile.displayName
            user.profile.location = profile._json.location
            user.profile.picture = profile._json.profile_image_url_https
            await user.save()
            return done(null, user)
          }
        } catch (err) {
          return done(err, null)
        }
      }
    )
  )
}
