import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Practice extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare practiceName: string
}