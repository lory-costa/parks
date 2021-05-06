exports.seed = function (knex) {
  return knex('toVisit').del()
    .then(() =>
      knex('toVisit').insert([
        { id: 1, user_id: '2', park_id: '1' },
        { id: 2, user_id: '1', park_id: '2' },
        { id: 3, user_id: '1', park_id: '3' },
        { id: 4, user_id: '2', park_id: '4' }
      ])
    )
}
