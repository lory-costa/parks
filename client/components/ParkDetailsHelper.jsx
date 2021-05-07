// import { setParks } from '../actions/parks'
// import { useParams } from 'react-router-dom'
import requestor from '../consume'
// import { dispatch } from '../store'

export function getPark (id, consume = requestor) {
  // const { id } = useParams()
  return consume(`/park/${id}`)
    .then((res) => {
      // console.log(res.body)
      const park = res.body
      return {
        name: park.name,
        address: park.address,
        url: park.url,
        image: park.image,
        playground: park.playGround,
        toilets: park.toilets,
        picnicSite: park.picnicSite,
        sportsField: park.sportsField,
        tramp: park.tramp,
        dogWalking: park.dogWalking,
        approved: park.approved
      }
    })
    .catch((error) => {
      console.log(error.message)
    })
}
