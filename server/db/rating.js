const connection = require('./connection');
// const { getParkById } = require('./parks');

function getRatingByParkId (parkId, db = connection) {
    return db ('rating')
      .where('park_id', parkId)
      .select(
        'id',
        'user_id as userId',
        'park_id as parkId',
        'rating'
      )
}


module.exports = {
  getRatingByParkId
}

// const total = 0;
//     for(const i = 0; i < rating.length; i++) {
//     total += rating[i];
// }
// var avg = total / rating.length;

// ParkID
// userID
// Rating