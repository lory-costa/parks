exports.seed = function (knex) {
  return knex('parkComment').del()
    .then(() =>
      knex('parkComment').insert([
        { id: 1, user_id: '1', park_id: '1', comment: 'Nice Park! Omg my kids love it', rating: 3 },
        { id: 2, user_id: '2', park_id: '2', comment: 'Awesome! My wife loves it', rating: 2 },
        { id: 3, user_id: '2', park_id: '3', comment: 'Crappy place.', rating: 1 },
        { id: 4, user_id: '1', park_id: '4', comment: 'Very green.', rating: 2 },
        { id: 5, user_id: '2', park_id: '1', comment: 'Been here before and I always love coming back', rating: 5 },
        { id: 6, user_id: '3', park_id: '1', comment: 'The dogs here are the best', rating: 4 },
        { id: 7, user_id: '4', park_id: '1', comment: 'A nice walk', rating: 2 },
        { id: 8, user_id: '5', park_id: '1', comment: 'The greenest grass around', rating: 5 }
      ])
    )
}
