import requestor from '../consume'
import { dispatch, getState } from '../store'
import { setWaiting, clearWaiting } from '../actions/waiting'

export function getFavParks (id, consume = requestor) {
  dispatch(setWaiting())
  return consume(`/fav/${id}`)
    .then((res) => {
      console.log(res)
      const { favParks } = res.body
      console.log(res)
      return {
        favParks
      }
    })
    .catch((error) => {
      console.log(error.message)
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function deleteFavParks (id, consume = requestor) {
  dispatch(setWaiting())
  const userData = { id: id }
  return consume(`/fav/${id}}`, 'delete', userData)
    .then(() => {
      return consume('/fav')
        .then((res) => {
          return res.body.favParks
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

export function getToVisitParks (consume = requestor) {
  dispatch(setWaiting())
  return consume('/visit')
    .then((res) => {
      const { toVisit } = res.body
      return {
        toVisit
      }
    })
    .catch((error) => {
      console.log(error.message)
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function deleteToVisit (id, consume = requestor) {
  dispatch(setWaiting())
  const userData = { id: id }
  return consume(`/visit/${id}}`, 'delete', userData)
    .then(() => {
      return consume('/visit')
        .then((res) => {
          return res.body.toVisit
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

export function toggleParkVisitedStatus (id, isApproved, consume = requestor) {
  dispatch(setWaiting())
  const userData = { id: id, approved: isApproved }
  return consume(`/visit/${id}}`, 'patch', userData)
    .catch((error) => {
      dispatch(showError(error.message))
      return false
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}

export function toggleParkFavStatus (id, isApproved, consume = requestor) {
  dispatch(setWaiting())
  const userData = { id: id, approved: isApproved }
  return consume(`/fav/${id}}`, 'patch', userData)
    .catch((error) => {
      dispatch(showError(error.message))
      return false
    })
    .finally(() => {
      dispatch(clearWaiting())
    })
}
