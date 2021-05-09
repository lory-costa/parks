import request from 'superagent'

export function getFavParks (userId) {
  return request
    .get(`/api/v1/fav/${userId}`)
    .then((res) => res.body)
}
