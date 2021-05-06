exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('first_name')
        table.string('last_name')
        table.string('username')
        table.hash('password')
        table.string('email')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}