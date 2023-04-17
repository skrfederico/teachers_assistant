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
    subject: subject, // Subject line
    // text: "Hello world?", // plain text body
    html: message // html body
  })
  console.log('info', info)
  return info
}

module.exports = { createEmail }

// 'use strict'
// const nodemailer = require('nodemailer')

// // async..await is not allowed in global scope, must use a wrapper
// async function createEmail(subject, receiver, message) {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount()

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'sandbox.smtp.mailtrap.io',
//     port: 2525,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: process.env.MAILTRAP_USER, // generated ethereal user
//       pass: process.env.MAILTRAP_PASS // generated ethereal password
//     }
//   })

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: 'skrfederico@gmail.com', // sender address
//     to: receiver, // list of receivers
//     subject: subject, // Subject line
//     // text: "Hello world?", // plain text body
//     html: message // html body
//   })

//   console.log('Message sent: %s', info.messageId)
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// createEmail().catch(console.error)

// module.exports.createEmail
