exports.seed = function (knex) {
  return knex('favParks').del()
    .then(() =>
      knex('favParks').insert([
        { id: 1, user_id: '2', park_id: '1' },
        { id: 2, user_id: '1', park_id: '2' },
        { id: 3, user_id: '1', park_id: '3' },
        { id: 4, user_id: '2', park_id: '4' }
      ])
    )
}
