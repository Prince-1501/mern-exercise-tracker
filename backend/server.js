const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const exerciseRouter = require('./routes/exercise')
const userRouter = require('./routes/user')

require('dotenv').config()

var app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.MONGODB_URI
mongoose.connect(uri,{
  useNewUrlParser: true,
  useCreateIndex: true
})

const connection = mongoose.connection
connection.once('open',()=>{
  console.log("MongoDB database connection established successfully")
})

// Access the Routes
app.use('/exercise', exerciseRouter)
app.use('/user', userRouter)

app.listen(port,()=>{
  console.log(`server is up on port: ${port}`);
})







//
