exports.up = function (knex) {
  return knex.schema.createTable('parkComment', table => {
    table.increments('id')
    table.int('user_id')
    table.int('park_id')
    table.string('comment')
    table.int('rating')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('parkComment')
}
