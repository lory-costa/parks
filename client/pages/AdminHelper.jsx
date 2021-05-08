import requestor from '../consume'

export function getParkLocations (consume = requestor) {
  return consume('/park')
    .then((res) => {
      const { parks } = res.body
      return {
        parks
      }
    })
    .catch((error) => {
      console.log(error.message)
    })
}
