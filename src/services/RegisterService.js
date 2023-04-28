import axios from 'axios'

class RegisterService {
  base_URL = 'https://seal-app-g96hp.ondigitalocean.app/'

  constructor() {
    this.instance = axios.create({ baseURL: this.base_URL })
  }

  async getAllRegisters() {
    const { data } = await this.instance.get('/')
    return data
  }

  async getOneRegister(id) {
    const { data } = await this.instance.get(`/${id}`)

    return data
  }

  async createRegister(registerData) {
    try {
      const { data } = await this.instance.post('/', {
        student: registerData.student,
        group: registerData.group,
        attendance: registerData.attendance,
        hwCompletion: registerData.hwCompletion,
        participation: registerData.participation
      })
      return data
    } catch (error) {
      console.error(error.response.data)
    }
  }
}
const registerService = new RegisterService()
export default registerService

// import axios from 'axios'
// class RegisterService {
//   base_URL = 'http://localhost:3001/api/registers'

//   constructor() {
//     this.instance = axios.create({ baseURL: this.base_URL })
//   }

//   //this is almost like a credit interface
//   //or a CRUD client
//   async getAllRegisters() {
//     const { data } = await this.instance.get('/')
//     return data
//   }

//   async getOneRegister(id) {
//     const { data } = await this.instance.get(`/${id}`)

//     return data
//   }
//   // restructuring previous createRegister
//   // async createRegister(
//   //   register,
//   //   student,
//   //   group,
//   //   attendance,
//   //   hwCompletion,
//   //   participation,
//   //   date
//   // ) {
//   //   console.log(register)
//   //   // return { _id: String(Math.random() * 124), body: group }
//   //   try {
//   //     const { data } = await this.instance.post('/', {
//   //       register: register,
//   //       student: student,
//   //       group: group,
//   //       attendance: attendance,
//   //       hwCompletion: hwCompletion,
//   //       participation: participation,
//   //       date: date
//   //     })
//   //     return data
//   //   } catch (error) {
//   //     console.error(error.response.data)
//   //     throw error
//   //   }
//   // }
//   //
//   /* lo que tiene q tener register {
//     attendance:boolean,
//     homework:bollean,
//     participation:string,
//     student:Student,
//     group:Group
//   }
//   */
//   async createRegister(
//     register,
//     student,
//     group,
//     attendance,
//     hwCompletion,
//     participation,
//     date
//   ) {
//     const { data } = await this.instance.post('/', {
//       register: register,
//       student: student,
//       group: group,
//       attendance: attendance,
//       hwCompletion: hwCompletion,
//       participation: participation,
//       date: date
//     })
//     return data
//   }

//   async deleteRegister(id) {
//     const response = await this.instance.delete(`/${id}`)
//     console.log('Deleted Register:', response.data)
//   }
//   catch(error) {
//     console.error(error)
//   }

//   async updateRegister(
//     id,
//     student,
//     group,
//     attendance,
//     hwCompletion,
//     participation,
//     date
//   ) {
//     const { data } = await this.instance.put(`/${id}`, {
//       student: student,
//       group: group,
//       attendance: attendance,
//       hwCompletion: hwCompletion,
//       participation: participation,
//       date: date
//     })
//     return data
//   }
// }

// //simpler update
// // async updateRegister(id, register) {
// //   const { data } = await this.instance.put(`/${id}`, {
// //     body: register
// //   })
// //   return data
// // }

// //just one single service
// const registerService = new RegisterService()
// export default registerService

// //Alternative
// // import axios from 'axios'

// // const RatingService = {
// //   create: (studentId, groupId, attendance, hwCompletion, participation) => {
// //     return axios.post('/api/ratings', {
// //       student: studentId,
// //       group: groupId,
// //       attendance,
// //       hwCompletion,
// //       participation
// //     })
// //   }
// // }

// // export default RatingService
