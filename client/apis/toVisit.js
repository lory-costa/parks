import request from 'superagent'

export function getToVisit (userId) {
  return request
    .get(`/api/v1/visit/${userId}`)
    .then((res) => res.body)
}

export function deleteVisit (id) {
  return request
    .delete(`/api/v1/visit/${id}`)
    .then((res) => res.body)
}
