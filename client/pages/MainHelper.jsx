import requestor from '../consume'

export function getParkLocations (consume = requestor) {
  return consume('/park')
    .then((res) => {
      const parks = res.body.parks.filter(park => park.approved === 1)
      const parkIds = parks.map(({ id }) => {
        return id
      })
      const parkCoords = parks.map(({ lat, lon }) => {
        return { lat, lon }
      })
      const addrs = parks.map(({ address }) => address)
      const prkNames = parks.map(({ name }) => name )
      const prkImages = parks.map(({ image }) => image)
      return {
        parkIds,
        parkCoords,
        addrs,
        prkNames,
        prkImages
      }
    })
    .catch((error) => {
      console.log(error.message)
    })
}
