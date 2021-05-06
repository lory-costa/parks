// import { setParks } from '../actions/parks'
import { getParks } from '../apis/parks'

export function fetchParkLocations () {
  return getParks()
    .then((res) => {
      console.log(res)
      const parks = res
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
