import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class UserProfile extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare title: string
  
  @column()
  declare description: string
  
  @column()
  declare infidelityCard: boolean

  @column()
  declare private: boolean

  @column()
  declare escort: boolean

  @column()
  declare practice: []

  @column()
  declare pricing: JSON

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
