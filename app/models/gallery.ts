import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Gallery extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare url: string

  @column()
  declare cover: boolean
}