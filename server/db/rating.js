const connection = require('./connection')
// const { getParkById } = require('./parks');

function getRatingByParkId (parkId, db = connection) {
  return db('rating')
    .where('park_id', parkId)
    .select(
      'id',
      'user_id as userId',
      'park_id as parkId',
      'rating'
    )
}

function addRating (newRating, db = connection) {
  const { parkId, userId, rating } = newRating
  return db('rating')
    .insert({
      park_id: parkId,
      user_id: userId,
      rating
    })
}

module.exports = {
  getRatingByParkId,
  addRating
}
