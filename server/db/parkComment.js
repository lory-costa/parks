const connection = require('./connection')

module.exports = {
  addComment,
  deleteComment,
  getCommentsByParkId
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

function getCommentsByParkId (parkId, db = connection) {
  return db('parkComment')
    .select('id', 'park_id as parkId', 'user_id as userId', 'comment')
    .where('park_id', parkId)
}

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
// }
