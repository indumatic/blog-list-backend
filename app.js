const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const blogsRouter = require('./controllers/blogs')

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app