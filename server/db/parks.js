const connection = require('./connection')

module.exports = {
  getParks,
  getParkById
}

function getParks (db = connection) {
  return db('parks').select()
}

function getParkById (id, db = connection) {
  return db('parks')
    .where('parks.id', id)
    .leftJoin('parkComment', 'parks.id', 'parkComment.park_id')
    // .leftJoin('rating', 'parks.id', 'rating.park_id')
    .select(
      'parks.description as description',
      'parks.id as id',
      'name',
      'address',
      'lat',
      'lon',
      'council_url as url',
      'image',
      'playground',
      'picnic_site',
      'sports_field',
      'toilets',
      'tramp',
      'dog_walking',
      'approved',
      'parkComment.id as parkCommentId',
      'parkComment.comment',
      'parkComment.user_id'
      // 'rating.park_id as ratingId',
      // 'rating.rating'
    )
    .then((result) => {
      console.log(result)
      const park = result[0]
      return {
        id: park.id,
        name: park.name,
        address: park.address,
        description: park.description,
        lat: park.lat,
        lon: park.lon,
        url: park.url,
        image: park.image,
        playGround: park.playground,
        picnicSite: park.picnic_site,
        sportsField: park.sports_field,
        toilets: park.toilets,
        tramp: park.tramp,
        dogWalking: park.dog_walking,
        approved: park.approved,
        comments: !park.parkCommentId ? [] : result.map((comment) => {
          return {
            id: comment.parkCommentId,
            user: comment.user_id,
            comment: comment.comment
          }
        })
        // ,
        // rating: !park.ratingId ? [] : result.map((rate) =>
        // {
        //   return {
        //     id: rate.id,
        //     rate: rate.rating
        //   }
        // })
      }
    })
}
