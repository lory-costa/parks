exports.up = function(knex) {
    return knex.schema.createTable('toVisit', table => {
        table.increments('id')
        table.int('user_id')
        table.int('park_id')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('toVisit')
}