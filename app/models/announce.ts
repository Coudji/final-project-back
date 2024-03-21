import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import AnnounceFilter from './filters/announce_filter.js'

export default class Announce extends BaseModel {
  static $filter = () => AnnounceFilter
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
  declare practices: number[]

  @column()
  declare pricing: Object

  @column()
  declare status: 'PENDING' | 'REFUSED' | 'VALIDED'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
