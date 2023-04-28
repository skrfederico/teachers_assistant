import axios from 'axios'

class GroupService {
  base_URL = `/api/groups`
  // base_URL = 'http://localhost:3001/api'

  constructor() {
    this.instance = axios.create({ baseURL: this.base_URL })
  }

  //this is almost like a credit interface
  //or a CRUD client
  async getAllGroups() {
    const { data } = await this.instance.get('/')
    return data
  }

  async getOneGroup(id) {
    const { data } = await this.instance.get(`/${id}`)

    return data
  }
  async createGroup(group) {
    // return { _id: String(Math.random() * 124), body: group }
    const { data } = await this.instance.post('/', {
      body: group
    })
    return data
  }
  async deleteGroup(id) {
    const response = await this.instance.delete(`/${id}`)
    console.log('Deleted Group:', response.data)
  }
  catch(error) {
    console.error(error)
  }

  async updateGroup(id, group, completed, category, institution, days) {
    const { data } = await this.instance.put(`/${id}`, {
      body: group,
      completed: completed,
      category: category,
      institution: institution,
      days: days
    })
    return data
  }
}
//This is a SINGLETON
const groupService = new GroupService()
export default groupService
