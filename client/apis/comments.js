import request from 'superagent'

export function getComments (parkId) {
  return request
    .get(`/api/v1/comments/${parkId}`)
    .then((res) => res.body)
}

export function postComment (comment, parkId, userId, rating) {
  const commentData = { comment, parkId, userId, rating }

  return request
    .post('/api/v1/comments')
    .send(commentData)
    .then((res) => res.body)
}
