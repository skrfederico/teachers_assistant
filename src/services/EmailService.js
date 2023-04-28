import axios from 'axios'

const URL = 'https://seal-app-g96hp.ondigitalocean.app/'

const EmailService = axios.create({
  baseURL: URL
})

export const sendEmail = async (receiver, subject, message) => {
  return await EmailService.post('/send', { receiver, subject, message })
}
