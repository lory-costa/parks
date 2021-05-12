const connection = require('./connection')

module.exports = {
  addComment,
  deleteComment,
  getCommentsByParkId,
  updateComment
}

function addComment (newComment, db = connection) {
  const { id, parkId, userName, comment, rating } = newComment
  return db('parkComment')
    .insert({
      id: id,
      park_id: parkId,
      user_name: userName,
      comment,
      rating: rating
    })
    .then(() => getCommentsByParkId(parkId, db))
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
    .then((result) => {
      return result
    })
}

function updateComment (updatedComment, db = connection) {
  const { comment, id } = updatedComment
  return db('parkComment')
    .where('id', id)
    .update({
      comment
    })
    .then(() => getCommentsByParkId(id, db))
}
