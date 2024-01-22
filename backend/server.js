const express=require('express')
const app=express()
const mongoose=require('mongoose')
const PORT=process.env.PORT||8080
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const logger = require("morgan");
const colors=require('colors')
const connectDB=require('./config/db')
const playerRoutes=require('./routes/player')
const authRoutes=require('./routes/auth')
const bodyParser = require('body-parser');
const cors = require('cors')

// passport config
require("./config/passport")(passport);
// middlewares
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)
require('dotenv').config({ path: './config/.env' })
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json());

// connect to database
connectDB()

//Logging
app.use(logger("dev"))

// Setup Sessions - stored in MongoDB
app.use(session({
  secret:'keyboard cat',
  resave:false,
  saveUninitialized:false,
  store: MongoStore.create({
      mongoUrl:process.env.DB_STRING
  })
  
}))
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

// routes
app.use('/dashboard',playerRoutes)
app.use('/auth',authRoutes)



app.listen(PORT,()=>{
  console.log(  `Server is running on ${PORT}`);
})