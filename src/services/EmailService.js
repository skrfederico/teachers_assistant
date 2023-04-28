import axios from 'axios'

const URL = `${process.env.BASE_URL}/api/email`

const EmailService = axios.create({
  baseURL: URL
})

export const sendEmail = async (receiver, subject, message) => {
  return await EmailService.post('/send', { receiver, subject, message })
}
