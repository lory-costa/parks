import request from 'superagent'

export function getToVisit (userId) {
  return request
    .get(`/api/v1/visit/${userId}`)
    .then((res) => res.body)
}

export function deleteToVisit (userId) {
  return request
    .delete(`/api/v1/visit/${userId}`)
    .then((res) => res.body)
}
