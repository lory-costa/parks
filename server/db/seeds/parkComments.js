exports.seed = function (knex) {
  return knex('parkComments').del()
    .then(() =>
      knex('parkComments').insert([
        { id: 1, user_id: '1', park_id: '1', comment: 'Nice Park!' },
        { id: 2, user_id: '2', park_id: '2', comment: 'Awesome!' },
        { id: 3, user_id: '2', park_id: '3', comment: 'Crappy place.' },
        { id: 4, user_id: '1', park_id: '4', comment: 'Very green.' }
      ])
    )
}
