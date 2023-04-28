import axios from 'axios'

class StudentService {
  // base_URL = 'http://localhost:3001/api'
  base_URL = 'https://seal-app-g96hp.ondigitalocean.app/'

  constructor() {
    this.instance = axios.create({ baseURL: this.base_URL })
  }

  //this is almost like a credit interface
  //or a CRUD client
  async getAllStudents() {
    const { data } = await this.instance.get('/')
    return data
  }

  async getOneStudent(id) {
    const { data } = await this.instance.get(`/${id}`)
    return data
  }

  async createStudent(student) {
    try {
      const { data } = await this.instance.post('/', student)
      return data
    } catch (error) {
      console.error(error.response.data)
      throw error
    }
    // return data
  }

  async deleteStudent(id) {
    return await this.instance.delete(`/${id}`)
  }

  async updateStudent(id, student, email, telephone, address, imgUrl, groupId) {
    const { data } = await this.instance.put(`/${id}`, {
      body: student,
      email: email,
      telephone: telephone,
      address: address,
      imgUrl: imgUrl,
      group: groupId
    })
    return data
  }
}
//This is a SINGLETON
//just one single service
const studentService = new StudentService()
export default studentService
