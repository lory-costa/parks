const connection = require('./connection')

module.exports = {
  addComment,
  deleteComment,
  getCommentsByParkId
  // updateComment

}

function addComment (newComment, db = connection) {
  const { parkId, userId, comment } = newComment
  // console.log(newComment)
  return db('parkComment')
    .insert({
      park_id: parkId,
      user_id: userId,
      comment
    })
}

function deleteComment (submission, db = connection) {
  const { userId, commentId } = submission
  return db('parkComment')
    .where({ user_id: userId, comment_id: commentId })
    .delete()
}

function getCommentsByParkId (id, db = connection) {
  return db('parkComment')
    .select('id', 'park_id as parkId', 'user_id as userId', 'comment')
    .where('park_id', id)
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
