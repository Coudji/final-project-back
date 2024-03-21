import { DateTime } from 'luxon'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import UserProfile from './user_profile.js'
import type { HasOne , HasMany } from '@adonisjs/lucid/types/relations'
import Announce from './announce.js'
import Gallery from './gallery.js'
import { Filterable } from 'adonis-lucid-filter'
import UserFilter from './filters/user_filter.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder, Filterable) {
  static $filter = () => UserFilter
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstname: string

  @column()
  declare lastname: string

  @column()
  declare niss: string

  @column()
  declare nickname: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare address: object

  @hasOne(() => UserProfile)
  declare userProfile: HasOne<typeof UserProfile>

  @hasOne(() => Announce)
  declare announce: HasOne<typeof Announce>

  @hasMany(() => Gallery)
  declare gallery: HasMany<typeof Gallery>

  @column({ serializeAs: null })
  declare userType: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '2h',
  })
}
