import axios from 'axios'

class StudentService {
  // base_URL = 'http://localhost:3001/api'
  base_URL = 'http://localhost:3001/api/students'

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
    console.log(student)
    try {
      const { data } = await this.instance.post('/', student)
      // {
      //   body: student,
      //   group: groupId
      // })
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

  async updateStudent(
    id,
    student,
    // attendance,
    // hwCompletion,
    // participation,
    email,
    telephone,
    address,
    groupId
  ) {
    const { data } = await this.instance.put(`/${id}`, {
      body: student,
      // attendance: attendance,
      // hwCompletion: hwCompletion,
      // participation: participation,
      email: email,
      telephone: telephone,
      address: address,
      group: groupId
    })
    return data
  }
}
//This is a SINGLETON
//just one single service
const studentService = new StudentService()
export default studentService
