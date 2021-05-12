const connection = require('./connection')

module.exports = {
  addComment,
  deleteComment,
  getCommentsByParkId,
  updateComment
}

function addComment (newComment, db = connection) {
  const { parkId, userName, comment, rating } = newComment
  return db('parkComment')
    .insert({
      park_id: parkId,
      user_name: userName,
      comment,
      rating: rating
    })
}

function deleteComment (submission, db = connection) {
  const id = submission
  return db('parkComment')
    .where('id', id)
    .delete()
}

function getCommentsByParkId (id, db = connection) {
  return db('parkComment')
    .select('id', 'park_id as parkId', 'user_name as userName', 'comment', 'rating')
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
