import requestor from '../consume'

export function getParkLocations (consume = requestor) {
  return consume('/park')
    .then((res) => {
      const { parks } = res.body
      const approvedParks = parks.filter(park => park.approved === 1)
      const pendingParks = parks.filter(park => park.approved === 0)
      return {
        approvedParks, pendingParks
      }
    })
    .catch((error) => {
      console.log(error.message)
    })
}
