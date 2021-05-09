exports.seed = function (knex) {
  return knex('parkComment').del()
    .then(() =>
      knex('parkComment').insert([
        { id: 1, park_id: 1, user_name: 'Anna', comment: 'Nice Park! Omg my kids love it', rating: 3 },
        { id: 2, park_id: 1, user_name: 'Bill', comment: 'Awesome! My wife loves it', rating: 2 },
        { id: 3, park_id: 2, user_name: 'Charlie', comment: 'Happy place.', rating: 1 },
        { id: 4, park_id: 2, user_name: 'Diane', comment: 'Very green.', rating: 2 },
        { id: 5, park_id: 3, user_name: 'Emma', comment: 'Been here before and I always love coming back', rating: 5 },
        { id: 6, park_id: 4, user_name: 'Frank', comment: 'The dogs here are the best', rating: 4 },
        { id: 7, park_id: 5, user_name: 'George', comment: 'A nice walk', rating: 2 },
        { id: 8, park_id: 5, user_name: 'Horatio', comment: 'The greenest grass around', rating: 5 }
      ])
    )
}
