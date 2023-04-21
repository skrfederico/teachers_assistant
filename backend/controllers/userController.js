const express = require('express')
const router = express.Router()
// const cors = require('cors')

const {
  checkToken,
  dataController,
  apiController
  // } = require('../../backend/controllers/api/users')
} = require('../../backend/services/userService')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// Post //users/login
router.post(
  '/login',
  // cors(),
  dataController.login,
  apiController.auth
)

// Get /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken)

// POST /api/users
router.post(
  '/',
  // cors(),
  dataController.create,
  apiController.auth
)

module.exports = router
