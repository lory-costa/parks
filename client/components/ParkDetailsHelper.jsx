import { setParks } from '../actions/parks'
import { getParks } from '../apis/parks'

export function fetchParks () {
  return dispatch => {
    return getParks()
      .then((res) => {
        const park = res.body
        dispatch(setParks({
          name: park.park_name,
          address: park.park_address,
          url: park.council_url,
          image: park.image,
          playground: park.playground,
          toilets: park.toilets,
          picnic_site: park.picnic_site,
          sports_field: park.sports_field,
          tramp: park.tramp,
          dog_walking: park.dog_walking,
          approved: park.approved
        }))
        return null
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
}
