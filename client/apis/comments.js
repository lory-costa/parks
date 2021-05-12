import request from 'superagent'

export function getComments (parkId) {
  return request
    .get(`/api/v1/comments/${parkId}`)
    .then((res) => res.body)
}

export function postComment (comment, parkId, userName, rating) {
  const commentData = { comment, parkId, userName, rating }

  return request
    .post('/api/v1/comments')
    .send(commentData)
    .then((res) => res.body)
}

export function deleteComment (id) {
  return request
    .delete(`/api/v1/comments/${id}`)
    .then((res) => res.body)
}
