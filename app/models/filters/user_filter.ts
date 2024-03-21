
import { BaseModelFilter } from 'adonis-lucid-filter'
import type { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'
import User from '#models/user'

export default class UserFilter extends BaseModelFilter {
  declare $query: ModelQueryBuilderContract<typeof User>

  nickname(value: string): void {
    this.$query.where('nickname', value)
  }

  address(value: string) {
    this.$query.whereRaw(`address->>'city' = '${value}'`)
  }

}