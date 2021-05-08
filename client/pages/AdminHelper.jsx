import requestor from '../consume'
import { dispatch, getState } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { showError } from '../actions/error'

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

export function toggleParkApprovedStatus (parkId, isApproved, consume = requestor) {
  const storeState = getState()
  const { id } = storeState.user
  if (!id) {
    dispatch(showError('Please sign in as Admin to approve.'))
    return Promise.resolve(false)
  } else {
    dispatch(setWaiting())
    const routeMethod = isApproved ? 'delete' : 'post'
    const userData = { userId: id, parkId }

    return consume('/park', routeMethod, userData)
      .then(() => true)
      .catch((error) => {
        dispatch(showError(error.message))
        return false
      })
      .finally(() => {
        dispatch(clearWaiting())
      })
  }
}
