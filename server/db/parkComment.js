const connection = require('./connection')

module.exports = {
  addComment,
  deleteComment
  // getCommentById,
  // updateComment

}

function addComment (comment, db = connection) {
  return db('parkComment')
    .insert(comment)
}

function deleteComment (submission, db = connection) {
  const { userId, commentId } = submission
  return db('parkComment')
    .where({ user_id: userId, comment_id: commentId })
    .delete()
}

// function getCommentById (id, db = connection) {
//   return db('parkComment')
//     .where('parkComment.id', id)
//     .leftJoin('users', 'parkComment.user_id', 'users.id')
//     .leftJoin('parks', 'parkComment.park_id', 'parks.id')
//     .select(
//       'name',
//       'user_id',
//       'park_id',
//       'parkComment.id as id',
//       'parkComment.park_id as parkId',
//       'parkComment.comment',
//       'user_id as userId',
//       'username',
//       'first_name',
//       'last_name'
//     )
//     .then(result => {
//       const comment = result[0]
//       return {
//         id: comment.id,
//         parkId: comment.parkId,
//         comments: !park.parkCommentId ? [] : result.map((comment) => {
//           return {
//             id: comment.commentId,
//             comment: comment.comment
//           }
//         })
//       }
//     })
// }

// function updateComment (updatedEvent, db = connection) {
//   const { id, comment } = updatedComment
//   return db('parkComment').where('id', id)
//     .update({
//       id: parkId,
//       comment
//     })
//     .then(() => getCommentById(id, db))
// }

// can be used for parks visited or wanting to visit:
// attended: result.find(evt => evt.userId === volunteer.userId).attended ? result.find(evt => evt.userId === volunteer.userId).attended : false
