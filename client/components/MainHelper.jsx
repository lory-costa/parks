import requestor from '../consume'

export function getParkLocations (consume = requestor) {
  return consume('/park')
    .then((res) => {
      const { parks } = res.body
      const parkIds = parks.map(({ id }) => {
        return id
      })
      const parkCoords = parks.map(({ lat, lon }) => {
        return { lat, lon }
      })
      const addrs = parks.map(({ address }) => address)
      return {
        parkIds,
        parkCoords,
        addrs
      }
    })
    .catch((error) => {
      console.log(error.message)
    })
}
