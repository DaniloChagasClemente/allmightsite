'use strict'

const Schema = use('Schema')

class DietaSchema extends Schema {
  up () {
    this.create('dietas', (table) => {
      table.increments()
      table.time('horario', 4).notNullable()
      table.string('alimento',45).notNullable()
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
    this.drop('dietas')
  }
}

module.exports = DietaSchema