import { getParkApprovalStatus } from '../apis/park'
export const SET_PARK = 'SET_PARK'

export function setPark (park) {
  const approvalStatus = !!park.approved

  return {
    type: SET_PARK,
    park: {
      approved: approvalStatus
    }
  }
}

export function fetchPark (dispatch, id) {
  return getParkApprovalStatus(id)
    .then((result) => {
      dispatch(setPark(result))
      return result
    })
}
