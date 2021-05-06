exports.up = function(knex) {
    return knex.schema.createTable('rating', table => {
        table.increments('id')
        table.int('user_id')
        table.int('park_id')
        table.int('rating')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('rating')
}
