// const express = require('express')
// const app = express()

// const EmailService = require('../services/EmailService')
// const EmailController = express.Router()

// app.use(express.json())

// EmailController.post('/send', async (req, res) => {
//   try {
//     const { receiver, subject, message } = req.body
//     if (!subject || !receiver || !message) {
//       throw new Error('missing fields')
//     }
//     await EmailService.createEmail(receiver, subject, message)
//     res.status(200).json({
//       message: 'Email was sent',
//       code: 200
//     })
//   } catch (e) {
//     res.status(400).json({
//       message: e.message,
//       code: 400
//     })
//   }
// })

// module.exports = EmailController
