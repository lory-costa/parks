const connection = require('./connection')

module.exports = {
  addComment,
  deleteComment,
  getCommentsByParkId,
  updateComment
}

function addComment (newComment, db = connection) {
  const { parkId, userId, comment } = newComment
  return db('parkComment')
    .insert({
      park_id: parkId,
      user_id: userId,
      comment
    })
}

function deleteComment (submission, db = connection) {
  const { id } = submission
  return db('parkComment')
    .where({ id: id })
    .delete()
}

function getCommentsByParkId (id, db = connection) {
  return db('parkComment')
    .select('id', 'park_id as parkId', 'user_id as userId', 'comment', 'rating')
    .where('park_id', id)
}

function updateComment (updatedComment, db = connection) {
  const { comment, parkId, id } = updatedComment
  return db('parkComment')
    .where('id', id)
    .update({
      comment
    })
}
