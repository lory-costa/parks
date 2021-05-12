exports.up = function (knex) {
  return knex.schema.createTable('parks', table => {
    table.increments('id')
    table.string('name')
    table.string('address')
    table.decimal('lat')
    table.decimal('lon')
    table.string('council_url')
    table.string('description')
    table.string('image')
    table.boolean('playground')
    table.boolean('toilets')
    table.boolean('picnic_site')
    table.boolean('sports_field')
    table.boolean('tramp')
    table.boolean('dog_walking')
    table.boolean('approved')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('parks')
}
