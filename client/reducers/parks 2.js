import { SET_PARKS } from '../actions/parks'

const initialState = {
  park_name: '',
  park_address: '',
  lat: 0,
  lon: 0,
  council_url: '',
  image: '',
  playground: false,
  toilets: false,
  picnic_site: false,
  sports_field: false,
  tramp: false,
  dog_walking: false,
  approved: false

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARKS :
      return action.park
    default:
      return state
  }
}

export default reducer
