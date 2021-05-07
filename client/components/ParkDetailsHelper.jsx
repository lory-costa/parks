// import { setParks } from '../actions/parks'
// import { useParams } from 'react-router-dom'
import requestor from '../consume'
// import { dispatch } from '../store'

export function getPark (id, consume = requestor) {
  // const { id } = useParams()
  return consume(`/park/${id}`)
    .then((res) => {
      //console.log(res)
      const park = res.body
      return {
        name: park.name,
        address: park.address,
        url: park.council_url,
        image: park.image,
        playground: park.playground,
        toilets: park.toilets,
        picnicSite: park.picnic_site,
        sportsField: park.sports_field,
        tramp: park.tramp,
        dogWalking: park.dog_walking,
        approved: park.approved
      }
    })
    .catch((error) => {
      console.log(error.message)
    })
}
