const sendGrid = require('@sendgrid/mail')

const SENDER_EMAIL = process.env.SENDER_EMAIL ?? 'email@example.com'
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY ?? ''

const EmailService = {
  sendEmail: async (subject, receiver, message) => {
    sendGrid.setApiKey(SENDGRID_API_KEY)
    const email = createEmail(subject, receiver, message)
    await sendGrid.send(email)
  }
}

const createEmail = (subject, receiver, message) => {
  return {
    to: receiver,
    from: SENDER_EMAIL,
    subject,
    html: message
  }
}

module.exports = EmailService
