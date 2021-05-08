import requestor from '../consume'
import { dispatch, getState } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { showError } from '../actions/error'

export function toggleParkApprovedStatus (id, isApproved, consume = requestor) {
  const userData = { id: id, approved: isApproved }
  console.log(isApproved)
  return consume(`/park/${id}}`, 'patch', userData)
    .then(() => true)
    .catch((error) => {
      dispatch(showError(error.message))
      return false
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
