import requestor from '../consume'
import request from 'superagent'

export function getPark (id, consume = requestor) {
  return consume(`/park/${id}`)
    .then((res) => {
      const park = res.body
      return park
    })
    .catch((error) => {
      console.log(error.message)
    })
}

export function getComments (id, consume = requestor) {
  return consume(`/comments/${id}`)
    .then((res) => {
      const comments = res.body
      return comments
    })
    .catch((error) => {
      console.log(error.message)
    })
}

// export function postComments(comment) {
//   const newComment = { comment: comment };

//   return request
//     .post(`/comments/${id}`)
//     .send(newComment)
//     .then((res) => res.body);
// }
