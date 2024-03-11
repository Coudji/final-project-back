import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'announces'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users_id')
      table.string('title', 64).notNullable()
      table.string('description',600).notNullable()
      table.boolean('infidelity_card')
      table.boolean('private')
      table.boolean('escort')
      table.jsonb('practice_array')
      table.json('pricing')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}