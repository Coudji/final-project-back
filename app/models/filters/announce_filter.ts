
import { BaseModelFilter } from 'adonis-lucid-filter'
import type { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'
import Announce from '#models/announce'

export default class AnnounceFilter extends BaseModelFilter {
  declare $query: ModelQueryBuilderContract<typeof Announce>

  private(value: string): void {
    this.$query.where('private', value)
  }

  escort(value:string) {
    this.$query.where('escort', value)
  }
}