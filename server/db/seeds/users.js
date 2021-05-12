exports.seed = function (knex) {
  return knex('users').del()
    .then(() =>
      knex('users').insert([
        { id: 1, first_name: 'Admin', last_name: 'The Great', username: 'admin', password: 'adminHash', is_admin: true, email: 'admin@emailz.co' },
        { id: 2, first_name: 'Member', last_name: 'Jardin', username: 'member', password: 'memberHash', is_admin: false, email: 'member@emailz.co' }
      ])
    )
}
