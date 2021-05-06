exports.up = function(knex) {
    return knex.schema.createTable('favParks', table => {
        table.increments('id')
        table.int('user_id')
        table.int('park_id')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('favParks')
}