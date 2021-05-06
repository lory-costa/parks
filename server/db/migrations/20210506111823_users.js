exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('username')
    table.string('password')
    table.boolean('is_admin')
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
