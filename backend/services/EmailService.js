const nodemailer = require('nodemailer')

async function createEmail(receiver, subject, message) {
  let testAccount = await nodemailer.createTestAccount()

  let transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAILTRAP_USER, // generated ethereal user
      pass: process.env.MAILTRAP_PASS // generated ethereal password
    }
  })

  let info = await transporter.sendMail({
    from: 'skrfederico@gmail.com', // sender address
    to: receiver, // list of receivers
    subject: subject, // subject line
    html: message // html body
  })
  return info
}

module.exports = { createEmail }
