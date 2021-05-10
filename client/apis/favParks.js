import request from 'superagent'

export function getFavParks (userId) {
  return request
    .get(`/api/v1/fav/${userId}`)
    .then((res) => res.body)
}

export function deleteFav (id) {
  return request
    .delete(`/api/v1/fav/${id}`)
    .then((res) => res.body)
}

export function postToFav (id) {
    const favData = { id }

  return request
    .post('/api/v1/fav')
    .send(favData)
    .then((res) => res.body)
}
