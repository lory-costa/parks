import requestor from '../consume'

export function getParkLocations (filterItem, consume = requestor) {
  return consume('/park')
    .then((res) => {
      let parks = res.body.parks.filter(park => park.approved === 1)
      if (filterItem) {
        parks = parks.filter(park => park[filterItem] === 1)
      }
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
