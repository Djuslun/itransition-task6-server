require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_URL }))
app.use('/', router)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
  } catch (e) {
    console.log(e.message)
  }
}

start()