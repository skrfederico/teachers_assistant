const express = require('express')
const EmailService = require('../services/EmailService')
const EmailController = express.Router()

EmailController.post('/send', async (req, res) => {
  try {
    const { subject, receiver, message } = req.body
    if (!subject || !receiver || !message) {
      throw new Error('missing fields')
    }
    await EmailService.sendEmail(subject, receiver, message)
    res.status(200).json({
      message: 'Email was sent',
      code: 200
    })
  } catch (e) {
    res.status(400).json({
      message: e.message,
      code: 400
    })
  }
})

module.exports = EmailController
