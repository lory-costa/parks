import requestor from '../consume'
import { dispatch, getState } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { showError } from '../actions/error'

export function toggleParkApprovedStatus(id, isApproved, consume = requestor) {
  dispatch(setWaiting())
  const userData = { id: id, approved: isApproved }
  return consume(`/park/${id}}`, 'patch', userData)
    .catch((error) => {
      dispatch(showError(error.message))
      return false
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
