exports.seed = function (knex) {
  return knex('rating').del()
    .then(() =>
      knex('rating').insert([
        { id: 1, user_id: '1', park_id: '1', rating: 5 },
        { id: 2, user_id: '2', park_id: '2', rating: 2 },
        { id: 3, user_id: '2', park_id: '3', rating: 1 },
        { id: 4, user_id: '1', park_id: '4', rating: 3 }
      ])
    )
}
