const passport = require("passport");
const validator = require("validator");
const User = require("../models/userModel");

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/profiles");
  }
  // Render your signup page or send a JSON response
  // res.render("signup", {
  //   title: "Create Account",
  // });
};

exports.postSignup = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
    // If there are validation errors, you can send them back to the frontend
    return res.status(400).json({ errors: validationErrors });
  }

  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (existingUser) {
        return res.status(400).json({
          errors: [
            {
              msg: "Account with that email address or username already exists.",
            },
          ],
        });
      }

      user.save((err) => {
        if (err) {
          return res.status(500).json({ error: "Internal Server Error" });
        }
        req.logIn(user, (err) => {
          if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
          }
          // If signup is successful, you can send a success response to the frontend
          res.status(201).json({ success: "Signup successful" });
        });
      });
    }
  );
};
