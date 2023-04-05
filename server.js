require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const groupController = require('./backend/controllers/groupController')
const studentController = require('./backend/controllers/studentController')
const registerController = require('./backend/controllers/registerController')

require('./backend/config/database')

const cors = require('cors')

app.use(logger('dev'))
app.use(express.json())

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
// The following "catch all" route (note the *) is necessary
// // to return the index.html on all non-AJAX requests
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// const db = require('./backend/db.js')
// db.once('open', () => {
//   console.log('connected to mongo')
// })
// Put API  here, before the "catch all" route

// THIS CAN BE COMMENTED OUT NOW
// app.get('/api', (req, res) => {
//   res.json({ message: 'The API is alive!!!' })
// })
app.use('/api/groups', groupController)
app.use('/api/students', studentController)
app.use('/api/registers', registerController)
// app.use(`/api/${activeGroup._id}/rate-students`, registerController)

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
})
