import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'announces'

  async up() {
    this.schema.raw('DROP TYPE IF EXISTS "announce_status" CASCADE')
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.string('title', 64).notNullable()
      table.string('description', 600).notNullable()
      table.boolean('infidelity_card').defaultTo(false)
      table.boolean('private').notNullable()
      table.boolean('escort').notNullable()
      table.specificType('practices', 'integer[]').notNullable()
      table.json('pricing').notNullable()
      table.enum('status', ['PENDING', 'REFUSED', 'VALIDED'],{
        useNative: true,
        enumName: 'announce_status'
      }).defaultTo('PENDING')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
