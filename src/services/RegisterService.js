import axios from 'axios'
class RegisterService {
  base_URL = 'http://localhost:3001/api/registers'

  constructor() {
    this.instance = axios.create({ baseURL: this.base_URL })
  }

  //this is almost like a credit interface
  //or a CRUD client
  async getAllRegisters() {
    const { data } = await this.instance.get('/')
    return data
  }

  async getOneRegister(id) {
    const { data } = await this.instance.get(`/${id}`)

    return data
  }
  async createRegister(register) {
    // return { _id: String(Math.random() * 124), body: group }
    try {
      const { data } = await this.instance.post('/', register)

      // {
      //   body: register
      // })
      // return data;
      //   // body: { body: group },
      //   body: group,
      //   method: 'POST'
      // })
      // const data = createdNote.json()
      // const { data } = await this.instance.post('/', { body: group })
      return data
    } catch (error) {
      console.error(error.response.data)
      throw error
    }
  }
  async deleteRegister(id) {
    const response = await this.instance.delete(`/${id}`)
    console.log('Deleted Register:', response.data)
  }
  catch(error) {
    console.error(error)
  }

  async updateRegister(id, register) {
    const { data } = await this.instance.put(`/${id}`, {
      body: register
    })
    return data
  }
}

//just one single service
const registerService = new RegisterService()
export default registerService

//Alternative
// import axios from 'axios'

// const RatingService = {
//   create: (studentId, groupId, attendance, hwCompletion, participation) => {
//     return axios.post('/api/ratings', {
//       student: studentId,
//       group: groupId,
//       attendance,
//       hwCompletion,
//       participation
//     })
//   }
// }

// export default RatingService
