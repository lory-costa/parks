// import { setParks } from '../actions/parks'
import { getParks } from '../apis/parks'

export function fetchParkLocations () {
  return getParks()
    .then((res) => {
      const { parks } = res.body
      const parkCoords = parks.map(({ lat, lon }) => {
        return { lat, lon }
      })
      const addrs = parks.map(({ address }) => address)
      return {
        parkCoords,
        addrs
      }
    })
    .catch((error) => {
      console.log(error.message)
    })
}
