import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PracticeCategory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoryName: string
}