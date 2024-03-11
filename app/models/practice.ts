import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import PracticeCategory from './practice_category.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Practice extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @hasOne(() => PracticeCategory)
  declare practiceCategory: HasOne<typeof PracticeCategory>
}