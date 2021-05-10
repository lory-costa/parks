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

export function AddVisit (userId, parkId) {
  const toVisitData = { userId, parkId }

  return request
    .post('/api/v1/visit')
    .send(toVisitData)
    .then((res) => res.body)
}
