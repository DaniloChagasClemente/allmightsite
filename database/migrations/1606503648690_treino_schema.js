'use strict'

const Schema = use('Schema')

class TreinoSchema extends Schema {
  up () {
    this.create('treinos', (table) => {
      table.increments()
      table.string('finalidade', 45).notNullable()
      table.string('exercicio', 45).notNullable()
      table.string('repeticoes', 45).notNullable()
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("cascade")
        .onDelete("cascade")
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('treinos')
  }
}

module.exports = TreinoSchema