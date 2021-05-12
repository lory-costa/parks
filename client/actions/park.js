import { getParkApprovalStatus } from '../apis/park'
export const SET_PARK = 'SET_PARK'

export function setPark (park) {
  return {
    type: SET_PARK,
    park
  }
}

export function fetchPark (dispatch) {
  return getParkApprovalStatus()
    .then((result) => {
      dispatch(setPark(result))
      return result
    })
}
