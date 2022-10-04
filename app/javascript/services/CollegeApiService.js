import fetch from 'isomorphic-unfetch'

const ENDPOINT = 'http://localhost:3000/colleges'

export default class CollegeApiService {
  static async getColleges({ search }) {
    const url = `${ENDPOINT}?search=${search}`

    try {
      const response = await fetch(url)
      return await response.json()
    } catch (error) {
      return { error }
    }
  }
}
