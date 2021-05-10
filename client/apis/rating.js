import request from 'superagent'

export function getRating (parkId) {
  return request
    .get(`/api/v1/comments/rating/${parkId}`)
    .then((res) => res.body)
}
