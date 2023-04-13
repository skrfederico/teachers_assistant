import axios from 'axios'

const URL = 'http://localhost:3001/api/email'
const EmailService = axios.create({
  baseURL: URL
})

export const sendEmail = async (subject, receiver, message) => {
  return await EmailService.post('/send', { subject, receiver, message })
}
