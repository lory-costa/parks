import requestor from '../consume'
import { dispatch } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'
import { showError } from '../actions/error'

export function getParkLocations (consume = requestor) {
  dispatch(setWaiting())
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
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function deletePark (id, consume = requestor) {
  dispatch(setWaiting())
  const userData = { id: id }
  return consume(`/park/${id}}`, 'delete', userData)
    .then(() => {
      return consume('/park')
        .then((res) => {
          return res.body.parks
        })
    })
    .catch((error) => {
      dispatch(showError(error.message))
      return false
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
