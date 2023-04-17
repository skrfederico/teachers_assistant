require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const groupController = require('./backend/controllers/groupController')
const studentController = require('./backend/controllers/studentController')
const registerController = require('./backend/controllers/registerController')
const userController = require('./backend/controllers/userController')

require('./backend/config/database')

const cors = require('cors')
const EmailController = require('./backend/controllers/EmailController')

app.use(logger('dev'))
app.use(express.json())

// // Configure both serve-favicon & static middleware
// // to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
// app.use(express.static(path.join(__dirname, 'build')))

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

// Check if token and create req.user
app.use(require('./backend/config/checkToken'))

//Routes
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./backend/controllers/userController'))

// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./backend/config/ensureLoggedIn')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/groups', groupController)
app.use('/api/students', studentController)
app.use('/api/registers', registerController)
app.use('/api/users', userController)
app.use('/api/email', EmailController)
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
})
