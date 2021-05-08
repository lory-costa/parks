exports.seed = function (knex) {
  return knex('parkComment').del()
    .then(() =>
      knex('parkComment').insert([
        { id: 1, user_id: '1', park_id: '1', comment: 'Nice Park! Omg my kids love it' },
        { id: 2, user_id: '2', park_id: '2', comment: 'Awesome! My wife loves it' },
        { id: 3, user_id: '2', park_id: '3', comment: 'Happy place.' },
        { id: 4, user_id: '1', park_id: '4', comment: 'Very green.' },
        { id: 5, user_id: '2', park_id: '1', comment: 'Been here before and I always love coming back' },
        { id: 6, user_id: '3', park_id: '1', comment: 'The dogs here are the best' },
        { id: 7, user_id: '4', park_id: '1', comment: 'A nice walk' },
        { id: 8, user_id: '5', park_id: '1', comment: 'The greenest grass around' }
      ])
    )
}
