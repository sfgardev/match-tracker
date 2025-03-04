import { instance } from '../../../shared/api'
import { MatchModel } from '../model'

export const matchesApi = {
  getMatches: async () => {
    const response = await instance('fronttemp')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const {
      data: { matches },
    } = await response.json()
    return matches as MatchModel[]
  },
}
