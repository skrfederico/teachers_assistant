const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}

const dataController = {
  async create(req, res, next) {
    try {
      // body need => { name, email, password }
      console.log(-'the created req.body', req.body)
      const user = await User.create(req.body)
      //taken is a string

      const token = createJWT(user)
      // send back the token as a string
      // which we need to account for in the client
      res.locals.data.user = user
      res.locals.data.token = token
      console.log('trying to create user in users.js')
      next()
    } catch (error) {
      console.error(error)
      res.status(400).json(error)
    }
  },
  async login(req, res, next) {
    try {
      // body need => { email, password }
      const user = await User.findOne({ email: req.body.email })
      if (!user) {
        res.status(400).json('User not found')
        return
      }
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) {
        res.status(400).json('Bad Credentials')
        return
      }
      res.locals.data.user = user
      res.locals.data.token = createJWT(user)
      next()
    } catch (error) {
      await User.deleteOne({ email: req.body.email }) // delete the user if they exist
      res.status(400).json('Bad Credentials')
    }
  }
}

const apiController = {
  auth(req, res) {
    res.json(res.locals.data.token)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

/** Helper function */

function createJWT(user) {
  return jwt.sign(
    //data payload
    { user },
    process.env.SECRET ?? 'a secret word shh',
    { expiresIn: '24h' }
  )
}
