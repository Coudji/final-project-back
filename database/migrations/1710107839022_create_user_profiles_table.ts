import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_profiles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.string('genre').notNullable()
      table.string('orientation').notNullable()
      table.string('size').nullable()
      table.string('weight').nullable()
      table.integer('penis_size').nullable()
      table.string('bra_cup').nullable()
      table.string('hair_color').nullable()
      table.string('eye_color').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
